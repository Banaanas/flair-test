import { PlanCard } from "./plans-data";
import monthlyPrices from "./monthly-prices";

const growthPlan: PlanCard = {
  emphasized: true,
  title: "Growth",
  description:
    "Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.\n",
  monthlyPrice: monthlyPrices.growthPlan,
  yearlyPrice: monthlyPrices.growthPlan * 2,
  features: undefined,
  featuresPlus: ["Core HR", "Recruiting", "Payroll", "Employee HUB"],
  featuresPremium: ["Performance management", "Shift planning"],
};

export default growthPlan;
