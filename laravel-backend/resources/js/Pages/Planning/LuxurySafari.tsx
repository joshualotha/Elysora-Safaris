import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function LuxurySafari() {
    return (
        <MainLayout title="Luxury Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Luxury Safari Experiences</h1>

                        <p className="lead">Experience Tanzania in ultimate comfort with our premium luxury safaris featuring five-star lodges, private guides, and exclusive experiences.</p>

                        <h2>What Makes It Luxury?</h2>
                        <ul>
                            <li>Five-star accommodations with exceptional service</li>
                            <li>Private safari vehicles and dedicated guide</li>
                            <li>Gourmet dining with premium beverages included</li>
                            <li>Spa treatments and wellness facilities</li>
                            <li>Hot air balloon safaris and bush dinners</li>
                            <li>Private airstrips for charter flights</li>
                        </ul>

                        <h2>Featured Luxury Lodges</h2>
                        <p>Singita, Four Seasons Safari Lodge, andBeyond properties, Ngorongoro Crater Lodge - each offering unparalleled comfort and wildlife viewing.</p>

                        <h2>Pricing</h2>
                        <p>Luxury safaris typically range from $800-$2,000 per person per night, all-inclusive. This includes accommodation, all meals and drinks, game drives, and most activities.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
