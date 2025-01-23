const BASE_URL = "https://rolling-api.vercel.app/13-4/recipients/9727/messages";

export async function getMessage() {
  const limit = 9;
  const response = await fetch(`${BASE_URL}/?limit=${limit}&offset=1`);
  if (!response.ok) {
    console.log("api 실패");
    throw new Error("get 실패");
  }
  const body = await response.json();

  return body;
}
