// server/index.ts
import express, { type Request, Response, NextFunction } from "express";
import http, { type Server } from "http";
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";

const app = express();

// ✅ Middleware: parse JSON & URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;

  let capturedJsonResponse: Record<string, any> | undefined;
  const originalResJson = res.json.bind(res);
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      if (logLine.length > 80) logLine = logLine.slice(0, 79) + "…";
      if (typeof log === "function") log(logLine);
      else console.log(logLine);
    }
  });

  next();
});

// ✅ Register API routes
registerRoutes(app);

// ✅ Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// ✅ Async setup for Vite dev server or static serving
(async () => {
  const port = parseInt(process.env.PORT || "5000", 10);

  // create HTTP server for Express
  const server: Server = http.createServer(app);

  if (app.get("env") === "development") {
    // pass both app and server to setupVite for HMR support
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ✅ Start listening
  server.listen(port, "0.0.0.0", () => {
    log(`Server running on port ${port}`);
  });
})();
