import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import {
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

const RecipientCard = ({ recipient }) => {
  const navigate = useNavigate();
  const backgroundColor =
    theme.color[recipient.backgroundColor] ||
    recipient.backgroundColor ||
    "#f0f0f0";
  const hasBackgroundImage = !!recipient.backgroundImageURL;
  const hasReactions = recipient.topReactions.length > 0;

  return (
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
  );
};

export default RecipientCard;
