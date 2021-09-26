import styled from "@emotion/styled";

export interface IconProps {
  width: string;
  secondary?: boolean;
}

interface StyledSVGProps {
  widthIcon: string;
}

const StyledSVG = styled.svg<StyledSVGProps>`
  width: ${({ widthIcon }) => widthIcon};
`;

export default StyledSVG;
