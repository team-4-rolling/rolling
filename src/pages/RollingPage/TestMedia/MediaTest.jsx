//messages 를 복사한 페이지 입니다.
import * as S from "./Style.test";
import PostCardUI from "../../../components/PostCardUl/PostCardUl";
import PlusIcon from "../../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindow";
import { useEffect, useState } from "react";
//

export default function MediaTest({ isEdit, messages }) {
  const [filterMessages, setFilterMessages] = useState([]);
  const device = useWindowSize();
  console.log(device);
  useEffect(() => {
    const savedMessages = localStorage.getItem("filterMessages");
    if (savedMessages) {
      //로컬스토리지에 내용이 있을때
      setFilterMessages(JSON.parse(savedMessages));
      console.log("로컬스토리지에 저장된 데이터 불러옴");
    } else {
      //로컬스토리지에 내용이 없을때
      setFilterMessages(messages || []);
      console.log("저장된 로컬 스토리지가 없으므로 원본을 불러옵니다.");
    }
  }, [messages]);

  const handleClickFilter = (e) => {
    const disappear = filterMessages.filter(
      (message) => message.id != e.currentTarget.dataset.value
    );
    setFilterMessages(disappear);
    localStorage.setItem("filterMessages", JSON.stringify(disappear));
    console.log("로컬스토리지 내용 업데이트");
  };
  //
  return (
    <S.GridBoxes device={device}>
      {!isEdit && (
        <S.CreateBox device={device}>
          <Link to="message">
            <S.Plus src={PlusIcon} />
          </Link>
        </S.CreateBox>
      )}

      {filterMessages.map((message) => {
        return (
          <PostCardUI
            onClick={handleClickFilter}
            isEdit={isEdit}
            key={message.id}
            data={message}
          />
        );
      })}
    </S.GridBoxes>
  );
}
//
