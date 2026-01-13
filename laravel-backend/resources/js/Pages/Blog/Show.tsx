import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

interface BlogShowProps {
    post: any;
    relatedPosts: Array<any>;
}

export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
    return (
        <MainLayout title={`${post.title} - Elysora Safaris Blog`}>
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative h-[60vh]">
                    <img
                        src={`/images/${post.image}.jpg`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </section>

                {/* Article */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <article className="max-w-4xl mx-auto">
                            {/* Meta */}
                            <div className="mb-8">
                                <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                                    {post.category}
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-charcoal mb-6">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap items-center gap-6 text-stone-gray">
                                    <span className="flex items-center gap-2">
                                        <User className="h-5 w-5" />
                                        {post.author}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Calendar className="h-5 w-5" />
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <Clock className="h-5 w-5" />
                                        {post.read_time} min read
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="prose prose-lg max-w-none">
                                <p className="text-xl text-stone-gray leading-relaxed mb-8">
                                    {post.excerpt}
                                </p>

                                <div className="text-charcoal leading-relaxed space-y-6"
                                    dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
                                />
                            </div>
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="py-16 md:py-24 bg-ivory">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal mb-12 text-center">
                                Related Articles
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedPosts.slice(0, 3).map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={route('blog.show', related.slug)}
                                        className="group"
                                    >
                                        <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                                            <img
                                                src={`/images/${related.image}.jpg`}
                                                alt={related.title}
                                                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <p className="text-sm text-primary font-semibold mb-2">{related.category}</p>
                                        <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
                                            {related.title}
                                        </h3>
                                        <p className="text-sm text-stone-gray line-clamp-2">{related.excerpt}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </MainLayout>
    );
}
