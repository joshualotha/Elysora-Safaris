import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Card } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { FileText, Plane, HeartPulse, DollarSign, Backpack, Users, Wifi, ShieldCheck, Briefcase, Smartphone, HandHeart, ArrowRight } from 'lucide-react';
import { resolveImagePath } from '@/lib/utils';

interface PracticalInformationProps {
    images?: Record<string, any>;
}

export default function PracticalInformationIndex({ images }: PracticalInformationProps) {
    const sections = [
        {
            title: "Visa & Entry",
            description: "E-Visa portal links, passport requirements, and fees.",
            icon: Plane,
            href: route('planning.visa'),
            color: "bg-charcoal text-sahara-gold"
        },
        {
            title: "Health & Safety",
            description: "Yellow Fever, Malaria prophylaxis, and general safety.",
            icon: ShieldCheck,
            href: route('planning.health'),
            color: "bg-safari-green text-white"
        },
        {
            title: "Currency & Tipping",
            description: "Cash requirements, USD bill rules, and tipping guides.",
            icon: DollarSign,
            href: route('planning.money'),
            color: "bg-sahara-gold text-charcoal"
        },
        {
            title: "Packing List",
            description: "Comprehensive checklist for clothing and gadgets.",
            icon: Briefcase,
            href: route('planning.packing'),
            color: "bg-sand text-charcoal"
        },
        {
            title: "Connectivity",
            description: "Wi-Fi availability and buying local SIM cards.",
            icon: Smartphone,
            href: route('planning.connectivity'),
            color: "bg-blue-600 text-white"
        },
        {
            title: "Cultural Etiquette",
            description: "Photography rules, dress codes, and greetings.",
            icon: HandHeart,
            href: route('planning.culture'),
            color: "bg-charcoal text-white"
        }
    ];

    return (
        <MainLayout title="Practical Information - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-charcoal">
                    <div className="absolute inset-0 opacity-20">
                        <img src={images?.planning_practical_pattern?.image_path ? resolveImagePath(images.planning_practical_pattern.image_path) : '/images/pattern-overlay.png'} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/images/pattern-overlay.png'; }} />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center z-10 pt-10">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase mb-4 block">Travel Essentials</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6">
                            Practical Information
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                            Everything you need to know before you go. Select a topic below to explore in detail.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-stone-50">
                    <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sections.map((section) => (
                                <Link key={section.title} href={section.href} className="group">
                                    <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 h-full flex flex-col items-start group-hover:-translate-y-1">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${section.color}`}>
                                            <section.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="text-2xl font-headline font-bold text-charcoal mb-3 group-hover:text-sahara-gold transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-stone-600 mb-6 flex-grow">
                                            {section.description}
                                        </p>
                                        <div className="flex items-center text-sm font-bold text-charcoal uppercase tracking-wider">
                                            Read More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
