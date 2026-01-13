import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Privacy() {
    return (
        <MainLayout title="Privacy Policy - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl prose prose-stone lg:prose-lg">
                        <h1 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mb-8">Privacy Policy</h1>
                        <p className="text-stone-500 mb-8 italic">Last updated: January 14, 2026</p>

                        <div className="space-y-8 text-stone-700">
                            <p className="lead">At Elysora Safaris ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book our services.</p>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">1. Information We Collect</h2>
                                <h3 className="text-xl font-semibold text-charcoal mt-4 mb-2">Personal Data</h3>
                                <p>We may collect personally identifiable information, such as:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li>Name, email address, phone number, and mailing address when you inquire or book.</li>
                                    <li>Passport details and nationality for booking flights, permits, and park fees.</li>
                                    <li>Health information (dietary requirements, allergies, medical conditions) to ensure your safety and comfort during the safari.</li>
                                    <li>Payment information (credit card details, billing address) processed securely by our payment providers.</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-charcoal mt-6 mb-2">Derivative Data</h3>
                                <p>Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">2. How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li>Process bookings and payments.</li>
                                    <li>Coordinate logistics with hotels, lodges, and local partners.</li>
                                    <li>Communicate with you regarding your trip details, updates, and support.</li>
                                    <li>Send you marketing communications (if you have opted in).</li>
                                    <li>Improve our website and customer service.</li>
                                    <li>Comply with legal obligations in Tanzania and international travel regulations.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">3. Disclosure of Your Information</h2>
                                <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li><strong>Service Providers:</strong> We share your information with hotels, airlines, and ground handlers necessary to fulfill your travel arrangements.</li>
                                    <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., park authorities, immigration).</li>
                                    <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">4. Security of Your Information</h2>
                                <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">5. Your Data Rights</h2>
                                <p>Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact us at the email provided below.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-charcoal mb-4">6. Contact Us</h2>
                                <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                                <div className="mt-4 bg-stone-50 p-6 rounded-lg border border-stone-100">
                                    <p className="font-bold text-charcoal">Elysora Safaris</p>
                                    <p>Sokoine Road, Arusha, Tanzania</p>
                                    <p>Email: <a href="mailto:info@elysora.com" className="text-sahara-gold hover:underline">info@elysora.com</a></p>
                                    <p>Phone: +255 754 000 000</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
