import styled from "@emotion/styled";

interface RectangleProps {
  width: number;
  height: number;
}

const Rectangle = styled.div<RectangleProps>`
  margin: 0 16px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: #f2f3f8;
  border-radius: 100px;
  transform: rotate(20deg);
`;

export default Rectangle;
