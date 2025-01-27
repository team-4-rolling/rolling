import * as S from "./RollingPage.style";
import PostCardUI from "../../components/PostCardUl/PostCardUl";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//

function Messages({ isEdit, messages }) {
  const [filterMessages, setFilterMessages] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("filterMessages");
    if (savedMessages) {
      setFilterMessages(JSON.parse(savedMessages));
      console.log(
        "Restored messages from localStorage:",
        JSON.parse(savedMessages)
      );
    } else {
      setFilterMessages(messages || []);
    }
  }, [messages]);

  const handleClickFilter = (e) => {
    const disappearMessage = filterMessages.filter(
      (message) => message.id != e.currentTarget.dataset.value
    );
    setFilterMessages(disappearMessage);
    localStorage.setItem("filterMessages", JSON.stringify(disappearMessage));

    console.log("Updated messages saved in localStorage:", disappearMessage);
  };
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

      {filterMessages.map((message) => {
        return (
          <PostCardUI
            onClick={handleClickFilter}
            isEdit={isEdit}
            key={message.id}
            data={message}
          />
        );
      })}
    </S.GridBoxes>
  );
}
//
export default Messages;
