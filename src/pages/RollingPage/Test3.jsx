import * as S from "./TestStyle";
import PostCardUI from "../../components/PostCardUl/PostCardUl";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
//

function Test3({ isEdit, messages }) {
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
        return <PostCardUI isEdit={isEdit} key={message.id} data={message} />;
      })}
    </S.GridBoxes>
  );
}

export default Test3;
