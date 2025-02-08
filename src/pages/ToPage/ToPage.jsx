import * as C from "../../constants/messageConstants";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { submitToPage } from "../../api/recipient.api";
import { getBackgroundImages } from "../../api/images.api";
import { showToast } from "../../components/common/Toast/Toast";
import Form from "./Form/Form";

export default function ToPage() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [dataToSend, setDataToSend] = useState({
    name: "",
    backgroundColor: "beige",
    backgroundImageURL: null,
  });

  useEffect(() => {
    getBackgroundImages()
      .then((response) => {
        setImages(response);
      })
      .catch((error) => console.error("Failed to fetch images:", error));
  }, []);

  // dataToSend 상태 업데이트
  const handleChange = (name, value) => {
    setDataToSend((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await submitToPage(dataToSend)
      .then((id) => {
        showToast(
          `${dataToSend.name} ${C.TOAST_TEXT.SUCCESS_CREATE_PAPER}`,
          "success",
          "top"
        );
        navigate(`/post/${id}`);
      })
      .catch((error) => console.error("Error creating rolling paper:", error));
  };

  return (
    <div style={{ overflowY: "auto" }}>
      <Form
        images={images}
        dataToSend={dataToSend}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
