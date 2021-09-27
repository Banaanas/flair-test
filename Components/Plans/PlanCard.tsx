import styled from "@emotion/styled";
import {
  PaymentPeriod,
  PlanCard as PlanCarInterface,
} from "../../data/plans-data";
import PlanPrice from "./PlanPrice";
import FeaturesList, { marginLi } from "./Lists/FeaturesList";
import FeaturesPlusList from "./Lists/FeaturesPlusList";
import FeaturesPremiumList from "./Lists/FeaturesPremiumList";
import FeaturesPlusMoreList from "./Lists/FeaturesPlusMoreList";
import StyledCircle from "../StyledComponents/StyledCircle";

export const Card = styled.div<{
  emphasized: boolean;
  paymentPeriod: PaymentPeriod;
}>`
  position: relative;
  width: 180px;
  min-width: 389px;
  min-height: 690px;
  margin: 16px;
  padding: 42px;
  padding-top: 23px;
  background: ${({ paymentPeriod }) =>
    paymentPeriod === "monthly" ? "white" : "#7171d8"};
  border: ${({ emphasized }) => (emphasized ? "4px solid #95BCF2" : undefined)};
  border-radius: 4px;
`;

const Title = styled.h3`
  margin: 0;
  color: #1f2643;
  font-size: 26px;
`;

const Description = styled.div`
  color: #7a7e92;
  line-height: 28px;
  padding: 28px 0;
  text-align: left;
`;

const StyledHR = styled.hr`
  margin: 40px 0;
  background: #cfd1e3;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 44px;
  margin-top: calc(59px - ${marginLi});
  color: white;
  font-size: 16px;
  text-align: center;
  background: #1388c9;
  border-radius: 97px;
  cursor: pointer;
  transition: transform, background, 250ms ease;

  &:hover {
    background: aqua;
    transform: scale(1.03);
  }
`;

interface PlanCardProps extends PlanCarInterface {
  paymentPeriod: PaymentPeriod;
  cardIndex: number;
}

const PlanCard = ({
  paymentPeriod,
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  features,
  featuresPlus,
  featuresPlusMore,
  featuresPremium,
  emphasized,
  cardIndex,
}: PlanCardProps) => {
  return (
    <Card emphasized={emphasized} paymentPeriod={paymentPeriod}>
      <StyledCircle cardIndex={cardIndex} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      {paymentPeriod === "monthly" ? (
        <PlanPrice paymentPeriod={paymentPeriod} price={monthlyPrice} />
      ) : (
        <PlanPrice paymentPeriod={paymentPeriod} price={yearlyPrice} />
      )}
      <StyledHR />

      {/* Simple Features */}
      {features ? <FeaturesList features={features} /> : null}

      {/* Features Plus */}
      {featuresPlus ? <FeaturesPlusList featuresPlus={featuresPlus} /> : null}

      {/* Features Plus More */}
      {featuresPlusMore ? (
        <FeaturesPlusMoreList featuresPlusMore={featuresPlusMore} />
      ) : null}

      {/* Features Premium */}
      {featuresPremium ? (
        <FeaturesPremiumList featuresPremium={featuresPremium} />
      ) : null}
      <Button>Select Plan</Button>
    </Card>
  );
};

export default PlanCard;
