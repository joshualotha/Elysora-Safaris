import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, BedDouble, Tent, Building, Star, Check, DollarSign, Mountain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';

const accommodationTypes = [
    {
        icon: BedDouble,
        title: "Luxury Safari Lodges",
        description: "Permanent structures offering hotel-like comfort in the wild. Expect swimming pools, spas, fine dining restaurants, and air-conditioned rooms. Built from stone or wood, these blend seamlessly into the landscape while offering solid wall security.",
        bestFor: "Families, luxury seekers, and those who prefer solid walls over canvas.",
        image: "accommodation-lodge",
        features: ["Swimming Pools", "Stone/Wood Walls", "AC & WiFi", "Fine Dining"]
    },
    {
        icon: Tent,
        title: "Permanent Tented Camps",
        description: "Experience the romance of 'Old Africa'. These are large, canvas suites built on raised wooden decks. They feature real beds, en-suite flush toilets, hot showers, and often private verandas. This is unmatched 'glamping'.",
        bestFor: "Couples and travelers seeking an authentic 'Out of Africa' atmosphere.",
        image: "accommodation-tented-camp",
        features: ["Canvas Walls", "En-suite Bathrooms", "Real Beds", "Private Decks"]
    },
    {
        icon: Mountain,
        title: "Mobile Migration Camps",
        description: "Eco-friendly semi-permanent camps that move seasonally to follow the Great Migration herds. They offer a front-row seat to the action without sacrificing essential comforts.",
        bestFor: "Wildlife enthusiasts wanting to be in the heart of the migration.",
        image: "accommodation-mobile-camp",
        features: ["Prime Location", "Eco-friendly", "Intimate Setting", "Campfire Evenings"]
    },
    {
        icon: Building,
        title: "Public Camping (Budget)",
        description: "For the adventurous! Small dome tents set up at designated public campsites. You sleep in sleeping bags on mattresses. Facilities are shared, and a private chef travels with you to prepare meals.",
        bestFor: "Adventure travelers and backpackers on a strict budget.",
        image: "accommodation-public-camping",
        features: ["Dome Tents", "Shared Bathrooms", "Private Cook", "Bonfires"]
    }
];

export default function Accommodation() {
    return (
        <MainLayout title="Accommodation Options - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/accommodation-hero.jpg"
                        alt="Safari Accommodation"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-20">
                        <span className="bg-sahara-gold/90 text-charcoal px-4 py-1 rounded-full font-bold uppercase tracking-wider text-sm mb-6 inline-block backdrop-blur-sm">
                            Your Home in the Wild
                        </span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6 drop-shadow-lg">
                            Where You Will Stay
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto drop-shadow-md">
                            From luxury lodges to sleeping under the stars, find your perfect safari sanctuary.
                        </p>
                    </div>
                </section>

                {/* Intro */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-8">
                            Experience the Difference
                        </h2>
                        <p className="text-lg text-stone-gray leading-relaxed mb-12">
                            Your accommodation is a key part of your safari experience. Whether you choose a solid-walled lodge or a canvas tented camp,
                            Elysora Safaris ensures high standards of comfort, hygiene, and service.
                            Understanding these differences helps you choose the adventure that perfectly fits your style.
                        </p>
                    </div>
                </section>

                {/* Accommodation Types - Alternating Layout */}
                <section className="pb-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6 space-y-24">
                        {accommodationTypes.map((type, index) => (
                            <div key={type.title} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                        <img
                                            src={`/images/${type.image}.jpg`}
                                            alt={type.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                            <div className="text-white">
                                                <p className="font-bold mb-2">Key Features:</p>
                                                <ul className="grid grid-cols-2 gap-2 text-sm">
                                                    {type.features.map(f => (
                                                        <li key={f} className="flex items-center gap-2">
                                                            <Check className="h-3 w-3 text-sahara-gold" /> {f}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-safari-green/10 flex items-center justify-center text-safari-green mb-4">
                                        <type.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-4xl font-headline font-bold text-charcoal">{type.title}</h3>
                                    <p className="text-lg text-stone-gray leading-relaxed">
                                        {type.description}
                                    </p>
                                    <div className="bg-ivory p-6 rounded-xl border-l-4 border-sahara-gold">
                                        <span className="font-bold text-charcoal block mb-1">Best For:</span>
                                        <span className="text-stone-gray">{type.bestFor}</span>
                                    </div>
                                    <Button variant="outline" className="mt-4 border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full">
                                        View Sample Itineraries <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Budget Comparison */}
                <section className="py-24 bg-charcoal text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src="/images/pattern-overlay.png" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-headline font-bold mb-6">Budget Options</h2>
                            <p className="text-white/70 max-w-2xl mx-auto">
                                Safari pricing is largely determined by the level of accommodation.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
                                <CardHeader className="text-center pb-2">
                                    <h3 className="text-xl text-white/70 font-bold uppercase tracking-widest">Budget</h3>
                                    <div className="text-5xl font-bold font-headline text-white my-4">$</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-sm text-white/80">
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Public campsites</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Shared bathrooms</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Private chef meals</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Help set up camp</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-sahara-gold border-none text-charcoal transform md:-translate-y-4 shadow-2xl">
                                <CardHeader className="text-center pb-2">
                                    <div className="inline-block bg-charcoal text-white text-xs font-bold px-3 py-1 rounded-full mb-2">POPULAR</div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest">Mid-Range</h3>
                                    <div className="text-5xl font-bold font-headline my-4">$$</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-sm font-medium">
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white shrink-0" /> Standard lodges / Tented camps</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white shrink-0" /> Private en-suite bathroom</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white shrink-0" /> Buffet dining</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-white shrink-0" /> Swimming pools likely</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
                                <CardHeader className="text-center pb-2">
                                    <h3 className="text-xl text-white/70 font-bold uppercase tracking-widest">Luxury</h3>
                                    <div className="text-5xl font-bold font-headline text-sahara-gold my-4">$$$</div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-4 text-sm text-white/80">
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Exclusive 5-star lodges</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> A la carte gourmet dining</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Private plunge pools</li>
                                        <li className="flex items-start gap-3"><Check className="h-5 w-5 text-sahara-gold shrink-0" /> Premium drinks included</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
