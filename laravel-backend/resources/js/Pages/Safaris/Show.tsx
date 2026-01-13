import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Calendar, MapPin, Check, X } from 'lucide-react';

interface SafariShowProps {
    safari: any;
    relatedSafaris: Array<any>;
}

export default function SafariShow({ safari, relatedSafaris }: SafariShowProps) {
    return (
        <MainLayout title={`${safari.name} - Elysora Safaris`}>
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative h-[60vh] md:h-[70vh]">
                    <img
                        src={`/images/${safari.image}.jpg`}
                        alt={safari.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-12">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4 mb-4">
                                <span className="px-3 py-1 bg-sahara-gold/20 text-sahara-gold rounded-full text-sm font-semibold backdrop-blur-sm border border-sahara-gold/30">
                                    {safari.duration} Days
                                </span>
                                {safari.destinations && safari.destinations.length > 0 && (
                                    <span className="text-white/80 text-sm flex items-center gap-1">
                                        <MapPin className="h-4 w-4" />
                                        {safari.destinations.join(', ')}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mb-4">
                                {safari.name}
                            </h1>
                            <p className="text-xl text-white/90">{safari.description}</p>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Left Column - Main Info */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Highlights */}
                                {safari.highlights && safari.highlights.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-headline font-bold text-charcoal mb-6">Highlights</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {safari.highlights.map((highlight: string) => (
                                                <div key={highlight} className="flex items-start gap-3 p-4 bg-safari-green/5 rounded-lg">
                                                    <Check className="h-5 w-5 text-safari-green mt-0.5 flex-shrink-0" />
                                                    <span className="text-charcoal">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Itinerary */}
                                {safari.itinerary && safari.itinerary.length > 0 && (
                                    <div>
                                        <h2 className="text-3xl font-headline font-bold text-charcoal mb-6">Day by Day Itinerary</h2>
                                        <div className="space-y-6">
                                            {safari.itinerary.map((day: any) => (
                                                <div key={day.day} className="relative pl-8 pb-8 border-l-2 border-sahara-gold/30 last:border-l-0 last:pb-0">
                                                    <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-sahara-gold flex items-center justify-center text-white font-bold text-sm">
                                                        {day.day}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-charcoal mb-2">{day.title}</h3>
                                                    <p className="text-stone-gray leading-relaxed">{day.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* What's Included/Excluded */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {safari.whats_included && safari.whats_included.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">What's Included</h3>
                                            <ul className="space-y-2">
                                                {safari.whats_included.map((item: string) => (
                                                    <li key={item} className="flex items-start gap-2 text-charcoal">
                                                        <Check className="h-5 w-5 text-safari-green mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {safari.whats_excluded && safari.whats_excluded.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">What's Excluded</h3>
                                            <ul className="space-y-2">
                                                {safari.whats_excluded.map((item: string) => (
                                                    <li key={item} className="flex items-start gap-2 text-stone-gray">
                                                        <X className="h-5 w-5 text-stone-gray mt-0.5 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Right Column - Booking Card */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 bg-ivory rounded-2xl p-8 shadow-lg">
                                    <div className="mb-6">
                                        <span className="text-sm text-stone-gray uppercase">From</span>
                                        <p className="text-5xl font-bold text-charcoal font-headline mb-1">
                                            ${safari.price.toLocaleString()}
                                        </p>
                                        <span className="text-sm text-stone-gray">per person</span>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-center justify-between py-3 border-b border-gray-200">
                                            <span className="text-stone-gray">Duration</span>
                                            <span className="font-semibold text-charcoal">{safari.duration} Days</span>
                                        </div>
                                        {safari.destinations && (
                                            <div className="flex items-start justify-between py-3 border-b border-gray-200">
                                                <span className="text-stone-gray">Destinations</span>
                                                <span className="font-semibold text-charcoal text-right">{safari.destinations.length} Parks</span>
                                            </div>
                                        )}
                                    </div>

                                    <Button asChild size="lg" className="w-full bg-sahara-gold text-charcoal hover:bg-charcoal hover:text-white mb-4">
                                        <Link href={route('contact')}>Book This Safari</Link>
                                    </Button>

                                    <Button asChild size="lg" variant="outline" className="w-full">
                                        <Link href={route('contact')}>Customize This Trip</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Safaris */}
                {relatedSafaris && relatedSafaris.length > 0 && (
                    <section className="py-16 md:py-24 bg-ivory">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-12 text-center">
                                You Might Also Like
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedSafaris.slice(0, 3).map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={route('safaris.show', related.slug)}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={`/images/${related.image}.jpg`}
                                                alt={related.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm font-semibold">
                                                {related.duration} Days
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-headline font-bold text-charcoal mb-2 group-hover:text-sahara-gold transition-colors">
                                                {related.name}
                                            </h3>
                                            <p className="text-stone-gray text-sm line-clamp-2">{related.description}</p>
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                                <span className="text-2xl font-bold text-charcoal font-headline">${related.price.toLocaleString()}</span>
                                                <ArrowRight className="h-5 w-5 text-sahara-gold group-hover:translate-x-1 transition-transform" />
                                            </div>
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
