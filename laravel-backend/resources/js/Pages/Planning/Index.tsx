import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Book, Tent, Gem, Users, MapPin, Calendar, Info } from 'lucide-react';

const planningPages = [
    {
        title: 'Safari Planning Guide',
        slug: 'safari-guide',
        description: 'Everything you need to know before your safari adventure',
        icon: Book,
    },
    {
        title: 'Accommodation Options',
        slug: 'accommodation',
        description: 'From luxury lodges to budget camping',
        icon: Tent,
    },
    {
        title: 'Luxury Safaris',
        slug: 'luxury-safari',
        description: 'Premium experiences and five-star lodges',
        icon: Gem,
    },
    {
        title: 'Group Safaris',
        slug: 'group-safari',
        description: 'Join others for shared adventures',
        icon: Users,
    },
    {
        title: 'Private Safaris',
        slug: 'private-safari',
        description: 'Exclusive, personalized experiences',
        icon: MapPin,
    },
    {
        title: 'Camping Safaris',
        slug: 'camping-safari',
        description: 'Authentic wilderness camping experiences',
        icon: Tent,
    },
    {
        title: 'Practical Information',
        slug: 'practical-information',
        description: 'Visas, health, packing, and travel tips',
        icon: Info,
    },
];

export default function PlanningIndex() {
    return (
        <MainLayout title="Safari Planning - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <div className="relative inline-block">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-10 text-white/20 transform -rotate-6 select-none pointer-events-none z-0">Start</span>
                            <h1 className="relative z-10 text-5xl md:text-7xl font-headline font-bold mb-6">
                                Plan Your Safari
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Expert guides and resources to help you prepare for your adventure
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {planningPages.map((page) => {
                                const IconComponent = page.icon;
                                return (
                                    <Link
                                        key={page.slug}
                                        href={route(`planning.${page.slug}`)}
                                        className="group bg-ivory rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-sahara-gold/10 flex items-center justify-center mb-6 group-hover:bg-sahara-gold/20 transition-colors">
                                            <IconComponent className="h-8 w-8 text-sahara-gold" />
                                        </div>
                                        <h3 className="text-2xl font-headline font-bold text-charcoal mb-3 group-hover:text-sahara-gold transition-colors">
                                            {page.title}
                                        </h3>
                                        <p className="text-stone-gray leading-relaxed mb-4">
                                            {page.description}
                                        </p>
                                        <span className="inline-flex items-center gap-2 text-sahara-gold font-semibold text-sm">
                                            Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
