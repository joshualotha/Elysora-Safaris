"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { SafariPackage } from "@/lib/data";

export default function HeroSafariCarousel({ safaris }: { safaris: SafariPackage[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {safaris.map((safari, index) => {
            const image = PlaceHolderImages.find(p => p.id === safari.image);
            return (
              <div key={index} className="flex-shrink-0 w-full md:w-[60%] lg:w-[50%] pl-4">
                <Link href={`/safaris/${safari.slug}`}>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group bg-black/30 backdrop-blur-sm border border-white/20 shadow-2xl">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={safari.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="font-bold font-headline text-2xl">{safari.name}</h3>
                      <div className="flex items-center gap-1 mt-2 text-sm">
                        <Star className="h-4 w-4 fill-sahara-gold text-sahara-gold"/>
                        <Star className="h-4 w-4 fill-sahara-gold text-sahara-gold"/>
                        <Star className="h-4 w-4 fill-sahara-gold text-sahara-gold"/>
                        <Star className="h-4 w-4 fill-sahara-gold text-sahara-gold"/>
                        <Star className="h-4 w-4 fill-sahara-gold/50 text-sahara-gold/50"/>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute -bottom-16 right-0 flex gap-2">
        <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={scrollPrev}>
            <ArrowLeft className="h-5 w-5"/>
        </Button>
         <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={scrollNext}>
            <ArrowRight className="h-5 w-5"/>
        </Button>
      </div>
    </div>
  );
}
