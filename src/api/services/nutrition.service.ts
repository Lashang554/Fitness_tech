import { apiClient } from '../client';

export type NutritionItem = {
  id: string;
  name: string;
  calories: number;
};

export const nutritionService = {
  getNutritionItems() {
    return apiClient<NutritionItem[]>('/nutrition');
  },
};
