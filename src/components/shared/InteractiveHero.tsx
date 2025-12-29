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
  const [activeItem, setActiveItem] = useState(heroCarouselItems[0]);
  const [carouselQueue, setCarouselQueue] = useState(heroCarouselItems.slice(1));
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const activeImage = PlaceHolderImages.find(p => p.id === activeItem.image);

  const handleCardClick = useCallback((id: number) => {
    const clickedItem = carouselQueue.find(item => item.id === id);
    if (clickedItem) {
        setCarouselQueue(prevQueue => [...prevQueue.filter(item => item.id !== id), activeItem]);
        setActiveItem(clickedItem);
        emblaApi?.scrollTo(0, true);
    }
  }, [carouselQueue, activeItem, emblaApi]);


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNextClick = useCallback(() => {
    if (carouselQueue.length > 0) {
      const nextItem = carouselQueue[0];
       setCarouselQueue(prevQueue => [...prevQueue.slice(1), activeItem]);
      setActiveItem(nextItem);
      emblaApi?.scrollTo(0, true);
    }
  }, [carouselQueue, activeItem, emblaApi]);


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
            <div className="relative h-full flex items-center justify-center">
                <div className="overflow-hidden w-full" ref={emblaRef}>
                    <div className="flex -ml-4">
                    {carouselQueue.map((item, index) => {
                        const image = PlaceHolderImages.find(p => p.id === item.image);
                        return (
                        <div 
                            key={item.id} 
                            className={cn(
                                "flex-shrink-0 w-2/3 md:w-[70%] pl-4 transition-all duration-300",
                                index === 0 && "w-[80%] md:w-[70%]",
                                index === 1 && "w-[70%] md:w-[60%]",
                                index === 2 && "w-[60%] md:w-[50%]"
                            )}
                        >
                            <button onClick={() => handleCardClick(item.id)} className="w-full text-left">
                                <div className={cn(
                                    "relative aspect-[3/4] rounded-2xl overflow-hidden group bg-black/30 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-500 ease-in-out",
                                    index === 0 && "scale-100",
                                    index === 1 && "scale-90",
                                    index === 2 && "scale-80"
                                )}>
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
            </div>
        </div>

         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={scrollPrev}>
                <ArrowLeft className="h-5 w-5"/>
            </Button>
            <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={handleNextClick}>
                <ArrowRight className="h-5 w-5"/>
            </Button>
        </div>
      </div>
    </section>
  );
}
