import dotenv from "dotenv"; // Package to access .env file

// Initialise .env file if node environment is not production
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config();
}

// Import and use express package and create express instance
import express from "express";
const app = express();

// Importing desired dependencies
import mongoose from "mongoose";
import http from "http";
import { setupSocket } from "./utils/socket.js";
import cookieParser from "cookie-parser";

// Importing the various routers to handle API requests
import userRouter from "./routes/userRouter.js";
import questionBankRouter from "./routes/questionBankRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import gameHistoryRouter from "./routes/gameHistoryRouter.js";
import roomRouter from "./routes/roomRouter.js";
import fetchUsernameRouter from "./routes/fetchUsernameRouter.js";

// Import and use CORS along with its configuration
import cors from "cors";
const corsConfig = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};
app.use(cors(corsConfig));

app.use(cookieParser()); // Parse the token in cookies
app.use(express.urlencoded({ extended: true })); // Access URL Encoded Data
app.use(express.json()); // To parse in JSON format before sending

// Setting the environment variables
app.set("port", process.env.PORT);
app.set("url", process.env.MONGO_URL);

// Accessing the set environment variables
const PORT = app.get("port") || 5050;
const URL = app.get("url");

// Create a HTTP server of app for websocket
const server = http.createServer(app);
setupSocket(server); // Setup web socket server on HTTP server

// Using the different routers to handle API calls
app.use("/user", userRouter);
app.use("/question", questionBankRouter);
app.use("/category", categoryRouter);
app.use("/history", gameHistoryRouter);
app.use("/room", roomRouter);
app.use("/verify", fetchUsernameRouter);

// Start function to start server instance and connect to DB
const start = () => {
  // Starting the server
  server.listen(PORT, () => {
    console.log(`Server is listening to PORT ${PORT}`);
  });

  // Connecting to DB
  mongoose
    .connect(URL)
    .then(() => {
      console.log("DB Connected!");
    })
    .catch((e) => {
      console.log("Connection to DB failed : ", e.message);
    });
};
start(); // Calling start function
