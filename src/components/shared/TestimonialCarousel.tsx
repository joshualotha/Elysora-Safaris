
"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Review } from "@/lib/data";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 text-sahara-gold fill-sahara-gold" />
      ))}
      {halfStar && <Star key="half" className="h-5 w-5 text-sahara-gold fill-sahara-gold" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-stone-gray/30" />
      ))}
    </div>
  );
};


export default function TestimonialCarousel({ reviews }: { reviews: Review[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {reviews.map((review, index) => {
          const authorImage = PlaceHolderImages.find(p => p.id === review.authorImage);
          return (
            <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 pl-4">
              <Card className="h-full flex flex-col p-6">
                <CardContent className="flex-grow flex flex-col p-0">
                  <div className="mb-4">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-stone-gray mt-4 flex-grow text-lg">"{review.comment}"</p>
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-acacia/20">
                    {authorImage && (
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={authorImage.imageUrl} alt={review.author} />
                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <h3 className="font-bold font-headline text-lg">{review.author}</h3>
                      <p className="text-sm text-stone-gray">{review.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
