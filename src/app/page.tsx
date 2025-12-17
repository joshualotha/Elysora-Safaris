import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { safariPackages, whyChooseUs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import PersonalizedRecommendations from "@/components/ai/PersonalizedRecommendations";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const featuredPackages = safariPackages.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src="https://images.unsplash.com/photo-1525381824767-e0705c519a70?q=80&w=2070&auto=format&fit=crop"
            alt="Vast desert landscape"
            fill
            className="object-cover object-center"
            priority
            data-ai-hint="desert landscape"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 h-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          <div className="text-center md:text-left text-white max-w-lg">
            <h1 className="text-6xl md:text-8xl font-headline font-black tracking-tighter mb-4 text-shadow">
              Africa
            </h1>
            <p className="max-w-md mx-auto md:mx-0 text-lg md:text-xl text-stone-200 mb-8">
              There's nowhere on the planet for wild lands and rich traditions that endure. Prepare to fall in love.
            </p>
            <Button asChild size="lg" className="font-bold text-base bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
              <Link href="/custom-safari">Explore <ArrowRight className="ml-2"/></Link>
            </Button>
          </div>
          <div className="w-full max-w-lg lg:max-w-xl">
             <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {featuredPackages.map((pkg) => {
                  const image = PlaceHolderImages.find(p => p.id === pkg.image);
                  return (
                     <CarouselItem key={pkg.slug} className="pl-4 basis-2/3 md:basis-1/2">
                       <div className="p-1">
                          <Card className="overflow-hidden bg-black/30 backdrop-blur-lg border-white/10 group">
                            <CardContent className="relative aspect-[3/4] p-0">
                              {image && (
                                <Image 
                                  src={image.imageUrl}
                                  alt={pkg.name}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                  data-ai-hint={image.imageHint}
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                              <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h3 className="font-bold text-lg">{pkg.destinations[0]}</h3>
                                <p className="text-sm text-stone-300">{pkg.name}</p>
                              </div>
                            </CardContent>
                          </Card>
                       </div>
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <div className="absolute -bottom-12 right-0 flex items-center gap-4">
                <CarouselPrevious className="static -translate-x-0 -translate-y-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"/>
                <CarouselNext className="static -translate-x-0 -translate-y-0 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"/>
              </div>
            </Carousel>
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
