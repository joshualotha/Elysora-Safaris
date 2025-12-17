import PageHeader from "@/components/shared/PageHeader";
import { reviews } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-5 w-5 text-sahara-gold fill-sahara-gold" />
      ))}
      {halfStar && <StarHalf key="half" className="h-5 w-5 text-sahara-gold fill-sahara-gold" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-5 w-5 text-stone-gray/50 fill-stone-gray/50" />
      ))}
    </div>
  );
};

export default function ReviewsPage() {
  return (
    <div>
      <PageHeader
        title="What Our Guests Say"
        subtitle="Real stories from travelers who have experienced the magic of Tanzania with us."
        imageId="reviews-hero"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <p className="text-lg font-semibold text-primary">OVERALL RATING</p>
                <div className="flex justify-center items-center gap-2 mt-2">
                    <span className="text-5xl font-bold font-headline">4.9</span>
                    <div className="flex flex-col items-start">
                        {renderStars(4.9)}
                        <p className="text-sm text-muted-foreground">Based on {reviews.length} reviews</p>
                    </div>
                </div>
            </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => {
              const authorImage = PlaceHolderImages.find(p => p.id === review.authorImage);
              return (
                <Card key={index} className="flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      {authorImage && (
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={authorImage.imageUrl} alt={review.author} />
                          <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <h3 className="font-bold">{review.author}</h3>
                        <p className="text-sm text-muted-foreground">{review.country}</p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                    <p className="text-muted-foreground mt-4 flex-grow">"{review.comment}"</p>
                    <p className="text-sm font-semibold text-stone-gray mt-4 pt-4 border-t">
                      Safari: <span className="text-primary">{review.safariTaken}</span>
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline">Leave a Review</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
