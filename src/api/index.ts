import { Hono } from "hono";
import post from "./post";

const app = new Hono();

app.route("/post", post);

export default app;
