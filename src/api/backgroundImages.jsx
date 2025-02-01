import axios from "axios"; // HTTP 요청을 보낼 때 사용
const BASE_URL = import.meta.env.VITE_BASE_URL; // 환경 변수에서 API 기본 URL을 가져옴

//네이밍 간결하고 메소드 보이게 crud이런식으로
// 배경 이미지를 가져오는 함수 (GET 요청)
export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}/background-images/`); // API 요청/서버에 GET 요청을 보내서 배경 이미지 리스트를 가져옴
    return response.data.imageUrls; // 서버(API)에서 받아온 데이터 중 imageUrls 배열을 반환
  } catch (error) {
    console.error("Failed to fetch background images:", error); // 오류 발생 시 콘솔에 출력
    return []; // 오류가 발생하면 빈 배열 반환 (데이터가 없더라도 앱이 깨지지(멈추지) 않도록)
  }
}

// getBackgrondImages() 함수는 axios.get()을 사용해 API에서 배경 이미지 리스트를 가져오는 역할을 함.
// API 응답 구조: {imageUrls: ["url1", "url2", "url3", ...]}
// 성공 시: response.data.imageUrls를 변환 -> ToPage.jsx에서 사용함.
// 실패 시: 오류 메시지를 출력하고 빈 배열([])을 반환.
