import * as S from "./Emoji.styles";
import { useState, useEffect } from "react";
import EmojiPicker from "emoji-picker-react";
import Button from "../common/Button/Button";
import Icons from "./Icons";
import theme from "../../styles/theme";
import smile from "../../assets/icons/smile.svg";
import { getReactions, postReaction } from "../../api/reactions.api";
import { useAutoClose } from "../../hooks/useAutoClose";

export default function Emoji({ recipientId }) {
  const [reactions, setReactions] = useState([]);
  const [emoji, setEmoji] = useState({ emoji: "", type: "increase" });
  const [isLoading, setIsLoading] = useState(false);
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const handleGetReactions = () => {
    if (!recipientId) return;
    setIsLoading(true);

    getReactions(recipientId)
      .then((result) => {
        if (result) setReactions(result);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handleGetReactions();
  }, [recipientId]);

  const handleEmojiClick = (emojiObject) => {
    setIsLoading(true);

    setEmoji((prev) => {
      const postEmoji = { ...prev, emoji: emojiObject.emoji };

      postReaction(recipientId, postEmoji)
        .then(() => {
          handleGetReactions();
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));

      return postEmoji;
    });

    setIsOpen(false);
  };

  const topReactions = reactions.slice(0, 3);

  return (
    <S.EmojiContainer>
      <Icons
        topReactions={topReactions}
        reactions={reactions}
        isLoading={isLoading}
      />
      <S.Emoji ref={ref}>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          outlineMedium
          $font={`${theme.font.H5Regular}`}
          style={{ width: "100%", height: "36px" }}
        >
          <img src={smile} />
          <span>추가</span>
        </Button>
        {isOpen && (
          <S.StyledEmoji>
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </S.StyledEmoji>
        )}
      </S.Emoji>
    </S.EmojiContainer>
  );
}
