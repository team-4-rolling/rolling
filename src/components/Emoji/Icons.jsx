import * as S from "./Icons.styles";
import arrowOpen from "../../assets/icons/arrowOpen.svg";
import arrowClose from "../../assets/icons/arrowClose.svg";
import { useAutoClose } from "../../hooks/useAutoClose";

function IconUI({ icon }) {
  return (
    <S.IconContainer>
      <S.Icon>{icon.emoji}</S.Icon>
      <S.Count>{icon.count}</S.Count>
    </S.IconContainer>
  );
}

export default function Icons({ topReactions, reactions }) {
  const { ref, isOpen, setIsOpen } = useAutoClose(false);

  const columns = reactions.length >= 4 ? 4 : reactions.length;
  const responsiveColumns = reactions.length >= 3 ? 3 : reactions.length;

  return (
    <S.Container ref={ref}>
      <S.Icons onClick={() => setIsOpen((prev) => !prev)}>
        {topReactions.map((i) => (
          <IconUI icon={i} key={i.id} />
        ))}
        {isOpen ? (
          <img src={arrowOpen} alt="" />
        ) : (
          <img src={arrowClose} alt="" />
        )}
      </S.Icons>
      {isOpen && (
        <S.Reactions $columns={columns} $responsiveColumns={responsiveColumns}>
          {reactions.map((i) => (
            <IconUI icon={i} key={i.id} />
          ))}
        </S.Reactions>
      )}
    </S.Container>
  );
}
