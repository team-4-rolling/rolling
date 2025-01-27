const BASE_URL = "https://rolling-api.vercel.app/13-4/recipients";

//해당 수신자를 id로 받아 수신자의 메시지와 그 정보들을 body로 리턴하는 리퀘스트
export async function getMessage(limit, offset, id) {
  let body;
  try {
    const response = await fetch(
      `${BASE_URL}/${id}/messages/?limit=${limit}&offset=${offset}`
    );
    if (!response.ok) {
      throw new Error("getMessage 실패");
    }
    body = await response.json();
  } catch (error) {
    console.error("getMessage api 에러발생", error.message);
  }
  return body;
}
// 롤링페이퍼 전체 수신자가 담긴 results 를 리턴하는 리퀘스트
// 희진님 nav에서 이 함수의 리턴에서 사용하시면 됩니다.
export async function getRecipients(queryId) {
  let recipient;
  try {
    const response = await fetch(`${BASE_URL}/?limit=0&offset=0`);
    if (!response.ok) {
      console.log("recipients 조회 실패");
      throw new Error("getRecipientsId 실패");
    }
    const body = await response.json();
    recipient = body.results.find((recipient) => recipient.id == queryId);
    if (!recipient) {
      throw new Error("recipients 찾기 실패");
    }
  } catch (error) {
    console.error("getRecipient 리퀘스트 에러발생", error.message);
    recipient = null;
  }
  return recipient;
}
