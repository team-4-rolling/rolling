import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}/background-images/`);
    return response.data.imageUrls;
  } catch (error) {
    console.error("Failed to fetch background images:", error);
    return [];
  }
}
