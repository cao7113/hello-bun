import dashboard from "../public/dashboard.html";
import { serve } from "bun";

const server = serve({
  routes: {
    "/": dashboard,
  },
  development: true,
  async fetch(req) {
    // ...api requests
    return new Response("hello world");
  },
});

console.log(`Server running at ${server.url}`);
