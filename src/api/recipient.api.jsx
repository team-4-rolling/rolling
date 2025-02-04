import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function deleteRecipient(id) {
  if (!id) return;
  try {
    await axios.delete(`${BASE_URL}13-4/recipients/${id}/`);
  } catch (error) {
    alert("해당 롤링페이퍼를 삭제할 수 없습니다.");
    console.error(error);
  }
}

export async function getRecipientById(id) {
  let recipient;
  try {
    recipient = await axios.get(`${BASE_URL}13-4/recipients/${id}/`);
  } catch (error) {
    alert("해당 롤링페이퍼를 찾을수 없습니다.");
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
