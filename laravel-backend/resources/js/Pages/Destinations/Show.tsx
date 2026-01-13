import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, MapPin, Camera, Leaf } from 'lucide-react';

interface DestinationShowProps {
    destination: any;
    relatedSafaris: Array<any>;
}

export default function DestinationShow({ destination, relatedSafaris }: DestinationShowProps) {
    return (
        <MainLayout title={`${destination.name} - Elysora Safaris`}>
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-[70vh]">
                    <img
                        src={`/images/${destination.image}.jpg`}
                        alt={destination.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-6 pb-16">
                        <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-4">
                            {destination.name}
                        </h1>
                        <p className="text-2xl text-white/90 max-w-3xl">{destination.description}</p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Attractions */}
                        {destination.attractions && destination.attractions.length > 0 && (
                            <div className="mb-16">
                                <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-8">
                                    What to See
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {destination.attractions.map((attraction: string) => (
                                        <div key={attraction} className="bg-ivory p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                                            <Camera className="h-8 w-8 text-sahara-gold mx-auto mb-3" />
                                            <p className="font-semibold text-charcoal">{attraction}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Safari Packages */}
                        {relatedSafaris && relatedSafaris.length > 0 && (
                            <div>
                                <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-8">
                                    Safaris Including {destination.name}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {relatedSafaris.slice(0, 3).map((safari) => (
                                        <Link
                                            key={safari.slug}
                                            href={route('safaris.show', safari.slug)}
                                            className="group bg-ivory rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
                                        >
                                            <div className="relative aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={`/images/${safari.image}.jpg`}
                                                    alt={safari.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm font-semibold">
                                                    {safari.duration} Days
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-headline font-bold text-charcoal mb-2 group-hover:text-sahara-gold transition-colors">
                                                    {safari.name}
                                                </h3>
                                                <p className="text-stone-gray text-sm line-clamp-2 mb-4">{safari.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-2xl font-bold text-charcoal font-headline">${safari.price.toLocaleString()}</span>
                                                    <ArrowRight className="h-5 w-5 text-sahara-gold group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-charcoal">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h3 className="text-3xl font-headline font-bold text-white mb-4">
                            Ready to Explore {destination.name}?
                        </h3>
                        <p className="text-white/80 mb-8">
                            Let us design a custom safari that includes this amazing destination
                        </p>
                        <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white">
                            <Link href={route('contact')}>Plan Your Safari <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
