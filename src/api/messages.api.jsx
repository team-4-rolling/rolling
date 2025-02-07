import { showToast } from "../components/common/Toast/Toast";
import axios from "axios";
import * as C from "../constants/messageConstants";
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
    showToast(C.TOAST_TEXT.FAIL_GET_MESSAGE, "error", "top");
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
      showToast(C.TOAST_TEXT.SUCCESS_DELETE_MESSAGE, "success", "top");
    } catch (error) {
      console.error("deleteMessage api 에러발생", error.message);
      showToast(C.TOAST_TEXT.FAIL_DELETE_MESSAGE, "error", "top");
    }
  } else {
    showToast(C.TOAST_TEXT.HAVE_NO_DELETE_MESSAGE, "error", "top");
  }
}
