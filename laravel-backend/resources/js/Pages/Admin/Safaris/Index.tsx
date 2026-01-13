import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Plus, Pencil, Trash2, Eye } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { router } from '@inertiajs/react';

interface Safari {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    duration: number;
    image: string;
}

export default function Index({ safaris }: { safaris: Safari[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this safari package?')) {
            router.delete(route('admin.safaris.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Safaris" />

            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-charcoal">Safari Packages</h1>
                <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 border-none">
                    <Link href={route('admin.safaris.create')}>
                        <Plus className="h-4 w-4 mr-2" /> Add New
                    </Link>
                </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-stone-50 border-b border-stone-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Image</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Name</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Days</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm">Price</th>
                            <th className="px-6 py-4 font-semibold text-stone-600 text-sm text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100">
                        {safaris.map((safari) => (
                            <tr key={safari.id} className="hover:bg-stone-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="h-12 w-20 rounded-md overflow-hidden bg-stone-200">
                                        <img
                                            src={`/images/${safari.image}.jpg`}
                                            alt={safari.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/80x48?text=No+Img' }}
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4 font-medium text-charcoal">{safari.name}</td>
                                <td className="px-6 py-4 text-stone-500 text-sm">{safari.duration} Days</td>
                                <td className="px-6 py-4 font-bold text-charcoal text-sm">${safari.price.toLocaleString()}</td>
                                <td className="px-6 py-4 text-right space-x-2">
                                    <Link
                                        href={route('safaris.show', safari.slug)}
                                        className="inline-flex p-2 text-stone-400 hover:text-blue-500 transition-colors"
                                        title="View"
                                        target="_blank"
                                    >
                                        <Eye className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        href={route('admin.safaris.edit', safari.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-sahara-gold transition-colors"
                                        title="Edit"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(safari.id)}
                                        className="inline-flex p-2 text-stone-400 hover:text-red-500 transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {safaris.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-stone-500">
                                    No safari packages found. Create one to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}
