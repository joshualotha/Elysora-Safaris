import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Privacy() {
    return (
        <MainLayout title="Privacy Policy - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-lg">
                        <h1 className="text-5xl font-headline font-bold text-charcoal mb-8">Privacy Policy</h1>
                        <p className="text-stone-gray mb-6">Last updated: January 2024</p>

                        <h2>Information We Collect</h2>
                        <p>We collect information you provide directly to us when you book a safari, contact us, or use our services.</p>

                        <h2>How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.</p>

                        <h2>Information Sharing</h2>
                        <p>We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.</p>

                        <h2>Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or destruction.</p>

                        <h2>Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact us at privacy@elysorasafaris.com</p>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
