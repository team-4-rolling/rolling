import * as S from "./TestStyle";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMessage } from "./TestApi";
import Test3 from "./Test3";
//
function Test() {
  const [messages, setMessages] = useState([]);

  const handleLoad = async () => {
    const { results } = await getMessage();
    setMessages(results);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <S.Contents>
        {!messages && (
          <S.CreateBox>
            <Link to="message">
              <S.Plus src={PlusIcon} />
            </Link>
          </S.CreateBox>
        )}
        <Test3 messages={messages} />
      </S.Contents>
    </>
  );
}

export default Test;
