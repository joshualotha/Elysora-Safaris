import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';

export default function Edit({ post }: { post: any }) {
    const { data, setData, put, processing, errors } = useForm({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        image: post.image,
        category: post.category,
        author: post.author,
        read_time: post.read_time,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('admin.blog.update', post.id));
    };

    return (
        <AdminLayout>
            <Head title={`Edit ${post.title}`} />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.blog.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Edit Post</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                required
                            />
                            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL)</Label>
                            <Input
                                id="slug"
                                value={data.slug}
                                onChange={e => setData('slug', e.target.value)}
                                required
                            />
                            {errors.slug && <p className="text-red-500 text-sm">{errors.slug}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input
                                id="category"
                                value={data.category}
                                onChange={e => setData('category', e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="author">Author</Label>
                            <Input
                                id="author"
                                value={data.author}
                                onChange={e => setData('author', e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="read_time">Read Time</Label>
                            <Input
                                id="read_time"
                                value={data.read_time}
                                onChange={e => setData('read_time', e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Image Filename</Label>
                        <Input
                            id="image"
                            value={data.image}
                            onChange={e => setData('image', e.target.value)}
                            required
                        />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="excerpt">Excerpt</Label>
                        <Textarea
                            id="excerpt"
                            value={data.excerpt}
                            onChange={e => setData('excerpt', e.target.value)}
                            className="h-24"
                            required
                        />
                        {errors.excerpt && <p className="text-red-500 text-sm">{errors.excerpt}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="content">Content (HTML Supported)</Label>
                        <Textarea
                            id="content"
                            value={data.content}
                            onChange={e => setData('content', e.target.value)}
                            className="h-96 font-mono text-sm"
                            required
                        />
                        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold min-w-[150px]">
                            {processing ? 'Saving...' : <><Save className="h-4 w-4 mr-2" /> Save Changes</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
