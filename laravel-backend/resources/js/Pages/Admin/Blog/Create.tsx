import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { ArrowLeft, Plus } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        image: '',
        category: '',
        author: 'Elysora Team',
        read_time: '5 min read',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.blog.store'));
    };

    return (
        <AdminLayout>
            <Head title="Write New Post" />

            <div className="max-w-4xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.blog.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Write New Post</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                value={data.title}
                                onChange={e => {
                                    setData({
                                        ...data,
                                        title: e.target.value,
                                        slug: e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                                    });
                                }}
                                required
                                placeholder="e.g. The Magic of Migration"
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
                                placeholder="e.g. Wildlife"
                            />
                            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
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
                            placeholder="e.g. blog-post-1.jpg"
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
                            placeholder="Short summary for cards..."
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
                            placeholder="<p>Write your article here...</p>"
                        />
                        <p className="text-xs text-stone-500">Supports raw HTML for rich formatting.</p>
                        {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold min-w-[150px]">
                            {processing ? 'Publishing...' : <><Plus className="h-4 w-4 mr-2" /> Publish Post</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
