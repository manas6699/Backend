import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// json
app.use(express.json({ limit: "16kb" }));

// to accept data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to store public data
app.use(express.static("public"));

// manage cookies
app.use(cookieParser());

export { app };
