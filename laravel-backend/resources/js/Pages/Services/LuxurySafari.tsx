import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Plane, Star, Utensils, Check, Wine, Diamond, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { resolveImagePath } from '@/lib/utils';

interface LuxurySafariProps {
    images?: Record<string, any>;
}

export default function LuxurySafari({ images }: LuxurySafariProps) {
    return (
        <MainLayout title="Luxury Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                    <img
                        src={images?.services_luxury_hero?.image_path ? resolveImagePath(images.services_luxury_hero.image_path) : '/images/luxury-safari-hero.jpg'}
                        alt={images?.services_luxury_hero?.alt_text || 'Luxury Safari'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 md:scale-105"
                        onError={(e) => { e.currentTarget.src = '/images/luxury-safari-hero.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-charcoal/90" />

                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4 block animate-fade-in-up">
                            The Ultimate Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white mb-6 animate-fade-in-up delay-100">
                            Luxury & Fly-In Safaris
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                            Experience Tanzania in unparalleled comfort, style, and convenience.
                        </p>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                                <img
                                    src={images?.services_luxury_intro?.image_path ? resolveImagePath(images.services_luxury_intro.image_path) : '/images/accommodation-lodge.jpg'}
                                    alt={images?.services_luxury_intro?.alt_text || 'Luxury Lodge Pool'}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    draggable={false}
                                    onError={(e) => { e.currentTarget.src = '/images/accommodation-lodge.jpg'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sahara-gold/10 text-sahara-gold font-bold uppercase tracking-wider text-xs">
                                    <Diamond className="h-4 w-4" />
                                    Uncompromising Quality
                                </div>
                                <h2 className="text-4xl md:text-6xl font-headline font-bold text-charcoal leading-tight">
                                    Uncompromising Comfort in the Wild
                                </h2>
                                <p className="text-lg text-stone-gray leading-relaxed">
                                    A luxury safari isn't just about premium accommodation—it's about seamless service, exclusive experiences, and maximizing your time.
                                </p>
                                <p className="text-lg text-stone-gray leading-relaxed">
                                    Fly-in safaris whisk you between remote parks in small aircraft, offering breathtaking aerial views and saving you long hours on the road.
                                    Arrive fresh and ready to explore, staying in world-class lodges where every detail is curated for your pleasure.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory hover:bg-sahara-gold/5 transition-colors duration-300">
                                        <div className="p-3 bg-white rounded-full shadow-sm">
                                            <Plane className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Fly-In Convenience</h4>
                                            <p className="text-sm text-stone-gray">Maximize game viewing time</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory hover:bg-sahara-gold/5 transition-colors duration-300">
                                        <div className="p-3 bg-white rounded-full shadow-sm">
                                            <Star className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Exclusive Lodges</h4>
                                            <p className="text-sm text-stone-gray">Private pools & butler service</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory hover:bg-sahara-gold/5 transition-colors duration-300">
                                        <div className="p-3 bg-white rounded-full shadow-sm">
                                            <Utensils className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Gourmet Dining</h4>
                                            <p className="text-sm text-stone-gray">A la carte & fine wines</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 rounded-xl bg-ivory hover:bg-sahara-gold/5 transition-colors duration-300">
                                        <div className="p-3 bg-white rounded-full shadow-sm">
                                            <Wine className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Premium Drinks</h4>
                                            <p className="text-sm text-stone-gray">Sundowners in the bush</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who is this for? Section - Dark Mode style */}
                <section className="py-24 bg-charcoal text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <img src={images?.services_luxury_pattern?.image_path ? resolveImagePath(images.services_luxury_pattern.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl">
                                <h3 className="text-3xl font-headline font-bold mb-8">Who is this for?</h3>
                                <ul className="space-y-6">
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-sahara-gold/20 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                            <Check className="h-5 w-5 text-sahara-gold group-hover:text-charcoal" />
                                        </div>
                                        <span className="text-lg text-white/90">Travelers seeking maximum comfort & privacy</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-sahara-gold/20 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                            <Check className="h-5 w-5 text-sahara-gold group-hover:text-charcoal" />
                                        </div>
                                        <span className="text-lg text-white/90">Honeymooners and special occasions</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-sahara-gold/20 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                            <Check className="h-5 w-5 text-sahara-gold group-hover:text-charcoal" />
                                        </div>
                                        <span className="text-lg text-white/90">Those with a limited timeframe (Fly-in saves time)</span>
                                    </li>
                                    <li className="flex items-center gap-4 group">
                                        <div className="w-10 h-10 rounded-full bg-sahara-gold/20 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                            <Check className="h-5 w-5 text-sahara-gold group-hover:text-charcoal" />
                                        </div>
                                        <span className="text-lg text-white/90">Discerning travelers who appreciate seamless logistics</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col justify-center items-center text-center p-10">
                                <Diamond className="w-20 h-20 text-sahara-gold mb-6 animate-pulse" />
                                <h3 className="text-4xl font-headline font-bold mb-6">Indulge in the Extraordinary</h3>
                                <p className="text-xl text-white/70 mb-8 max-w-md">
                                    Let us create a bespoke itinerary that exceeds your every expectation.
                                </p>
                                <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white text-lg px-8 py-6 rounded-full font-bold">
                                    <Link href={route('safaris.index')}>
                                        Browse Luxury Packages <ArrowRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Example Luxury Safaris Preview */}
                <section className="py-24 bg-ivory">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Curated for you</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mt-2 mb-6">
                                Our Accessible Luxury Safaris
                            </h2>
                            <p className="text-lg text-stone-gray max-w-2xl mx-auto">
                                Hand-picked itineraries featuring the finest lodges in Tanzania.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            <Link href={route('safaris.show', 'tanzania-luxury-migration-safari')} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                                <img
                                    src={images?.services_luxury_experience?.image_path ? resolveImagePath(images.services_luxury_experience.image_path) : '/images/safari-card-1.jpg'}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt={images?.services_luxury_experience?.alt_text || 'Luxury Migration'}
                                    onError={(e) => { e.currentTarget.src = '/images/safari-card-1.jpg'; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <h3 className="text-3xl font-headline font-bold text-white mb-2 group-hover:text-sahara-gold transition-colors">Tanzania Luxury Migration</h3>
                                    <p className="text-white/80 line-clamp-2 mb-4">A 9-day spectacular journey following the Great Migration in ultimate comfort.</p>
                                    <div className="flex items-center gap-2 text-sahara-gold font-bold uppercase tracking-wider text-sm">
                                        View Itinerary <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </Link>

                            <Link href={route('contact')} className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl bg-charcoal flex items-center justify-center border-4 border-dashed border-white/20 hover:border-sahara-gold/50 transition-colors">
                                <div className="text-center p-8">
                                    <Diamond className="w-16 h-16 text-sahara-gold mx-auto mb-6" />
                                    <h3 className="text-3xl font-headline font-bold text-white mb-4">Design Your Own</h3>
                                    <p className="text-white/70 mb-6 max-w-xs mx-auto">Tell us your dates and preferences, and we'll craft the perfect luxury escape.</p>
                                    <Button variant="outline" className="border-sahara-gold text-sahara-gold hover:bg-sahara-gold hover:text-charcoal rounded-full">
                                        Start Customizing
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
