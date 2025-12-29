"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { heroCarouselItems, type HeroCarouselItem } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MoveRight, Star } from "lucide-react";

export default function InteractiveHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const activeItem = heroCarouselItems[activeIndex];
  const carouselQueue = heroCarouselItems.filter((item, index) => index !== activeIndex);
  const activeImage = PlaceHolderImages.find(p => p.id === activeItem.image);

  const handleCardClick = (id: number) => {
    const realIndex = heroCarouselItems.findIndex(item => item.id === id);
    if (realIndex !== -1) {
      setActiveIndex(realIndex);
      emblaApi?.scrollTo(0); 
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    if (carouselQueue.length > 0) {
      const nextItemId = carouselQueue[0].id;
      handleCardClick(nextItemId);
    }
  }, [carouselQueue, handleCardClick]);


  return (
    <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence>
            {activeImage && (
                <motion.div
                    key={activeImage.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={activeImage.imageUrl}
                        alt={activeImage.description}
                        fill
                        className="object-cover object-center"
                        priority
                        data-ai-hint={activeImage.imageHint}
                    />
                </motion.div>
            )}
        </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 w-full h-full">
        <div className="grid md:grid-cols-2 items-center h-full gap-8">
            {/* Left side content */}
            <div className="text-white text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <h1 className="text-6xl md:text-8xl font-headline font-bold mb-4 text-shadow tracking-tight">
                    {activeItem.title}
                  </h1>
                  <p className="max-w-md text-lg md:text-xl text-stone-100 mb-8 font-body">
                    {activeItem.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
              <Button asChild size="lg">
                <Link href="/safaris">Explore <MoveRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>

            {/* Right side carousel */}
            <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                    {carouselQueue.map((item) => {
                        const image = PlaceHolderImages.find(p => p.id === item.image);
                        return (
                        <div key={item.id} className="flex-shrink-0 w-full md:w-[60%] lg:w-[50%] pl-4">
                            <button onClick={() => handleCardClick(item.id)} className="w-full text-left">
                                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group bg-black/30 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:border-white/50">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 text-white">
                                    <h3 className="font-bold font-headline text-2xl">{item.title}</h3>
                                </div>
                                </div>
                            </button>
                        </div>
                        );
                    })}
                    </div>
                </div>
                 <div className="absolute -bottom-16 right-0 flex gap-2">
                    <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={scrollPrev}>
                        <ArrowLeft className="h-5 w-5"/>
                    </Button>
                    <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={handleNextClick}>
                        <ArrowRight className="h-5 w-5"/>
                    </Button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}
