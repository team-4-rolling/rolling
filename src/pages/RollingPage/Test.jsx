import * as S from "./TestStyle";
import { useCallback, useEffect, useState } from "react";
import { getMessage } from "./TestApi";
import Test3 from "./Test3";
import { throttle } from "lodash";
import Button from "../../components/common/Button/Button.jsx";
// rolling page를 test 하는 파일임.

function Test() {
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  //

  //
  const handleLoad = async () => {
    setIsLoading(true);
    let limit = offset === 0 ? 8 : 9;
    const { results } = await getMessage(limit, offset);
    if (!results) return;
    setMessages((prevMessages) => [...prevMessages, ...results]);
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

  const handelEditClick = () => {
    setIsEdit(true);
    console.log(isEdit);
  };
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

  const handelDeleteClick = () => {
    setIsEdit(false);
    console.log(isEdit);
  };
  //
  return (
    <div style={{ overflowY: "auto" }}>
      <S.Contents>
        {!isEdit && (
          <Button style={{ marginBottom: "11px" }} onClick={handelEditClick}>
            편집하기
          </Button>
        )}
        {isEdit && <Button onClick={handelDeleteClick}>저장하기</Button>}
        <Test3 isEdit={isEdit} messages={messages} />
      </S.Contents>
    </div>
  );
}

export default Test;
