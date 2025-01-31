import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
// 롤링페이퍼 전체 수신자가 담긴 results 를 리턴하는 리퀘스트

export async function getRecipients(queryId) {
  let recipient;
  try {
    const res = await axios.get(`${BASE_URL}/?limit=0&offset=0`);
    recipient = res.data.results.find((recipient) => recipient.id == queryId);
    if (!recipient) {
      throw new Error("recipients 찾기 실패");
    }
  } catch (error) {
    console.error("getRecipient 리퀘스트 에러발생", error.message);
    recipient = null;
  }

  const {
    id,
    name,
    backgroundColor: color,
    backgroundImageURL: img,
  } = recipient;
  return { id, name, color, img };
}

//해당 수신자를 id로 받아 수신자의 메시지와 메시지 정보들을 리턴하는 리퀘스트
export async function getMessage(limit = 9, offset = 0, id) {
  let res;
  try {
    res = await axios.get(
      `${BASE_URL}/${id}/messages/?limit=${limit}&offset=${offset}`
    );
  } catch (error) {
    console.error("getMessage api 에러발생", error.message);
    res = null;
  }

  return res.data;
}
