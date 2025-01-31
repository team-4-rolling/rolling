import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
// 롤링페이퍼 전체 수신자가 담긴 results를 리턴하는 리퀘스트
//

export async function getRecipients(queryId) {
  let recipient;
  try {
    const res = await axios.get(`${BASE_URL}13-4/recipients/?limit=0&offset=0`);
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

export async function deleteRecipient(id) {
  console.log(id);
  if (!id) return;
  try {
    await axios.delete(`${BASE_URL}13-4/recipients/${id}/`);
  } catch (error) {
    alert("해당 롤링페이퍼를 삭제할 수 없습니다.");
    console.error(error);
  }
}
