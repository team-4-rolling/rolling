const BASE_URL = "https://rolling-api.vercel.app/13-4/recipients";

//해당 수신자를 id로 받아 수신자의 메시지와 그 정보들을 body로 리턴하는 리퀘스트
export async function getMessage(limit, offset, id) {
  const response = await fetch(
    `${BASE_URL}/${id}/messages/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    console.log("api 실패");
    throw new Error("getMessage 실패");
  }
  const body = await response.json();

  return body;
}
// 롤링페이퍼 전체 수신자가 담긴 results 를 리턴하는 리퀘스트
// 희진님 nav에서 이 함수의 리턴에서 사용하시면 됩니다.
export async function getRecipients(queryId) {
  const response = await fetch(`${BASE_URL}/?limit=0&offset=0`);
  if (!response.ok) {
    console.log("recipients 조회 실패");
    throw new Error("getRecipientsId 실패");
  }
  const body = await response.json();
  const recipient = body.results.find((recipient) => recipient.id == queryId);
  if (!recipient) {
    console.log("해당 recipient가 존재하지 않습니다.");
    throw new Error("recipients 찾기 실패");
  }
  return recipient;
}
