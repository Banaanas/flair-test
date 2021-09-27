import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

interface RectangleProps {
  width: number;
  height: number;
}

const Rectangle = styled.div<RectangleProps>`
  margin: 0 16px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${appTheme.colors.secondary.light};
  border-radius: 100px;
  transform: rotate(20deg);
`;

export default Rectangle;
