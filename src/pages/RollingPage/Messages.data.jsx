import PostCardUI from "../../components/RollingCard/RollingCard";
import { useEffect, useState } from "react";

export default function Test({ deletedIds, setDeletedIds, messages, isEdit }) {
  const [filterMessages, setFilterMessages] = useState(messages);
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
  useEffect(() => {
    setFilterMessages(messages);
  }, [messages]);
  return (
    <>
      {filterMessages.map((message) => {
        return (
          <PostCardUI
            onClick={handleClickFilter}
            isEdit={isEdit}
            key={message.id}
            data={message}
          />
        );
      })}
    </>
  );
}
