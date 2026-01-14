import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Mountain, Cloud, Compass, Thermometer, CheckCircle2, Trophy, HeartPulse } from 'lucide-react';
import { resolveImagePath } from '@/lib/utils';

interface MountainHikingProps {
    images?: Record<string, any>;
}

export default function MountainHiking({ images }: MountainHikingProps) {
    return (
        <MainLayout title="Mountain Hiking - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0">
                        <img
                            src={images?.services_mountain_hero?.image_path ? resolveImagePath(images.services_mountain_hero.image_path) : '/images/mountain-kilimanjaro-hiker.png'}
                            alt={images?.services_mountain_hero?.alt_text || 'Kilimanjaro Trekking'}
                            className="w-full h-full object-cover opacity-70"
                            onError={(e) => { e.currentTarget.src = '/images/mountain-kilimanjaro-hiker.png'; }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-6 animate-fade-in-up">The Roof of Africa</span>
                        <div className="relative inline-block mb-8">
                            <span className="accent-script text-6xl md:text-9xl absolute -top-16 -left-12 text-white/5 transform -rotate-6 select-none pointer-events-none">Summit</span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-headline font-bold text-white mb-6 drop-shadow-2xl">
                                Kilimanjaro
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Challenge yourself to conquer the world's highest free-standing mountain. A journey of endurance, breathtaking vistas, and personal triumph.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/contact">Start Your Climb</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg bg-transparent">
                                <Link href="#routes">View Routes</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Statistics / Intro */}
                <section className="py-20 bg-white relative z-20 -mt-10 mx-4 md:mx-10 rounded-3xl shadow-xl border border-stone-100">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-200">
                            <div>
                                <span className="block text-4xl md:text-5xl font-bold text-charcoal mb-2">5,895m</span>
                                <span className="text-stone-500 uppercase text-xs tracking-wider">Uhuru Peak Elevation</span>
                            </div>
                            <div>
                                <span className="block text-4xl md:text-5xl font-bold text-charcoal mb-2">97%</span>
                                <span className="text-stone-500 uppercase text-xs tracking-wider">Success Rate (Lemosho)</span>
                            </div>
                            <div>
                                <span className="block text-4xl md:text-5xl font-bold text-charcoal mb-2">7-9</span>
                                <span className="text-stone-500 uppercase text-xs tracking-wider">Recommended Days</span>
                            </div>
                            <div>
                                <span className="block text-4xl md:text-5xl font-bold text-charcoal mb-2">5</span>
                                <span className="text-stone-500 uppercase text-xs tracking-wider">Eco-Zones</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Climb With Us */}
                <section className="py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal">Why Climb With Elysora?</h2>
                            <p className="text-lg text-stone-600 mt-4 max-w-2xl mx-auto">Your safety and success are our top priorities. We invest in the best equipment, regular training, and ethical treatment of our porters.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-10">
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-sand rounded-xl flex items-center justify-center mb-6">
                                    <HeartPulse className="h-7 w-7 text-sahara-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">Safety First</h3>
                                <p className="text-stone-600">All our head guides are Wilderness First Responder certified. We carry oxygen tanks, pulse oximeters, and comprehensive medical kits on every climb.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-sand rounded-xl flex items-center justify-center mb-6">
                                    <Trophy className="h-7 w-7 text-sahara-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">Experienced Team</h3>
                                <p className="text-stone-600">Our guides have summitted hundreds of times. They know the mountain's moods, the best pace (pole pole), and how to keep morale high.</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all">
                                <div className="w-14 h-14 bg-sand rounded-xl flex items-center justify-center mb-6">
                                    <Mountain className="h-7 w-7 text-sahara-gold" />
                                </div>
                                <h3 className="text-xl font-bold text-charcoal mb-3">Premium Gear</h3>
                                <p className="text-stone-600">We use high-quality, four-season mountain tents, thick sleeping mats, and provide spacious mess tents for comfortable dining.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Routes Section */}
                <section id="routes" className="py-24 bg-charcoal text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                            <div>
                                <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-2">Choose Your Path</span>
                                <h2 className="text-4xl md:text-5xl font-headline font-bold">Popular Routes</h2>
                            </div>
                            {/* <p className="text-stone-400 max-w-md mt-4 md:mt-0">Each route offers a unique perspective. We recommend longer routes for better acclimatization and higher success rates.</p> */}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Machame Route */}
                            <div className="group relative bg-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors border border-white/10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-sahara-gold text-charcoal font-bold px-4 py-1 rounded-full text-sm">Most Popular</div>
                                    <Compass className="h-8 w-8 text-stone-400 group-hover:text-sahara-gold transition-colors" />
                                </div>
                                <h3 className="text-3xl font-headline font-bold mb-4">Machame Route</h3>
                                <p className="text-stone-300 mb-8 leading-relaxed">
                                    Known as the "Whiskey Route," Machame offers distinct difficulty and stunning scenic variety. It has a great climb-high, sleep-low profile which aids acclimatization.
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 text-sm font-medium text-stone-400 mb-8">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> 6-7 Days</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> High Success Rate</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Scenic Variety</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Camping Only</div>
                                </div>
                                <Button asChild variant="outline" className="w-full border-stone-600 text-white hover:bg-sahara-gold hover:border-sahara-gold hover:text-charcoal transition-all">
                                    <Link href="/contact">Inquire about Machame</Link>
                                </Button>
                            </div>

                            {/* Lemosho Route */}
                            <div className="group relative bg-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-colors border border-white/10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-emerald-600 text-white font-bold px-4 py-1 rounded-full text-sm">Best Scenic</div>
                                    <Compass className="h-8 w-8 text-stone-400 group-hover:text-sahara-gold transition-colors" />
                                </div>
                                <h3 className="text-3xl font-headline font-bold mb-4">Lemosho Route</h3>
                                <p className="text-stone-300 mb-8 leading-relaxed">
                                    Considered the most beautiful route on Kilimanjaro. It starts on the western side, crosses the Shira Plateau, and joins Machame. Less crowded in the first few days.
                                </p>
                                <div className="grid grid-cols-2 gap-y-4 text-sm font-medium text-stone-400 mb-8">
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> 7-9 Days</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Highest Success Rate</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Low Traffic</div>
                                    <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Camping Only</div>
                                </div>
                                <Button asChild variant="outline" className="w-full border-stone-600 text-white hover:bg-sahara-gold hover:border-sahara-gold hover:text-charcoal transition-all">
                                    <Link href="/contact">Inquire about Lemosho</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-stone-400 mb-6">Also offering Marangu "Coca-Cola" Route and Mount Meru acclimitization climbs.</p>
                        </div>
                    </div>
                </section>

                {/* Mount Meru CTA */}
                <section className="py-24 bg-stone-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
                            <div className="md:w-1/2 relative h-[400px] md:h-auto">
                                <img src={images?.services_mountain_meru?.image_path ? resolveImagePath(images.services_mountain_meru.image_path) : '/images/destination-kilimanjaro.jpg'} alt={images?.services_mountain_meru?.alt_text || 'Mount Meru'} className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/destination-kilimanjaro.jpg'; }} />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                                <div className="absolute bottom-10 left-10 text-white">
                                    <h3 className="text-3xl font-bold font-headline">Mount Meru</h3>
                                    <p className="text-white/90">4,562m Elevation</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                                <h3 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-6">The Perfect Warm-Up</h3>
                                <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                                    Often overlooked, Mount Meru offers a spectacular 3-4 day trek with stunning views of Kilimanjaro. It's the ideal way to acclimatize before attempting the Roof of Africa, significantly increasing your summit success.
                                </p>
                                <Button asChild size="lg" className="self-start bg-charcoal hover:bg-black text-white rounded-full">
                                    <Link href="/contact">Explore Mount Meru</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
