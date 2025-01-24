import styled from "styled-components";
import theme from "../../styles/theme";

const COLOR = {
  가족: `${theme.color.Green500}`,
  지인: `${theme.color.Beige500}`,
  동료: `${theme.color.Purple500}`,
  친구: `${theme.color.Blue500}`,
};

const BG = {
  가족: `${theme.color.Green100}`,
  지인: `${theme.color.Beige100}`,
  동료: `${theme.color.Purple100}`,
  친구: `${theme.color.Blue100}`,
};

export const Badge = styled.div`
  font: ${theme.font.H7Regular};
`;

export const BadgeContainer = styled.div`
  width: 41px;
  height: 20px;
  border-radius: 4px;
  padding: 0 8px;
  background-color: ${({ $R }) => BG[$R]};

  ${Badge} {
    color: ${({ $R }) => COLOR[$R]};
  }
`;
