import styled from "@emotion/styled";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StyledPageMain from "../Components/StyledComponents/StyledPageMain";
import StyledSection from "../Components/StyledComponents/StyledSection";
import basePlans, { PaymentPeriod } from "../data/plans-data";
import PlanCard from "../Components/Plans/PlanCard";
import Rectangle from "../Components/StyledComponents/Rectangle";
import PlansContainer from "../Components/StyledComponents/StyledPlansContainer";
import PlansButton from "../Components/Plans/PlansButton";

const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 40px;
`;

const PlanWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  padding: 47px 0 24px;
`;

const Home = () => {
  const [displayedPlan, setDisplayedPlan] = useState<PaymentPeriod>("monthly");

  const handleToggleMonthlyPlan = () => {
    setDisplayedPlan("monthly");
  };

  const handleToggleYearlyPlan = () => {
    setDisplayedPlan("yearly");
  };

  console.log("hola");
  return (
    <StyledPageMain>
      <StyledSection>
        <SectionTitle>Base plans</SectionTitle>
        <ButtonsContainer>
          <PlansButton
            label="Monthly"
            selected={displayedPlan === "monthly"}
            onClick={handleToggleMonthlyPlan}
          />
          <Rectangle width={3.52} height={28.51} />
          <PlansButton
            label="Yearly"
            selected={displayedPlan === "yearly"}
            onClick={handleToggleYearlyPlan}
          />
        </ButtonsContainer>

        <PlansContainer>
          <AnimatePresence initial={false} exitBeforeEnter>
            {displayedPlan === "monthly" ? (
              <PlanWrapper /* AnimatePresence Key */
                key="monthly"
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
              >
                {basePlans.map((card, index) => (
                  <PlanCard
                    key={card.title}
                    paymentPeriod="monthly"
                    cardIndex={index}
                    {...card}
                  />
                ))}
              </PlanWrapper>
            ) : null}
            {displayedPlan === "yearly" ? (
              <PlanWrapper
                key="yearly" /* AnimatePresence Key */
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
              >
                {basePlans.map((card, index) => (
                  <PlanCard
                    key={card.title}
                    paymentPeriod="yearly"
                    cardIndex={index}
                    {...card}
                  />
                ))}
              </PlanWrapper>
            ) : null}
          </AnimatePresence>
        </PlansContainer>
      </StyledSection>
    </StyledPageMain>
  );
};

export default Home;
