import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { ArrowLeft, Plus } from 'lucide-react';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        description: '',
        price: '',
        duration: '',
        image: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.safaris.store'));
    };

    return (
        <AdminLayout>
            <Head title="Create Safari" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.safaris.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Create Safari Package</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Package Name</Label>
                            <Input
                                id="name"
                                value={data.name}
                                onChange={e => {
                                    setData({
                                        ...data,
                                        name: e.target.value,
                                        slug: e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
                                    });
                                }}
                                required
                                placeholder="e.g. 7-Day Migration Safari"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="price">Price ($)</Label>
                            <Input
                                id="price"
                                type="number"
                                value={data.price}
                                onChange={e => setData('price', e.target.value)}
                                required
                                placeholder="e.g. 2999"
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="duration">Duration (Days)</Label>
                            <Input
                                id="duration"
                                type="number"
                                value={data.duration}
                                onChange={e => setData('duration', e.target.value)}
                                required
                                placeholder="e.g. 7"
                            />
                            {errors.duration && <p className="text-red-500 text-sm">{errors.duration}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Image Filename (without extension)</Label>
                        <Input
                            id="image"
                            value={data.image}
                            onChange={e => setData('image', e.target.value)}
                            placeholder="e.g. safari-migration"
                            required
                        />
                        <p className="text-xs text-stone-500">Currently supports images in /public/images/.</p>
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            className="h-32"
                            required
                            placeholder="Overview of the safari..."
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold min-w-[150px]">
                            {processing ? 'Creating...' : <><Plus className="h-4 w-4 mr-2" /> Create Package</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
