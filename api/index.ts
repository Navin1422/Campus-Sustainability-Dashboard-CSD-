// api/index.ts
import express, { Request, Response, NextFunction } from "express";
import { registerRoutes } from "../server/routes.js"; // adjust path if needed
import { log } from "../server/vite.js"; // optional: for logging, or remove if not needed

const app = express();

// ✅ Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Request logging (optional)
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;

  let capturedJson: any;
  const originalJson = res.json;

  res.json = function (body: any) {
    capturedJson = body;
    return originalJson.call(this, body);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJson) {
        logLine += ` :: ${JSON.stringify(capturedJson)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }
      if (typeof log === "function") log(logLine);
      else console.log(logLine);
    }
  });

  next();
});

// ✅ Register all your app routes (from routes.ts)
registerRoutes(app);

// ✅ Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// ✅ Export the Express app for Vercel
export default app;
