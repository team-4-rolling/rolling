import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
//해당 수신자를 id로 받아 수신자의 메시지와 메시지 정보들을 리턴하는 리퀘스트
export async function getMessage(limit = 9, offset = 0, id) {
  let res;
  try {
    res = await axios.get(
      `${BASE_URL}/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
    );
  } catch (error) {
    console.error("getMessage api 에러발생", error.message);
    res = null;
  }

  return res.data;
}

export async function deleteMessage() {
  try {
    res = await axios.delete();
  } catch (error) {
    console.error("deleteMessage api 에러발생", error.message);
  }
}
