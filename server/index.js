import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";

import postRouter from "./routes/postRouters.js";
import dalleRouter from "./routes/dalleRouters.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/post", postRouter);
app.use("/api/dalle", dalleRouter);

app.get("/", async (req, res) => {
  res.send("Hello");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log("Server has started running on port 8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
