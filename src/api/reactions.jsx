import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}13-4/recipients`;

export async function getReactions(recipientsId) {
  const response = await axios.get(`${BASE_URL}/${recipientsId}/reactions/`);

  return response.data.results;
}

export async function postReaction(recipientsId, payload) {
  const response = await axios.post(
    `${BASE_URL}/${recipientsId}/reactions/`,
    payload
  );
}
