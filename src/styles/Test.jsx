import React from "react";
import styled from "styled-components";

const TestDiv1 = styled.div`
  background-color: ${({ theme }) => theme.color.Purple100};
`;
const TestDiv2 = styled.div`
  background-color: ${({ theme }) => theme.color.Error};
`;
function Test() {
  return (
    <div>
      <TestDiv1>purple1 테스트 입니다.</TestDiv1>
      <TestDiv2>Error 테스트 입니다.</TestDiv2>
    </div>
  );
}

export default Test;
