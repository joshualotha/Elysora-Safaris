import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, MapPin, Camera, Leaf, Calendar, Thermometer, Info, ChevronRight } from 'lucide-react';
import { destinationContent } from '@/lib/destination-content';

interface DestinationShowProps {
    destination: any;
    relatedSafaris: Array<any>;
}

export default function DestinationShow({ destination, relatedSafaris }: DestinationShowProps) {
    // Get rich content or fallback
    const content = destinationContent[destination.slug] || {
        subtitle: 'Explore the Wild',
        intro: destination.description,
        highlights: [],
        stats: {},
        sections: []
    };

    return (
        <MainLayout title={`${destination.name} - Elysora Safaris`}>
            <div className="flex flex-col min-h-screen bg-stone-50">
                {/* Hero Parallax */}
                <section className="relative h-[85vh] overflow-hidden flex items-end pb-20">
                    <div className="absolute inset-0">
                        <img
                            src={`/images/${destination.image}.jpg`}
                            alt={destination.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <span className="text-sahara-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in-up">
                            {content.subtitle}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-headline font-bold text-white mb-6 drop-shadow-lg leading-tight">
                            {destination.name}
                        </h1>
                        {/* Quick Stats Bar */}
                        <div className="flex flex-wrap gap-6 text-white/90 text-sm font-medium border-t border-white/20 pt-6 mt-8 max-w-4xl">
                            {content.stats.bestTime && (
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-sahara-gold" />
                                    <span>Best Time: {content.stats.bestTime}</span>
                                </div>
                            )}
                            {content.stats.size && (
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-sahara-gold" />
                                    <span>Size: {content.stats.size}</span>
                                </div>
                            )}
                            {content.stats.climate && (
                                <div className="flex items-center gap-2">
                                    <Thermometer className="h-4 w-4 text-sahara-gold" />
                                    <span>Climate: {content.stats.climate}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Wrapper */}
                <div className="container mx-auto px-4 md:px-6 py-20">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Sidebar / Stats (Desktop Sticky) */}
                        <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
                                <h3 className="text-xl font-headline font-bold text-charcoal mb-6 border-b border-stone-100 pb-4">
                                    At a Glance
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(content.stats).map(([key, value]: any) => (
                                        <div key={key} className="flex justify-between items-center py-2 border-b border-stone-50 last:border-0">
                                            <span className="text-stone-500 capitalize text-sm">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                            <span className="font-semibold text-charcoal text-right text-sm">{value}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button asChild className="w-full mt-8 bg-sahara-gold hover:bg-sahara-gold/90 text-white font-bold">
                                    <Link href="/contact">Book This Destination</Link>
                                </Button>
                            </div>

                            {/* Map Placeholder (Could be real map later) */}
                            <div className="bg-charcoal rounded-2xl overflow-hidden relative h-64 flex items-center justify-center p-6 text-center group">
                                <MapPin className="h-12 w-12 text-white/20 absolute group-hover:scale-110 transition-transform duration-500" />
                                <span className="relative z-10 text-white font-bold text-lg">View on Map</span>
                                <div className="absolute inset-0 bg-sahara-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </aside>

                        {/* Main Body */}
                        <article className="lg:col-span-8 space-y-16">
                            {/* Introduction */}
                            <div className="prose prose-lg prose-stone max-w-none">
                                <div
                                    className="text-2xl font-light leading-relaxed text-charcoal/90"
                                    dangerouslySetInnerHTML={{ __html: content.intro || destination.description }}
                                />
                            </div>

                            {/* Highlights Grid */}
                            {content.highlights && content.highlights.length > 0 && (
                                <div>
                                    <h2 className="text-3xl font-headline font-bold text-charcoal mb-8">Highlights</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {content.highlights.map((item: any, idx: number) => (
                                            <div key={idx} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                                                <div className="bg-stone-50 p-3 rounded-lg h-fit">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-charcoal text-lg mb-2">{item.title}</h4>
                                                    <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Additional Sections */}
                            {content.sections && content.sections.map((section: any, idx: number) => (
                                <div key={idx} className="prose prose-lg prose-stone max-w-none">
                                    <h2 className="text-3xl font-headline font-bold text-charcoal mb-6">{section.title}</h2>
                                    <p>{section.content}</p>
                                </div>
                            ))}

                            {/* Legacy Attractions Tags (Backup) */}
                            {destination.attractions && destination.attractions.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-bold text-charcoal mb-4 uppercase text-sm tracking-wider">Also Known For</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {destination.attractions.map((attraction: string) => (
                                            <span key={attraction} className="bg-stone-100 text-stone-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-sahara-gold hover:text-white transition-colors cursor-default">
                                                {attraction}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>
                    </div>
                </div>

                {/* Related Safaris Carousel Style */}
                {relatedSafaris && relatedSafaris.length > 0 && (
                    <section className="py-24 bg-white border-t border-stone-100">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="flex justify-between items-end mb-12">
                                <div>
                                    <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-2">Experiences</span>
                                    <h2 className="text-4xl font-headline font-bold text-charcoal">
                                        Safaris Visiting {destination.name}
                                    </h2>
                                </div>
                                <Button variant="outline" asChild className="hidden md:flex">
                                    <Link href="/safaris">View All Packages</Link>
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedSafaris.slice(0, 3).map((safari) => (
                                    <Link
                                        key={safari.slug}
                                        href={route('safaris.show', safari.slug)}
                                        className="group block"
                                    >
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                            <img
                                                src={`/images/${safari.image}.jpg`}
                                                alt={safari.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 z-20">
                                                <span className="bg-white/95 backdrop-blur-sm text-charcoal text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                                                    {safari.duration} Days
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-headline font-bold text-charcoal mb-2 group-hover:text-sahara-gold transition-colors">
                                            {safari.name}
                                        </h3>
                                        <p className="text-stone-500 text-sm mb-4 line-clamp-2">{safari.description}</p>
                                        <div className="flex items-center gap-2 text-sahara-gold font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                            View Itinerary <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </MainLayout>
    );
}
