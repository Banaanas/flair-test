import React from "react";
import styled from "@emotion/styled";
import FeaturesList from "./FeaturesList";
import {
  FeaturePlus,
  FeaturePlusMore,
  FeaturePremium,
} from "../../../data/plans-data";

const BubbleContainer = styled.div`
  position: absolute;
  top: 440%;
  left: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 130%;
  padding: 25px 25px 15px 25px;
  color: white;
  background: #203c86;
  border-radius: 5px;
  transform: translate(-50%, -50%);

  &::before {
    position: absolute;
    top: -12px;
    right: 70px;
    width: 0;
    height: 0;
    border-right: 13px solid transparent;
    border-bottom: 23px solid #203c86;
    border-left: 13px solid transparent;
    border-radius: 4px;
    content: "";
  }
`;

const DetailsTitle = styled.h4`
  all: unset;
  font-size: 20px;
`;

const DetailsDescription = styled.div`
  margin: 16px 0;
  font-size: 15px;
  line-height: 27px;
`;

const DetailsLink = styled.a`
  margin-top: 16px;
  color: #95bcf2;
  font-size: 15px;
  text-transform: uppercase;
`;

interface BubbleProps {
  refBubble: React.MutableRefObject<null>;
  feature: FeaturePlus | FeaturePlusMore | FeaturePremium;
}

const DetailsBubble = ({ refBubble, feature }: BubbleProps) => {
  return (
    <BubbleContainer ref={refBubble}>
      <DetailsTitle>{feature.title}</DetailsTitle>
      <DetailsDescription>{feature.description}</DetailsDescription>
      <FeaturesList features={feature.list} secondary />
      <DetailsLink>All Features</DetailsLink>
    </BubbleContainer>
  );
};

export default DetailsBubble;
