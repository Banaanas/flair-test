import styled from "@emotion/styled";
import Rectangle from "../StyledComponents/Rectangle";
import { PaymentPeriod } from "../../data/plans-data";

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

interface PlanPriceProps {
  price: number;
  paymentPeriod: PaymentPeriod;
}

const PlanPrice = ({ price, paymentPeriod }: PlanPriceProps) => {
  return (
    <Container>
      <Price>{price}</Price>
      <Rectangle width={6} height={48.59} />
      <PeriodContainer>
        {paymentPeriod === "monthly" ? (
          <div>per month</div>
        ) : (
          <div>per year</div>
        )}

        <div>per employee</div>
      </PeriodContainer>
    </Container>
  );
};

export default PlanPrice;
