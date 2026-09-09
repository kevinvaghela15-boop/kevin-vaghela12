import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { connectDb } from "./config/db.js";
import { createInquiry, inquiryValidators } from "./routes/inquiries.js";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 5000);
const origins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || origins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(
  "/api/inquiries",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 8,
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many inquiries from this address. Please wait and try again." },
  })
);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "emoiss-nexus-api" });
});

app.post("/api/inquiries", inquiryValidators, createInquiry);

app.use((err, _req, res, _next) => {
  const message = err.message === "Not allowed by CORS" ? err.message : "Unexpected server error.";
  res.status(err.message === "Not allowed by CORS" ? 403 : 500).json({ message });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI is missing.");
    process.exit(1);
  }
  await connectDb(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`Raxio API listening on ${port}`);
  });
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
