import styled from "@emotion/styled";
import CheckIcon from "../../Icons/CheckIcon";
import { PlanCard } from "../../../data/plans-data";

type Features = Pick<PlanCard, "features">;

export const marginLi = "16px";

const List = styled.ul<{ secondary: boolean | undefined }>`
  all: unset;
  justify-self: flex-start;
  width: 100%;
  list-style: none;

  /* All Items except the last one */
  /* Margin is different for Bubble List */

  .features:not(last-of-type) {
    margin-bottom: ${({ secondary }) =>
      !secondary ? marginLi : `calc(${marginLi}/2)`};
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Feature = styled.span`
  margin-left: 12px;
`;

interface InterfaceFeaturesList {
  features: Array<Features> | Array<string>;
  secondary?: boolean;
}

/* This component is used both for normal Features List and details List */
const FeaturesList = ({ features, secondary }: InterfaceFeaturesList) => {
  if (!features) return null;

  return (
    <List secondary={secondary}>
      {features.map((feature, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item className="features" key={`${index}-feature`}>
          <CheckIcon secondary={secondary} width="24px" />
          <Feature>{feature}</Feature>
        </Item>
      ))}
    </List>
  );
};

export default FeaturesList;
