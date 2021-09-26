import styled from "@emotion/styled";
import { PlanCard } from "../../../data/plans-data";
import PlusIcon from "../../Icons/PlusIcon";
import InformationButton from "./InformationButton";
import appTheme from "../../../styles/appTheme";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";

type Features = Pick<PlanCard, "featuresPremium">;

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
    padding-bottom: ${appTheme.paddingList};
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Feature = styled.span``;

const FeaturesPremiumList = ({ featuresPremium }: Features) => {
  const [isDisplayed, setIsDisplayed] = useState<false | number>(false);
  const ref = useRef(null);

  const handleToggle = (index: number) => {
    setIsDisplayed(index);
  };

  const handleClickOutside = () => {
    setIsDisplayed(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  if (!featuresPremium) return null;

  return (
    <>
      <IconWrapper>
        <PlusIcon width="10px" />
      </IconWrapper>
      <List>
        {featuresPremium.map((featurePremium, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item
            className="features-premium"
            key={`${index}-feature`}
            onClick={() => handleToggle(index)}
          >
            <Feature>{featurePremium.title}</Feature>
            {isDisplayed === index ? (
              <DetailsBubble refBubble={ref} feature={featurePremium} />
            ) : null}
            <InformationButton />
          </Item>
        ))}
      </List>
    </>
  );
};

export default FeaturesPremiumList;
