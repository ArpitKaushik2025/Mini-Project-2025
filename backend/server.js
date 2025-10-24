import dotenv from "dotenv";

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}

import express from "express";
const app = express();

import mongoose from "mongoose";
import http from "http";
import { setupSocket } from "./utils/socket.js";

import cors from "cors";
const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};
app.use(cors(corsConfig));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("port", process.env.PORT);
app.set("url", process.env.MONGO_URL);

const PORT = app.get("port") || 5050;
const URL = app.get("url");

const server = http.createServer(app);
setupSocket(server);

const start = () => {
  server.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`);
  });

  mongoose
    .connect(URL)
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((e) => {
      console.log("Connection to DB failed : ", e.message);
    });
};
start();
