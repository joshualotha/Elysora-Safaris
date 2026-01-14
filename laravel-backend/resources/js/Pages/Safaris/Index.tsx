import { useState, useEffect } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { ArrowRight, Calendar, MapPin, Search, X, Filter } from 'lucide-react';

interface SafarisIndexProps {
    safaris: {
        data: Array<any>;
        links: any;
        meta: any;
    };
    filters: {
        search?: string;
        category?: string;
        duration?: string;
    };
    siteImages?: Record<string, any>;
}

const CATEGORIES = [
    { value: '', label: 'All Categories' },
    { value: 'classic-safari', label: 'Classic Safari' },
    { value: 'group-safari', label: 'Group Safari' },
    { value: 'tailor-made-safari', label: 'Tailor-Made Safari' },
];

const DURATIONS = [
    { value: '', label: 'Any Duration' },
    { value: 'short', label: '1-3 Days' },
    { value: 'medium', label: '4-7 Days' },
    { value: 'long', label: '8+ Days' },
];

export default function SafarisIndex({ safaris, filters, siteImages }: SafarisIndexProps) {
    const [search, setSearch] = useState(filters.search || '');
    const [category, setCategory] = useState(filters.category || '');
    const [duration, setDuration] = useState(filters.duration || '');

    // Debounced search effect - triggers 500ms after user stops typing
    useEffect(() => {
        const timer = setTimeout(() => {
            router.get(route('safaris.index'), {
                search: search || undefined,
                category: category || undefined,
                duration: duration || undefined,
            }, {
                preserveState: true,
                preserveScroll: true,
            });
        }, 500);

        return () => clearTimeout(timer);
    }, [search, category, duration]);

    const clearFilters = () => {
        setSearch('');
        setCategory('');
        setDuration('');
    };

    const hasActiveFilters = search || category || duration;

    return (
        <MainLayout title="Safari Packages - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img
                            src={siteImages?.safaris_index_hero?.image_path ? `/storage/${siteImages.safaris_index_hero.image_path}` : '/images/safari-card-1.jpg'}
                            alt={siteImages?.safaris_index_hero?.alt_text || 'Safaris'}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.src = '/images/safari-card-1.jpg'; }}
                        />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm block mb-4">Curated Experiences</span>
                        <div className="relative inline-block">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-10 text-white/20 transform -rotate-12 select-none pointer-events-none z-0">Unforgettable</span>
                            <h1 className="relative z-10 text-5xl md:text-7xl font-headline font-bold mb-6">
                                Our Safari Packages
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Handcrafted Tanzania adventures, from budget camping to luxury lodges
                        </p>
                    </div>
                </section>

                {/* Filter & Safari Packages Section */}
                <section className="py-12 md:py-20 bg-ivory">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Minimalist Filter Bar */}
                        <div className="mb-8">
                            <div className="flex flex-col md:flex-row gap-3">
                                {/* Search - Minimalist Design */}
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-gray" />
                                        <input
                                            type="text"
                                            placeholder="Search safaris..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:border-sahara-gold focus:ring-1 focus:ring-sahara-gold outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="px-4 py-3 rounded-full border border-gray-200 focus:border-sahara-gold focus:ring-1 focus:ring-sahara-gold outline-none transition-all bg-white"
                                >
                                    {CATEGORIES.map((cat) => (
                                        <option key={cat.value} value={cat.value}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>

                                {/* Duration Filter */}
                                <select
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="px-4 py-3 rounded-full border border-gray-200 focus:border-sahara-gold focus:ring-1 focus:ring-sahara-gold outline-none transition-all bg-white"
                                >
                                    {DURATIONS.map((dur) => (
                                        <option key={dur.value} value={dur.value}>
                                            {dur.label}
                                        </option>
                                    ))}
                                </select>

                                {/* Clear Filters */}
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-6 py-3 rounded-full border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-all flex items-center gap-2 text-stone-gray hover:text-red-600"
                                    >
                                        <X className="h-4 w-4" />
                                        Clear
                                    </button>
                                )}
                            </div>

                            {/* Result Count */}
                            <div className="mt-3 text-sm text-stone-gray text-center md:text-left">
                                {safaris?.meta?.total || 0} {(safaris?.meta?.total || 0) === 1 ? 'safari' : 'safaris'} found
                            </div>
                        </div>

                        {/* Active Filters */}
                        {hasActiveFilters && (
                            <div className="flex flex-wrap gap-2 mb-6">
                                {filters.search && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-sahara-gold/10 text-sahara-gold rounded-full text-sm">
                                        Search: "{filters.search}"
                                        <button onClick={() => setSearch('')}>
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                )}
                                {filters.category && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-safari-green/10 text-safari-green rounded-full text-sm">
                                        {CATEGORIES.find(c => c.value === filters.category)?.label}
                                        <button onClick={() => setCategory('')}>
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                )}
                                {filters.duration && (
                                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-charcoal/10 text-charcoal rounded-full text-sm">
                                        {DURATIONS.find(d => d.value === filters.duration)?.label}
                                        <button onClick={() => setDuration('')}>
                                            <X className="h-3 w-3" />
                                        </button>
                                    </span>
                                )}
                            </div>
                        )}

                        {/* Safari Grid */}
                        {safaris?.data && safaris.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {safaris.data.map((safari) => (
                                    <Link
                                        href={route('safaris.show', safari.slug)}
                                        key={safari.slug}
                                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                                    >
                                        {/* Image */}
                                        <div className="relative aspect-[4/3] overflow-hidden">
                                            <img
                                                src={`/images/${safari.image}.jpg`}
                                                alt={safari.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Duration Badge */}
                                            <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-charcoal flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {safari.duration} Days
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {safari.destinations?.slice(0, 2).map((dest: string) => (
                                                    <span key={dest} className="text-xs text-sahara-gold font-semibold uppercase tracking-wider flex items-center gap-1">
                                                        <MapPin className="h-3 w-3" />
                                                        {dest}
                                                    </span>
                                                ))}
                                                {safari.destinations?.length > 2 && (
                                                    <span className="text-xs text-stone-gray">+{safari.destinations.length - 2} more</span>
                                                )}
                                            </div>

                                            <h3 className="text-2xl font-headline font-bold text-charcoal mb-3 group-hover:text-sahara-gold transition-colors">
                                                {safari.name}
                                            </h3>

                                            <p className="text-stone-gray text-sm leading-relaxed mb-4 line-clamp-3">
                                                {safari.description}
                                            </p>

                                            {/* Highlights */}
                                            {safari.highlights && safari.highlights.length > 0 && (
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {safari.highlights.slice(0, 3).map((highlight: string) => (
                                                        <span key={highlight} className="text-xs px-2 py-1 rounded-full bg-safari-green/10 text-safari-green">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div>
                                                    <span className="text-xs text-stone-gray uppercase">From</span>
                                                    <p className="text-3xl font-bold text-charcoal font-headline">
                                                        ${safari.price.toLocaleString()}
                                                    </p>
                                                    <span className="text-xs text-stone-gray">per person</span>
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                                                    <ArrowRight className="h-6 w-6 text-sahara-gold group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-xl text-stone-gray mb-4">No safaris found matching your criteria</p>
                                <Button onClick={clearFilters} variant="outline">
                                    Clear Filters
                                </Button>
                            </div>
                        )}

                        {/* CTA Section */}
                        <div className="mt-20 text-center bg-charcoal rounded-3xl p-12 md:p-16">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-4">
                                Can't Find What You're Looking For?
                            </h2>
                            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                                Let us create a custom safari tailored to your preferences, budget, and travel dates.
                            </p>
                            <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white font-semibold">
                                <Link href={route('contact')}>Design Your Dream Safari <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
