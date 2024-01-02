import type { Contentful } from "./contentful";

declare module "hono" {
  /** @see https://github.com/honojs/hono/issues/414#issuecomment-1547014723 */
  interface ContextVariableMap {
    contentful: Contentful;
  }
}
