import * as S from "./Header.styles";
import logoIcon from "../../../assets/icons/logo.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SecondHeader from "./SecondHeader";

export default function Header() {
  const location = useLocation().pathname;

  const isLadingPage = () => {
    return {
      display: location === "/" ? "block" : "none",
    };
  };
  ㄴ;

  const isIdPostPage = location === "/post/:id";

  return (
    <S.Container>
      <S.FirstHeader>
        <S.Header>
          <S.Logo to="/">
            <img src={logoIcon} />
            <h1>Rolling</h1>
          </S.Logo>
          <S.CreateBtn to="/post" style={isLadingPage}>
            롤링 페이퍼 만들기
          </S.CreateBtn>
        </S.Header>
      </S.FirstHeader>
      {isIdPostPage && <SecondHeader />}
    </S.Container>
  );
}
