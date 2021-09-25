import styled from "@emotion/styled";
import Rectangle from "../StyledComponents/Rectangle";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Price = styled.div`
  font-size: 45px;
`;

const PeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
`;

const PlanPrice = ({ price }: { price: number }) => {
  return (
    <Container>
      <Price>{price}</Price>
      <Rectangle width={6} height={48.59} />
      <PeriodContainer>
        <div>per month</div>
        <div>per employee</div>
      </PeriodContainer>
    </Container>
  );
};

export default PlanPrice;
