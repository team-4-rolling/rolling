import axios from "axios";
import { showToast } from "../components/common/Toast/Toast";
import * as C from "../constants/messageConstants";

const RECIPIENTS_URL = import.meta.env.VITE_RECIPIENTS_URL;

export async function deleteRecipient(id) {
  if (!id) return;
  try {
    await axios.delete(`${RECIPIENTS_URL}/${id}/`);
    showToast(C.TOAST_TEXT.SUCCESS_DELETE_PAGE, "success", "top");
  } catch (error) {
    showToast(C.TOAST_TEXT.FAIL_DELETE_PAGE, "error", "top");
    console.error(error);
  }
}

export async function getRecipientById(id) {
  let recipient;
  try {
    recipient = await axios.get(`${RECIPIENTS_URL}/${id}/`);
  } catch (error) {
    console.error(error);
  }
  const {
    name,
    backgroundColor: color,
    backgroundImageURL: img,
    messageCount,
    recentMessages,
  } = recipient.data;
  return { name, color, img, messageCount, recentMessages };
}

export async function getAllRecipients() {
  try {
    const res = await axios.get(`${RECIPIENTS_URL}/?limit=100&offset=0`);
    return res.data.results;
  } catch (error) {
    console.error("getAllRecipients API 에러 발생:", error.message);
    return null;
  }
}

export async function submitToPage(dataToSend) {
  try {
    const response = await axios.post(`${RECIPIENTS_URL}/`, dataToSend);

    return response.data.id;
  } catch (error) {
    console.error("Failed to submit data:", error);
    showToast(C.TOAST_TEXT.FAIL_CREATE_PAPER, "error", "top");
    return null;
  }
}
