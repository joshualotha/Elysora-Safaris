import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

interface DestinationsIndexProps {
    destinations: Array<any>;
}

export default function DestinationsIndex({ destinations }: DestinationsIndexProps) {
    return (
        <MainLayout title="Destinations - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/destination-serengeti.jpg" alt="Destinations" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Discover Tanzania</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mt-4 mb-6">
                            Our Destinations
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Explore the diverse landscapes and wildlife havens of Tanzania
                        </p>
                    </div>
                </section>

                {/* Destinations Grid */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {destinations.map((dest, index) => (
                                <Link
                                    href={route('destinations.show', dest.slug)}
                                    key={dest.slug}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative aspect-[4/5]">
                                        <img
                                            src={`/images/${dest.image}.jpg`}
                                            alt={dest.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-8">
                                            <span className="text-sahara-gold text-sm font-bold uppercase tracking-wider mb-2 block">
                                                Destination {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <h3 className="text-3xl font-headline font-bold text-white mb-3 group-hover:text-sahara-gold transition-colors">
                                                {dest.name}
                                            </h3>
                                            <p className="text-white/80 leading-relaxed mb-4 line-clamp-3">
                                                {dest.description}
                                            </p>

                                            {/* Attractions */}
                                            {dest.attractions && dest.attractions.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {dest.attractions.slice(0, 3).map((attr: string) => (
                                                        <span key={attr} className="text-xs px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                                                            {attr}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center gap-2 text-sahara-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                Explore Destination <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
