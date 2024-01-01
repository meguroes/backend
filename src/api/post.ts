import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
  const client = c.get("contentful");
  const { limit, skip } = c.req.query();
  const post = await client.getEntries({
    content_type: "post",
    order: ["-fields.createdAt"],
    ...(limit && { limit }),
    ...(skip && { skip }),
  });
  return c.json(post);
});

export default app;
