import StyledSVG, { IconProps } from "../StyledComponents/StyledSVG";

const InformationIcon = ({ width }: IconProps) => {
  return (
    <StyledSVG
      widthIcon={width}
      height={width}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="information-icon"
    >
      <path
        opacity={0.12}
        d="M23 12.021c0 6.09-4.927 11.022-11 11.022S1 18.11 1 12.022C1 5.931 5.927 1 12 1s11 4.933 11 11.021z"
        stroke="#203C86"
        strokeWidth={2}
      />
      <rect
        opacity={0.12}
        x={11}
        y={10}
        width={2}
        height={7.5}
        rx={0.25}
        fill="#203C86"
      />
      <circle opacity={0.12} cx={12} cy={8} r={1} fill="#203C86" />
    </StyledSVG>
  );
};

export default InformationIcon;
