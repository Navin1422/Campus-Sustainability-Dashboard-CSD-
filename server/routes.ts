import type { Express, Request, Response } from "express";
import { storage } from "./storage";

/**
 * Registers all Express routes.
 * This file should not create or start any server (Vercel handles that).
 */
export function registerRoutes(app: Express): void {
  // ✅ GET /api/user/:username — Fetch user by username
  app.get("/api/user/:username", async (req: Request, res: Response) => {
    try {
      const { username } = req.params;
      if (typeof storage.getUser === "function") {
        const user = await storage.getUser(username);
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(500).json({ message: "getUser method not found in storage" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ✅ POST /api/user — Create or save a user (if your storage supports it)
  // Check if your storage has an equivalent method like `saveUser`, `addUser`, etc.
  app.post("/api/user", async (req: Request, res: Response) => {
    try {
      const newUser = req.body;

      if (typeof (storage as any).saveUser === "function") {
        const savedUser = await (storage as any).saveUser(newUser);
        res.json(savedUser);
      } else if (typeof (storage as any).addUser === "function") {
        const addedUser = await (storage as any).addUser(newUser);
        res.json(addedUser);
      } else {
        res.status(500).json({ message: "No suitable method to save user found in storage" });
      }
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
  });

  // ✅ Example base route to test API connection
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", message: "API is running on Vercel 🚀" });
  });
}
