import { Hono } from "hono";
import { cors } from "hono/cors";
import { env } from "hono/adapter";
import { secureHeaders } from "hono/secure-headers";
import api from "./api";
import { Env } from "./type/env";
import { Contentful } from "./type/contentful";

const app = new Hono();

app.use("*", secureHeaders());

app.use("/api/*", async (c, next) => {
  const { WEB_LOCAL_URL, WEB_PROD_URL } = env<Env>(c);
  /** @see https://github.com/honojs/hono/issues/895#issuecomment-1431012601 */
  const middleware = cors({
    origin: [WEB_LOCAL_URL || "", WEB_PROD_URL],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowHeaders: ["Content-Type", "Authorization"],
  });
  await middleware(c, next);
});

app.use("/api/*", async (c, next) => {
  const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = env<Env>(c);
  const contentful: Contentful = {
    getEntries: async (queryObject) => {
      const searchParams = new URLSearchParams();
      Object.entries(queryObject).forEach(([key, value]) => {
        if (!Array.isArray(value)) {
          searchParams.set(key, value);
        } else {
          value.forEach((v) => searchParams.append(key, v));
        }
      });
      const query = searchParams.toString();
      const res = await fetch(
        `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?${query}`,
        {
          headers: {
            Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
          },
        },
      );
      const data = await res.json();
      return data;
    },
  };
  c.set("contentful", contentful);
  await next();
});

app.route("/api", api);

export default app;
