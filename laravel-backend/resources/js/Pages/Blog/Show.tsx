import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { Button } from '@/Components/ui/button';
import { ArrowRight, Calendar, Clock, User, Share2 } from 'lucide-react';

interface BlogShowProps {
    post: any;
    relatedPosts: Array<any>;
}

export default function BlogShow({ post, relatedPosts }: BlogShowProps) {
    return (
        <MainLayout title={`${post.title} - Elysora Safaris Blog`}>
            <div className="flex flex-col min-h-screen bg-[#FDFCF8]"> {/* Warm paper-like background */}

                {/* Immersive Hero */}
                <div className="relative h-[85vh] w-full overflow-hidden">
                    <img
                        src={`/images/${post.image}.jpg`}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white z-10">
                        <div className="container mx-auto max-w-5xl">
                            <span className="inline-block px-5 py-2 bg-sahara-gold text-charcoal font-bold uppercase tracking-widest text-xs rounded-full mb-6">
                                {post.category}
                            </span>
                            <div className="relative">
                                <span className="accent-script text-8xl md:text-[10rem] absolute -top-20 -left-12 text-white/10 transform -rotate-3 select-none pointer-events-none z-0">Story</span>
                                <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-headline font-bold mb-8 leading-tight drop-shadow-lg">
                                    {post.title}
                                </h1>
                            </div>

                            <div className="flex flex-wrap items-center gap-8 text-white/90 font-medium tracking-wide">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <User className="h-5 w-5" />
                                    </div>
                                    <span>{post.author}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Calendar className="h-5 w-5 text-sahara-gold" />
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-sahara-gold" />
                                    <span>{post.read_time} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Article Content */}
                <section className="py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <article className="max-w-3xl mx-auto">
                            {/* Excerpt */}
                            <p className="text-2xl md:text-3xl text-charcoal/80 font-headline leading-relaxed italic border-l-4 border-sahara-gold pl-8 mb-16">
                                {post.excerpt}
                            </p>

                            {/* Main Body */}
                            <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-headline prose-headings:font-bold prose-headings:text-charcoal prose-p:text-stone-600 prose-p:leading-loose prose-a:text-sahara-gold prose-blockquote:border-l-sahara-gold prose-blockquote:text-stone-500 prose-blockquote:italic prose-li:marker:text-sahara-gold">
                                <div
                                    className="first-letter:float-left first-letter:text-7xl first-letter:font-bold first-letter:text-charcoal first-letter:mr-3 first-letter:mt-[-10px] first-letter:font-headline"
                                    dangerouslySetInnerHTML={{ __html: post.content || '<p>Content coming soon...</p>' }}
                                />
                            </div>

                            {/* Share & Tags */}
                            <div className="mt-16 pt-8 border-t border-stone-200 flex justify-between items-center">
                                <div className="text-stone-500 text-sm">
                                    Filed under: <span className="text-charcoal font-bold">{post.category}</span>
                                </div>
                                <Button variant="outline" className="gap-2 rounded-full">
                                    <Share2 className="h-4 w-4" /> Share Article
                                </Button>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Related Posts */}
                {relatedPosts && relatedPosts.length > 0 && (
                    <section className="py-24 bg-white border-t border-stone-100">
                        <div className="container mx-auto px-4 md:px-6">
                            <div className="flex items-end justify-between mb-12">
                                <div>
                                    <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-2">Continue Reading</span>
                                    <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal">
                                        More Stories
                                    </h2>
                                </div>
                                <Link href={route('blog.index')}>
                                    <Button variant="ghost" className="hidden md:flex gap-2">View All <ArrowRight className="h-4 w-4" /></Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                {relatedPosts.slice(0, 3).map((related) => (
                                    <Link
                                        key={related.slug}
                                        href={route('blog.show', related.slug)}
                                        className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                            <img
                                                src={`/images/${related.image}.jpg`}
                                                alt={related.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                        </div>
                                        <div className="p-8">
                                            <span className="text-xs font-bold text-sahara-gold uppercase tracking-wider mb-3 block">{related.category}</span>
                                            <h3 className="text-xl font-headline font-bold text-charcoal mb-4 group-hover:text-sahara-gold transition-colors">
                                                {related.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-stone-400 text-sm">
                                                <Clock className="h-4 w-4" /> {related.read_time} min read
                                            </div>
                                        </div>
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
