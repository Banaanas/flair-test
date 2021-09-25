import styled from "@emotion/styled";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledSection from "../Components/StyledComponents/StyledSection";
import PlansButton from "../Components/PlansButton";
import basePlans from "../data/plans-data";
import PlanCard from "../Components/Plans/PlanCard";
import Rectangle from "../Components/StyledComponents/Rectangle";
import PlansContainer from "../Components/StyledComponents/StyledPlansContainer";

const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  padding: 47px 0 24px;
`;

const Home = () => {
  return (
    <StyledPageMain>
      <StyledSection>
        <SectionTitle>Base plans</SectionTitle>
        <ButtonsContainer>
          <PlansButton label="Monthly" />
          <Rectangle width={3.52} height={28.51} />
          <PlansButton label="Yearly" />
        </ButtonsContainer>

        <PlansContainer>
          {basePlans.map((card) => (
            <PlanCard key={card.title} {...card} />
          ))}
        </PlansContainer>
      </StyledSection>
    </StyledPageMain>
  );
};

export default Home;
