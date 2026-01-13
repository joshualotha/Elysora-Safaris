import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const galleryImages = [
    { id: 1, title: 'Lion in Serengeti', image: 'safari-card-1' },
    { id: 2, title: 'Elephant Herd', image: 'safari-card-2' },
    { id: 3, title: 'Kilimanjaro Sunset', image: 'safari-card-3' },
    { id: 4, title: 'Zebra Migration', image: 'safari-card-4' },
    { id: 5, title: 'Ngorongoro Crater', image: 'destination-serengeti' },
    { id: 6, title: 'Zanzibar Beach', image: 'destination-zanzibar' },
];

export default function Gallery() {
    return (
        <MainLayout title="Gallery - Elysora Safaris">
            <div className="flex flex-col min-h-screen">
                {/* Hero */}
                <section className="relative py-32 md:py-40 bg-gradient-to-br from-charcoal to-safari-green">
                    <div className="relative container mx-auto px-4 md:px-6 text-center text-white">
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">
                            Photo Gallery
                        </h1>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
                            A visual journey through Tanzania's wilderness
                        </p>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-20 md:py-32 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {galleryImages.map((item) => (
                                <div key={item.id} className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                                    <img
                                        src={`/images/${item.image}.jpg`}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white font-headline text-xl p-6">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
