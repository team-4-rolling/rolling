import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllRecipients } from "../../api/recipient.api";
import ListCard from "../../components/ListCard/Listcard";
import SkeletonCardList from "../../components/ListCard/SkeletonCardList";
import Button from "../../components/common/Button/Button";
import theme from "../../styles/theme";
import {
  Container,
  Section,
  Title,
  ButtonContainer,
} from "../ListPage/ListPage.style";

function ListPage() {
  const [popularRecipients, setPopularRecipients] = useState([]);
  const [recentRecipients, setRecentRecipients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getAllRecipients();

      if (Array.isArray(data)) {
        const sortedByReaction = [...data].sort(
          (a, b) => b.reactionCount - a.reactionCount
        );

        setPopularRecipients(sortedByReaction);
        setRecentRecipients(data);
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Section>
        <Title>인기 롤링 페이퍼 🔥</Title>
        {loading ? (
          <SkeletonCardList />
        ) : (
          <ListCard recipients={popularRecipients} customId="popular" />
        )}
      </Section>

      <Section>
        <Title>최근에 만든 롤링 페이퍼 ⭐</Title>
        {loading ? (
          <SkeletonCardList />
        ) : (
          <ListCard recipients={recentRecipients} customId="recent" />
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
