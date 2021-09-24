import styled from "@emotion/styled";

const Button = styled.button`
  all: unset;
  font-size: 15px;
`;

const PlansButton = ({ label }: { label: string }) => {
  return <Button>{label}</Button>;
};

export default PlansButton;
