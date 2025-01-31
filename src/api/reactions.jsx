import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getReactions(recipientsId) {
  const response = await axios.get(
    `${BASE_URL}/13-4/recipients/${recipientsId}/reactions/`
  );

  return response.data.results;
}
