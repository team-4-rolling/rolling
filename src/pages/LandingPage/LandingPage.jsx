import * as S from "./LandingPage.styles";
import rolling from "../../assets/icons/image.png";
import emoji from "../../assets/icons/emoji.png";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  const Card = [
    {
      cardId: 1,
      point: "Point. 01",
      title: "누구나 손쉽게, 온라인\n 롤링 페이퍼를 만들 수 있어요",
      subTitle: "로그인 없이 자유롭게 만들어요.",
      image: rolling,
    },
    {
      cardId: 2,
      point: "Point. 02",
      title: "서로에게 이모지로 감정을\n 표현해보세요",
      subTitle: "롤링 페이퍼에 이모지를 추가할 수 있어요.",
      image: emoji,
    },
  ];

  return (
    <S.Div>
      <S.Container>
        <S.CardContainer>
          {Card.map((card) => (
            <S.Card key={card.cardId} $id={card.cardId}>
              <S.Content>
                <S.Point>{card.point}</S.Point>
                <S.Title>{card.title}</S.Title>
                <S.SubTitle>{card.subTitle}</S.SubTitle>
              </S.Content>
              <S.Img src={card.image} $id={card.cardId} />
            </S.Card>
          ))}
        </S.CardContainer>
        <S.LookingBtn to="/list">
          <Button
            medium
            $font={`${theme.font.H4Bold}`}
            style={{ cursor: "pointer", width: "100%" }}
          >
            구경해보기
          </Button>
        </S.LookingBtn>
      </S.Container>
    </S.Div>
  );
}
