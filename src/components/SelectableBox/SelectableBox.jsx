import * as S from "./SelectableBox.styles.jsx";
import select from "../../assets/icons/select.svg";
import Skeleton from "./SkeletonBox.jsx";

export default function SelectableBox({
  items,
  selected,
  onSelect,
  onClick,
  type,
  loading,
}) {
  const handleClick = (item, index) => {
    const isColorType = type === "color";
    const value = isColorType ? item.key : item;

    onClick("backgroundColor", isColorType ? value : "beige");
    onClick("backgroundImageURL", isColorType ? null : value);
    onSelect(isColorType ? item.key : index);
  };

  if (loading && type === "image") {
    return <Skeleton />; //로딩 중일 때 스켈레톤 컴포넌트 표시
  }

  if (!Array.isArray(items) || items.length === 0) {
    return <div>선택 가능한 항목이 없습니다.</div>;
  }

  return (
    <S.Grid>
      {items.map((item, index) => (
        <S.Box
          key={index}
          $color={type === "color" ? item.color : null}
          $backgroundImage={type === "image" ? `url(${item})` : null}
          onClick={() => handleClick(item, index)}
        >
          {selected === (type === "color" ? item.key : index) && (
            <S.CheckIcon src={select} alt="선택됨" />
          )}
        </S.Box>
      ))}
    </S.Grid>
  );
}
