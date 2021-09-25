import styled from "@emotion/styled";
import CheckIcon from "../../Icons/CheckIcon";
import { PlanCard } from "../../../data/plans-data";
import { paddingLi } from "./FeaturesList";
import InformationIcon from "../../Icons/InformationIcon";
import InformationButton from "./InformationButton";

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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
`;

const Feature = styled.span`
`;

const FeaturesPlusList = ({ featuresPlus }: Features) => {
  if (!featuresPlus) return null;

  return (
    <List>
      {featuresPlus.map((featurePlus, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item className="features-plus" key={`${index}-featurePlus`}>
          <Feature>{featurePlus}</Feature>
          <InformationButton/>
        </Item>
      ))}
    </List>
  );
};

export default FeaturesPlusList;
