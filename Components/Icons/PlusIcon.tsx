import StyledSVG, { IconProps } from "../StyledComponents/StyledSVG";

const PlusIcon = ({ width }: IconProps) => {
  return (
    <StyledSVG
      widthIcon={width}
      height={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity={0.12}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 0A.25.25 0 004 .25V4H.25a.25.25 0 00-.25.25v1.5c0 .138.112.25.25.25H4v3.75c0 .138.112.25.25.25h1.5A.25.25 0 006 9.75V6h3.75a.25.25 0 00.25-.25v-1.5A.25.25 0 009.75 4H6V.25A.25.25 0 005.75 0h-1.5z"
        fill="#203C86"
      />
    </StyledSVG>
  );
};

export default PlusIcon;
