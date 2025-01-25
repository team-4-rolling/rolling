const BASE_URL = "https://rolling-api.vercel.app/13-4/recipients";

//해당 수신자를 id로 받아 수신자의 메시지와 그 정보들을 body로 리턴하는 리퀘스트
export async function getMessage(limit, offset, recipientId) {
  const response = await fetch(
    `${BASE_URL}/${recipientId}/messages/?limit=${limit}&offset=${offset}`
  );
  if (!response.ok) {
    console.log("api 실패");
    throw new Error("getMessage 실패");
  }
  const body = await response.json();

  return body;
}
// 롤링페이퍼 전체 수신자가 담긴 results 를 리턴하는 리퀘스트
export async function getRecipientsId(id) {
  const response = await fetch(`${BASE_URL}/?limit=0&offset=0`);
  if (!response.ok) {
    console.log("recipients 조회 실패");
    throw new Error("getRecipientsId 실패");
  }
  const body = await response.json();
  const { results } = body;
  const { id: recipientId } = results.find((recipient) => recipient.id == id);
  return recipientId;
}

/**
 * 0. id값에 따라서 데이터를 가져올수 있게 일단 구현 00
 * 1. id 값을 useParams로 가져옴
 * 2. 그 id값을 getMessage로 넘겨서 해당 id의 메시지를 받아옴
 * 3. 그 메시지를 페이지에 뿌려줌
 * 4.
 */
