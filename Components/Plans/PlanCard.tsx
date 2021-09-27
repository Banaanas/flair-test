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
import appTheme from "../../styles/appTheme";

export const Card = styled.div<{
  emphasized: boolean;
  paymentPeriod: PaymentPeriod;
}>`
  position: relative;
  width: 320px;
  min-height: 690px;
  margin: 16px;
  padding: 42px;
  padding-top: 23px;
  background: ${({ paymentPeriod }) =>
    paymentPeriod === "monthly" ? appTheme.colors.white : "#dbe7fb"};
  border: ${({ emphasized }) =>
    emphasized ? `4px solid ${appTheme.colors.primary.default}` : "none"};
  border-radius: 4px;

  @media ${appTheme.queries.tabletAndUp} {
    width: 390px;
  }
`;

const Title = styled.h3`
  margin: 0;
  color: #1f2643;
  font-size: 26px;
`;

const Description = styled.div`
  padding: 28px 0;
  color: ${appTheme.colors.secondary.darker};
  font-weight: normal;
  line-height: 28px;
  text-align: left;
`;

const StyledHR = styled.hr`
  height: 1px;
  margin: 40px 0;
  background: ${appTheme.colors.secondary.dark};
  border: none;
  outline: none;
`;

const Button = styled.button`
  all: unset;
  width: 100%;
  height: 44px;
  margin-top: calc(59px - ${marginLi});
  color: ${appTheme.colors.white};
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  background: ${appTheme.colors.primary.dark};
  border-radius: 97px;
  cursor: pointer;
  transition: transform, background, 250ms ease;

  &:hover {
    background: #203c86;
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
