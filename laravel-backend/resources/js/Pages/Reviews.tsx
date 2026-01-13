import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import CountUp from '@/Components/Shared/CountUp';
import { Star } from 'lucide-react';

interface Testimonial {
    id: number;
    author: string;
    country: string;
    rating: number;
    comment: string;
    safari_taken: string;
    author_image: string | null;
}

export default function Reviews({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <MainLayout title="Reviews - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
                            What Our Travelers Say
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Real stories from real adventures
                        </p>
                    </div>
                </section>

                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {testimonials.map((review) => (
                                <div key={review.id} className="bg-ivory rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-4 mb-6">
                                        {review.author_image && (
                                            <img
                                                src={review.author_image.startsWith('uploads/') ? `/storage/${review.author_image}` : `/images/${review.author_image}.jpg`}
                                                alt={review.author}
                                                className="w-16 h-16 rounded-full object-cover"
                                            />
                                        )}
                                        <div>
                                            <h3 className="font-bold text-charcoal">{review.author}</h3>
                                            <p className="text-sm text-stone-gray">{review.country}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < Math.floor(review.rating)
                                                    ? 'fill-sahara-gold text-sahara-gold'
                                                    : 'text-gray-300'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-stone-gray leading-relaxed mb-4">{review.comment}</p>
                                    <p className="text-sm font-semibold text-sahara-gold">{review.safari_taken}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
