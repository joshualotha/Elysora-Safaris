import { Head, Link, useForm, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const { props } = usePage();
    const settings = (props.settings as Record<string, string>) || {};

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('contact.store'));
    }

    return (
        <MainLayout title="Contact Us - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/Welcome-to-the-Wild.png" alt="Contact" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm block mb-4">Get In Touch</span>
                        <div className="relative inline-block">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-12 -left-10 text-white/20 transform -rotate-6 select-none pointer-events-none z-0">Let's Connect</span>
                            <h1 className="relative z-10 text-5xl md:text-7xl font-headline font-bold mb-6">
                                Contact Us
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            We're here to answer your questions and help plan your dream safari
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-6">
                                    Send Us a Message
                                </h2>
                                <p className="text-lg text-stone-gray mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <Label htmlFor="name">Full Name *</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            required
                                            className="mt-2"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email Address *</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            required
                                            className="mt-2"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="mt-2"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message *</Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            required
                                            rows={6}
                                            className="mt-2"
                                            placeholder="Tell us about your dream safari..."
                                        />
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-sahara-gold text-charcoal hover:bg-charcoal hover:text-white"
                                        disabled={processing}
                                    >
                                        {processing ? 'Sending...' : 'Send Message'}
                                        <Send className="ml-2 h-5 w-5" />
                                    </Button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-ivory rounded-3xl p-8 md:p-12">
                                <h3 className="text-2xl font-headline font-bold text-charcoal mb-8">
                                    Contact Information
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Email</h4>
                                            <p className="text-stone-gray">{settings.site_email || "info@elysora.com"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Phone</h4>
                                            <p className="text-stone-gray">{settings.site_phone || "+255 754 000 000"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-6 w-6 text-sahara-gold" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal mb-1">Office</h4>
                                            <p className="text-stone-gray whitespace-pre-line">
                                                {settings.site_address || "Sokoine Road, Arusha,\nTanzania, East Africa"}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h4 className="font-bold text-charcoal mb-4">Office Hours</h4>
                                    <div className="space-y-2 text-stone-gray whitespace-pre-line">
                                        {settings.business_hours || "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed"}
                                    </div>
                                    <p className="text-sm text-stone-gray mt-4">
                                        (East Africa Time - EAT / GMT+3)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Note */}
                <section className="py-16 bg-charcoal">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h3 className="text-2xl font-headline font-bold text-charcoal text-white mb-4">
                            Have a Quick Question?
                        </h3>
                        <p className="text-white/80 mb-6">
                            Check our FAQ page for instant answers to common questions
                        </p>
                        <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                            <Link href={route('faq')}>Visit FAQ</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
