import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getAllRecipients() {
  try {
    const res = await axios.get(
      `${BASE_URL}13-4/recipients/?limit=100&offset=0`
    );
    // console.log(res);
    return res.data.results;
  } catch (error) {
    console.error("getAllRecipients API 에러 발생:", error.message);
    return null;
  }
}
