const axios = require('axios');
require('dotenv').config(); // Ensure that dotenv is installed via npm to manage your environment variables

// Function to generate images based on a description
async function generateImage(description) {
  const url = 'https://api.openai.com/v1/images/generations'; // This is a placeholder; adjust based on actual API endpoint
  const apiKey = process.env.OPENAI_API_KEY; // Your OpenAI API key stored in a .env file

  try {
    const response = await axios.post(
      url,
      {
        model: "image-dalle-2", // Make sure to use the correct model identifier for Dall-E
        prompt: description,     // The text description to generate an image for
        n: 1,                    // Number of images to generate
        size: "1024x1024"        // The size of the images
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Check if the API call was successful and we have images
    if (response.data && response.data.data && response.data.data.length > 0) {
      const images = response.data.data[0].url; // Adjust based on how images are returned in the API response
      return images;
    } else {
      throw new Error('No images generated or invalid API response.');
    }
  } catch (error) {
    console.error('Failed to generate image:', error.message);
    throw error; // Rethrow the error for handling it in the calling function
  }
}

module.exports = generateImage;
