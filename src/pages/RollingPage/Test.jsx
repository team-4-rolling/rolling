import * as S from "./TestStyle";
import { useCallback, useEffect, useState } from "react";
import { getMessage } from "./TestApi";
import Test3 from "./Test3";
import { throttle } from "lodash";
// rolling page를 test 하는 파일임.

function Test() {
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //

  //
  const handleLoad = async () => {
    setIsLoading(true);
    let limit;
    limit = offset === 0 ? 8 : 9;
    const result = await getMessage(limit, offset);
    if (!result) return;
    setMessages((prevMessages) => [...prevMessages, ...result]);
    setOffset(offset + limit);
  };

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll);
    if (!isLoading) {
      handleLoad();
      setIsLoading(false);
    }

    return () => {
      infiniteScroll.cancel();
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [isScrollEnd]);

  const infiniteScroll = useCallback(
    throttle(() => {
      if (!isLoading) {
        const { clientHeight, scrollHeight, scrollTop } =
          document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 1) {
          setIsScrollEnd((prev) => !prev); // 스크롤이 가장 하단일때 isScroll값을 반대로 바꿈
        }
      }
    }, 200),
    []
  );

  //
  return (
    <div style={{ overflowY: "auto" }}>
      <S.Contents>
        <Test3 messages={messages} />
      </S.Contents>
    </div>
  );
}

export default Test;
