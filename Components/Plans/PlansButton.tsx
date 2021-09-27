import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const Button = styled.button<{ selected: boolean }>`
  all: unset;
  font-weight: normal;
  font-size: 15px;
  cursor: pointer;

  ::after {
    display: block;
    width: 100%;
    height: 2px;
    background: ${({ selected }) =>
      selected ? appTheme.colors.black : appTheme.colors.primary.default};
    border-radius: 4px;
    transform: ${({ selected }) => (selected ? "scale(1)" : "scale(0)")};
    transform-origin: left;
    transition: transform 250ms ease-out;
    content: "";
  }

  :hover::after {
    transform: scale(1);
  }
`;

interface PlansButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}
const PlansButton = ({ label, selected, onClick }: PlansButtonProps) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {label}
    </Button>
  );
};

export default PlansButton;
