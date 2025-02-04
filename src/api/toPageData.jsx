import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

// 배경화면 이미지 API GET
export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}background-images/`);
    return response.data.imageUrls;
  } catch (error) {
    console.error("Failed to fetch background images:", error);
    return [];
  }
}

// submit POST 요청
export async function submitToPage(dataToSend) {
  try {
    const response = await axios.post(
      `${BASE_URL}13-4/recipients/`,
      dataToSend
    );

    return response.data.id;
  } catch (error) {
    console.error("Failed to submit data:", error);
    return null;
  }
}
