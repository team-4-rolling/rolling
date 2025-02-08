import React, { useState } from "react";
import { Container } from "./Listcard.style";
import ListSwiper from "./ListSwiper";
import ArrowButton from "./ArrowButton";
import RecipientCard from "./RecipientCard";

function ListCard({ recipients = [], customId }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!Array.isArray(recipients)) {
    console.error("리스트 카드 프롭스가 배열이 아닙니다.", recipients);
    return null;
  }

  return (
    <Container>
      <ArrowButton
        direction="prev"
        swiperInstance={swiperInstance}
        className={`swiper-button-prev-${customId}`}
        hidden={isBeginning}
      />

      <ListSwiper
        recipients={recipients}
        customId={customId}
        renderCard={(recipient) => (
          <RecipientCard key={recipient.id} recipient={recipient} />
        )}
        setSwiperInstance={setSwiperInstance}
        setIsBeginning={setIsBeginning}
        setIsEnd={setIsEnd}
      />

      <ArrowButton
        direction="next"
        swiperInstance={swiperInstance}
        className={`swiper-button-next-${customId}`}
        hidden={isEnd}
      />
    </Container>
  );
}

export default ListCard;
