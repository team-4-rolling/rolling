import * as S from "./Header.styles";
import logoIcon from "../../../assets/icons/logo.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation().pathname;

  const isLadingPage = () => {
    return {
      display: location === "/" ? "block" : "none",
    };
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo to="/">
          <img src={logoIcon} />
          <h1>Rolling</h1>
        </S.Logo>
        <S.CreateBtn to="/list" style={isLadingPage}>
          롤링 페이퍼 만들기
        </S.CreateBtn>
      </S.Header>
    </S.Container>
  );
}
