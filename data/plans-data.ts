import essentialPlan from "./essential-plan";
import growthPlan from "./growth-plan";
import performancePlan from "./performance-plan";

export interface PlanCard {
  emphasized: boolean;
  title: "Essential" | "Growth" | "Performance";
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: Array<string> | undefined;
  featuresPlus: Array<string> | undefined;
  featuresPremium: Array<string> | undefined;
}

const basePlans: Array<PlanCard> = [essentialPlan, growthPlan, performancePlan];

export default basePlans;
