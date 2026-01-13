import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { ArrowLeft } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        category: '',
        question: '',
        answer: '',
        order: 0,
        is_active: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('admin.faqs.store'));
    }

    return (
        <AdminLayout>
            <Head title="Create FAQ" />

            <div className="max-w-3xl">
                <div className="mb-6">
                    <Link
                        href={route('admin.faqs.index')}
                        className="flex items-center text-stone-600 hover:text-charcoal mb-4"
                    >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to FAQs
                    </Link>
                    <h1 className="text-2xl font-bold text-charcoal">Create FAQ</h1>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label htmlFor="category">Category *</Label>
                            <select
                                id="category"
                                value={data.category}
                                onChange={(e) => setData('category', e.target.value)}
                                className="mt-2 w-full rounded-md border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sahara-gold"
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="Booking & Payment">Booking & Payment</option>
                                <option value="Travel Requirements">Travel Requirements</option>
                                <option value="Safari Experience">Safari Experience</option>
                                <option value="Accommodation">Accommodation</option>
                                <option value="Health & Safety">Health & Safety</option>
                                <option value="Transportation">Transportation</option>
                                <option value="Packing & Preparation">Packing & Preparation</option>
                                <option value="Wildlife & Nature">Wildlife & Nature</option>
                                <option value="General Information">General Information</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                        </div>

                        <div>
                            <Label htmlFor="question">Question *</Label>
                            <Input
                                id="question"
                                type="text"
                                value={data.question}
                                onChange={(e) => setData('question', e.target.value)}
                                className="mt-2"
                                placeholder="What is your question?"
                                required
                            />
                            {errors.question && <p className="text-red-500 text-sm mt-1">{errors.question}</p>}
                        </div>

                        <div>
                            <Label htmlFor="answer">Answer *</Label>
                            <Textarea
                                id="answer"
                                value={data.answer}
                                onChange={(e) => setData('answer', e.target.value)}
                                rows={6}
                                className="mt-2"
                                placeholder="Provide a detailed answer..."
                                required
                            />
                            {errors.answer && <p className="text-red-500 text-sm mt-1">{errors.answer}</p>}
                        </div>

                        <div>
                            <Label htmlFor="order">Display Order</Label>
                            <Input
                                id="order"
                                type="number"
                                value={data.order}
                                onChange={(e) => setData('order', parseInt(e.target.value))}
                                className="mt-2"
                                min="0"
                            />
                            <p className="text-sm text-stone-500 mt-1">Lower numbers appear first</p>
                            {errors.order && <p className="text-red-500 text-sm mt-1">{errors.order}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="is_active"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                                className="rounded border-stone-300"
                            />
                            <Label htmlFor="is_active" className="cursor-pointer">
                                Active (visible on public site)
                            </Label>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t">
                            <Button type="button" variant="outline" asChild>
                                <Link href={route('admin.faqs.index')}>Cancel</Link>
                            </Button>
                            <Button
                                type="submit"
                                disabled={processing}
                                className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90"
                            >
                                {processing ? 'Creating...' : 'Create FAQ'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}
