import * as S from "./TestStyle";

import { useEffect, useState } from "react";
import { getMessage } from "./TestApi";
import Test3 from "./Test3";
// rolling page를 test 하는 파일임.
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
        <Test3 messages={messages} />
      </S.Contents>
    </>
  );
}

export default Test;
