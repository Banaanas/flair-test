import styled from "@emotion/styled";

const Button = styled.button`
  all: unset;
  font-size: 15px;
  cursor: pointer;

  ::after {
    display: block;
    width: 100%;
    height: 3px;
    background: blue;
    border-radius: 4px;
    transform: scale(0);
    transform-origin: center left;
    transition: transform 250ms ease-out;
    content: "";
  }
  :hover::after {
    transform: scale(1);
  }

  &:active {
    background: aqua;
  }
`;

interface PlansButtonProps {
  label: string;
  onClick: () => void;
}
const PlansButton = ({ label, onClick }: PlansButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default PlansButton;
