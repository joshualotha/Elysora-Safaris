import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/Components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { Badge } from '@/Components/ui/badge';
import {
    CalendarDays, Sun, CloudRain, Camera, Stethoscope,
    Shirt, CreditCard, Check, ArrowRight, Binoculars
} from 'lucide-react';
import { resolveImagePath } from '@/lib/utils';
import { monthlyGuide } from '@/lib/data';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/Components/ui/accordion';

interface SafariGuideProps {
    images?: Record<string, any>;
}

export default function SafariGuide({ images }: SafariGuideProps) {
    return (
        <MainLayout title="Safari Planning Guide - Elysora Safaris">
            <div className="flex flex-col min-h-screen font-sans">
                {/* Hero Section */}
                <section className="relative h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
                    <img
                        src={images?.planning_safari_guide_hero?.image_path ? resolveImagePath(images.planning_safari_guide_hero.image_path) : '/images/hero-serengeti.jpg'}
                        alt={images?.planning_safari_guide_hero?.alt_text || 'Safari Planning'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105"
                        onError={(e) => { e.currentTarget.src = '/images/hero-serengeti.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-charcoal/90" />

                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-24 md:pt-20">
                        <span className="bg-sahara-gold text-charcoal px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm mb-8 inline-block shadow-lg">
                            The Ultimate Guide
                        </span>
                        <h1 className="text-4xl md:text-7xl font-headline font-bold text-white mb-6 drop-shadow-xl">
                            Planning Your Safari
                        </h1>
                        <p className="text-lg md:text-2xl text-white/95 max-w-3xl mx-auto font-medium drop-shadow-md">
                            Everything you need to know about seasons, wildlife, and preparation for the trip of a lifetime.
                        </p>
                    </div>
                </section>

                {/* Best Time to Visit - Visual Calendar */}
                <section className="py-24 bg-charcoal text-white relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <img src={images?.planning_safari_guide_pattern?.image_path ? resolveImagePath(images.planning_safari_guide_pattern.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-sahara-gold font-bold tracking-widest uppercase mb-4 block">Year-Round Beauty</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
                                The Safari Calendar
                            </h2>
                            <p className="text-lg text-white/70 leading-relaxed mb-8">
                                Scroll through the year to see how the landscape and wildlife transform.
                                Every season paints a different masterpiece.
                            </p>

                            {/* Season Legend */}
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-wider">
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-sahara-gold"></span> Peak (Dry)</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-safari-green"></span> Green (Lush)</span>
                                <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-stone-500"></span> Shoulder</span>
                            </div>
                        </div>

                        {/* Horizontal Scroll Container */}
                        <div className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar">
                            {monthlyGuide.map((item, index) => {
                                // Map month names to Site Image keys
                                const imageKeyMap: Record<string, string> = {
                                    'January-February': 'planning_calendar_jan_feb',
                                    'March': 'planning_calendar_mar',
                                    'April-May': 'planning_calendar_apr_may',
                                    'June-July': 'planning_calendar_jun_jul',
                                    'August-October': 'planning_calendar_aug_oct',
                                    'November-December': 'planning_calendar_nov_dec',
                                };

                                const imageKey = imageKeyMap[item.month];
                                const bgImage = images?.[imageKey]?.image_path
                                    ? resolveImagePath(images[imageKey].image_path)
                                    : '/images/hero-serengeti.jpg';

                                let seasonColor = "bg-stone-500";

                                return (
                                    <div key={item.month} className="min-w-[300px] md:min-w-[350px] h-[500px] relative rounded-3xl overflow-hidden snap-center group border border-white/10 flex-shrink-0">
                                        <img
                                            src={bgImage}
                                            alt={item.month}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                        {/* Season Indicator Line */}
                                        <div className={`absolute top-0 inset-x-0 h-2 ${seasonColor}`} />

                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                                                <h3 className="text-4xl font-headline font-bold text-white mb-2">{item.month}</h3>
                                                <div className="flex items-center gap-2 text-sahara-gold font-bold uppercase tracking-wider text-xs mb-4">
                                                    {['June', 'July', 'August', 'September', 'October'].includes(item.month) ? <Sun className="h-4 w-4" /> : <CloudRain className="h-4 w-4" />}
                                                    {item.weather}
                                                </div>
                                                <p className="text-white/80 line-clamp-3 leading-relaxed mb-4 group-hover:line-clamp-none transition-all">
                                                    {item.wildlife}
                                                </p>
                                                <div className="inline-flex items-center gap-2 text-xs font-bold border border-white/30 rounded-full px-3 py-1 text-white/90">
                                                    {item.price === 'High' ? '$$$ Peak Rates' : item.price === 'Low' ? '$ Best Value' : '$$ Shoulder Rates'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="text-center mt-4">
                            <p className="text-white/40 text-sm flex items-center justify-center gap-2">
                                <ArrowRight className="h-4 w-4" /> Scroll to explore
                            </p>
                        </div>
                    </div>
                </section>

                {/* Preparation Grid */}
                <section className="py-24 bg-ivory">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">
                                Be Prepared
                            </h2>
                            <p className="text-lg text-stone-gray">
                                Essential tips for a seamless journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="bg-charcoal text-white rounded-t-xl py-8 text-center">
                                    <Camera className="h-12 w-12 text-sahara-gold mx-auto mb-4" />
                                    <CardTitle className="text-2xl font-headline">Photography</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Zoom lens (300mm+) is essential for wildlife close-ups.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Bring extra batteries and memory cards - you'll need them!</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">A beanbag helps stabilize cameras on vehicle roofs.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform md:-translate-y-4">
                                <CardHeader className="bg-safari-green text-white rounded-t-xl py-8 text-center">
                                    <Shirt className="h-12 w-12 text-white mx-auto mb-4" />
                                    <CardTitle className="text-2xl font-headline">Packing Essentials</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Neutral colors (beige, khaki) to blend in. Avoid brights or dark blue/black.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Layers are key! mornings are cold, afternoons hot.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Hat, sunglasses, and strong SPF 50+ sunscreen.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="bg-charcoal text-white rounded-t-xl py-8 text-center">
                                    <Stethoscope className="h-12 w-12 text-sahara-gold mx-auto mb-4" />
                                    <CardTitle className="text-2xl font-headline">Health & Safety</CardTitle>
                                </CardHeader>
                                <CardContent className="p-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Consult your doctor about Malaria prophylaxis.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Yellow Fever certificate needed if traveling from affected zones.</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-safari-green mt-0.5 shrink-0" />
                                            <span className="text-stone-600">Drink only bottled or filtered water provided by us.</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* New Section: What to Expect on a Typical Day */}
                <section className="py-24 bg-charcoal text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <img src={images?.planning_safari_guide_pattern_2?.image_path ? resolveImagePath(images.planning_safari_guide_pattern_2.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>
                    <div className="container mx-auto px-4 md:px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-sahara-gold font-bold tracking-widest uppercase mb-4 block">Daily Rhythm</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">A Typical Day on Safari</h2>
                            <p className="text-lg text-white/80 max-w-2xl mx-auto">
                                Safari life follows the rhythm of the sun and the animals. Here is what you can expect.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="text-3xl font-headline font-bold text-sahara-gold mb-2">05:30</div>
                                <h3 className="text-xl font-bold mb-4">Wake Up Call</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Coffee or tea is brought to your tent. The air is crisp, and the bush is waking up. This involves an early start!
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="text-3xl font-headline font-bold text-sahara-gold mb-2">06:30</div>
                                <h3 className="text-xl font-bold mb-4">Morning Game Drive</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Depart at sunrise when predators are most active. This is the best time for photography and spotting big cats on the prowl.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="text-3xl font-headline font-bold text-sahara-gold mb-2">13:00</div>
                                <h3 className="text-xl font-bold mb-4">Lunch & Siesta</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Return to camp for a hearty lunch. During the heat of the day, animals rest, and so do you. Read a book, swim, or nap.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                                <div className="text-3xl font-headline font-bold text-sahara-gold mb-2">16:00</div>
                                <h3 className="text-xl font-bold mb-4">Evening Drive</h3>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Head out again as the day cools. Enjoy a "sundowner" drink in the bush sunset before returning for dinner under the stars.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Expanded FAQ / Tips Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">Expert Planning Tips</h2>
                            <p className="text-lg text-stone-gray">Detailed advice from our seasoned guides.</p>
                        </div>

                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="border border-stone-200 rounded-lg px-6 bg-ivory">
                                <AccordionTrigger className="text-lg font-bold text-charcoal hover:text-sahara-gold hover:no-underline">
                                    Should I bring my children?
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed pb-4">
                                    Yes! Tanzania is incredibly family-friendly. However, many lodges have a minimum age (often 6 or 12 years).
                                    For younger kids, we recommend a private vehicle so you can return to camp whenever needed without disrupting others.
                                    Malaria medication for children is essential.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border border-stone-200 rounded-lg px-6 bg-ivory">
                                <AccordionTrigger className="text-lg font-bold text-charcoal hover:text-sahara-gold hover:no-underline">
                                    What about dietary requirements?
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed pb-4">
                                    Most lodges cater excellently to vegetarian, vegan, gluten-free, and halal diets.
                                    Please inform us well in advance so we can notify the camps.
                                    Expect lots of fresh fruit, vegetables, and high-quality local produce.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border border-stone-200 rounded-lg px-6 bg-ivory">
                                <AccordionTrigger className="text-lg font-bold text-charcoal hover:text-sahara-gold hover:no-underline">
                                    Driving vs. Flying
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed pb-4">
                                    <strong>Driving:</strong> You see more of the countryside and local villages. It is cheaper but can be bumpy and dusty.
                                    <br /><br />
                                    <strong>Flying:</strong> "Fly-in" safaris use light aircraft to hop between parks. It saves hours of travel time and offers amazing views, but is more expensive and has strict baggage limits (usually 15kg in soft bags).
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border border-stone-200 rounded-lg px-6 bg-ivory">
                                <AccordionTrigger className="text-lg font-bold text-charcoal hover:text-sahara-gold hover:no-underline">
                                    Is it safe?
                                </AccordionTrigger>
                                <AccordionContent className="text-stone-600 leading-relaxed pb-4">
                                    Tanzania is one of Africa's most stable and peaceful countries. On safari, you are always with professional guides.
                                    Wild animals are dangerous, but provided you stay in the vehicle and follow your guide's instructions at camp, it is very safe.
                                    Camps are unfenced, so you will be escorted to your tent after dinner.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-ivory">
                    <div className="container mx-auto px-4 text-center">
                        <Link href={route('planning.practical-information')} className="inline-flex items-center gap-2 text-charcoal hover:text-sahara-gold font-bold text-lg transition-colors group">
                            Read Detailed Practical Advice <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
