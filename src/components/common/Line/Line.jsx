import { styled } from "styled-components";

const StyledLine = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: #eeeeee;
`;

export default function Line({ width, height }) {
  return (
    <>
      <StyledLine width={width} height={height}></StyledLine>
    </>
  );
}
