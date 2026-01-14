import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Palmtree, Waves, Sun, Ship, Compass, MapPin, Fish } from 'lucide-react';
import { resolveImagePath } from '@/lib/utils';

interface ZanzibarBeachSafariProps {
    safaris?: Array<any>;
    images?: Record<string, any>;
}

export default function ZanzibarBeachSafari({ safaris, images }: ZanzibarBeachSafariProps) {
    return (
        <MainLayout title="Zanzibar Beach Safari - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0">
                        <img
                            src={images?.services_zanzibar_hero?.image_path ? resolveImagePath(images.services_zanzibar_hero.image_path) : '/images/destination-zanzibar.jpg'}
                            alt={images?.services_zanzibar_hero?.alt_text || 'Zanzibar Beach'}
                            className="w-full h-full object-cover opacity-80"
                            onError={(e) => { e.currentTarget.src = '/images/destination-zanzibar.jpg'; }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-6 animate-fade-in-up">Island Paradise</span>
                        <div className="relative inline-block mb-8">
                            <span className="accent-script text-6xl md:text-9xl absolute -top-16 -left-12 text-white/10 transform -rotate-6 select-none pointer-events-none">Exotic</span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-headline font-bold text-white mb-6 drop-shadow-2xl">
                                Zanzibar
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Where the scent of cloves fills the air and time slows down. The perfect post-safari retreat on the Spice Island.
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/contact">Plan Your Getaway</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Intro Section - Stone Town */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="md:w-1/2 relative order-2 md:order-1">
                                <div className="absolute -top-10 -left-10 w-full h-full border-2 border-sahara-gold rounded-3xl z-0 hidden md:block" />
                                <img
                                    src={images?.services_zanzibar_intro?.image_path ? resolveImagePath(images.services_zanzibar_intro.image_path) : '/images/zanzibar-stone-town-street.png'}
                                    alt={images?.services_zanzibar_intro?.alt_text || 'Stone Town Alley'}
                                    className="relative z-10 rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                                    onError={(e) => { e.currentTarget.src = '/images/zanzibar-stone-town-street.png'; }}
                                />
                            </div>
                            <div className="md:w-1/2 order-1 md:order-2">
                                <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-4">UNESCO World Heritage</span>
                                <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">
                                    Lost in Stone Town
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Wander through a labyrinth of narrow streets where history whispers from every corner. Stone Town is a sensory overload of carved wooden doors, bustling bazaars, and the call to prayer echoing over the rooftops.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Discover the Sultan's Palace, the Old Fort, and the poignant Slave Market Memorial. Sip spiced coffee at Jaws Corner and watch the dhows sail into the sunset at Forodhani Gardens.
                                </p>
                                <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full">
                                    Explore Cultural Tours
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Beach Regions */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-4">Choose Your Coast</h2>
                            <p className="text-lg text-stone-600 max-w-2xl mx-auto">From the vibrant north to the tranquil east, every coast offers a different vibe.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Nungwi / Kendwa */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 hover:border-sahara-gold/30 transition-all group">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sahara-gold/10 transition-colors">
                                    <Sun className="h-6 w-6 text-blue-500 group-hover:text-sahara-gold" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">North Coast</h3>
                                <p className="text-sm font-bold text-sahara-gold mb-4 uppercase tracking-wide">Nungwi & Kendwa</p>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    Famous for not being tidal, meaning you can swim all day. Vibrant atmosphere, stunning sunsets, and plenty of beach bars and restaurants.
                                </p>
                                <div className="flex gap-2 text-xs font-medium text-stone-400">
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Swimming</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Nightlife</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Resorts</span>
                                </div>
                            </div>

                            {/* East Coast */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 hover:border-sahara-gold/30 transition-all group">
                                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sahara-gold/10 transition-colors">
                                    <Waves className="h-6 w-6 text-teal-500 group-hover:text-sahara-gold" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">East Coast</h3>
                                <p className="text-sm font-bold text-sahara-gold mb-4 uppercase tracking-wide">Matemwe, Paje, Jambiani</p>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    Qiueter and more secluded. Famous for kitesurfing (Paje) and boutique lodges. The tide goes far out, revealing vast flats perfect for reef walks.
                                </p>
                                <div className="flex gap-2 text-xs font-medium text-stone-400">
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Relaxation</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Kitesurfing</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Secluded</span>
                                </div>
                            </div>

                            {/* Private Islands */}
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100/50 hover:border-sahara-gold/30 transition-all group">
                                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-sahara-gold/10 transition-colors">
                                    <Palmtree className="h-6 w-6 text-purple-500 group-hover:text-sahara-gold" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Private Islands</h3>
                                <p className="text-sm font-bold text-sahara-gold mb-4 uppercase tracking-wide">Mnemba & Thanda</p>
                                <p className="text-stone-600 leading-relaxed mb-6">
                                    The ultimate in barefoot luxury. Exclusive private islands offering unparalleled privacy, world-class diving, and dedicated staff.
                                </p>
                                <div className="flex gap-2 text-xs font-medium text-stone-400">
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Exclusive</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Diving</span>
                                    <span className="bg-stone-100 px-3 py-1 rounded-full">Honeymoon</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Activities Grid */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
                                <img src={images?.services_zanzibar_spice?.image_path ? resolveImagePath(images.services_zanzibar_spice.image_path) : '/images/sustainable_safari.jpg'} alt={images?.services_zanzibar_spice?.alt_text || 'Spice Tour'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.currentTarget.src = '/images/sustainable_safari.jpg'; }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h4 className="font-headline font-bold text-2xl mb-1">Spice Tours</h4>
                                    <p className="text-sm text-white/80">Smell & Taste History</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer lg:col-span-2">
                                <img src="/images/destination-zanzibar.jpg" alt="Blue Safari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h4 className="font-headline font-bold text-2xl mb-1">Safari Blue</h4>
                                    <p className="text-sm text-white/80">Dhow Sailing & Snorkeling</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
                                <img src={images?.services_zanzibar_forest?.image_path ? resolveImagePath(images.services_zanzibar_forest.image_path) : '/images/blog-post-3.jpg'} alt={images?.services_zanzibar_forest?.alt_text || 'Jozani Forest'} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.currentTarget.src = '/images/blog-post-3.jpg'; }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-6 left-6 text-white">
                                    <h4 className="font-headline font-bold text-2xl mb-1">Jozani Forest</h4>
                                    <p className="text-sm text-white/80">Red Colobus Monkeys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
