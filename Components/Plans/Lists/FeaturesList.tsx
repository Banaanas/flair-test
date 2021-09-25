import styled from "@emotion/styled";
import CheckIcon from "../../Icons/CheckIcon";
import { PlanCard } from "../../../data/plans-data";

type Features = Pick<PlanCard, "features">;

export const paddingLi = "16px";

const List = styled.ul`
  all: unset;
  justify-self: flex-start;
  width: 100%;
  list-style: none;

  /* All Items except the last one */
  .features:not(last-of-type) {
    padding-bottom: ${paddingLi};
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

const FeaturesList = ({ features }: Features) => {
  if (!features) return null;

  return (
    <List>
      {features.map((feature, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item className="features" key={`${index}-feature`}>
          <CheckIcon width="24px" />
          <Feature>{feature}</Feature>
        </Item>
      ))}
    </List>
  );
};

export default FeaturesList;
