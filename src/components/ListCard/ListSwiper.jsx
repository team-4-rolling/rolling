import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ListSwiper = ({
  recipients,
  customId,
  renderCard,
  setSwiperInstance,
  setIsBeginning,
  setIsEnd,
}) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={4}
      slidesPerView="auto"
      breakpoints={{
        360: { slidesPerView: 1.6, spaceBetween: 20 },
        768: { slidesPerView: 2.6, spaceBetween: 20 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
        1440: { slidesPerView: 4, spaceBetween: 20 },
        1920: { slidesPerView: 4, spaceBetween: 20 },
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setSwiperInstance(swiper);
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      onSlideChange={(swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      }}
      navigation={{
        prevEl: `.swiper-button-prev-${customId}`,
        nextEl: `.swiper-button-next-${customId}`,
      }}
    >
      {recipients.map((recipient) => (
        <SwiperSlide key={recipient.id}>{renderCard(recipient)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ListSwiper;
