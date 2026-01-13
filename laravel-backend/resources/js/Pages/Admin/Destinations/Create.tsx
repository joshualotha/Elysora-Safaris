import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Textarea } from '@/Components/ui/textarea';
import { Label } from '@/Components/ui/label';
import { ArrowLeft, Plus } from 'lucide-react';
import RichTextEditor from '@/Components/RichTextEditor';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        slug: '',
        subtitle: '',
        description: '',
        image: null as File | null,
        attractions: '',
        stats: '',
        highlights: '',
        sections: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.destinations.store'));
    };

    return (
        <AdminLayout>
            <Head title="Create Destination" />

            <div className="max-w-3xl mx-auto">
                <div className="mb-6 flex items-center gap-4">
                    <Button variant="ghost" asChild size="icon">
                        <Link href={route('admin.destinations.index')}>
                            <ArrowLeft className="h-5 w-5" />
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-bold text-charcoal">Create Destination</h1>
                </div>

                <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
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
                                placeholder="e.g. Serengeti National Park"
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
                                placeholder="e.g. serengeti-national-park"
                            />
                            {errors.slug && <p className="text-red-500 text-sm">{errors.slug}</p>}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subtitle">Subtitle/Tagline</Label>
                        <Input
                            id="subtitle"
                            value={data.subtitle}
                            onChange={e => setData('subtitle', e.target.value)}
                            placeholder="e.g. Explore the Wild"
                        />
                        <p className="text-xs text-stone-500">Short tagline for the hero section</p>
                        {errors.subtitle && <p className="text-red-500 text-sm">{errors.subtitle}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="attractions">Attractions (Tags)</Label>
                        <Input
                            id="attractions"
                            value={data.attractions}
                            onChange={e => setData('attractions', e.target.value)}
                            placeholder="Big Five, Migration, Birdwatching"
                        />
                        <p className="text-xs text-stone-500">Comma-separated list</p>
                        {errors.attractions && <p className="text-red-500 text-sm">{errors.attractions}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Featured Image</Label>
                        <Input
                            id="image"
                            type="file"
                            onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                            required
                            accept="image/*"
                        />
                        <p className="text-xs text-stone-500">Upload a high-quality JPG or PNG.</p>
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description (Overview & Highlights)</Label>
                        <RichTextEditor
                            value={data.description}
                            onChange={(html) => setData('description', html)}
                            className="min-h-[300px]"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="stats">Stats (JSON)</Label>
                        <Textarea
                            id="stats"
                            value={data.stats}
                            onChange={e => setData('stats', e.target.value)}
                            className="h-24 font-mono text-sm"
                            placeholder='{"bestTime":"June-October","size":"14,763 km²","climate":"Tropical"}'
                        />
                        <p className="text-xs text-stone-500">JSON object for "At a Glance" sidebar</p>
                        {errors.stats && <p className="text-red-500 text-sm">{errors.stats}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="highlights">Highlights (JSON)</Label>
                        <Textarea
                            id="highlights"
                            value={data.highlights}
                            onChange={e => setData('highlights', e.target.value)}
                            className="h-32 font-mono text-sm"
                            placeholder='[{"title":"Wildlife","description":"Home to the Big Five"},{"title":"Migration","description":"Witness the Great Migration"}]'
                        />
                        <p className="text-xs text-stone-500">JSON array of highlight cards</p>
                        {errors.highlights && <p className="text-red-500 text-sm">{errors.highlights}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="sections">Additional Sections (JSON)</Label>
                        <Textarea
                            id="sections"
                            value={data.sections}
                            onChange={e => setData('sections', e.target.value)}
                            className="h-32 font-mono text-sm"
                            placeholder='[{"title":"Wildlife","content":"Rich description..."}]'
                        />
                        <p className="text-xs text-stone-500">JSON array of content sections</p>
                        {errors.sections && <p className="text-red-500 text-sm">{errors.sections}</p>}
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button type="submit" disabled={processing} className="bg-sahara-gold text-charcoal hover:bg-sahara-gold/90 font-bold min-w-[150px]">
                            {processing ? 'Creating...' : <><Plus className="h-4 w-4 mr-2" /> Create Destination</>}
                        </Button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
