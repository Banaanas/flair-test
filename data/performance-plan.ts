import { PlanCard } from "./plans-data";
import monthlyPrices from "./monthly-prices";

const performancePlan: PlanCard = {
  emphasized: false,
  title: "Performance",
  description:
    "Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.\n",
  monthlyPrice: monthlyPrices.performance,
  yearlyPrice: monthlyPrices.performance * 2,
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
  featuresPlusMore: [
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

  featuresPremium: [
    {
      title: "Integrations",
      description: "Minimize HR headaches so you can get back to business.\n",
      list: [
        "Hiring & Onboarding",
        "Employee database",
        "Document management",
        "Reporting",
      ],
    },
    {
      title: "Compensation Management",
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

export default performancePlan;
