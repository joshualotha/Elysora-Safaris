import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Users, Smile, ShieldCheck, Leaf } from 'lucide-react';
import { whyChooseUs, teamMembers } from '@/lib/data';

export default function About() {
    return (
        <MainLayout title="About Us - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/Welcome-to-the-Wild.png" alt="About" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm block mb-4">Our Story</span>
                        <div className="relative inline-block">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-10 text-white/20 transform -rotate-6 select-none pointer-events-none z-0">Discover</span>
                            <h1 className="relative z-10 text-5xl md:text-7xl font-headline font-bold mb-6">
                                About Elysora Safaris
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Bringing Tanzania's wilderness to life through authentic, unforgettable experiences
                        </p>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-6">
                                Our Mission
                            </h2>
                            <p className="text-xl text-stone-gray leading-relaxed mb-6">
                                At Elysora Safaris, we're more than just tour operators—we're storytellers, conservationists, and your gateway to the heart of Tanzania.
                                Our mission is to create immersive safari experiences that respect wildlife, empower local communities, and leave you with memories that last a lifetime.
                            </p>
                            <p className="text-xl text-stone-gray leading-relaxed">
                                Founded by passionate Tanzanians who grew up in the shadow of Kilimanjaro and the vast Serengeti plains,
                                we bring insider knowledge and genuine love for our homeland to every journey we craft.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-20 md:py-32 bg-ivory">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-4">
                                Why Choose Elysora
                            </h2>
                            <p className="text-lg text-stone-gray max-w-2xl mx-auto">
                                What sets us apart in the world of African safaris
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {whyChooseUs.map((item) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                                        <div className="w-16 h-16 rounded-full bg-sahara-gold/10 flex items-center justify-center mb-6">
                                            <IconComponent className="h-8 w-8 text-sahara-gold" />
                                        </div>
                                        <h3 className="text-xl font-headline font-bold text-charcoal mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-stone-gray leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-4">
                                Meet Our Team
                            </h2>
                            <p className="text-lg text-stone-gray max-w-2xl mx-auto">
                                The passionate people behind your unforgettable safari experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {teamMembers.map((member) => (
                                <div key={member.name} className="text-center group">
                                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                                        <img
                                            src={`/images/${member.image}.jpg`}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <h3 className="text-2xl font-headline font-bold text-charcoal mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-sahara-gold font-semibold mb-3">
                                        {member.role}
                                    </p>
                                    <p className="text-stone-gray leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 md:py-32 bg-charcoal">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mb-6">
                            Ready to Start Your Adventure?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let us help you plan the safari of your dreams
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white">
                                <Link href={route('safaris.index')}>
                                    Browse Safaris <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                                <Link href={route('contact')}>Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
