import PageHeader from "@/components/shared/PageHeader";
import DynamicItineraryGenerator from "@/components/ai/DynamicItineraryGenerator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CustomSafariPage() {
  return (
    <div>
      <PageHeader
        title="Design Your Perfect Safari"
        subtitle="Tell us your dreams, and our AI-powered planner will craft a unique itinerary just for you."
        imageId="safari-gallery-1"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Your Safari, Your Way</CardTitle>
                    <CardDescription>Fill out the details below to generate a personalized day-by-day itinerary.</CardDescription>
                </CardHeader>
                <CardContent>
                    <DynamicItineraryGenerator />
                </CardContent>
             </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
