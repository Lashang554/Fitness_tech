import type { NutritionItem } from '../api/services/nutrition.service';

export type NutritionState = {
  items: NutritionItem[];
};

export const initialNutritionState: NutritionState = {
  items: [],
};
