//messages 를 복사한 페이지 입니다.
import * as S from "./RollingPage.style";
import PostCardUI from "../../components/RollingCard/RollingCard";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
//

export default function Message({ isEdit, messages }) {
  const [filterMessages, setFilterMessages] = useState(messages);

  const handleClickFilter = (e) => {
    const disappear = filterMessages.filter(
      (message) => message.id != e.currentTarget.dataset.value
    );
    setFilterMessages(disappear);
  };
  //
  return (
    <S.GridBoxes>
      {!isEdit && (
        <S.CreateBox>
          <Link to="message">
            <S.Plus src={PlusIcon} />
          </Link>
        </S.CreateBox>
      )}

      {messages.map((message) => {
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
