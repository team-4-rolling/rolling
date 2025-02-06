import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import arrowImage from "../../assets/icons/arrow.svg";
import theme from "../../styles/theme";
import {
  Container,
  PrevButton,
  NextButton,
  Slide,
  Card,
  Overlay,
  Title,
  ProfileContainer,
  ProfileImage,
  MoreProfiles,
  MessageCount,
  Divider,
  ReactionsContainer,
  Reaction,
  NoReactions,
} from "./Listcard.style";

function ListCard({ recipients = [], customId }) {
  const navigate = useNavigate();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (!Array.isArray(recipients)) {
    console.error("리스트 카드 프롭스가 배열이 아닙니다.", recipients);
    return null;
  }

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.update();
    }
  }, [swiperInstance]);

  return (
    <Container>
      {!isBeginning && (
        <PrevButton
          onClick={() => swiperInstance?.slidePrev()}
          className={`swiper-button-prev-${customId}`}
        >
          <img
            src={arrowImage}
            alt="prev"
            style={{
              width: "60px",
              height: "60px",
              transform: "rotate(180deg)",
            }}
          />
        </PrevButton>
      )}

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
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          prevEl: `.swiper-button-prev-${customId}`,
          nextEl: `.swiper-button-next-${customId}`,
        }}
      >
        {recipients.map((recipient) => {
          const backgroundColor =
            theme.color[recipient.backgroundColor] ||
            recipient.backgroundColor ||
            "#f0f0f0";
          const hasBackgroundImage = !!recipient.backgroundImageURL;
          const hasReactions = recipient.topReactions.length > 0;

          return (
            <SwiperSlide key={recipient.id}>
              <Slide>
                <Card
                  $backgroundImage={recipient.backgroundImageURL}
                  $backgroundColor={backgroundColor}
                  onClick={() => navigate(`/post/${recipient.id}`)}
                >
                  {hasBackgroundImage && <Overlay />}
                  <Title>To. {recipient.name}</Title>
                  <ProfileContainer>
                    {recipient.recentMessages.slice(0, 3).map((msg, index) => (
                      <ProfileImage
                        key={index}
                        src={msg.profileImageURL}
                        alt={msg.sender}
                        $first={index === 0}
                      />
                    ))}
                    {recipient.messageCount > 3 && (
                      <MoreProfiles>+{recipient.messageCount - 3}</MoreProfiles>
                    )}
                  </ProfileContainer>
                  <MessageCount $whiteText={hasBackgroundImage}>
                    <span>{recipient.messageCount}</span> 명이 작성했어요!
                  </MessageCount>
                  <Divider />
                  <ReactionsContainer>
                    {hasReactions ? (
                      recipient.topReactions.map((reaction, idx) => (
                        <Reaction key={idx}>
                          {reaction.emoji} {reaction.count}
                        </Reaction>
                      ))
                    ) : (
                      <NoReactions $whiteText={hasBackgroundImage}>
                        이모지를 추가해보세요. 🥲
                      </NoReactions>
                    )}
                  </ReactionsContainer>
                </Card>
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {!isEnd && (
        <NextButton
          onClick={() => swiperInstance?.slideNext()}
          className={`swiper-button-next-${customId}`}
        >
          <img
            src={arrowImage}
            alt="next"
            style={{ width: "60px", height: "60px" }}
          />
        </NextButton>
      )}
    </Container>
  );
}

export default ListCard;
