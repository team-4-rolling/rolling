import PostCardUI from "../../components/RollingCard/RollingCard";
import { useEffect, useState } from "react";
import Modal from "../../components/common/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import useWindowSize from "../../hooks/useWindow";

export default function MessagesData({
  deletedIds,
  setDeletedIds,
  messages,
  isEdit,
}) {
  const [filterMessages, setFilterMessages] = useState(messages);
  const [openModalId, setOpenModalId] = useState(null);
  const device = useWindowSize();
  //
  const handleClickFilter = (e) => {
    const value = e.currentTarget.dataset.value;
    if (!value) return;
    const disappear = filterMessages.filter((message) => message.id != value);
    setFilterMessages(disappear);

    setDeletedIds((prev) =>
      deletedIds.includes(value)
        ? deletedIds.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  const handleCardClick = (id) => {
    if (device === "mobile") return null;
    setOpenModalId(id);
  };
  const handleCloseModal = () => {
    setOpenModalId(null);
  };
  useEffect(() => {
    setFilterMessages(messages);
  }, [messages]);

  return (
    <>
      {filterMessages.map((message) => {
        return (
          <div key={message.id}>
            <div
              onClick={() => handleCardClick(message.id)}
              onClose={handleCloseModal}
            >
              <PostCardUI
                onClick={handleClickFilter}
                isEdit={isEdit}
                data={message}
              />
            </div>
            <Modal
              onClose={handleCloseModal}
              isOpen={openModalId === message.id}
            >
              <ModalContent data={message} />
            </Modal>
          </div>
        );
      })}
    </>
  );
}
