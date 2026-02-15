
import { GoogleGenAI, Type } from "@google/genai";
import { UserProfile, PersonalizedPlan } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generatePlan = async (profile: UserProfile): Promise<PersonalizedPlan> => {
  const prompt = `Generate a detailed, holistic diet and life plan for a ${profile.age}-year-old ${profile.gender} who weighs ${profile.weight}kg, is ${profile.height}cm tall, has a ${profile.activityLevel} lifestyle, and goals focused on ${profile.goal}. Dietary restrictions: ${profile.dietaryRestrictions.join(', ') || 'None'}.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          dailySummary: { type: Type.STRING, description: "A high-level overview of the plan." },
          macroTargets: {
            type: Type.OBJECT,
            properties: {
              calories: { type: Type.NUMBER },
              protein: { type: Type.NUMBER },
              carbs: { type: Type.NUMBER },
              fats: { type: Type.NUMBER }
            },
            required: ["calories", "protein", "carbs", "fats"]
          },
          meals: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                time: { type: Type.STRING },
                title: { type: Type.STRING },
                ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
                calories: { type: Type.NUMBER },
                protein: { type: Type.NUMBER },
                carbs: { type: Type.NUMBER },
                fats: { type: Type.NUMBER }
              },
              required: ["time", "title", "ingredients", "calories", "protein", "carbs", "fats"]
            }
          },
          routines: {
            type: Type.OBJECT,
            properties: {
              morning: { type: Type.ARRAY, items: { type: Type.STRING } },
              evening: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["morning", "evening"]
          },
          growthHabits: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                frequency: { type: Type.STRING },
                benefit: { type: Type.STRING }
              },
              required: ["title", "frequency", "benefit"]
            }
          }
        },
        required: ["dailySummary", "macroTargets", "meals", "routines", "growthHabits"]
      }
    }
  });

  try {
    const text = response.text;
    if (!text) throw new Error("Empty response from AI");
    return JSON.parse(text) as PersonalizedPlan;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw error;
  }
};
