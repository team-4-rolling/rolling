import * as S from "./RollingPage.style";
import RollingCard from "../../components/RollingCard/RollingCard";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";

//

function Messages({ isEdit, messages }) {
  return (
    <S.GridBoxes>
      {!isEdit && (
        <S.CreateBox>
          <Link to="message">
            <S.Plus src={PlusIcon} />
          </Link>
        </S.CreateBox>
      )}
      {messages.map((message) => {
        return <RollingCard onClick={""} isEdit={isEdit} key={message.id} data={message} />;
      })}
    </S.GridBoxes>
  );
}

export default Messages;
