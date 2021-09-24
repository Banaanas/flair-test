interface MonthlyPrices {
  essentialPlan: number;
  growthPlan: number;
  performance: number;
}

const monthlyPrices: MonthlyPrices = {
  essentialPlan: 8,
  growthPlan: 14,
  performance: 20,
};

const GrowthCard = {
  emphasized: true,
  title: "Growth",
  description:
    "Understand the true pulse of your organization with regular Check-ins and guided 1-on-1s, and show meaningful appreciation when it matters most using High Fives.\n",
  monthlyPrice: monthlyPrices.growthPlan,
  yearlyPrice: monthlyPrices.growthPlan * 2,
  features: ["Core HR", "Payroll", "Employee HUB"],
  featuresPlus: ["Performance management", "Shift planning"],
};

export default GrowthCard;
