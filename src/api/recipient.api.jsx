import axios from "axios";
import { showToast } from "../components/common/Toast/Toast";
import * as C from "../constants/messageConstants";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function deleteRecipient(id) {
  if (!id) return;
  try {
    await axios.delete(`${BASE_URL}13-4/recipients/${id}/`);
    showToast(C.TOAST_TEXT.SUCCESS_DELETE_PAGE, "success", "top");
  } catch (error) {
    showToast(C.TOAST_TEXT.FAIL_DELETE_PAGE, "error", "top");
    console.error(error);
  }
}

export async function getRecipientById(id) {
  let recipient;
  try {
    recipient = await axios.get(`${BASE_URL}13-4/recipients/${id}/`);
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
