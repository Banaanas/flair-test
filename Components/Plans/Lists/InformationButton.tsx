import styled from "@emotion/styled";
import InformationIcon from "../../Icons/InformationIcon";

const Button = styled.button`
  all: unset;
  cursor: pointer;
`;

const InformationButton = () => {
  return (
    <Button>
      <InformationIcon width="24px" />
    </Button>
  );
};

export default InformationButton;
