import essentialPlan from "./essential-plan";
import growthPlan from "./growth-plan";
import performancePlan from "./performance-plan";

export interface FeaturePlus {
  title: string;
  description: string;
  list: Array<string>;
}

export type FeaturePlusMore = FeaturePlus;
export type FeaturePremium = FeaturePlus;

export interface PlanCard {
  emphasized: boolean;
  title: "Essential" | "Growth" | "Performance";
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: Array<string> | undefined;
  featuresPlus: Array<FeaturePlus> | undefined;
  featuresPlusMore: Array<FeaturePlus> | undefined;
  featuresPremium: Array<FeaturePremium> | undefined;
}

const basePlans: Array<PlanCard> = [essentialPlan, growthPlan, performancePlan];

export default basePlans;
