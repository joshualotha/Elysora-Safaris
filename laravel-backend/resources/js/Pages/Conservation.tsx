import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Leaf, Heart, Users, ArrowRight } from 'lucide-react';

export default function Conservation() {
    return (
        <MainLayout title="Conservation - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/destination-serengeti.jpg" alt="Conservation" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Our Commitment</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mt-4 mb-6">
                            Conservation & Community
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Protecting Tanzania's wildlife and empowering local communities
                        </p>
                    </div>
                </section>

                {/* Conservation Pillars */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-safari-green/10 flex items-center justify-center mx-auto mb-6">
                                    <Leaf className="h-10 w-10 text-safari-green" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Wildlife Protection</h3>
                                <p className="text-stone-gray leading-relaxed">
                                    We support anti-poaching efforts and habitat conservation through partnerships with local conservation organizations.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-safari-green/10 flex items-center justify-center mx-auto mb-6">
                                    <Users className="h-10 w-10 text-safari-green" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Community Empowerment</h3>
                                <p className="text-stone-gray leading-relaxed">
                                    We employ local guides, support village schools, and ensure tourism benefits reach local communities.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-safari-green/10 flex items-center justify-center mx-auto mb-6">
                                    <Heart className="h-10 w-10 text-safari-green" />
                                </div>
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-4">Sustainable Tourism</h3>
                                <p className="text-stone-gray leading-relaxed">
                                    We practice responsible tourism that minimizes environmental impact and promotes conservation awareness.
                                </p>
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-headline font-bold text-charcoal mb-8">Our Conservation Initiatives</h2>
                            <div className="space-y-6 text-lg text-stone-gray leading-relaxed">
                                <p>
                                    At Elysora Safaris, we believe that responsible tourism is the key to preserving Tanzania's incredible wildlife for future generations.
                                    We partner with local conservation organizations, contribute to anti-poaching efforts, and educate travelers about the importance of wildlife protection.
                                </p>
                                <p>
                                    A portion of every safari booking goes directly to community development projects, including education, healthcare, and sustainable livelihood programs.
                                    By choosing Elysora, you're not just experiencing the wild—you're helping to protect it.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-ivory">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-4xl font-headline font-bold text-charcoal mb-6">
                            Make a Difference with Your Safari
                        </h2>
                        <p className="text-xl text-stone-gray mb-8 max-w-2xl mx-auto">
                            Every journey you take with us supports wildlife conservation and local communities
                        </p>
                        <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-charcoal hover:text-white">
                            <Link href={route('safaris.index')}>
                                Explore Our Safaris <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
