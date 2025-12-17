"use server";

import { z } from "zod";
import {
  getPersonalizedSafariRecommendations,
  PersonalizedSafariRecommendationsInput,
} from "@/ai/flows/personalized-safari-recommendations";
import {
  generateItinerary,
  GenerateItineraryInput,
} from "@/ai/flows/dynamic-itinerary-generation";

const recommendationSchema = z.object({
  budget: z.string().min(1, "Budget is required."),
  interests: z.string().min(1, "Interests are required."),
  travelDates: z.string().min(1, "Travel dates are required."),
});

export async function getRecommendationsAction(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validation = recommendationSchema.safeParse(rawData);

  if (!validation.success) {
    return { error: validation.error.format() };
  }

  try {
    const result = await getPersonalizedSafariRecommendations(
      validation.data as PersonalizedSafariRecommendationsInput
    );
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate recommendations. Please try again." };
  }
}

const itinerarySchema = z.object({
  destinations: z.string().min(1),
  duration: z.coerce.number().min(1),
  interests: z.string().min(1),
  budget: z.string().min(1),
  travelStyle: z.string().min(1),
  accommodationPreferences: z.string().min(1),
  groupSize: z.coerce.number().min(1),
  specialRequirements: z.string().optional(),
});

export async function generateItineraryAction(formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validation = itinerarySchema.safeParse(rawData);

  if (!validation.success) {
    return { error: validation.error.format() };
  }
  
  try {
    const result = await generateItinerary(
      validation.data as GenerateItineraryInput
    );
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate itinerary. Please try again." };
  }
}
