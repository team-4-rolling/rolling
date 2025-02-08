import * as C from "../constants/messageConstants";
import axios from "axios";
import { showToast } from "../components/common/Toast/Toast";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getBackgroundImages() {
  try {
    const response = await axios.get(`${BASE_URL}background-images/`);
    return response.data.imageUrls;
  } catch (error) {
    showToast("해당 이미지를 불러오는 데 실패했습니다.", "error", "top");
    return [];
  }
}

export async function submitToPage(dataToSend) {
  try {
    const response = await axios.post(
      `${BASE_URL}13-4/recipients/`,
      dataToSend
    );

    return response.data.id;
  } catch (error) {
    showToast(C.TOAST_TEXT.FAIL_CREATE_PAPER, "error", "top");
    return null;
  }
}
