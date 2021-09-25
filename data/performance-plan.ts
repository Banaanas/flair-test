import { PlanCard } from "./plans-data";
import monthlyPrices from "./monthly-prices";

const performancePlan: PlanCard = {
  emphasized: true,
  title: "Performance",
  description:
    "Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.\n",
  monthlyPrice: monthlyPrices.performance,
  yearlyPrice: monthlyPrices.performance * 2,
  features: undefined,
  featuresPlus: ["Core HR", "Recruiting", "Payroll", "Employee HUB"],
  featuresPremium: ["Integrations", "Compensation Management"],
};

export default performancePlan;
