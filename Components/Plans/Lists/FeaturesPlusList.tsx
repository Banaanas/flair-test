import React, { useRef, useState } from "react";
import { PlanCard } from "../../../data/plans-data";
import InformationButton from "./InformationButton";
import useOnClickOutside from "../../../custom-hooks/useOnClickOutside";
import DetailsBubble from "./DetailsBubble";
import { Item, List } from "../../StyledComponents/StyledList";

type Features = Pick<PlanCard, "featuresPlus">;

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
          <span>{featurePlus.title}</span>
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
