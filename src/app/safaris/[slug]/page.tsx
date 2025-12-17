import { notFound } from "next/navigation";
import Image from "next/image";
import { safariPackages } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X, Clock, MapPin, Users, Share2 } from "lucide-react";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return safariPackages.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export default function SafariDetailPage({ params }: Props) {
  const safari = safariPackages.find((pkg) => pkg.slug === params.slug);

  if (!safari) {
    notFound();
  }

  const imageIds = ["safari-gallery-1", "safari-gallery-2", "safari-gallery-3"];
  const images = imageIds.map(id => PlaceHolderImages.find(p => p.id === id)).filter(Boolean);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                {img && (
                  <Image
                    src={img.imageUrl}
                    alt={img.description}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    data-ai-hint={img.imageHint}
                  />
                )}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
        </Carousel>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-2">{safari.name}</h1>
            <p className="text-xl text-stone-200">An unforgettable {safari.duration}-day adventure</p>
          </div>
        </div>
      </section>

      {/* Quick Overview Bar */}
      <section className="sticky top-16 z-20 bg-card border-b">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center h-20">
                <div className="flex gap-4 md:gap-8 text-sm md:text-base">
                    <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /><span>{safari.duration} Days</span></div>
                    <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /><span>{safari.destinations.length} Destinations</span></div>
                    <div className="flex items-center gap-2"><Users className="h-5 w-5 text-primary" /><span>From ${safari.price.toLocaleString()}</span></div>
                </div>
                 <div className="flex gap-2">
                    <Button variant="outline" size="icon"><Share2 className="h-4 w-4" /></Button>
                    <Button>Inquire Now</Button>
                </div>
            </div>
         </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
            <main className="lg:col-span-2">
                {/* Description */}
                <div className="mb-12">
                    <h2 className="text-3xl font-headline font-bold mb-4">Tour Overview</h2>
                    <p className="text-muted-foreground">{safari.description}</p>
                </div>
            
                {/* Itinerary Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-headline font-bold mb-4">Day-by-Day Itinerary</h2>
                    <Accordion type="single" collapsible defaultValue="item-0">
                        {safari.itinerary.map((day, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg font-bold">
                                Day {day.day}: {day.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {day.description}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Included/Excluded */}
                <div>
                    <h2 className="text-3xl font-headline font-bold mb-4">What's Included / Excluded</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-green-50/50 dark:bg-green-900/20">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-green-800 dark:text-green-300">What's Included</h3>
                                <ul className="space-y-2">
                                    {safari.whatsIncluded.map(item => (
                                        <li key={item} className="flex items-start gap-2">
                                            <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="bg-red-50/50 dark:bg-red-900/20">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4 text-red-800 dark:text-red-300">What's Excluded</h3>
                                <ul className="space-y-2">
                                    {safari.whatsExcluded.map(item => (
                                        <li key={item} className="flex items-start gap-2">
                                            <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <aside className="lg:col-span-1">
                <Card className="sticky top-40">
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold mb-4">Book This Safari</h3>
                        <p className="text-muted-foreground mb-4">Ready for an adventure? Send us an inquiry and we'll get back to you shortly.</p>
                        <form className="space-y-4">
                            <Input placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                            <Textarea placeholder="Any questions or special requests?" />
                            <Button className="w-full" size="lg">Send Inquiry</Button>
                        </form>
                    </CardContent>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
}
