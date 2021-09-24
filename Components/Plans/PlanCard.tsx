import styled from "@emotion/styled";
import { PlanCard as PlanCarProps } from "../../data/plans-data";

const Card = styled.div`
  width: 180px;
  min-height: 690px;
  min-width: 389px;
  padding: 42px;
  background: white;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 26px;
  color: #1f2643;
`;

const Description = styled.div`
  color: #7a7e92;
  line-height: 28px;
`;

const StyledHR = styled.hr`
  background: #cfd1e3;
`;

const Button = styled.button`
  width: 100%;
  color: white;
  font-size: 16px;
  background: #1388c9;
  border-radius: 97px;
`;

const PlanCard = ({ title, description, monthlyPrice }: PlanCarProps) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <div>{monthlyPrice}</div>
      <StyledHR />
      <Button>Select Plan</Button>
    </Card>
  );
};

export default PlanCard;
