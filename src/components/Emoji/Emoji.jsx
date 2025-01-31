import * as S from "./Emoji.styles";
import EmojiPicker from "emoji-picker-react";
import Button from "../common/Button/Button";
import theme from "../../styles/theme";
import smile from "../../assets/icons/smile.svg";
import { useState } from "react";

export default function Emoji() {
  const [isOpen, setIsOpen] = useState(false);
  const [pickEmoji, setPickEmoji] = useState("");
  // onEmojiClick 이용해서 post 요청?

  return (
    <>
      <S.Icons></S.Icons>
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
