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
  featuresPlus: [
    {
      title: "Core HR",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
    {
      title: "Payroll",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
    {
      title: "Recruiting",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
    {
      title: "Employee HUB",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
  ],
  featuresPlusMore: undefined,
  featuresPremium: [
    {
      title: "Performance management",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
    {
      title: "Shift planning",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
  ],
};

export default growthPlan;
