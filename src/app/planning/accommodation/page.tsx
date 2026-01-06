import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IconText from "@/components/shared/IconText";
import { BedDouble, Tent, Building, Mountain } from "lucide-react";

const accommodationTypes = [
    {
        icon: BedDouble,
        title: "Luxury Lodges & Hotels",
        description: "Experience the pinnacle of comfort and service. These properties offer stunning views, gourmet dining, swimming pools, and spa facilities, often located in prime wildlife-viewing areas.",
        imageId: "https://picsum.photos/seed/luxury-lodge/800/600",
        imageHint: "luxury lodge interior"
    },
    {
        icon: Tent,
        title: "Tented Camps",
        description: "The classic safari experience. These permanent or semi-permanent camps offer comfortable beds and en-suite bathrooms under canvas, immersing you in the sounds of the bush without sacrificing comfort.",
        imageId: "https://picsum.photos/seed/tented-camp/800/600",
        imageHint: "safari tent exterior"
    },
    {
        icon: Building,
        title: "Public Campsites",
        description: "For the adventurous traveler, public campsites offer a budget-friendly way to get close to nature. Facilities are basic (shared bathrooms), but the experience is authentic and unforgettable.",
        imageId: "https://picsum.photos/seed/campsite/800/600",
        imageHint: "safari camping"
    },
    {
        icon: Mountain,
        title: "Mountain Huts",
        description: "Basic but essential shelter for those climbing Mount Kilimanjaro. These communal huts provide a place to rest and acclimatize as you ascend towards the summit.",
        imageId: "https://picsum.photos/seed/mountain-hut/800/600",
        imageHint: "kilimanjaro hut"
    }
]

export default function AccommodationPage() {
    return (
        <div>
            <PageHeader
                title="Safari Accommodation"
                subtitle="From canvas tents under the stars to opulent lodges, find the perfect place to rest your head."
                imageId="accommodation-hero"
            />

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-headline font-bold mb-4">A Style for Every Traveler</h2>
                        <p className="text-lg text-muted-foreground">
                            Your accommodation is a key part of your safari experience. Whether you prefer the rustic charm of a tented camp or the plush comfort of a luxury lodge, we offer a range of options to suit your travel style and budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {accommodationTypes.map((type) => (
                            <Card key={type.title} className="overflow-hidden">
                                <div className="relative h-64 w-full">
                                    <Image
                                        src={type.imageId}
                                        alt={type.title}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={type.imageHint}
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <type.icon className="h-8 w-8 text-primary" />
                                        <CardTitle className="font-headline text-2xl">{type.title}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{type.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
