import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { router } from '@inertiajs/react';

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    author: string;
    image: string;
    published_at: string;
}

export default function Index({ posts }: { posts: BlogPost[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            router.delete(route('admin.blog.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Blog" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-charcoal">Blog Posts</h1>
                <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 border-none">
                    <Link href={route('admin.blog.create')}>
                        <Plus className="h-4 w-4 mr-2" /> New Post
                    </Link>
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Image</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Title</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Category</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Author</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-stone-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="h-12 w-20 rounded-md overflow-hidden bg-stone-200">
                                        <img
                                            src={post.image.startsWith('uploads/') ? `/storage/${post.image}` : `/images/${post.image}`}
                                            alt={post.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x48?text=No+Img' }}
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-charcoal">{post.title}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 bg-stone-100 rounded-full text-xs font-semibold text-stone-600 uppercase">
                                        {post.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-stone-500 text-sm">{post.author}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <Link
                                        href={route('blog.show', post.slug)}
                                        className="inline-flex p-2 text-stone-400 hover:text-blue-500 transition-colors"
                                        title="View"
                                        target="_blank"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href={route('admin.blog.edit', post.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-sahara-gold transition-colors"
                                        title="Edit"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(post.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-red-500 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-stone-500">
                                    No blog posts found. Write one to share your stories.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
