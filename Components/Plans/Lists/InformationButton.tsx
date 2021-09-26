import styled from "@emotion/styled";
import InformationIcon from "../../Icons/InformationIcon";

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

interface InformationButtonProps {
  handleToggle?: () => void;
}

const InformationButton = ({ handleToggle }: InformationButtonProps) => {
  return (
    <Button onClick={handleToggle}>
      <InformationIcon width="24px" />
    </Button>
  );
};

export default InformationButton;
