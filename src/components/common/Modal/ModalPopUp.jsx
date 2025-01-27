import { useState } from "react";
import RollingPaperModal from "../../components/common/Modal/Modal";
import cat from "../../../assets/icons/cat.jpeg";

const data = {
  profileImageURL: cat,
  sender: "김동훈",
  relationship: "친구",
  content:
    "훈훈, 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요! 코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!코로나가 또다시 기승을 부리는 요즘이네요. 건강, 체력 모두 조심 또 하세요!",
  font: "나눔손글씨 손편지체",
  createdAt: "2025.01.26",
};

export default function ModalPopUp() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>모달 테스트</button>
      {/* 버튼태그 수정 필요 */}
      <RollingPaperModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {data}
      </RollingPaperModal>
    </div>
  );
}
