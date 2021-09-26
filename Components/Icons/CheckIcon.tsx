import StyledSVG, { IconProps } from "../StyledComponents/StyledSVG";

const CheckIcon = ({ width, secondary }: IconProps) => {
  return (
    <StyledSVG
      viewBox="0 0 36 38"
      xmlns="http://www.w3.org/2000/svg"
      widthIcon={width}
    >
      <g fill={secondary ? "#445b99" : "#203C86"}>
        <path
          opacity={secondary ? 1 : 0.06}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 37.017c9.941 0 18-8.073 18-18.032C36 9.025 27.941.953 18 .953S0 9.026 0 18.985s8.059 18.032 18 18.032z"
        />
        <path
          fill={secondary ? "white" : "black"}
          d="M15.598 24.731l-4.893-4.872a.716.716 0 01-.205-.528c0-.215.068-.391.205-.528l1.084-1.057a.653.653 0 01.513-.234c.205 0 .386.078.542.234l3.281 3.287 7.031-7.044a.744.744 0 01.542-.234c.205 0 .376.078.513.234l1.084 1.057a.716.716 0 01.205.528.716.716 0 01-.205.529l-8.643 8.628a.668.668 0 01-.527.235.668.668 0 01-.527-.235z"
        />
      </g>
    </StyledSVG>
  );
};

export default CheckIcon;
