import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function PracticalInformation() {
    return (
        <MainLayout title="Practical Information - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Practical Travel Information</h1>

                        <h2>Visa & Entry Requirements</h2>
                        <p>Most visitors can obtain a tourist visa on arrival ($50 USD) or apply online. Passport must be valid for 6 months beyond travel dates with at least 2 blank pages.</p>

                        <h2>Health & Vaccinations</h2>
                        <p>Yellow fever vaccination required if traveling from affected countries. Malaria prophylaxis recommended for safari areas. Consult your doctor 6-8 weeks before departure. Travel insurance with medical evacuation coverage strongly recommended.</p>

                        <h2>Currency & Money</h2>
                        <p>Tanzanian Shilling (TZS) is local currency, but USD widely accepted. ATMs available in major towns. Credit cards accepted at most lodges. Bring small USD bills ($1, $5, $10) for tips.</p>

                        <h2>Best Time to Visit</h2>
                        <p>Dry season (June-October) best for wildlife viewing. Wet season (November-May) offers lush landscapes, fewer tourists, and lower prices. Great Migration timing varies by location.</p>

                        <h2>What to Pack</h2>
                        <ul>
                            <li>Neutral-colored clothing (beige, khaki, olive green)</li>
                            <li>Comfortable walking shoes</li>
                            <li>Sun protection (hat, sunglasses, SPF 50+)</li>
                            <li>Insect repellent (DEET-based)</li>
                            <li>Binoculars and camera with telephoto lens</li>
                            <li>Light jacket for early morning game drives</li>
                            <li>Personal medications and first aid</li>
                        </ul>

                        <h2>Connectivity</h2>
                        <p>Mobile coverage available in major towns and some lodges. Wi-Fi available at most accommodations but may be slow. Consider purchasing a local SIM card at the airport.</p>

                        <h2>Tipping Guidelines</h2>
                        <p>Safari guide: $15-20 per person per day. Lodge staff: $10-15 per person per day. Camp crew: $5-10 per person per day. Tips usually pooled and shared among staff.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
