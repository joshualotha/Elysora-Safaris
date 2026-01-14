import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight } from 'lucide-react';
import CountUp from '@/Components/Shared/CountUp';
import InteractiveHero from '@/Components/Shared/InteractiveHero';
import { whyChooseUs } from '@/lib/data';
import { resolveImagePath } from '@/lib/utils';

interface HomeProps {
    featuredDestinations: Array<any>;
    safariPackages: Array<any>;
    latestBlogPosts: Array<any>;
    reviews: Array<any>;
    featuredSafari: any;
    carouselSlides?: Array<any>;
    homeImages?: Record<string, any>;
}

export default function Home({
    featuredDestinations,
    safariPackages,
    latestBlogPosts,
    reviews,
    featuredSafari,
    carouselSlides,
    homeImages
}: HomeProps) {
    return (
        <MainLayout title="Home - Elysora Digital Safari">
            <div className="flex flex-col min-h-[100dvh]">
                {/* InteractiveHero Carousel */}
                <InteractiveHero slides={carouselSlides} />

                {/* Welcome Section */}
                <section className="py-20 md:py-32 bg-white overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src={homeImages?.home_welcome_hero?.image_path ? resolveImagePath(homeImages.home_welcome_hero.image_path) : '/Welcome-to-the-Wild.png'}
                                    alt={homeImages?.home_welcome_hero?.alt_text || 'Safari Experience'}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="inline-block relative">
                                    <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm mb-2 block">Welcome to the Wild</span>
                                    <div className="relative">
                                        <span className="accent-script text-6xl md:text-8xl absolute -top-8 -left-6 text-sahara-gold/30 transform -rotate-12 select-none pointer-events-none z-0">Experience</span>
                                        <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-charcoal leading-tight">
                                            A Safari with <span className="text-sahara-gold">Elysora Safaris</span>
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-lg text-stone-gray leading-relaxed">
                                    Embark on a journey beyond the ordinary. At Elysora Safaris, we don't just show you nature; we immerse you in it. From the thundering herds of the Serengeti to the silent majesty of Kilimanjaro, our expert guides lead you through the untold stories of the wild.
                                </p>
                                <p className="text-lg text-stone-gray leading-relaxed">
                                    Experience luxury in the heart of the bush, authentic cultural encounters, and memories that will last a lifetime. Whether you seek the thrill of the chase or the peace of the sunset, we craft your perfect African adventure.
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                                    {whyChooseUs.map((item) => {
                                        const IconComponent = item.icon;
                                        return (
                                            <div key={item.title} className="flex flex-col items-center text-center gap-3">
                                                <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center">
                                                    <IconComponent className="h-6 w-6 text-sahara-gold" />
                                                </div>
                                                <p className="font-semibold text-sm text-charcoal">{item.title}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="pt-4">
                                    <Button asChild size="lg" className="bg-charcoal text-white hover:bg-sahara-gold hover:text-charcoal transition-all duration-300">
                                        <Link href={route('about')}>Discover Our Story <ArrowRight className="ml-2 h-5 w-5" /></Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Destinations Section - Accordion Gallery */}
                <section id="destinations" className="py-24 md:py-32 bg-charcoal overflow-hidden">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                            <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Discover Tanzania</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mt-2 mb-4">
                                Explore Our Destinations
                            </h2>
                            <p className="text-lg text-white/70">
                                Hover to explore the landscapes that define the African spirit.
                            </p>
                        </div>

                        {/* Accordion Gallery - Vertical Slices (Desktop) */}
                        <div className="hidden md:flex h-[500px] lg:h-[600px] gap-2 rounded-3xl overflow-hidden">
                            {featuredDestinations?.slice(0, 4).map((dest, index) => (
                                <Link
                                    href={route('destinations.show', dest.slug)}
                                    key={dest.slug}
                                    className="group relative flex-1 hover:flex-[4] transition-all duration-1000 ease-out cursor-pointer overflow-hidden"
                                >
                                    <img
                                        src={resolveImagePath(dest.image)}
                                        alt={dest.name}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                                        {/* Number Badge */}
                                        <span className="absolute top-6 left-6 text-white/30 text-6xl font-bold font-headline">
                                            0{index + 1}
                                        </span>

                                        {/* Title - Rotated when collapsed */}
                                        <h3 className="text-white text-2xl font-headline font-bold transition-all duration-700 origin-bottom-left md:group-hover:translate-y-0 md:group-hover:rotate-0 md:-rotate-90 md:translate-x-2 md:translate-y-[-100%] md:whitespace-nowrap">
                                            {dest.name}
                                        </h3>

                                        {/* Description - Only visible on hover */}
                                        <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 overflow-hidden mt-4">
                                            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                                                {dest.description}
                                            </p>
                                            {dest.attractions && (
                                                <div className="flex flex-wrap gap-2">
                                                    {dest.attractions.slice(0, 3).map((attr: string) => (
                                                        <span key={attr} className="text-xs px-3 py-1 rounded-full bg-sahara-gold/20 text-sahara-gold border border-sahara-gold/30">
                                                            {attr}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Explore Button - Only on hover */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 mt-6">
                                            <span className="inline-flex items-center gap-2 text-sahara-gold font-semibold text-sm">
                                                Explore <ArrowRight className="h-4 w-4" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile: Horizontal Scroll */}
                        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
                            {featuredDestinations?.slice(0, 4).map((dest, index) => (
                                <Link
                                    href={route('destinations.show', dest.slug)}
                                    key={dest.slug}
                                    className="relative flex-shrink-0 w-[280px] aspect-[3/4] rounded-2xl overflow-hidden snap-center"
                                >
                                    <img
                                        src={resolveImagePath(dest.image)}
                                        alt={dest.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <span className="text-sahara-gold text-xs font-bold uppercase tracking-wider">0{index + 1}</span>
                                        <h3 className="text-white text-xl font-headline font-bold mt-1">{dest.name}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-charcoal transition-colors duration-300">
                                <Link href={route('destinations.index')}>View All Destinations <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Signature Tours Section */}
                <section id="tours" className="bg-ivory">
                    {/* Section Header */}
                    <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-12">
                        <div className="text-center max-w-3xl mx-auto">
                            <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Curated Experiences</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mt-2 mb-4">
                                Explore Our Signature Tours
                            </h2>
                            <p className="text-lg text-stone-gray">
                                Handcrafted Tanzania adventures, from the Great Migration to tropical Zanzibar beaches.
                            </p>
                        </div>
                    </div>

                    {/* Featured Safari Banner */}
                    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src={featuredSafari ? resolveImagePath(featuredSafari.image) : '/Featured-Safari.jpg'}
                                alt={featuredSafari?.name || 'Featured Safari'}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30" />
                        </div>

                        {featuredSafari ? (
                            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20">
                                <div className="max-w-2xl">
                                    <span className="inline-block px-4 py-2 rounded-full bg-sahara-gold/20 text-sahara-gold text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-sahara-gold/30">
                                        Featured Safari
                                    </span>

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white mb-6 leading-tight">
                                        {featuredSafari.name}
                                    </h3>

                                    <p className="text-lg text-white/80 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: featuredSafari.description.substring(0, 200) + '...' }} />

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-md">
                                        <div className="text-center">
                                            <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">{featuredSafari.duration}</p>
                                            <p className="text-xs text-white/60">Days</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">{featuredSafari.destinations?.length || 0}</p>
                                            <p className="text-xs text-white/60">Parks</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">5★</p>
                                            <p className="text-xs text-white/60">Lodges</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">${featuredSafari.price.toLocaleString()}</p>
                                            <p className="text-xs text-white/60">From</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white font-semibold rounded-full px-8">
                                            <Link href={route('safaris.show', featuredSafari.slug)}>View This Safari</Link>
                                        </Button>
                                        <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                                            <Link href={route('contact')}>Enquire Now</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20">
                                <div className="max-w-2xl">
                                    <p className="text-white text-xl">No featured safari available at the moment.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* More Adventures Label */}
                    <div className="bg-ivory pt-8 pb-4">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-sahara-gold" />
                                <span className="text-sahara-gold font-semibold text-sm uppercase tracking-widest">More Adventures</span>
                            </div>
                        </div>
                    </div>

                    {/* Tour Cards Grid */}
                    <div className="bg-ivory pb-20 md:pb-28">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {safariPackages?.slice(0, 6).map((safari) => (
                                    <Link
                                        href={route('safaris.show', safari.slug)}
                                        key={safari.slug}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={resolveImagePath(safari.image)}
                                                alt={safari.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-charcoal">
                                                {safari.duration} Days
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {safari.destinations?.slice(0, 2).map((dest: string) => (
                                                    <span key={dest} className="text-xs text-sahara-gold font-semibold uppercase tracking-wider">
                                                        {dest}
                                                    </span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-headline font-bold text-charcoal mb-2 group-hover:text-sahara-gold transition-colors">
                                                {safari.name}
                                            </h3>

                                            <p className="text-stone-gray text-sm leading-relaxed mb-4 line-clamp-2">
                                                {safari.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div>
                                                    <span className="text-xs text-stone-gray uppercase">From</span>
                                                    <p className="text-2xl font-bold text-charcoal font-headline">${safari.price.toLocaleString()}</p>
                                                </div>
                                                <div className="w-10 h-10 rounded-full bg-sahara-gold/10 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                                    <ArrowRight className="h-5 w-5 text-sahara-gold group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <Button asChild size="lg" variant="outline" className="rounded-full">
                                    <Link href={route('safaris.index')}>View All Safari Packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Stats - With Counting Animation */}
                <div className="bg-charcoal py-16 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-8 h-8 text-sahara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white font-headline">
                                    <CountUp end={5} className="tabular-nums" />
                                </p>
                                <p className="text-sm text-white/70 mt-2">Years of Experience</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-8 h-8 text-sahara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white font-headline">
                                    <CountUp end={500} suffix="+" className="tabular-nums" />
                                </p>
                                <p className="text-sm text-white/70 mt-2">Happy Customers</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-8 h-8 text-sahara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white font-headline">
                                    <CountUp end={12} className="tabular-nums" />
                                </p>
                                <p className="text-sm text-white/70 mt-2">Destinations</p>
                            </div>
                            <div className="text-center group">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <svg className="w-8 h-8 text-sahara-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <p className="text-4xl md:text-5xl font-bold text-white font-headline">
                                    <CountUp end={10} suffix="+" className="tabular-nums" />
                                </p>
                                <p className="text-sm text-white/70 mt-2">Expert Guides</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
