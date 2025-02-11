import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}background-images/`);
    return response.data.imageUrls;
  } catch (error) {
    showToast("해당 이미지를 불러오는 데 실패했습니다.", "error", "top");
    console.error("Failed to fetch background images:", error);
    return [];
  }
}

export async function getProfiles() {
  const response = await axios.get(`${BASE_URL}profile-images/`);

  return response.data.imageUrls;
}
