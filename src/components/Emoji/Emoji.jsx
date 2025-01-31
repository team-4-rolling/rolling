import * as S from "./Emoji.styles";
import EmojiPicker from "emoji-picker-react";
import Button from "../common/Button/Button";
import theme from "../../styles/theme";
import smile from "../../assets/icons/smile.svg";
import { useState } from "react";
import Icons from "./Icons";

export default function Emoji({ topReactions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pickEmoji, setPickEmoji] = useState("");

  const handleEmojiClick = (emojiObject) => {
    setPickEmoji(emojiObject.emoji);
    setIsOpen(false);
  };

  return (
    <>
      <Icons topReactions={topReactions} />
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
