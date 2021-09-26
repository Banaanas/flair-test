import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { PlanCard } from "../../../data/plans-data";
import PlusIcon from "../../Icons/PlusIcon";
import InformationButton from "./InformationButton";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";
import appTheme from "../../../styles/appTheme";

type Features = Pick<PlanCard, "featuresPlusMore">;

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
  .features-plus-more:not(last-of-type) {
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

const FeaturesPlusMoreList = ({ featuresPlusMore }: Features) => {
  const [isDisplayed, setIsDisplayed] = useState<false | number>(false);
  const ref = useRef(null);

  const handleToggle = (index: number) => {
    setIsDisplayed(index);
  };

  const handleClickOutside = () => {
    setIsDisplayed(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  if (!featuresPlusMore) return null;

  return (
    <>
      <IconWrapper>
        <PlusIcon width="10px" />
      </IconWrapper>
      <List>
        {featuresPlusMore.map((featurePlusMore, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Item
            className="features-plus-more"
            key={`${index}-feature-plus-more`}
            onClick={() => handleToggle(index)}
          >
            <Feature>{featurePlusMore.title}</Feature>
            {isDisplayed === index ? (
              <DetailsBubble refBubble={ref} feature={featurePlusMore} />
            ) : null}
            <InformationButton />
          </Item>
        ))}
      </List>
    </>
  );
};

export default FeaturesPlusMoreList;
