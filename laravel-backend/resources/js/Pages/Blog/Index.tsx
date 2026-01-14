import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useState, useMemo } from 'react';

interface BlogIndexProps {
    blogPosts: {
        data: Array<any>;
        links: any;
        meta: any;
    };
    siteImages?: Record<string, any>;
}

export default function BlogIndex({ blogPosts, siteImages }: BlogIndexProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = useMemo(() => {
        const unique = new Set(blogPosts.data.map(post => post.category));
        return ['All', ...Array.from(unique)];
    }, [blogPosts.data]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        if (selectedCategory === 'All') return blogPosts.data;
        return blogPosts.data.filter(post => post.category === selectedCategory);
    }, [blogPosts.data, selectedCategory]);

    return (
        <MainLayout title="Blog - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative py-32 md:py-40 overflow-hidden bg-charcoal">
                    <div className="absolute inset-0 opacity-40">
                        <img
                            src={siteImages?.blog_index_hero?.image_path ? `/storage/${siteImages.blog_index_hero.image_path}` : '/images/blog-post-1.jpg'}
                            alt={siteImages?.blog_index_hero?.alt_text || 'Blog'}
                            className="w-full h-full object-cover"
                            onError={(e) => { e.currentTarget.src = '/images/blog-post-1.jpg'; }}
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white z-10">
                        <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm block mb-4">Stories & Insights</span>
                        <div className="relative inline-block mb-6">
                            <span className="accent-script text-6xl md:text-8xl absolute -top-10 -left-12 text-white/10 transform -rotate-12 select-none pointer-events-none z-0">Journal</span>
                            <h1 className="relative z-10 text-5xl md:text-7xl font-headline font-bold">
                                Safari Blog
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white/90 font-light">
                            Expert tips, wildlife stories, and travel inspiration from the heart of Tanzania.
                        </p>
                    </div>
                </section>

                {/* Filter & Content */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">

                        {/* Category Filter */}
                        <div className="flex flex-wrap justify-center gap-3 mb-16">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${selectedCategory === category
                                        ? 'bg-sahara-gold text-white border-sahara-gold shadow-md transform scale-105'
                                        : 'bg-transparent text-stone-600 border-stone-300 hover:border-sahara-gold hover:text-sahara-gold'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Posts Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {filteredPosts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={route('blog.show', post.slug)}
                                    className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2"
                                >
                                    <div className="relative h-72 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                        <img
                                            src={post.image.startsWith('uploads/') ? `/storage/${post.image}` : `/images/${post.image}.jpg`}
                                            alt={post.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-charcoal text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col flex-grow p-8">
                                        <div className="flex items-center gap-4 text-xs text-stone-500 mb-4 font-medium uppercase tracking-wide">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="h-3.5 w-3.5 text-sahara-gold" />
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-stone-300" />
                                            <span className="flex items-center gap-1.5">
                                                <Clock className="h-3.5 w-3.5 text-sahara-gold" />
                                                {post.read_time} min read
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-headline font-bold text-charcoal mb-4 leading-tight group-hover:text-sahara-gold transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-stone-600 line-clamp-3 mb-6 flex-grow leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-sahara-gold font-bold text-sm tracking-wide group/btn">
                                            Read Article
                                            <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-stone-500 text-lg">No stories found in this category yet.</p>
                                <Button
                                    variant="outline"
                                    className="mt-4"
                                    onClick={() => setSelectedCategory('All')}
                                >
                                    View All Stories
                                </Button>
                            </div>
                        )}

                        {/* Pagination (Only show if viewing All and pagination exists) */}
                        {selectedCategory === 'All' && blogPosts.links && blogPosts.links.length > 3 && (
                            <div className="flex justify-center gap-2 mt-20">
                                {blogPosts.links.map((link: any, index: number) => (
                                    <Link
                                        key={index}
                                        href={link.url || '#'}
                                        className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${link.active
                                            ? 'bg-charcoal text-white'
                                            : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
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
