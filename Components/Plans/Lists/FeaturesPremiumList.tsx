import React, { useRef, useState } from "react";
import { PlanCard } from "../../../data/plans-data";
import PlusIcon from "../../Icons/PlusIcon";
import InformationButton from "./InformationButton";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";
import { IconWrapper, Item, List } from "../../StyledComponents/StyledList";

type Features = Pick<PlanCard, "featuresPremium">;

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
            bold
          >
            <span>{featurePremium.title}</span>
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
