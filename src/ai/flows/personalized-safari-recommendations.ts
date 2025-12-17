'use server';

/**
 * @fileOverview A personalized safari recommendation AI agent.
 *
 * - getPersonalizedSafariRecommendations - A function that generates personalized safari recommendations.
 * - PersonalizedSafariRecommendationsInput - The input type for the getPersonalizedSafariRecommendations function.
 * - PersonalizedSafariRecommendationsOutput - The return type for the getPersonalizedSafariRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedSafariRecommendationsInputSchema = z.object({
  budget: z.string().describe('The user\u0027s budget for the safari (e.g., \u0027budget\u0027, \u0027mid-range\u0027, \u0027luxury\u0027).'),
  interests: z.string().describe('The user\u0027s interests (e.g., \u0027wildlife photography\u0027, \u0027bird watching\u0027, \u0027cultural experiences\u0027).'),
  travelDates: z.string().describe('The user\u0027s preferred travel dates or time of year (e.g., \u0027June-July\u0027, \u0027October\u0027, \u0027any time\u0027).'),
});
export type PersonalizedSafariRecommendationsInput = z.infer<typeof PersonalizedSafariRecommendationsInputSchema>;

const PersonalizedSafariRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      safariName: z.string().describe('The name of the recommended safari package.'),
      description: z.string().describe('A brief description of the safari package.'),
      duration: z.string().describe('The duration of the safari (e.g., \u00275 days\u0027, \u00277 days\u0027).'),
      price: z.string().describe('The price range of the safari (e.g., \u0027$2000 - $3000\u0027, \u0027$5000+\u0027).'),
      link: z.string().describe('A link to the safari package details page.'),
    })
  ).describe('A list of personalized safari recommendations.'),
});
export type PersonalizedSafariRecommendationsOutput = z.infer<typeof PersonalizedSafariRecommendationsOutputSchema>;

export async function getPersonalizedSafariRecommendations(input: PersonalizedSafariRecommendationsInput): Promise<PersonalizedSafariRecommendationsOutput> {
  return personalizedSafariRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedSafariRecommendationsPrompt',
  input: {schema: PersonalizedSafariRecommendationsInputSchema},
  output: {schema: PersonalizedSafariRecommendationsOutputSchema},
  prompt: `You are an expert safari travel agent specializing in Tanzania safaris. Based on the user's preferences, provide personalized safari recommendations.

User Preferences:
Budget: {{{budget}}}
Interests: {{{interests}}}
Travel Dates: {{{travelDates}}}

Provide a list of safari packages that match the user's preferences. Include the safari name, a brief description, duration, price range, and a link to the safari package details page.
`,
});

const personalizedSafariRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedSafariRecommendationsFlow',
    inputSchema: PersonalizedSafariRecommendationsInputSchema,
    outputSchema: PersonalizedSafariRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
