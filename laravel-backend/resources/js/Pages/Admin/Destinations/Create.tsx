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

                    <div className="space-y-4">
                        <Label>"At a Glance" Stats</Label>
                        <div className="space-y-3 border border-stone-200 rounded-lg p-4 bg-stone-50">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-2">
                                    <Label htmlFor="stats-bestTime" className="text-xs">Best Time to Visit</Label>
                                    <Input
                                        id="stats-bestTime"
                                        value={JSON.parse(data.stats || '{}').bestTime || ''}
                                        onChange={(e) => {
                                            const stats = JSON.parse(data.stats || '{}');
                                            stats.bestTime = e.target.value;
                                            setData('stats', JSON.stringify(stats));
                                        }}
                                        placeholder="e.g., June-October"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="stats-size" className="text-xs">Size/Area</Label>
                                    <Input
                                        id="stats-size"
                                        value={JSON.parse(data.stats || '{}').size || ''}
                                        onChange={(e) => {
                                            const stats = JSON.parse(data.stats || '{}');
                                            stats.size = e.target.value;
                                            setData('stats', JSON.stringify(stats));
                                        }}
                                        placeholder="e.g., 14,763 km²"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="stats-climate" className="text-xs">Climate</Label>
                                    <Input
                                        id="stats-climate"
                                        value={JSON.parse(data.stats || '{}').climate || ''}
                                        onChange={(e) => {
                                            const stats = JSON.parse(data.stats || '{}');
                                            stats.climate = e.target.value;
                                            setData('stats', JSON.stringify(stats));
                                        }}
                                        placeholder="e.g., Tropical"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.stats && <p className="text-red-500 text-sm">{errors.stats}</p>}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label>Highlights</Label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const highlights = data.highlights ? JSON.parse(data.highlights) : [];
                                    highlights.push({ title: '', description: '' });
                                    setData('highlights', JSON.stringify(highlights));
                                }}
                                className="gap-2"
                            >
                                <Plus className="h-4 w-4" /> Add Highlight
                            </Button>
                        </div>

                        {JSON.parse(data.highlights || '[]').map((highlight: any, index: number) => (
                            <div key={index} className="border border-stone-200 rounded-lg p-4 space-y-3 bg-stone-50">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-charcoal text-sm">Highlight {index + 1}</h4>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            const highlights = JSON.parse(data.highlights);
                                            highlights.splice(index, 1);
                                            setData('highlights', JSON.stringify(highlights));
                                        }}
                                        className="text-red-600 hover:text-red-700"
                                    >
                                        Remove
                                    </Button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-2">
                                        <Label htmlFor={`highlight-${index}-title`} className="text-xs">Title</Label>
                                        <Input
                                            id={`highlight-${index}-title`}
                                            value={highlight.title}
                                            onChange={(e) => {
                                                const highlights = JSON.parse(data.highlights);
                                                highlights[index].title = e.target.value;
                                                setData('highlights', JSON.stringify(highlights));
                                            }}
                                            placeholder="e.g., Wildlife"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor={`highlight-${index}-description`} className="text-xs">Description</Label>
                                        <Input
                                            id={`highlight-${index}-description`}
                                            value={highlight.description}
                                            onChange={(e) => {
                                                const highlights = JSON.parse(data.highlights);
                                                highlights[index].description = e.target.value;
                                                setData('highlights', JSON.stringify(highlights));
                                            }}
                                            placeholder="e.g., Home to the Big Five"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {JSON.parse(data.highlights || '[]').length === 0 && (
                            <p className="text-sm text-stone-500 text-center py-8 border border-dashed border-stone-300 rounded-lg">
                                No highlights added yet. Click "Add Highlight" to start.
                            </p>
                        )}
                        {errors.highlights && <p className="text-red-500 text-sm">{errors.highlights}</p>}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label>Additional Content Sections</Label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const sections = data.sections ? JSON.parse(data.sections) : [];
                                    sections.push({ title: '', content: '' });
                                    setData('sections', JSON.stringify(sections));
                                }}
                                className="gap-2"
                            >
                                <Plus className="h-4 w-4" /> Add Section
                            </Button>
                        </div>

                        {JSON.parse(data.sections || '[]').map((section: any, index: number) => (
                            <div key={index} className="border border-stone-200 rounded-lg p-4 space-y-3 bg-stone-50">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-charcoal text-sm">Section {index + 1}</h4>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            const sections = JSON.parse(data.sections);
                                            sections.splice(index, 1);
                                            setData('sections', JSON.stringify(sections));
                                        }}
                                        className="text-red-600 hover:text-red-700"
                                    >
                                        Remove
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`section-${index}-title`} className="text-xs">Title</Label>
                                    <Input
                                        id={`section-${index}-title`}
                                        value={section.title}
                                        onChange={(e) => {
                                            const sections = JSON.parse(data.sections);
                                            sections[index].title = e.target.value;
                                            setData('sections', JSON.stringify(sections));
                                        }}
                                        placeholder="e.g., Wildlife"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`section-${index}-content`} className="text-xs">Content</Label>
                                    <Textarea
                                        id={`section-${index}-content`}
                                        value={section.content}
                                        onChange={(e) => {
                                            const sections = JSON.parse(data.sections);
                                            sections[index].content = e.target.value;
                                            setData('sections', JSON.stringify(sections));
                                        }}
                                        placeholder="Describe this section in detail..."
                                        rows={4}
                                    />
                                </div>
                            </div>
                        ))}

                        {JSON.parse(data.sections || '[]').length === 0 && (
                            <p className="text-sm text-stone-500 text-center py-8 border border-dashed border-stone-300 rounded-lg">
                                No content sections added yet. Click "Add Section" to start.
                            </p>
                        )}
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
