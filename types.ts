
export enum ActivityLevel {
  SEDENTARY = 'Sedentary',
  LIGHT = 'Lightly Active',
  MODERATE = 'Moderately Active',
  VERY = 'Very Active',
  EXTRA = 'Extra Active'
}

export enum Goal {
  WEIGHT_LOSS = 'Weight Loss',
  MUSCLE_GAIN = 'Muscle Gain',
  MAINTENANCE = 'Maintenance',
  ENERGY = 'Energy Focus',
  MINDFULNESS = 'Mindful Eating'
}

export interface UserProfile {
  name: string;
  age: number;
  weight: number; // in kg
  height: number; // in cm
  gender: string;
  activityLevel: ActivityLevel;
  goal: Goal;
  dietaryRestrictions: string[];
}

export interface Meal {
  time: string;
  title: string;
  ingredients: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface Habit {
  title: string;
  frequency: string;
  benefit: string;
}

export interface PersonalizedPlan {
  dailySummary: string;
  macroTargets: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  meals: Meal[];
  routines: {
    morning: string[];
    evening: string[];
  };
  growthHabits: Habit[];
}
