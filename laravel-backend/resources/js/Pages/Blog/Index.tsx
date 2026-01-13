import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogIndexProps {
    blogPosts: {
        data: Array<any>;
        links: any;
        meta: any;
    };
}

export default function BlogIndex({ blogPosts }: BlogIndexProps) {
    return (
        <MainLayout title="Blog - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="absolute inset-0 opacity-20">
                        <img src="/images/blog-post-1.jpg" alt="Blog" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Stories & Insights</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mt-4 mb-6">
                            Safari Blog
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            Expert tips, wildlife stories, and travel inspiration from Tanzania
                        </p>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {blogPosts.data.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={route('blog.show', post.slug)}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                                        <img
                                            src={`/images/${post.image}.jpg`}
                                            alt={post.title}
                                            className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-stone-gray mb-3">
                                        <span className="text-primary font-semibold">{post.category}</span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            {post.read_time} min read
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-stone-gray line-clamp-2 mb-3">{post.excerpt}</p>
                                    <p className="text-sm text-stone-gray">By {post.author}</p>
                                </Link>
                            ))}
                        </div>

                        {/* Pagination */}
                        {blogPosts.links && blogPosts.links.length > 3 && (
                            <div className="flex justify-center gap-2">
                                {blogPosts.links.map((link: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`px-4 py-2 rounded-lg ${link.active
                                            ? 'bg-sahara-gold text-charcoal'
                                            : 'bg-gray-200 text-charcoal hover:bg-gray-300'
                                            } ${!link.url && 'opacity-50 cursor-not-allowed'}`}
                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
