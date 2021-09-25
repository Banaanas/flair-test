import styled from "@emotion/styled";

interface RectangleProps {
  width?: number;
  color: string;
}

const StyledSVG = styled.svg`
  background: aqua;
  hei
`;

const SVGRectangle = ({ width = 14, color }: RectangleProps) => (
  <StyledSVG
    width={width}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={9.75}
      width={3.52}
      height={28.506}
      rx={1.76}
      transform="rotate(20 9.75 0)"
      fill={color}
    />
  </StyledSVG>
);

export default SVGRectangle;
