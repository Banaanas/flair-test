import styled from "@emotion/styled";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledSection from "../Components/StyledComponents/StyledSection";
import PlansButton from "../Components/PlansButton";
import SVGRectangle from "../Components/Rectangle";

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const Home = () => {
  return (
    <StyledPageMain>
      <StyledSection>
        <SectionTitle>Base plans</SectionTitle>
        <ButtonsContainer>
          <PlansButton label="Monthly" />
          <SVGRectangle color="#EEF0F6" />
          <PlansButton label="Yearly" />
        </ButtonsContainer>
      </StyledSection>
    </StyledPageMain>
  );
};

export default Home;
