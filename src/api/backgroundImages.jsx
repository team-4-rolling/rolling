import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}background-images/`);
    return response.data.imageUrls;
  } catch (error) {
    console.error("Failed to fetch background images:", error);
    return [];
  }
}

export async function submitToPage(dataToSend) {
  try {
    const response = await axios.post(
      `${BASE_URL}13-4/recipients/`,
      dataToSend
    );

    console.log("데이터 추가 성공, ID:", response.data.id);
    return response.data.id;
  } catch (error) {
    console.error("Failed to submit data:", error);
    return null;
  }
}
