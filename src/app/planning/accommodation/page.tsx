import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, Tent, Building, Mountain, Star, DollarSign, Utensils } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

const accommodationTypes = [
    {
        icon: BedDouble,
        title: "Safari Lodges",
        description: "Permanent structures with stone or wood walls, similar to a hotel. They typically offer amenities like swimming pools, restaurants, and en-suite bathrooms. Security is solid.",
        bestFor: "Families, those wanting solid walls, and luxury seekers.",
        imageId: "accommodation-lodge",
    },
    {
        icon: Tent,
        title: "Tented Camps (Permanent)",
        description: "Large, walk-in canvas tents on raised platforms. They feature real beds, en-suite flush toilets, and hot showers. This is 'glamping,' not traditional camping.",
        bestFor: "Travelers seeking the classic 'Out of Africa' feel with modern comforts.",
        imageId: "accommodation-tented-camp",
    },
    {
        icon: Mountain,
        title: "Mobile Migration Camps",
        description: "Eco-friendly camps that move 2-3 times a year to follow the Great Migration. They offer an immersive experience, getting you as close to the action as possible.",
        bestFor: "Those wanting to be in the heart of the wildlife action, especially during the migration.",
        imageId: "accommodation-mobile-camp",
    },
    {
        icon: Building,
        title: "Public Camping (Budget)",
        description: "Small dome tents set up at designated public campsites inside or near the parks. Facilities like bathrooms are shared. You sleep in a sleeping bag on a mattress.",
        bestFor: "Adventure travelers on a strict budget who want a raw, authentic nature experience.",
        imageId: "accommodation-public-camping",
    }
]

const budgetLevels = [
    {
        level: "Budget",
        price: "$",
        details: [
            "Public campsites with shared facilities.",
            "A private cook travels with your group.",
            "Basic but wholesome meals prepared for you.",
        ]
    },
    {
        level: "Mid-Range",
        price: "$$",
        details: [
            "Standard lodges or permanent tented camps.",
            "Private en-suite bathrooms.",
            "Buffet-style meals served in a communal dining area.",
        ]
    },
    {
        level: "Luxury",
        price: "$$$",
        details: [
            "High-end, exclusive lodges or boutique camps.",
            "A la carte dining and premium drinks.",
            "Amenities like private plunge pools and butler service.",
        ]
    }
]

export default function AccommodationPage() {
    return (
        <div>
            <PageHeader
                title="Where You Will Stay"
                subtitle="From luxury lodges to sleeping under the stars, find your perfect safari home."
                imageId="accommodation-hero"
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-headline font-bold mb-4">Accommodation Types</h2>
                        <p className="text-lg text-muted-foreground">
                            Your accommodation is a key part of your safari experience. Understanding the difference between a "lodge" and a "tented camp" is essential to choosing the right adventure for you.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {accommodationTypes.map((type, index) => {
                             const image = PlaceHolderImages.find(p => p.id === type.imageId);
                             const isReversed = index % 2 !== 0;
                             return (
                                <div key={type.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                    <div className={`relative h-80 md:h-96 rounded-2xl overflow-hidden ${isReversed ? 'md:order-last' : ''}`}>
                                        {image && (
                                            <Image
                                                src={image.imageUrl}
                                                alt={type.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={image.description}
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-4 mb-4">
                                            <type.icon className="h-8 w-8 text-primary" />
                                            <h3 className="text-3xl font-headline font-bold">{type.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{type.description}</p>
                                        <div className="bg-sand p-4 rounded-lg">
                                            <p className="font-bold text-sm text-foreground">Best For:</p>
                                            <p className="text-sm text-muted-foreground">{type.bestFor}</p>
                                        </div>
                                    </div>
                                </div>
                             )
                        })}
                    </div>
                </div>
            </section>
            
            <Separator />

            <section className="py-16 md:py-24 bg-sand">
                 <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-headline font-bold mb-4">Budget vs. Luxury</h2>
                        <p className="text-lg text-muted-foreground">
                            Safari pricing is largely determined by the level of accommodation. Here’s a quick breakdown of what to expect at different price points.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {budgetLevels.map(level => (
                            <Card key={level.level} className="flex flex-col">
                                <CardHeader className="text-center">
                                    <p className="font-bold text-5xl text-primary">{level.price}</p>
                                    <CardTitle className="font-headline text-2xl">{level.level}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <ul className="space-y-3 text-muted-foreground">
                                        {level.details.map((detail, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <Star className="h-4 w-4 text-primary mt-1 flex-shrink-0"/>
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                 </div>
            </section>
        </div>
    );
}
