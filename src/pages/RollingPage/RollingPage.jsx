import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./RollingPage.style.jsx";
import { useCallback, useEffect, useState } from "react";
import { deleteRecipient, getRecipientById } from "../../api/recipient.api.jsx";
import { getMessage, deleteMessage } from "../../api/messages.api.jsx";
import throttle from "lodash.throttle";
import Button from "../../components/common/Button/Button.jsx";
import { useParams } from "react-router-dom";
import Messages from "./Messages.jsx";
import SecondHeader from "../../components/common/Header/SecondHeader";
import arrow from "../../assets/icons/white.arrow.svg";
import { showToast } from "../../components/common/Toast/Toast.jsx";
import PaperDelete from "../../components/common/Modal/ModalContent/PaperDelete.jsx";
import Modal from "../../components/common/Modal/Modal";
import theme from "../../styles/theme.jsx";
//
export default function RollingPage() {
  const { id: queryId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [hasNext, setHasNext] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedIds, setDeletedIds] = useState([]);
  const [scrollActive, setScrollActive] = useState(false);
  const [recipient, setRecipient] = useState({
    id: 0,
    name: "",
    color: "purple",
    img: "",
    messageCount: 0,
    recentMessages: [],
  });

  //
  const handleLoad = async () => {
    try {
      const recipientData = await getRecipientById(queryId);
      setRecipient(recipientData);
      setIsLoading(true);
      let limit = offset == 0 ? 8 : 9;
      const { results, next } = await getMessage(limit, offset, queryId);
      setMessages((prevMessages) =>
        offset === 0 ? results : [...prevMessages, ...results]
      );
      setOffset((prevOffset) => prevOffset + limit);
      setIsLoading(false);
      setHasNext(Boolean(next));
    } catch {
      showToast("해당 롤링페이퍼를 찾을수 없습니다.", "error", "top");
      setTimeout(() => {
        navigate("/list");
      }, 3000);
      return;
    }
  };

  useEffect(() => {
    handleLoad();
    if (!isLoading && hasNext) {
      window.addEventListener("scroll", infiniteScroll);
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

        setScrollActive(scrollTop >= 5);

        if (clientHeight + scrollTop >= scrollHeight - 4) {
          setIsScrollEnd((prev) => !prev);
        }
      }
    }, 300),
    []
  );
  const handelEditClick = () => {
    setIsEdit(true);
  };
  const handelDeleteMessageClick = () => {
    deleteMessage(deletedIds);
    setIsEdit(false);
    setDeletedIds([]);
  };

  const handelDeletePageClick = async () => {
    await deleteRecipient(queryId);
    navigate("/");
  };

  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleCloseModal = () => {
    setDeleteModal(null);
  };
  return (
    <>
      <SecondHeader
        recipientId={queryId}
        name={recipient.name}
        messageCount={recipient.messageCount}
        recentMessages={recipient.recentMessages}
      />
      <div style={{ overflowY: "auto" }}>
        <S.Contents onClose={handleCloseModal}>
          {scrollActive && (
            <S.ScrollUpButton onClick={handleScrollUp}>
              <S.Arrow src={arrow} />
            </S.ScrollUpButton>
          )}
          <S.ButtonFlex>
            <S.ButtonContain>
              {isEdit ? (
                <Button
                  $font={theme.font.H5Regular}
                  style={{ width: "100%" }}
                  onClick={handelDeleteMessageClick}
                >
                  저장하기
                </Button>
              ) : (
                <Button
                  style={{ width: "100%" }}
                  onClick={handelEditClick}
                  $font={theme.font.H5Regular}
                >
                  메시지 삭제하기
                </Button>
              )}
            </S.ButtonContain>
            <S.ButtonContain>
              <Button
                $font={theme.font.H5Regular}
                style={{ width: "100%" }}
                onClick={() => setDeleteModal(true)}
              >
                롤링페이퍼 삭제하기
              </Button>
            </S.ButtonContain>
          </S.ButtonFlex>

          <Messages
            deletedIds={deletedIds}
            setDeletedIds={setDeletedIds}
            isEdit={isEdit}
            messages={messages}
            isLoading={isLoading}
          />
        </S.Contents>
        <Modal onClose={handleCloseModal} isOpen={deleteModal}>
          <PaperDelete onClick={handelDeletePageClick}>
            정말 삭제 하시겠습니까?
          </PaperDelete>
        </Modal>
        <S.Background color={recipient.color} $img={recipient.img} />
      </div>
    </>
  );
}
