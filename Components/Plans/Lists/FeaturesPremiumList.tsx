import styled from "@emotion/styled";
import { PlanCard } from "../../../data/plans-data";
import InformationIcon from "../../Icons/InformationIcon";
import PlusIcon from "../../Icons/PlusIcon";
import InformationButton from "./InformationButton";

type Features = Pick<PlanCard, "featuresPremium">;

export const paddingLi = "16px";

const IconWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

const List = styled.ul`
  all: unset;
  justify-self: flex-start;
  width: 100%;
  list-style: none;

  /* All Items except the last one */
  .features-premium:not(last-of-type) {
    padding-bottom: ${paddingLi};
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Feature = styled.span``;

const FeaturesPremiumList = ({ featuresPremium }: Features) => {
  if (!featuresPremium) return null;

  return (
    <>
      <IconWrapper>
        <PlusIcon width="10px" />
      </IconWrapper>
      <List>
        {featuresPremium.map((featurePremium, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item className="features-premium" key={`${index}-feature`}>
            <Feature>{featurePremium}</Feature>
            <InformationButton />
          </Item>
        ))}
      </List>
    </>
  );
};

export default FeaturesPremiumList;
