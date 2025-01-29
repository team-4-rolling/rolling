import * as S from "./Header.styles";
import logoIcon from "../../../assets/icons/logo.svg";
import { useLocation, NavLink } from "react-router-dom";
import Button from "../Button/Button";
import theme from "../../../styles/theme";

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
        <NavLink to="/post" style={isLadingPage}>
          <Button outline $font={`${theme.font.H5Bold}`} style={{ cursor: "pointer" }}>
            롤링 페이퍼 만들기
          </Button>
        </NavLink>
      </S.Header>
    </S.Container>
  );
}
