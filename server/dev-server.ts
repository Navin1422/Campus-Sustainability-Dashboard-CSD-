import express, { Express } from "express";
import { json } from "body-parser";
import { registerRoutes } from "./routes"; // ✅ named import

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(json());

// Register all routes from routes.ts
registerRoutes(app);

// Optional: a default route
app.get("/", (_req, res) => {
  res.send("Welcome to the EcoCampusEngage API 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
