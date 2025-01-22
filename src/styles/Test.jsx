import theme from "./theme";
import styled from "styled-components";

const TestStyle = styled.div`
  font: ${({ font }) => font.H1};
`;
const TestStyle2 = styled.div`
  font: ${({ font }) => font.H6Bold};
`;
function Test() {
  const { font } = theme;
  return (
    <div>
      <TestStyle font={font}>이것은 H1 테스트 입니다.</TestStyle>
      <TestStyle2 font={font}>이것은 H6Bold 테스트 입니다.</TestStyle2>
    </div>
  );
}
export default Test;
