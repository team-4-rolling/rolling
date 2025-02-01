import * as S from "./Emoji.styles";
import EmojiPicker from "emoji-picker-react";
import Button from "../common/Button/Button";
import Icons from "./Icons";
import { getReactions, postReaction } from "../../api/reactions";
import { useState, useEffect } from "react";
import theme from "../../styles/theme";
import smile from "../../assets/icons/smile.svg";

export default function Emoji({ recipientId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reactions, setReactions] = useState([]);
  const [emoji, setEmoji] = useState({ emoji: "", type: "increase" });

  // localStorage 이용해 emoji 저장하고 해당 emoji가 있으면 active 상태 보여주기, 해당 이모지 click하면 post 요청, active 상태인 이모지 click하면 type decrease

  const handleGetReactions = () => {
    if (recipientId) {
      getReactions(recipientId)
        .then((result) => {
          if (!result) return;
          setReactions(result);
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    handleGetReactions();
  }, [recipientId]);

  const handleEmojiClick = async (emojiObject) => {
    setEmoji((prev) => {
      const postEmoji = { ...prev, emoji: emojiObject.emoji };

      postReaction(recipientId, postEmoji)
        .then(handleGetReactions)
        .catch((error) => console.error(error));

      return postEmoji;
    });
    setIsOpen(false);
  };

  const topReactions = reactions.slice(0, 3);

  return (
    <>
      <Icons topReactions={topReactions} reactions={reactions} />
      <S.Emoji>
        <Button
          onClick={() => setIsOpen((prev) => !prev)}
          outlineMedium
          $font={`${theme.font.H5Regular}`}
          style={{ cursor: "pointer", width: "100%" }}
        >
          <img src={smile} />
          <span>추가</span>
        </Button>
        {isOpen && (
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            style={{
              position: "absolute",
              top: "120%",
              right: "0"
            }}
          />
        )}
      </S.Emoji>
    </>
  );
}
