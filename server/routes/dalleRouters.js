import express from "express";
import OpenAI from "openai";
import * as dotenv from "dotenv";
import Post from "../mongoDB/models/post.js";

dotenv.config();

const openai = new OpenAI();

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello from Dalle");
});

router.post("/", async (req, res) => {
  try {
    const promptMessage = req.body.prompt;
    console.log(promptMessage);
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: promptMessage,
      size: "1024x1024",
      quality: "standard",
      n: 1,
    });

    console.log(response);
    console.log(response.data[0].url);
    res.status(200).json({ photo: response.data[0].url });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response?.data?.error?.message || "Internal Server Error");
  }
});

export default router;
