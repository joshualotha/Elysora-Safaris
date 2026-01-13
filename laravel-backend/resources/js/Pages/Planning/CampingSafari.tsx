import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function CampingSafari() {
    return (
        <MainLayout title="Camping Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Camping Safari Adventures</h1>

                        <p className="lead">Experience the authentic sounds of the African bush with our camping safaris - the most immersive way to connect with nature.</p>

                        <h2>Types of Camping</h2>

                        <h3>Budget Camping</h3>
                        <p>Basic dome tents, sleeping bags, and sleeping mats. Shared facilities at public campsites. You help with camp setup. $50-$100 per person per night.</p>

                        <h3>Comfort Camping</h3>
                        <p>Larger tents with proper beds and bedding. Camp crew handles all setup. Private bathroom tents. $150-$250 per person per night.</p>

                        <h3>Luxury Mobile Camping</h3>
                        <p>Spacious tents with en-suite bathrooms, hot showers, and comfortable beds. Full camp staff including chef. $300-$500 per person per night.</p>

                        <h2>What to Expect</h2>
                        <ul>
                            <li>Fall asleep to sounds of wildlife</li>
                            <li>Camp in or near national parks</li>
                            <li>Authentic bush meals around campfire</li>
                            <li>Incredible star-gazing opportunities</li>
                            <li>More affordable than lodge-based safaris</li>
                        </ul>

                        <h2>Is Camping Safe?</h2>
                        <p>Yes! Campsites are in designated safe areas. Our experienced guides ensure your safety. Wildlife rarely enters campsites, but always follow camp rules.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
