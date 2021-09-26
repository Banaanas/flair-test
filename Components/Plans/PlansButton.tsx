import styled from "@emotion/styled";

const Button = styled.button`
  all: unset;
  font-size: 15px;
  cursor: pointer;

  ::after {
    display: block;
    width: 90%;
    height: 3px;
    background: blue;
    border-radius: 4px;
    transform: scale(0);
    transition: transform 250ms ease-out;
    content: "";
  }
  :hover::after {
    transform: scale(1);
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
