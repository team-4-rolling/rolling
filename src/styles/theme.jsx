const theme = {
  font: {
    //weight , size , height , fontfamily
    H1: "700 28px/42px 'Pretendard', sans-serif",
    H2Bold: "700 24px/36px 'Pretendard', sans-serif",
    H2Regular: "400 24px/36px 'Pretendard', sans-serif",
    H3Bold: "700 20px/30px 'Pretendard', sans-serif",
    H3Regular: "400 20px/30px 'Pretendard', sans-serif",
    H4Bold: "700 18px/28px 'Pretendard', sans-serif",
    H4Regular: "400 18px/28px 'Pretendard', sans-serif",
    H5Bold: "700 16px/26px 'Pretendard', sans-serif",
    H5Regular: "400 16px/26px 'Pretendard', sans-serif",
    H6Bold: "700 15px/22px 'Pretendard', sans-serif",
    H6Regular: "400 15px/22px 'Pretendard', sans-serif",
    H7Bold: "700 14px/20px 'Pretendard', sans-serif",
    H7Regular: "400 14px/20px 'Pretendard', sans-serif",
    H8: "400 12px/20px 'Pretendard', sans-serif",
  },
  color: {
    Purple100: "#F8F0FF",
    Purple200: "#ECD9FF",
    Purple300: "#DCB9FF",
    Purple400: "#C894FD",
    Purple500: "#AB57FF",
    Purple600: "#9935FF",
    Purple700: "#861DEE",
    Purple800: "#6E0AD1",
    Purple900: "#5603A7",

    Beige100: "#FFF0D6",
    Beige200: "#FFE2AD",
    Beige300: "#FFC583",
    Beige400: "#FFAE65",
    Beige500: "#FF8832",

    Blue100: "#E2F5FF",
    Blue200: "#B1E4FF",
    Blue300: "#7CD2FF",
    Blue400: "#34B9FF",
    Blue500: "#00A2FE",

    Green100: "#E4FBDC",
    Green200: "#D0F5C3",
    Green300: "#9BE282",
    Green400: "#60CF37",
    Green500: "#2BA600",

    Grayscale100: "#F6F6F6",
    Grayscale200: "#EEEEEE",
    Grayscale300: "#CCCCCC",
    Grayscale400: "#999999",
    Grayscale500: "#555555",
    Grayscale600: "#4A4A4A",
    Grayscale700: "#3A3A3A",
    Grayscale800: "#2B2B2B",
    Grayscale900: "#181818",

    White: "#FFFFFF",
    Black: "#000000",
    Error: "#DC3A3A",
    Surface: "#F6F8FF",
  },
  // fontWeights: {
  //   regular: 400,
  //   bold: 700,
  // },
  // breakpoint: {
  //   tablet: `(min-width: 768px) and (max-width: 1199px) `,
  //   mobile: `(min-width: 375px) and (max-width: 767px)`,
  // },
};

/* 스타일드 컴포넌트 파일 사용법
 *const TestStyle = styled.div`
 *font: ${({ font }) => font.H1}; ->H1 예시 입니다.
 *`;
 */

export default theme;
