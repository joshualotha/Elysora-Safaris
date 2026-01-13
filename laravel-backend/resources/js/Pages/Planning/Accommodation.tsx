import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Accommodation() {
    return (
        <MainLayout title="Accommodation Options - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Accommodation Options</h1>

                        <h2>Luxury Lodges</h2>
                        <p>Five-star permanent lodges with swimming pools, spa facilities, and gourmet dining. Private verandas with wildlife views. $500-$1,200 per person per night.</p>

                        <h2>Tented Camps</h2>
                        <p>Semi-permanent canvas tents with en-suite bathrooms and comfortable beds. Authentic safari atmosphere with modern amenities. $200-$600 per person per night.</p>

                        <h2>Mobile Camping</h2>
                        <p>Move with the wildlife! Comfortable camping gear, camp chef, and support staff. Great for migration safaris. $150-$300 per person per night.</p>

                        <h2>Budget Camping</h2>
                        <p>Basic camping with dome tents and sleeping bags. Shared facilities at designated campsites. Perfect for budget travelers. $50-$100 per person per night.</p>

                        <h2>What's Included</h2>
                        <p>Most accommodations include three meals daily, park fees, game drives, and airport transfers. Drinks vary by property.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
