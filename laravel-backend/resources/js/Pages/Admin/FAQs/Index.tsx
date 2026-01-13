import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Plus, Pencil, Trash2, Eye, EyeOff } from 'lucide-react';

interface FAQ {
    id: number;
    category: string;
    question: string;
    answer: string;
    order: number;
    is_active: boolean;
}

export default function Index({ faqs }: { faqs: FAQ[] }) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this FAQ?')) {
            router.delete(route('admin.faqs.destroy', id));
        }
    };

    return (
        <AdminLayout>
            <Head title="FAQ Management" />

            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-charcoal">FAQ Management</h1>
                    <Button asChild className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold">
                        <Link href={route('admin.faqs.create')}>
                            <Plus className="h-4 w-4 mr-2" /> Add FAQ
                        </Link>
                    </Button>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Category</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Question</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Order</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-stone-500 uppercase">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-stone-500 uppercase">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-200">
                                {faqs.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-8 text-center text-stone-500">
                                            No FAQs yet. Add your first one!
                                        </td>
                                    </tr>
                                ) : (
                                    faqs.map((faq) => (
                                        <tr key={faq.id} className="hover:bg-stone-50">
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-stone-100 rounded-full text-xs font-medium">{faq.category}</span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-medium text-charcoal max-w-md truncate">{faq.question}</td>
                                            <td className="px-6 py-4 text-sm text-stone-600">{faq.order}</td>
                                            <td className="px-6 py-4">
                                                {faq.is_active ? (
                                                    <span className="flex items-center gap-1 text-green-600 text-sm">
                                                        <Eye className="h-4 w-4" /> Active
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-1 text-gray-600 text-sm">
                                                        <EyeOff className="h-4 w-4" /> Hidden
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-right space-x-2">
                                                <Button variant="ghost" size="sm" asChild>
                                                    <Link href={route('admin.faqs.edit', faq.id)}>
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(faq.id)}
                                                    className="text-red-600 hover:text-red-700"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
