import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Users, Calendar, Banknote, ShieldCheck, CheckCircle2, MapPin, ArrowRight } from 'lucide-react';

interface GroupSafariProps {
    safaris?: Array<any>;
}

export default function GroupSafari({ safaris = [] }: GroupSafariProps) {
    return (
        <MainLayout title="Group Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0">
                        <img
                            src="/images/group-safari-vehicle.png"
                            alt="Group Safari Adventure"
                            className="w-full h-full object-cover opacity-80"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-6 animate-fade-in-up">Shared Adventures</span>
                        <div className="relative inline-block mb-8">
                            <span className="accent-script text-6xl md:text-9xl absolute -top-16 -left-12 text-white/5 transform -rotate-3 select-none pointer-events-none">Together</span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-headline font-bold text-white mb-6 drop-shadow-2xl">
                                Group Safari
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                            Experience the magic of Tanzania with like-minded travelers. Affordable, social, and unforgettable.
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg" className="bg-sahara-gold hover:bg-sahara-gold/90 text-white rounded-full px-8 py-6 text-lg">
                                <Link href="/contact">Join a Group</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Intro */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-headline font-bold text-charcoal mb-8">Why Join a Group?</h2>
                        <p className="text-lg text-stone-600 leading-relaxed mb-12">
                            Group safaris are the perfect way to explore Tanzania if you're a solo traveler, a couple on a budget, or simply someone who loves meeting new people. By sharing the cost of the vehicle and guide, you get a premium experience at a fraction of the price.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="flex gap-4">
                                <div className="bg-green-50 p-3 rounded-xl h-fit"><Banknote className="h-6 w-6 text-green-600" /></div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">Best Value</h4>
                                    <p className="text-stone-500 text-sm mt-1">Share vehicle and guide costs to save up to 40% vs private trips.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-blue-50 p-3 rounded-xl h-fit"><Users className="h-6 w-6 text-blue-600" /></div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">New Friends</h4>
                                    <p className="text-stone-500 text-sm mt-1">Bond over incredible sightings and campfire stories with global travelers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-purple-50 p-3 rounded-xl h-fit"><Calendar className="h-6 w-6 text-purple-600" /></div>
                                <div>
                                    <h4 className="font-bold text-charcoal text-lg">Guaranteed Dates</h4>
                                    <p className="text-stone-500 text-sm mt-1">Fixed departure dates make planning your travel logistics easy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Departures Table */}
                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex justify-between items-end mb-10 border-b border-stone-200 pb-4">
                            <h2 className="text-3xl font-headline font-bold text-charcoal">Available Group Safaris</h2>
                            <Link href={route('safaris.index', { category: 'group-safari' })} className="text-sahara-gold font-bold hover:underline">View All &rarr;</Link>
                        </div>

                        {safaris && safaris.length > 0 ? (
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                                <div className="grid grid-cols-5 bg-charcoal text-white p-4 font-bold text-sm uppercase tracking-wider hidden md:grid">
                                    <div className="col-span-2">Safari Package</div>
                                    <div>Duration</div>
                                    <div>Group Size</div>
                                    <div>Price</div>
                                </div>

                                {safaris.map((safari, index) => (
                                    <div key={safari.slug} className={`grid md:grid-cols-5 p-6 ${index < safaris.length - 1 ? 'border-b border-stone-100' : ''} items-center hover:bg-stone-50 transition-colors`}>
                                        <div className="col-span-2 mb-2 md:mb-0">
                                            <h4 className="font-bold text-lg text-charcoal">{safari.name}</h4>
                                            <p className="text-stone-500 text-sm flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />
                                                {safari.destinations?.slice(0, 2).join(', ')}
                                                {safari.destinations?.length > 2 && ` +${safari.destinations.length - 2} more`}
                                            </p>
                                        </div>
                                        <div className="text-stone-600 mb-2 md:mb-0 font-medium">{safari.duration} Days</div>
                                        <div className="text-green-600 font-bold text-sm flex items-center gap-2 mb-2 md:mb-0">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            Max 6 People
                                        </div>
                                        <div className="flex justify-between items-center md:block">
                                            <span className="font-bold text-charcoal block">${safari.price.toLocaleString()}</span>
                                            <Button asChild size="sm" variant="outline" className="md:mt-2">
                                                <Link href={route('safaris.show', safari.slug)}>View Details</Link>
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-12 text-center">
                                <p className="text-stone-gray text-lg">No group safaris available at the moment. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Specifics */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-sand rounded-3xl p-10">
                                <h3 className="text-2xl font-headline font-bold mb-6">Small Group Guarantee</h3>
                                <p className="text-stone-600 mb-6 font-medium">We limit our groups to a maximum of 6 people per vehicle.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-charcoal mt-0.5" />
                                        <span className="text-stone-600">Everyone gets a window seat guarantee.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-charcoal mt-0.5" />
                                        <span className="text-stone-600">Pop-up roof for unobstructed 360° wildlife viewing.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-charcoal mt-0.5" />
                                        <span className="text-stone-600">Plenty of space for camera gear and bags.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h3 className="text-2xl font-headline font-bold mb-4">Who is this for?</h3>
                                <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                                    Our group safaris attract a diverse mix of ages and nationalities. Common participants include solo travelers, groups of friends, and young couples. It's an easy-going, fun, and respectful environment.
                                </p>
                                <div className="p-6 border-l-4 border-sahara-gold bg-stone-50 italic text-stone-600">
                                    "I was worried about traveling solo, but my group became family by day two. We laughed, spotted lions, and shared amazing meals. Best decision ever!" <br /> <span className="text-sm font-bold not-italic text-charcoal mt-2 block">- Sarah, UK</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
