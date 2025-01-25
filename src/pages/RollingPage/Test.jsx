import * as S from "./TestStyle";
import { useCallback, useEffect, useState } from "react";
import { getMessage, getRecipients } from "./TestApi";
import Test3 from "./Test3";
import { throttle } from "lodash";
import Button from "../../components/common/Button/Button.jsx";
import { useParams } from "react-router-dom";
// rolling page를 test 하는 파일임.

function Test() {
  //useParams 테스트 부분
  const { id: queryId } = useParams();

  //
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  //

  //
  const handleLoad = async () => {
    const { id } = await getRecipients(queryId);
    setIsLoading(true);
    let limit = offset === 0 ? 8 : 9;
    const { results, next } = await getMessage(limit, offset, id);
    if (!results) return;
    setMessages((prevMessages) => [...prevMessages, ...results]);
    setOffset(offset + limit);
    setIsLoading(false);
    setHasNext(next);
  };

  useEffect(() => {
    if (!isLoading) {
      handleLoad();
    }
    if (hasNext) {
      console.log("이벤트 등록");
      window.addEventListener("scroll", infiniteScroll);
    }
    return () => {
      infiniteScroll.cancel();
      window.removeEventListener("scroll", infiniteScroll);
      console.log("이벤트 삭제");
    };
  }, [isScrollEnd]);

  const infiniteScroll = useCallback(
    throttle(() => {
      if (!isLoading) {
        const { clientHeight, scrollHeight, scrollTop } =
          document.documentElement;
        if (clientHeight + scrollTop >= scrollHeight - 1) {
          setIsScrollEnd((prev) => !prev);
        }
      }
    }, 200),
    []
  );
  const handelEditClick = () => {
    setIsEdit(true);
  };
  const handelDeleteClick = () => {
    setIsEdit(false);
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
