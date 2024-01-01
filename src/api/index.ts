import { Hono } from "hono";
import post from "./post";

const app = new Hono();

app.route("/posts", post);

export default app;
