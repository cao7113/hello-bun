import { createServer, IncomingMessage, ServerResponse } from "node:http";
import { URL } from "node:url";

// https://nodejs.org/docs/latest/api/http.html#httpcreateserveroptions-requestlistener
const opts = { requestTimeout: 300000 };
const server = createServer(
  opts,
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET") {
      const url = new URL(req.url || "", `http://${req.headers.host}`);
      const msg = url.searchParams.get("msg") || "Hello";

      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end(`Message: ${msg} with http version: ${req.httpVersion}`);
    } else {
      // 如果不是 GET 请求，返回 405 Method Not Allowed
      res.statusCode = 405;
      res.setHeader("Content-Type", "text/plain");
      res.end("Only GET requests are supported.");
    }

    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.end(
    //   JSON.stringify({
    //     data: "Hello World!",
    //   })
    // );
  }
);

// 启动服务器
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
