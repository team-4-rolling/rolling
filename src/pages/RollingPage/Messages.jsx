//messages 를 복사한 페이지 입니다.
import * as S from "./RollingPage.style";
import PostCardUI from "../../components/RollingCard/RollingCard";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
//

export default function Message({
  isEdit,
  messages,
  deletedIds,
  setDeletedIds,
  isLoading,
}) {
  const [filterMessages, setFilterMessages] = useState(messages);

  const handleClickFilter = (e) => {
    const value = e.currentTarget.dataset.value;
    if (!value) return;
    const disappear = filterMessages.filter((message) => message.id != value);
    setFilterMessages(disappear);

    setDeletedIds((prev) =>
      deletedIds.includes(value)
        ? deletedIds.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  useEffect(() => {
    setFilterMessages(messages);
  }, [messages]);
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
      {isLoading ? (
        <Skeleton />
      ) : (
        filterMessages.map((message) => {
          return (
            <PostCardUI
              onClick={handleClickFilter}
              isEdit={isEdit}
              key={message.id}
              data={message}
            />
          );
        })
      )}
    </S.GridBoxes>
  );
}
//
