import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { safariPackages, whyChooseUs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import PersonalizedRecommendations from "@/components/ai/PersonalizedRecommendations";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const featuredPackages = safariPackages.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center">
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
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 text-shadow">
            Discover the Magic of Tanzania
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-200 mb-8">
            Experience authentic African safaris with expert local guides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-bold text-base">
              <Link href="/safaris">Explore Safari Packages</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="font-bold text-base">
              <Link href="/custom-safari">Plan Your Safari</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Why Choose Elysora Safaris?
          </h2>
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
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
            Featured Safari Packages
          </h2>
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
      
      <section id="ai-planner" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
           <div className="max-w-4xl mx-auto">
             <Card>
                <CardContent className="p-8">
                   <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-4">
                    Get Personalized Recommendations
                  </h2>
                  <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Tell us your preferences and our AI-powered tool will suggest the perfect safari for you.
                  </p>
                  <PersonalizedRecommendations />
                </CardContent>
             </Card>
           </div>
        </div>
      </section>
    </div>
  );
}
