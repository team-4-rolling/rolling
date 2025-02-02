import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getProfiles() {
  const response = await axios.get(`${BASE_URL}profile-images/`);

  return response.data.imageUrls;
}
