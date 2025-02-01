import styled from "styled-components";
import select from "../../assets/icons/select.svg";

export default function SelectableBox({
  items,
  selected,
  onSelect,
  onClick,
  type,
  modeName,
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>선택 가능한 항목이 없습니다.</div>;
  }

  return (
    <Grid>
      {items.map((item, index) => (
        <Box
          key={index}
          $color={type === "color" ? item.color : null} // 컬러 모드일 경우, 해당 색상을 스타일에 전달
          $backgroundImage={type === "image" ? `url(${item})` : null}
          onClick={() => {
            onClick(modeName, type === "color" ? item.key : item);
            onSelect(type === "color" ? item.key : index);
            console.log(selected);
          }} // 박스를 클릭하면 선택된 값 업데이트
          selected={selected === (type === "color" ? item.key : item)} // 선택된 아이템인지 확인
        >
          {selected === (type === "color" ? item.key : index) && (
            <CheckIcon src={select} alt="선택됨" />
          )}
        </Box>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const Box = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  background-color: ${({ $color }) =>
    $color || "transparent"}; // 컬러 모드일 때 배경색 적용
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage || "none"}; // 이미지 모드일 때 배경 이미지 적용
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  ${({ selected }) =>
    selected &&
    `
  `}
`;

const CheckIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
