import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { PlanCard } from "../../../data/plans-data";
import PlusIcon from "../../Icons/PlusIcon";
import InformationButton from "./InformationButton";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";
import appTheme from "../../../styles/appTheme";
import { IconWrapper, Item, List } from "../../StyledComponents/StyledList";

type Features = Pick<PlanCard, "featuresPlusMore">;

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
            <span>{featurePlusMore.title}</span>
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
