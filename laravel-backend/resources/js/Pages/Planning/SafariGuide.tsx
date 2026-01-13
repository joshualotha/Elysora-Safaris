import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { CheckCircle2 } from 'lucide-react';

export default function SafariGuide() {
    return (
        <MainLayout title="Safari Planning Guide - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Safari Planning Guide</h1>

                        <h2>When to Visit Tanzania</h2>
                        <p>The best time for safaris is during the dry season (June-October) when wildlife congregates around water sources. The Great Migration occurs June-July (Western Corridor) and September-October (Northern Serengeti).</p>

                        <h2>How Long Should I Go For?</h2>
                        <p>We recommend at least 5-7 days for a comprehensive safari experience. This allows you to visit 2-3 major parks without feeling rushed.</p>

                        <h2>What to Pack</h2>
                        <ul>
                            <li>Neutral-colored clothing (khaki, beige, olive)</li>
                            <li>Comfortable walking shoes and sandals</li>
                            <li>Sunscreen, sunglasses, and hat</li>
                            <li>Binoculars and camera with zoom lens</li>
                            <li>Insect repellent and basic first aid</li>
                        </ul>

                        <h2>Health & Vaccinations</h2>
                        <p>Yellow fever vaccination is required if coming from affected countries. Malaria prophylaxis is recommended. Consult your doctor 6-8 weeks before travel.</p>

                        <h2>Visa Requirements</h2>
                        <p>Most nationalities can obtain a visa on arrival ($50 USD) or apply online in advance. Passport must be valid for 6 months beyond travel dates.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
