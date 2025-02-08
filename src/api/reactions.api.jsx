import axios from "axios";

const RECIPIENTS_URL = import.meta.env.VITE_RECIPIENTS_URL;

export async function getReactions(recipientsId) {
  const response = await axios.get(
    `${RECIPIENTS_URL}/${recipientsId}/reactions/`
  );

  return response.data.results;
}

export async function postReaction(recipientsId, payload) {
  const response = await axios.post(
    `${RECIPIENTS_URL}/${recipientsId}/reactions/`,
    payload
  );
}
