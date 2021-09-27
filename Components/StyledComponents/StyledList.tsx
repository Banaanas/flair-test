import styled from "@emotion/styled";
import appTheme from "../../styles/appTheme";

const IconWrapper = styled.div`
  width: 100%;
  margin: 8px 0;
`;

const List = styled.ul`
  all: unset;
  justify-self: flex-start;
  width: 100%;
  list-style: none;

  /* All Items except the last one */
  .features-plus:not(last-of-type),
  .features-plus-more:not(last-of-type),
  .features-premium:not(last-of-type) {
    margin-bottom: ${appTheme.marginListItem};
  }
`;

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  &:hover {
    color: #203c86;

    * {
      opacity: 1;
    }
  }
`;

export { IconWrapper, Item, List };
