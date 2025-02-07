import React, { useState } from "react";
import { Container } from "./Listcard.style";
import ListSwiper from "./ListSwiper";
import ArrowButton from "./ArrowButton";
import RecipientCard from "./RecipientCard";

function ListCard({ recipients = [], customId }) {
  const [isBeginning, setIsBeginning] = useState(true); // ✅ 처음 상태
  const [isEnd, setIsEnd] = useState(false); // ✅ 끝 상태

  if (!Array.isArray(recipients)) {
    console.error("리스트 카드 프롭스가 배열이 아닙니다.", recipients);
    return null;
  }

  return (
    <Container>
      <ArrowButton
        direction="prev"
        className={`swiper-button-prev-${customId}`}
        onClick={() => {}}
        hidden={isBeginning} // ✅ 왼쪽 끝이면 숨김
      />

      <ListSwiper
        recipients={recipients}
        customId={customId}
        renderCard={(recipient) => (
          <RecipientCard key={recipient.id} recipient={recipient} />
        )}
        setIsBeginning={setIsBeginning} // ✅ Swiper에서 상태 업데이트 받음
        setIsEnd={setIsEnd}
      />

      <ArrowButton
        direction="next"
        className={`swiper-button-next-${customId}`}
        onClick={() => {}}
        hidden={isEnd} // ✅ 오른쪽 끝이면 숨김
      />
    </Container>
  );
}

export default ListCard;
