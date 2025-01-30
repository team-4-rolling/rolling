import styled from "styled-components";
import select from "../../assets/icons/select.svg";
import theme from "../../styles/theme";

export default function SelectableBox({ items, selected, onSelect, type }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <div>선택 가능한 항목이 없습니다.</div>;
  }

  return (
    <Grid>
      {items.map((item, index) => (
        <Box
          key={index}
          $color={type === "color" ? item.color : null}
          backgroundImage={type === "image" ? item : null}
          onClick={() => onSelect(type === "color" ? item.key : item)}
          selected={selected === (type === "color" ? item.key : item)}
        >
          {selected === (type === "color" ? item.key : item) && (
            <CheckIcon src={select} alt="선택됨" />
          )}
        </Box>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  margin-bottom: 50px;
`;

const Box = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 8px;
  background-color: ${({ $color }) => $color || "transparent"};
  background: ${({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : "none"};
  background-size: cover;
  background-position: center;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  ${({ selected }) =>
    selected &&
    `
    border: 4px solid ${theme.color.Purple600};
  filter: brightness(0.6);
`}
`;

const CheckIcon = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
