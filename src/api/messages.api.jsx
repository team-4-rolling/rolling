import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

//해당 수신자를 id로 받아 수신자의 메시지와 메시지 정보들을 리턴하는 리퀘스트
export async function getMessage(limit = 9, offset = 0, id) {
  let res;
  try {
    res = await axios.get(
      `${BASE_URL}13-4/recipients/${id}/messages/?limit=${limit}&offset=${offset}`
    );
  } catch (error) {
    console.error("getMessage api 에러발생", error.message);
    res = null;
  }

  return res.data;
}

export async function deleteMessage(deletedIds) {
  if (deletedIds.length > 0) {
    try {
      await Promise.all(
        deletedIds.map((id) => axios.delete(`${BASE_URL}13-4/messages/${id}/`))
      );
      alert("삭제완료!");
    } catch (error) {
      console.error("deleteMessage api 에러발생", error.message);
      alert("삭제실패, 잠시후 다시 시도해주세요!");
    }
  } else {
    alert("삭제할 메시지가 없습니다.");
  }
}
