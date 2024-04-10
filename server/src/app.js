import express from "express";
import cors from "cors";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";

import planetRouter from "./routes/planets/planets.router.js";
import launchesRouter from "./routes/launches/launches.router.js";
const __filename = fileURLToPath(import.meta.url); // Get the file path from the module URL
const __dirname = path.dirname(__filename);

export const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetRouter);
app.use(launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

export default app;
