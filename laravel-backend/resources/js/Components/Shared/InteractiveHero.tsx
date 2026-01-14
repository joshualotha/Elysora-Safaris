import { useState, useCallback } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn, resolveImagePath } from "@/lib/utils";
import { heroCarouselItems, type HeroCarouselItem } from "@/lib/data";
import { Button } from "@/Components/ui/button";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";

interface InteractiveHeroProps {
    slides?: Array<{
        id: number;
        title: string;
        subtitle: string;
        image_path: string;
        link_url?: string | null;
    }>;
}

export default function InteractiveHero({ slides }: InteractiveHeroProps) {
    // Map database slides to component format or use fallback
    const carouselItems: HeroCarouselItem[] = slides && slides.length > 0
        ? slides.map(slide => ({
            id: slide.id,
            title: slide.title,
            subtitle: slide.subtitle,
            image: slide.image_path, // Keep full path
            link: slide.link_url || undefined,
        }))
        : heroCarouselItems;


    const [activeItem, setActiveItem] = useState(carouselItems[0]);
    const [carouselQueue, setCarouselQueue] = useState(carouselItems.slice(1));

    const handleCardClick = useCallback((id: number) => {
        const clickedItem = carouselQueue.find(item => item.id === id);
        if (clickedItem) {
            setCarouselQueue(prevQueue => [...prevQueue.filter(item => item.id !== id), activeItem]);
            setActiveItem(clickedItem);
        }
    }, [carouselQueue, activeItem]);

    const handlePrevClick = useCallback(() => {
        if (carouselQueue.length > 0) {
            const lastItem = carouselQueue[carouselQueue.length - 1];
            const newQueue = [activeItem, ...carouselQueue.slice(0, -1)];
            setCarouselQueue(newQueue);
            setActiveItem(lastItem);
        }
    }, [carouselQueue, activeItem]);

    const handleNextClick = useCallback(() => {
        if (carouselQueue.length > 0) {
            const nextItem = carouselQueue[0];
            setCarouselQueue(prevQueue => [...prevQueue.slice(1), activeItem]);
            setActiveItem(nextItem);
        }
    }, [carouselQueue, activeItem]);

    return (
        <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
            <AnimatePresence>
                <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={resolveImagePath(activeItem.image)}
                        alt={activeItem.title}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

            <div className="relative z-10 container mx-auto px-4 md:px-6 w-full h-full pointer-events-none">
                <div className="grid md:grid-cols-2 items-start md:items-center h-full gap-4 md:gap-8 pt-28 md:pt-0 md:pb-0">
                    {/* Left side content */}
                    <div className="text-white text-center md:text-left pointer-events-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-headline font-bold mb-3 text-shadow tracking-tight">
                                    {activeItem.title}
                                </h1>
                                <p className="max-w-md mx-auto md:mx-0 text-lg md:text-xl text-stone-100 mb-4 font-body line-clamp-4 md:line-clamp-none">
                                    {activeItem.subtitle}
                                </p>

                                {activeItem.link ? (
                                    <Link href={activeItem.link}>
                                        <Button size="lg" className="bg-sahara-gold text-charcoal hover:bg-white font-semibold rounded-full px-8 shadow-2xl group">
                                            Explore {activeItem.title}
                                            <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button size="lg" className="bg-sahara-gold text-charcoal hover:bg-white font-semibold rounded-full px-8 shadow-2xl group">
                                        Explore {activeItem.title}
                                        <MoveRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* Spacer for desktop grid layout */}
                    <div className="hidden md:block"></div>
                </div>
            </div>

            {/* Right side carousel - Absolute on desktop to touch edge */}
            <div className="absolute bottom-12 md:bottom-auto md:top-0 right-0 w-full md:h-full md:w-[55%] lg:w-[50%] flex items-end md:items-center justify-start z-10 pointer-events-none pb-8 md:pb-0">
                <div className="overflow-hidden w-full pointer-events-auto pl-4 md:pl-0">
                    <motion.div
                        className="flex gap-4 relative items-center touch-pan-y"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = offset.x;
                            if (swipe < -50) {
                                handleNextClick();
                            } else if (swipe > 50) {
                                handlePrevClick();
                            }
                        }}
                    >
                        <AnimatePresence mode="popLayout" initial={false}>
                            {carouselQueue.map((item, index) => {
                                // Determine classes based on index for smooth resizing
                                let widthClass = "w-[45%] md:w-[38%] opacity-100 z-30";
                                if (index === 1) widthClass = "w-[40%] md:w-[34%] opacity-100 z-20";
                                if (index === 2) widthClass = "w-[35%] md:w-[28%] opacity-100 z-10";
                                if (index > 2) widthClass = "w-[20%] md:w-[19%] opacity-0 z-0";

                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: index > 2 ? 0 : 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50, transition: { duration: 0.3 } }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className={cn(
                                            "flex-shrink-0",
                                            widthClass
                                        )}
                                    >
                                        <button onClick={() => handleCardClick(item.id)} className="w-full text-left outline-none">
                                            <div className={cn(
                                                "relative aspect-[3/4] rounded-2xl overflow-hidden group bg-black/30 backdrop-blur-sm border border-white/20 shadow-2xl origin-left transition-all duration-700 ease-out",
                                            )}>
                                                <img
                                                    src={resolveImagePath(item.image)}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                                <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="font-bold font-headline text-2xl mb-1">{item.title}</h3>
                                                    <div className="h-0.5 w-12 bg-sahara-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                                                </div>
                                            </div>
                                        </button>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex gap-4 z-20">
                <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={handlePrevClick}>
                    <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full h-12 w-12 bg-white/10 text-white backdrop-blur-sm border-white/20 hover:bg-white/20" onClick={handleNextClick}>
                    <ArrowRight className="h-5 w-5" />
                </Button>
            </div>
        </section>
    );
}
