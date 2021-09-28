import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import FeaturesList from "./FeaturesList";
import {
  FeaturePlus,
  FeaturePlusMore,
  FeaturePremium,
} from "../../../data/plans-data";
import appTheme from "../../../styles/appTheme";

const BubbleContainer = styled.div<{ isMounted: boolean }>`
  position: absolute;
  top: 640%;
  left: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 25px 15px 25px;
  color: ${appTheme.colors.white};
  background: ${appTheme.colors.primary.darker};
  border-radius: 5px;
  transform: translate(-50%, -50%);
  opacity: ${({ isMounted }) => (isMounted ? 1 : 0)};
  transition: opacity 250ms ease-out;

  @media ${appTheme.queries.tabletAndUp} {
    width: 130%;
  }

  &::before {
    position: absolute;
    top: -12px;
    right: 60px;
    width: 0;
    height: 0;
    border-right: 13px solid transparent;
    border-bottom: 23px solid #203c86;
    border-left: 13px solid transparent;
    border-radius: 4px;
    content: "";

    @media ${appTheme.queries.tabletAndUp} {
      right: 70px;
    }
  }
`;

const DetailsTitle = styled.h4`
  all: unset;
  font-size: 20px;
`;

const DetailsDescription = styled.div`
  margin: 16px 0;
  font-weight: normal;
  font-size: 15px;
  line-height: 27px;
`;

const DetailsLink = styled.a`
  margin-top: 16px;
  color: ${appTheme.colors.primary.default};
  font-size: 15px;
  text-transform: uppercase;
`;

interface BubbleProps {
  refBubble: React.MutableRefObject<null>;
  feature: FeaturePlus | FeaturePlusMore | FeaturePremium;
}

const DetailsBubble = ({ refBubble, feature }: BubbleProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <BubbleContainer ref={refBubble} isMounted={isMounted}>
      <DetailsTitle>{feature.title}</DetailsTitle>
      <DetailsDescription>{feature.description}</DetailsDescription>
      <FeaturesList features={feature.list} secondary />
      <DetailsLink>All Features</DetailsLink>
    </BubbleContainer>
  );
};

export default DetailsBubble;
