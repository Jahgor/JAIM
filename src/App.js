import React, { useState } from "react";
import axios from "axios";
import './App.css'
import Navbar from './components/Navbar'; // Import the Navbar component

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    console.log("Button was pressed"); //Debug to see if code makes it to here , This works
    try {
      const response = await axios.post("http://localhost:5000/generate-image", { //Gets image from backend server
        prompt,
      });
      console.log("Response received:", response.data); // Debug to check the response data

      // Update to extract the URL from the response data array
      // const imageUrl = response.data[0].url;
      const imageUrl = response.data.image[0].url; // Adjust this line to match the correct structure
      setImage(imageUrl);

      // setImage(response.data.image);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <div className="App-header">
      <Navbar />
      <div className="image-generator">
        <h1>Generate Art</h1>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt"
          className="prompt-input"
        />
        <button onClick={generateImage} className="generate-button">Generate Image</button>
        {image && <img src={image} alt="Generated" className="generated-image" />}
      </div>
    </div>
  );
}

export default ImageGenerator;
