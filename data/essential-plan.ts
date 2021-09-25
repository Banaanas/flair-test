import { PlanCard } from "./plans-data";
import monthlyPrices from "./monthly-prices";

const essentialPlan: PlanCard = {
  emphasized: false,
  title: "Essential",
  description:
    "Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.",
  monthlyPrice: monthlyPrices.essentialPlan,
  yearlyPrice: monthlyPrices.essentialPlan * 2,
  features: ["Core HR", "Recruiting", "Payroll", "Employee HUB"],
  featuresPlus: undefined,
  featuresPremium: undefined,
};

export default essentialPlan;
