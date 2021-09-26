import styled from "@emotion/styled";
import { css } from "@emotion/react";

const cardIndex0 = css`
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
`;

const cardIndex1 = css`
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
`;

const cardIndex2 = css`
  display: none;
`;

const StyledCircle = styled.div<{ cardIndex: number }>`
  position: absolute;

  z-index: -1;
  width: 90px;
  height: 90px;
  background: #eff1f5;
  border-radius: 50%;

  ${({ cardIndex }) => (cardIndex === 0 ? cardIndex0 : null)}
  ${({ cardIndex }) => (cardIndex === 1 ? cardIndex1 : null)}
  ${({ cardIndex }) => (cardIndex === 2 ? cardIndex2 : null)}
`;

export default StyledCircle;
