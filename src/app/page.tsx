import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { safariPackages, whyChooseUs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import PersonalizedRecommendations from "@/components/ai/PersonalizedRecommendations";
import { ArrowDown, ArrowRight, MoveRight } from "lucide-react";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home-luxury');
  const featuredPackages = safariPackages.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-shadow max-w-4xl">
              Discover the Soul of Tanzania
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 mb-8">
              Authentic African safaris with expert local guides. Unforgettable moments await.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/safaris">Explore Safaris</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-charcoal font-semibold">
                <Link href="/custom-safari">Plan Your Trip <MoveRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <ArrowDown className="h-8 w-8 text-white/70 animate-bounce" />
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">
              An Unmatched Safari Experience
            </h2>
            <p className="text-lg text-muted-foreground">We blend luxury, adventure, and authentic local knowledge to create journeys that go beyond the ordinary.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <IconText
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="featured-packages" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">
              Our Signature Safaris
            </h2>
             <p className="text-lg text-muted-foreground">Each itinerary is meticulously crafted to showcase the very best of Tanzania's wildlife and landscapes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <SafariCard key={pkg.slug} safari={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/safaris">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="ai-planner" className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto">
             <Card className="shadow-lg">
                <CardContent className="p-8 md:p-12">
                   <div className="text-center max-w-2xl mx-auto">
                      <h2 className="mb-4">
                        Let's Plan Your Dream Safari
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Our AI-powered tool provides instant, personalized recommendations based on your unique travel style and interests.
                      </p>
                   </div>
                  <PersonalizedRecommendations />
                </CardContent>
             </Card>
           </div>
        </div>
      </section>
    </div>
  );
}
