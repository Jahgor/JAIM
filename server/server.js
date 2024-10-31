import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors

dotenv.config();

// const openai = new OpenAI(process.env.OPENAI_API_KEY);
const app = express();
app.use(express.json());

const openai = new OpenAI(process.env.OPENAI_API_KEY);
// Use CORS middleware
app.use(cors({
  origin: "http://localhost:3000" // Allow requests from React frontend
}));

app.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;
  try {
    const image = await openai.images.generate({
      model: "dall-e-2", //dall-e-3 does not use small sizes
      prompt: prompt,
      n: 1,
      size: "256x256" // Adjust as needed
    });
    console.log("Image generated", prompt); //Debugging to see if we get prompt from front-end
    console.log(image.data); //debugging to see if we get image
    res.json({ image: image.data });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));