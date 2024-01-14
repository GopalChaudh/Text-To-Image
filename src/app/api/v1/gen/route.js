import { NextResponse } from "next/server";
import axios from "axios";

// To handle a GET request to /api
export async function GET(request) {
  try {
    const textToImage = async () => {
      const path =
        "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image";

      const apiKey = "sk-Vg0EMlYWJCxttpCztg2IiagLjubbIM2DJpHl1F3o0zl2sURn"; // Replace with your Stability API key

      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      };

      const body = {
        steps: 50,
        width: 1024,
        height: 1024,
        seed: 0,
        cfg_scale: 5,
        samples: 4,
        text_prompts: [
          {
            text: "Create a captivating 4K high-definition image of a beautiful and cute anime  couple seated in front of a breathtaking garden. The couple should radiate warmth and affection, sharing a serene moment together. They could be sitting on a bench or a cozy blanket, surrounded by lush greenery, vibrant flowers, and charming scenery. The garden should evoke a sense of tranquility and beauty, with elements like winding pathways, colorful blooms, and perhaps a softly flowing fountain or gentle sunlight filtering through the foliage. The couple's body language should reflect closeness and happiness, adding to the overall romantic ambiance of the scene",
            weight: 5,
          },
        ],
      };

      const response = await axios.post(path, body, { headers });

      if (response.status !== 200) {
        throw new Error(`Non-200 response: ${response.statusText}`);
      }

      const responseJSON = response.data;


      return NextResponse.json({ message: responseJSON.artifacts }, { status: 200 });
    };

    await textToImage();
  } catch (error) {
    // Handle errors gracefully
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
