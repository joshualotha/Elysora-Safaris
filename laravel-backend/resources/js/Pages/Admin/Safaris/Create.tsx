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
        description: '',
        price: '',
        duration: '',
        image: null as File | null,
        destinations: '',
        highlights: '',
        itinerary: '',
        whats_included: '',
        whats_excluded: '',
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
                        <Label htmlFor="image">Featured Image</Label>
                        <Input
                            id="image"
                            type="file"
                            onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                            accept="image/*"
                            required
                        />
                        <p className="text-xs text-stone-500">Upload a high-quality JPG or PNG.</p>
                        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
                    </div>


                    <div className="space-y-2">
                        <Label htmlFor="description">Detailed Itinerary & Description</Label>
                        <RichTextEditor
                            value={data.description}
                            onChange={(html) => setData('description', html)}
                            className="min-h-[300px]"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="destinations">Destinations Visited</Label>
                        <Input
                            id="destinations"
                            value={data.destinations}
                            onChange={e => setData('destinations', e.target.value)}
                            placeholder="Serengeti, Ngorongoro, Tarangire"
                        />
                        <p className="text-xs text-stone-500">Comma-separated list of parks/destinations</p>
                        {errors.destinations && <p className="text-red-500 text-sm">{errors.destinations}</p>}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="highlights">Highlights</Label>
                        <Input
                            id="highlights"
                            value={data.highlights}
                            onChange={e => setData('highlights', e.target.value)}
                            placeholder="Big Five, Migration, Hot Air Balloon"
                        />
                        <p className="text-xs text-stone-500">Comma-separated list of key highlights</p>
                        {errors.highlights && <p className="text-red-500 text-sm">{errors.highlights}</p>}
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label>Day-by-Day Itinerary</Label>
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                    const currentItinerary = data.itinerary ? JSON.parse(data.itinerary) : [];
                                    currentItinerary.push({
                                        day: currentItinerary.length + 1,
                                        title: '',
                                        description: ''
                                    });
                                    setData('itinerary', JSON.stringify(currentItinerary));
                                }}
                                className="gap-2"
                            >
                                <Plus className="h-4 w-4" /> Add Day
                            </Button>
                        </div>

                        {JSON.parse(data.itinerary || '[]').map((day: any, index: number) => (
                            <div key={index} className="border border-stone-200 rounded-lg p-4 space-y-3 bg-stone-50">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-charcoal">Day {day.day}</h4>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => {
                                            const currentItinerary = JSON.parse(data.itinerary);
                                            currentItinerary.splice(index, 1);
                                            // Re-order day numbers
                                            currentItinerary.forEach((d: any, i: number) => d.day = i + 1);
                                            setData('itinerary', JSON.stringify(currentItinerary));
                                        }}
                                        className="text-red-600 hover:text-red-700"
                                    >
                                        Remove
                                    </Button>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`day-${index}-title`}>Title</Label>
                                    <Input
                                        id={`day-${index}-title`}
                                        value={day.title}
                                        onChange={(e) => {
                                            const currentItinerary = JSON.parse(data.itinerary);
                                            currentItinerary[index].title = e.target.value;
                                            setData('itinerary', JSON.stringify(currentItinerary));
                                        }}
                                        placeholder="e.g., Arrival in Arusha"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor={`day-${index}-description`}>Description</Label>
                                    <Textarea
                                        id={`day-${index}-description`}
                                        value={day.description}
                                        onChange={(e) => {
                                            const currentItinerary = JSON.parse(data.itinerary);
                                            currentItinerary[index].description = e.target.value;
                                            setData('itinerary', JSON.stringify(currentItinerary));
                                        }}
                                        placeholder="Describe the activities for this day..."
                                        rows={3}
                                    />
                                </div>
                            </div>
                        ))}

                        {JSON.parse(data.itinerary || '[]').length === 0 && (
                            <p className="text-sm text-stone-500 text-center py-8 border border-dashed border-stone-300 rounded-lg">
                                No itinerary days added yet. Click "Add Day" to start building your itinerary.
                            </p>
                        )}
                        {errors.itinerary && <p className="text-red-500 text-sm">{errors.itinerary}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label htmlFor="whats_included">What's Included</Label>
                            <Textarea
                                id="whats_included"
                                value={data.whats_included}
                                onChange={e => setData('whats_included', e.target.value)}
                                className="h-32"
                                placeholder="Accommodation, Meals, Park fees, Game drives"
                            />
                            <p className="text-xs text-stone-500">Comma-separated list</p>
                            {errors.whats_included && <p className="text-red-500 text-sm">{errors.whats_included}</p>}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="whats_excluded">What's Excluded</Label>
                            <Textarea
                                id="whats_excluded"
                                value={data.whats_excluded}
                                onChange={e => setData('whats_excluded', e.target.value)}
                                className="h-32"
                                placeholder="International flights, Visa fees, Personal expenses"
                            />
                            <p className="text-xs text-stone-500">Comma-separated list</p>
                            {errors.whats_excluded && <p className="text-red-500 text-sm">{errors.whats_excluded}</p>}
                        </div>
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
