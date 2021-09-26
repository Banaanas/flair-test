import styled from "@emotion/styled";
import { PlanCard as PlanCarProps } from "../../data/plans-data";
import PlanPrice from "./PlanPrice";
import FeaturesList, { paddingLi } from "./Lists/FeaturesList";
import FeaturesPlusList from "./Lists/FeaturesPlusList";
import FeaturesPremiumList from "./Lists/FeaturesPremiumList";
import FeaturesPlusMoreList from "./Lists/FeaturesPlusMoreList";

export const Card = styled.div<{ emphasized: boolean }>`
  width: 180px;
  min-width: 389px;
  min-height: 690px;
  margin: 16px;
  padding: 42px;
  padding-top: 23px;
  background: white;
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
  margin-top: calc(59px - ${paddingLi});
  color: white;
  font-size: 16px;
  text-align: center;
  background: #1388c9;
  border-radius: 97px;
  cursor: pointer;
`;

const PlanCard = ({
  title,
  description,
  monthlyPrice,
  features,
  featuresPlus,
  featuresPlusMore,
  featuresPremium,
  emphasized,
}: PlanCarProps) => {
  return (
    <Card emphasized={emphasized}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <PlanPrice price={monthlyPrice} />
      <StyledHR />

      {features ? <FeaturesList features={features} /> : null}

      {featuresPlus ? <FeaturesPlusList featuresPlus={featuresPlus} /> : null}

      {featuresPlusMore ? (
        <FeaturesPlusMoreList featuresPlusMore={featuresPlusMore} />
      ) : null}

      {featuresPremium ? (
        <FeaturesPremiumList featuresPremium={featuresPremium} />
      ) : null}

      <Button>Select Plan</Button>
    </Card>
  );
};

export default PlanCard;
