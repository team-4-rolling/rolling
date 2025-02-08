import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipients } from "../../api/recipient.api";
import ListCard from "../../components/ListCard/Listcard";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import {
  Container,
  Section,
  Title,
  LoadingMessage,
  ButtonContainer,
} from "./ListPage.style";

function ListPage() {
  const [popularRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const data = await getAllRecipients();
      // console.log("받아온 recipients 데이터:", data);

      if (Array.isArray(data)) {
        const sortedByReaction = [...data].sort(
          (a, b) => b.reactionCount - a.reactionCount
        );
        const sortedByDate = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setPopularRecipients(sortedByReaction);
        setRecentRecipients(sortedByDate);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Section>
        <Title>인기 롤링 페이퍼 🔥</Title>
        {popularRecipients.length > 0 ? (
          <ListCard recipients={popularRecipients} customId="popular" />
        ) : (
          <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>
        )}
      </Section>

      <Section>
        <Title>최근에 만든 롤링 페이퍼 ⭐</Title>
        {recentRecipients.length > 0 ? (
          <ListCard recipients={recentRecipients} customId="recent" />
        ) : (
          <LoadingMessage>데이터를 불러오는 중...</LoadingMessage>
        )}
      </Section>

      <ButtonContainer>
        <Button
          medium
          $font={`${theme.font.H4Bold}`}
          style={{ width: "100%" }}
          onClick={() => navigate("/post")}
        >
          나도 만들어보기
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default ListPage;
