import * as S from "./TestStyle";
import { useEffect, useState } from "react";
import { getMessage } from "./TestApi";
import Test3 from "./Test3";
// rolling page를 test 하는 파일임.

function Test() {
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLoad = async () => {
    if (offset === 0) {
      // 초기 렌더링
      let limit = 8;
      const result = await getMessage(limit, offset);
      if (!result) return;
      setMessages(result);
      setOffset(limit);
    } else {
      let limit = 9;
      const result = await getMessage(limit, offset);
      if (!result) return;
      setMessages((prevMessages) => [...prevMessages, ...result]);
      setOffset(offset + limit);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <>
      <S.Contents>
        <Test3 messages={messages} />
      </S.Contents>
      <button onClick={handleLoad}>더보기</button>
    </>
  );
}

export default Test;
