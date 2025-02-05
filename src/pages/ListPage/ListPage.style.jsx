import styled from "styled-components";
import theme from "../../styles/theme";

// 전체 페이지 컨테이너
export const Container = styled.div`
  padding: 10px;
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 10px 16px;
  }
`;

// 섹션 컨테이너 (인기 롤링 페이퍼 & 최근 롤링 페이퍼)
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 40px auto 0 auto;

  @media (max-width: 1024px) {
    width: 100%;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    width: 100%;
    align-items: flex-start;
  }
`;

// 섹션 타이틀 스타일
export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ marginBottom }) => marginBottom || "20px"};

  @media (max-width: 1024px) {
    font-size: 24px;
    text-align: left;
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    text-align: left;
    margin-bottom: 12px;
  }
`;

// 로딩 메시지 스타일
export const LoadingMessage = styled.p`
  font-size: 16px;
  color: ${theme.color.gray700};
  text-align: center;
`;

// 버튼 컨테이너
export const ButtonContainer = styled.div`
  margin-top: 80px;
  width: 280px;

  @media (max-width: 1024px) {
    bottom: 20px;
    position: fixed;
    width: 100%;
    padding: 0 16px;
  }
`;
