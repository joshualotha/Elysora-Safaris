'use server';
/**
 * @fileOverview A dynamic safari itinerary generation AI agent.
 *
 * - generateItinerary - A function that handles the safari itinerary generation process.
 * - GenerateItineraryInput - The input type for the generateItinerary function.
 * - GenerateItineraryOutput - The return type for the generateItinerary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateItineraryInputSchema = z.object({
  destinations: z
    .string()
    .describe('A comma separated list of destinations to include in the safari itinerary.'),
  duration: z.number().describe('The duration of the safari in days.'),
  interests: z
    .string()
    .describe(
      'A comma separated list of interests for the safari, such as wildlife, photography, culture, etc.'
    ),
  budget: z.string().describe('The budget for the safari (e.g., budget, mid-range, luxury).'),
  travelStyle: z.string().describe('The preferred travel style (e.g., lodge-based, camping, etc.).'),
  accommodationPreferences: z
    .string()
    .describe('Preferences for accommodation (e.g., luxury lodges, tented camps, budget camping).'),
  groupSize: z.number().describe('The number of people in the group.'),
  specialRequirements: z
    .string()
    .describe('Any special requirements or requests (e.g., dietary, accessibility).'),
});
export type GenerateItineraryInput = z.infer<typeof GenerateItineraryInputSchema>;

const GenerateItineraryOutputSchema = z.object({
  itinerary: z.string().describe('A detailed safari itinerary with day-by-day breakdowns.'),
});
export type GenerateItineraryOutput = z.infer<typeof GenerateItineraryOutputSchema>;

export async function generateItinerary(
  input: GenerateItineraryInput
): Promise<GenerateItineraryOutput> {
  return generateItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateItineraryPrompt',
  input: {schema: GenerateItineraryInputSchema},
  output: {schema: GenerateItineraryOutputSchema},
  prompt: `You are an expert safari planner specializing in creating detailed and personalized safari itineraries in Tanzania.

You will use the provided information to generate a day-by-day safari itinerary, including descriptions of activities, meals, and accommodation details, while also considering travel time between locations.

Destinations: {{{destinations}}}
Duration: {{{duration}}} days
Interests: {{{interests}}}
Budget: {{{budget}}}
Travel Style: {{{travelStyle}}}
Accommodation Preferences: {{{accommodationPreferences}}}
Group Size: {{{groupSize}}}
Special Requirements: {{{specialRequirements}}}

Generate a detailed safari itinerary:
`, // Modified prompt to include the new fields.
});

const generateItineraryFlow = ai.defineFlow(
  {
    name: 'generateItineraryFlow',
    inputSchema: GenerateItineraryInputSchema,
    outputSchema: GenerateItineraryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
