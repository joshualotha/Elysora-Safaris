import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function GroupSafari() {
    return (
        <MainLayout title="Group Safaris - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Group Safari Adventures</h1>

                        <p className="lead">Join fellow travelers for an affordable and social safari experience with guaranteed departures throughout the year.</p>

                        <h2>Benefits of Group Safaris</h2>
                        <ul>
                            <li>More affordable than private trips</li>
                            <li>Meet like-minded travelers from around the world</li>
                            <li>Guaranteed departures on fixed dates</li>
                            <li>Shared costs for transportation and guides</li>
                            <li>Perfect for solo travelers</li>
                        </ul>

                        <h2>Group Size</h2>
                        <p>Our groups are limited to 6-8 people maximum to ensure quality experiences and easy wildlife viewing. Minimum 4 people required for guaranteed departure.</p>

                        <h2>What's Included</h2>
                        <p>Accommodation, all meals, park fees, professional guides, and game drives. Airport transfers included with group arrival/departure dates.</p>

                        <h2>Pricing</h2>
                        <p>Group safaris start from $200 per person per day, making them an excellent value for budget-conscious travelers.</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
