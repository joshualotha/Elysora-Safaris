import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// Using actual images we have in the project
const galleryImages = [
    { id: 1, title: 'Maasai Warrior at Golden Hour', category: 'Culture', image: 'culture-maasai-portrait.png', size: 'large' },
    { id: 2, title: 'Kilimanjaro Summit', category: 'Landscape', image: 'mountain-kilimanjaro-hiker.png', size: 'tall' },
    { id: 3, title: 'Elephant Herd', category: 'Wildlife', image: 'group-safari-vehicle.png', size: 'wide' },
    { id: 4, title: 'Zanzibar Stone Town', category: 'Culture', image: 'zanzibar-stone-town-street.png', size: 'small' },
    { id: 5, title: 'Luxury Bush Dinner', category: 'Lifestyle', image: 'tailor-made-bush-dinner.png', size: 'wide' },
    { id: 6, title: 'Serengeti Plains', category: 'Landscape', image: 'destination-serengeti.jpg', size: 'large' },
    { id: 7, title: 'Lion Pride', category: 'Wildlife', image: 'blog-post-1.jpg', size: 'tall' },
    { id: 8, title: 'Zanzibar Beach', category: 'Relaxation', image: 'destination-zanzibar.jpg', size: 'wide' },
    { id: 9, title: 'Leopard Resting', category: 'Wildlife', image: 'blog-post-2.jpg', size: 'small' },
    { id: 10, title: 'Ngorongoro Crater', category: 'Landscape', image: 'destination-ngorongoro.jpg', size: 'wide' },
    { id: 11, title: 'Luxury Tent', category: 'Lifestyle', image: 'luxury_tent.jpg', size: 'tall' },
    { id: 12, title: 'Tarangire Baobab', category: 'Landscape', image: 'destination-tarangire.jpg', size: 'small' },
];

const categories = ['All', 'Wildlife', 'Landscape', 'Culture', 'Lifestyle'];

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory);

    return (
        <MainLayout title="Gallery - Elysora Safaris">
            <div className="flex flex-col min-h-screen bg-ivory">
                {/* Hero */}
                <section className="relative h-[60vh] flex items-center justify-center bg-charcoal">
                    <div className="absolute inset-0 overflow-hidden">
                        <img src="/images/migration_photography.jpg" alt="Gallery Hero" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 text-center container px-4">
                        <span className="text-sahara-gold font-bold tracking-widest uppercase text-sm block mb-4 animate-fade-in-up">Visual Stories</span>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold text-white mb-6 drop-shadow-2xl">
                            Moments in the Wild
                        </h1>
                        <p className="text-white/90 text-xl max-w-2xl mx-auto font-light">
                            A curated collection of captured memories from our safaris.
                        </p>
                    </div>
                </section>

                {/* Filter */}
                <section className="py-12 sticky top-0 z-30 bg-ivory/95 backdrop-blur-md border-b border-stone-200">
                    <div className="container mx-auto px-4 overflow-x-auto">
                        <div className="flex justify-center min-w-max gap-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 ${selectedCategory === cat
                                            ? 'bg-sahara-gold text-white shadow-md transform scale-105'
                                            : 'bg-white text-charcoal hover:bg-stone-100 border border-stone-100'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Masonry Grid */}
                <section className="py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                            {filteredImages.map((item) => (
                                <div
                                    key={item.id}
                                    className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-xl transition-all duration-500"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <div className="relative">
                                        <img
                                            src={`/images/${item.image}`}
                                            alt={item.title}
                                            className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                            <span className="text-sahara-gold text-xs font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                                {item.category}
                                            </span>
                                            <h3 className="text-white font-headline text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            <ZoomIn className="h-5 w-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
                        <button
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <div className="relative max-w-7xl max-h-[90vh] w-full flex flex-col items-center">
                            <img
                                src={`/images/${selectedImage.image}`}
                                alt={selectedImage.title}
                                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="mt-6 text-center">
                                <h3 className="text-2xl md:text-3xl font-headline font-bold text-white mb-2">{selectedImage.title}</h3>
                                <p className="text-sahara-gold font-medium uppercase tracking-widest text-sm">{selectedImage.category}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
