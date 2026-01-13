import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ArrowLeft, Save } from 'lucide-react';

interface GalleryImage {
    id: number;
    title: string;
    category: string;
    image: string;
    size: string;
    order: number;
    is_active: boolean;
}

export default function Edit({ image }: { image: GalleryImage }) {
    const { data, setData, post, processing, errors } = useForm({
        _method: 'put',
        title: image.title,
        category: image.category,
        image: null as File | null,
        size: image.size,
        order: image.order,
        is_active: image.is_active,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.gallery.update', image.id));
    };

    return (
        <AdminLayout>
            <Head title="Edit Gallery Image" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.gallery.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Edit Gallery Image</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Image Title</Label>
                        <Input
                            id="title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                            required
                        />
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={data.category} onValueChange={(value) => setData('category', value)}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Wildlife">Wildlife</SelectItem>
                                <SelectItem value="Landscape">Landscape</SelectItem>
                                <SelectItem value="Culture">Culture</SelectItem>
                                <SelectItem value="Lifestyle">Lifestyle</SelectItem>
                                <SelectItem value="Relaxation">Relaxation</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Update Image (Optional)</Label>
                        <Input
                            id="image"
                            type="file"
                            onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                            accept="image/*"
                        />
                        {image.image && !data.image && (
                            <div className="mt-2">
                                <p className="text-xs text-stone-500 mb-2">Current image:</p>
                                <img
                                    src={image.image.startsWith('uploads/') ? `/storage/${image.image}` : `/images/${image.image}`}
                                    alt={image.title}
                                    className="h-32 w-auto rounded-lg border border-stone-200"
                                />
                            </div>
                        )}
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="size">Layout Size</Label>
                            <Select value={data.size} onValueChange={(value) => setData('size', value)}>
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="wide">Wide</SelectItem>
                                    <SelectItem value="tall">Tall</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-xs text-stone-500">Controls masonry grid layout</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="order">Display Order</Label>
                            <Input
                                id="order"
                                type="number"
                                value={data.order}
                                onChange={e => setData('order', parseInt(e.target.value))}
                            />
                            <p className="text-xs text-stone-500">Lower numbers appear first</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="is_active"
                            checked={data.is_active}
                            onChange={e => setData('is_active', e.target.checked)}
                            className="rounded border-stone-300"
                        />
                        <Label htmlFor="is_active" className="font-normal">Make this image visible on the gallery page</Label>
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
