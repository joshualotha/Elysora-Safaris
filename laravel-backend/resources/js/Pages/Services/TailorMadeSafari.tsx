import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Compass, Calendar, Camera, Binoculars, Star, Car, Clock, ShieldCheck } from 'lucide-react';

export default function TailorMadeSafari() {
    return (
        <MainLayout title="Tailor Made Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0">
                        <img
                            src="/images/tailor-made-bush-dinner.png"
                            alt="Private Bush Dinner"
                            className="w-full h-full object-cover opacity-75"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-6 animate-fade-in-up">Your Rules. Your Rhythm.</span>
                        <div className="relative inline-block mb-8">
                            <span className="accent-script text-6xl md:text-9xl absolute -top-16 -left-12 text-white/5 transform -rotate-6 select-none pointer-events-none">Exclusive</span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-headline font-bold text-white mb-6 drop-shadow-2xl">
                                Tailor Made
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Craft a journey that is uniquely yours. From private guides to exclusive lodges, experience Tanzania exactly how you dreamed it.
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/contact">Design Your Safari</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-16 items-center">
                            <div className="md:w-1/2">
                                <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">Defined by You</h2>
                                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                                    A tailor-made safari is the ultimate luxury: the luxury of choice. Whether you want to spend hours photographing a single pride of lions, sleep in a star-bed open to the sky, or combine a rugged adventure with a 5-star beach retreat, we make it happen.
                                </p>
                                <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                    There are no fixed schedules, no other guests to accommodate, and no compromises. Just you, your private guide, and the wild.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-sand p-3 rounded-full"><Car className="h-6 w-6 text-charcoal" /></div>
                                        <div><h4 className="font-bold text-charcoal">Private Vehicle</h4><p className="text-sm text-stone-500">Exclusive use 4x4</p></div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-sand p-3 rounded-full"><Binoculars className="h-6 w-6 text-charcoal" /></div>
                                        <div><h4 className="font-bold text-charcoal">Expert Guide</h4><p className="text-sm text-stone-500">Dedicated to you</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 relative">
                                <div className="absolute top-10 right-10 w-full h-full border-2 border-sahara-gold/30 rounded-full z-0" />
                                <img src="/images/luxury_tent.jpg" alt="Luxury Experience" className="relative z-10 w-full rounded-tr-[100px] rounded-bl-[100px] shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customization Grid */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm">Infinite Possibilities</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mt-2">Perfect For...</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <Camera className="h-10 w-10 text-sahara-gold mb-6" />
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Photographers</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Need the perfect light? We'll leave camp before dawn and stay out until dusk. Request bean bags, window mounts, and a guide who understands lighting and positioning.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <Star className="h-10 w-10 text-sahara-gold mb-6" />
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Honeymooners</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Seclusion is key. Enjoy private bush dinners, plunge pools, and romantic sundowners. We select camps known for intimacy and exceptional service.
                                </p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                                <Clock className="h-10 w-10 text-sahara-gold mb-6" />
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Families</h3>
                                <p className="text-stone-600 leading-relaxed">
                                    Travel at your own pace. Stop when the kids need a break, return to the lodge early for a swim, and enjoy family-friendly guides who engage young explorers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-24 bg-charcoal text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-headline font-bold">How It Works</h2>
                            </div>
                            <Button asChild variant="link" className="text-sahara-gold hover:text-white p-0 text-lg mt-4 md:mt-0">
                                <Link href="/contact">Start Planning Now &rarr;</Link>
                            </Button>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-700 z-0" />

                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 bg-sahara-gold rounded-full flex items-center justify-center text-charcoal font-bold text-2xl shadow-lg border-4 border-charcoal">1</div>
                                <h3 className="text-xl font-bold">Consultation</h3>
                                <p className="text-stone-400">We discuss your dreams, dates, budget, and must-sees via video call or email.</p>
                            </div>
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-white border border-stone-600 font-bold text-2xl shadow-lg border-4 border-charcoal">2</div>
                                <h3 className="text-xl font-bold">Proposal</h3>
                                <p className="text-stone-400">Our experts craft a detailed itinerary with hand-picked lodges and activities for you to review.</p>
                            </div>
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-white border border-stone-600 font-bold text-2xl shadow-lg border-4 border-charcoal">3</div>
                                <h3 className="text-xl font-bold">Refinement</h3>
                                <p className="text-stone-400">Collaborate with us to tweak every detail until it's absolutely perfect.</p>
                            </div>
                            <div className="relative z-10 flex flex-col gap-6">
                                <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center text-white border border-stone-600 font-bold text-2xl shadow-lg border-4 border-charcoal">4</div>
                                <h3 className="text-xl font-bold">Departure</h3>
                                <p className="text-stone-400">Relax knowing every transfer, flight, and booking is managed. You just enjoy the ride.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
