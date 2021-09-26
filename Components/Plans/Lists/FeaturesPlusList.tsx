import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { PlanCard } from "../../../data/plans-data";
import { paddingLi } from "./FeaturesList";
import InformationButton from "./InformationButton";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";

type Features = Pick<PlanCard, "featuresPlus">;

const List = styled.ul`
  all: unset;
  justify-self: flex-start;
  width: 100%;
  list-style: none;

  /* All Items except the last one */
  .features-plus:not(last-of-type) {
    padding-bottom: ${paddingLi};
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const Feature = styled.span``;

const FeaturesPlusList = ({ featuresPlus }: Features) => {
  const [isDisplayed, setIsDisplayed] = useState<false | number>(false);
  const ref = useRef(null);

  const handleToggle = (index: number) => {
    setIsDisplayed(index);
  };

  const handleClickOutside = () => {
    setIsDisplayed(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  if (!featuresPlus) return null;

  return (
    <List>
      {featuresPlus.map((featurePlus, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item
          className="features-plus"
          key={`${index}-featurePlus`}
          onClick={() => handleToggle(index)}
        >
          <Feature>{featurePlus.title}</Feature>
          {isDisplayed === index ? (
            <DetailsBubble refBubble={ref} feature={featurePlus} />
          ) : null}

          <InformationButton />
        </Item>
      ))}
    </List>
  );
};

export default FeaturesPlusList;
