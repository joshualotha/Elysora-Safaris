import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { HandHeart, Users, Music, Camera, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CulturalToursProps {
    images?: Record<string, any>;
}

export default function CulturalTours({ images }: CulturalToursProps) {
    return (
        <MainLayout title="Cultural Tours - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0">
                        <img
                            src={images?.services_cultural_hero?.image_path ? `/storage/${images.services_cultural_hero.image_path}` : '/images/culture-maasai-portrait.png'}
                            alt={images?.services_cultural_hero?.alt_text || 'Maasai Warrior'}
                            className="w-full h-full object-cover opacity-60"
                            onError={(e) => { e.currentTarget.src = '/images/culture-maasai-portrait.png'; }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-6 animate-fade-in-up">Authentic Connections</span>
                        <div className="relative inline-block mb-8">
                            <span className="accent-script text-6xl md:text-9xl absolute -top-16 -left-20 text-white/5 transform -rotate-12 select-none pointer-events-none">Heritage</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold text-white mb-6 drop-shadow-lg">
                                Cultural Tours
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Go beyond the safari vehicle. Connect with the people who call this land home, share their stories, and experience the beating heart of Tanzania.
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/contact">Plan Your Cultural Experience</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">
                                    More Than Just Wildlife
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    Tanzania is a tapestry of over 120 distinct ethnic groups, each with its own language, customs, and traditions. While the wildlife is spectacular, it is the warmth and spirit of the people that often leaves the most lasting impression.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    Our cultural tours are designed to be respectful, authentic, and mutually beneficial. We move away from staged performances and towards genuine interactions, allowing you to learn from local communities while directly supporting their livelihoods.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-start gap-3">
                                        <Users className="h-6 w-6 text-sahara-gold mt-1" />
                                        <div>
                                            <h4 className="font-bold text-charcoal">120+ Tribes</h4>
                                            <p className="text-sm text-gray-500">Diverse heritage</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <HandHeart className="h-6 w-6 text-sahara-gold mt-1" />
                                        <div>
                                            <h4 className="font-bold text-charcoal">Responsible</h4>
                                            <p className="text-sm text-gray-500">Community support</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-4 bg-sand rounded-3xl transform rotate-3" />
                                <img
                                    src="/images/maasai_warrior.jpg"
                                    alt="Cultural Interaction"
                                    className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experiences Grid */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm">Immersive Journeys</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mt-2">Signature Experiences</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Maasai */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src="/images/culture-maasai-portrait.png" alt="Maasai" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-headline font-bold text-charcoal mb-3">Maasai Boma Visit</h3>
                                    <p className="text-gray-600 mb-6">
                                        Visit a traditional Boma in Longido or Ngorongoro. Learn about their pastoral lifestyle, assist with milking cattle, and listen to elders share ancient stories around the fire.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Traditional Dance</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Beadwork Workshops</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Village Walks</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 2: Hadzabe */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    {/* Using placeholder for Hadzabe if specific one not generated yet, or reuse generic */}
                                    <img src="/images/blog-post-3.jpg" alt="Hadzabe" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-headline font-bold text-charcoal mb-3">Hadzabe Hunting</h3>
                                    <p className="text-gray-600 mb-6">
                                        Journey to Lake Eyasi to meet the Hadzabe, one of the last remaining hunter-gatherer tribes in Africa. Join them for a morning hunt and learn their unique click language.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Bow & Arrow Skills</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Bush Food Foraging</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Ancient Traditions</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card 3: Stone Town */}
                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img src="/images/zanzibar-stone-town-street.png" alt="Stone Town" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-headline font-bold text-charcoal mb-3">Swahili Coastal Culture</h3>
                                    <p className="text-gray-600 mb-6">
                                        Explore the melting pot of cultures in Zanzibar. Wander the alleyways of Stone Town, smell the spices on a plantation tour, and taste the flavors of Swahili cuisine.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Spice Farm Tours</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Historical Walking Tours</li>
                                        <li className="flex items-center gap-2 text-sm text-gray-500"><CheckCircle2 className="h-4 w-4 text-sahara-gold" /> Cooking Classes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-charcoal text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src="/images/sustainable_safari.jpg" alt="Pattern" className="w-full h-full object-cover" />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Experience the Real Tanzania</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                            Add a cultural day to your safari itinerary and create memories that will last a lifetime.
                        </p>
                        <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                            <Link href="/custom-safari">Customize Your Trip</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
