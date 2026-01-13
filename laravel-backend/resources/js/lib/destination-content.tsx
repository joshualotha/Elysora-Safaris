import { CloudSun, Binoculars, Palmtree, Mountain, Camera, Map, Sun, Thermometer, Calendar, Leaf } from 'lucide-react';

export const destinationContent: Record<string, any> = {
    'serengeti': {
        subtitle: 'The Endless Plains',
        intro: "The Serengeti is not just a national park; it's a stage where the most dramatic act of the natural world plays out year after year. From the thundering hooves of the Great Migration to the silent stalk of a leopard in the grass, this is Africa at its most primal and majestic.",
        highlights: [
            {
                title: 'Great Migration',
                description: 'Witness over 1.5 million wildebeest and zebra braving crocodile-infested rivers.',
                icon: <Binoculars className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Big Five',
                description: 'One of the best places in Africa to see Lion, Leopard, Elephant, Buffalo, and Rhino.',
                icon: <Camera className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Hot Air Balloon',
                description: 'Float over the plains at sunrise for a perspective like no other.',
                icon: <CloudSun className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Kopjes',
                description: 'Granite rock formations that serve as observation posts for predators.',
                icon: <Mountain className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            size: '14,763 sq km',
            established: '1951',
            bestTime: 'June to October (Migration)',
            climate: 'Warm days, cool nights'
        },
        sections: [
            {
                title: 'The Great Migration',
                content: "The annual movement of wildebeest and other grazers is the largest land mammal migration in the world. The herds move in a clockwise direction, following the rains. The dramatic river crossings at the Mara River usually occur between July and October."
            },
            {
                title: 'Predator Paradise',
                content: "With such a high concentration of prey, predators thrive here. You can expect to see large prides of lions, solitary leopards resting in acacia trees, and cheetahs scanning the horizon from termite mounds."
            }
        ]
    },
    'ngorongoro': {
        subtitle: 'The Garden of Eden',
        intro: "A geological marvel and a wildlife haven. The Ngorongoro Crater is the world's largest inactive, intact, and unfilled volcanic caldera. Inside these steep walls lies a microcosm of East Africa.",
        highlights: [
            {
                title: 'Black Rhino',
                description: 'One of the few places where you have a high chance of spotting this endangered species.',
                icon: <Binoculars className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Dense Wildlife',
                description: 'The highest density of predators in Africa.',
                icon: <Camera className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Maasai Culture',
                description: 'Witness the co-existence of Maasai herdsmen and wild animals.',
                icon: <Map className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Lake Magadi',
                description: 'A soda lake on the crater floor, often pink with thousands of flamingos.',
                icon: <Palmtree className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            size: '260 sq km (Floor)',
            depth: '600 meters',
            bestTime: 'Year-round',
            climate: 'Cool highlands'
        },
        sections: [
            {
                title: 'A Natural Enclosure',
                content: "Because of the enclosed nature of the crater, the wildlife here is non-migratory, meaning game viewing is excellent all year round. It's the best place to potentially see the 'Big Five' in a single day."
            }
        ]
    },
    'tarangire': {
        subtitle: 'Land of Giants',
        intro: "Tarangire is famous for two things: its massive herds of elephants and its grotesque yet majestic baobab trees. In the dry season, the Tarangire River becomes the only water source, drawing animals from miles around.",
        highlights: [
            {
                title: 'Elephant Herds',
                description: 'Herds of up to 300 elephants can be seen digging in the riverbeds.',
                icon: <Binoculars className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Baobab Trees',
                description: 'Ancient trees that can live for over 1000 years, dotting the landscape.',
                icon: <Leaf className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Birdlife',
                description: 'A birder\'s paradise with over 550 species recorded.',
                icon: <Camera className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            size: '2,850 sq km',
            established: '1970',
            bestTime: 'June to October',
            climate: 'Hot due to lower elevation'
        },
        sections: []
    },
    'manyara': {
        subtitle: 'A Scenic Gem',
        intro: "Ernest Hemingway called it 'the loveliest I had seen in Africa'. Nestled at the base of the Great Rift Valley escarpment, Lake Manyara offers a diverse mix of groundwater forest, acacia woodland, and the alkaline lake itself.",
        highlights: [
            {
                title: 'Tree-Climbing Lions',
                description: 'Famous for lions that have developed the unique habit of climbing trees.',
                icon: <Binoculars className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Pink Flamingos',
                description: 'The lake shores are often painted pink by thousands of flamingos.',
                icon: <Palmtree className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Canopy Walk',
                description: 'Tanzania\'s first treetop walkway offering a bird\'s eye view of the forest.',
                icon: <Map className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            size: '330 sq km',
            type: 'Soda Lake',
            bestTime: 'June to October',
            climate: 'Humid'
        },
        sections: []
    },
    'zanzibar': {
        subtitle: 'The Spice Island',
        intro: "After the dust of the safari, wash it off in the crystal clear waters of the Indian Ocean. Zanzibar is a sensory explosion of spices, history, and tropical beauty.",
        highlights: [
            {
                title: 'Stone Town',
                description: 'A UNESCO World Heritage site full of winding alleys and history.',
                icon: <Map className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Pristine Beaches',
                description: 'White sands and turquoise waters, perfect for relaxation or diving.',
                icon: <Sun className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Spice Tours',
                description: 'Smell and taste cloves, nutmeg, cinnamon, and pepper directly from the source.',
                icon: <Leaf className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            location: 'Indian Ocean',
            culture: 'Swahili',
            bestTime: 'June to Oct, Dec to Feb',
            climate: 'Tropical'
        },
        sections: []
    },
    'kilimanjaro': {
        subtitle: 'The Roof of Africa',
        intro: "Rising alone from the plains, Mount Kilimanjaro is a beacon for adventurers. It is not just a climb; it's a journey through rainforests, moorlands, alpine deserts, and arctic summits.",
        highlights: [
            {
                title: 'Uhuru Peak',
                description: 'Stand at 5,895m above sea level at the highest point in Africa.',
                icon: <Mountain className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Seven Summits',
                description: 'One of the world\'s most accessible of the Seven Summits.',
                icon: <Binoculars className="h-6 w-6 text-sahara-gold" />
            },
            {
                title: 'Ecological Zones',
                description: 'Traverse five distinct climate zones in a matter of days.',
                icon: <Thermometer className="h-6 w-6 text-sahara-gold" />
            }
        ],
        stats: {
            height: '5,895m',
            type: 'Stratovolcano',
            bestTime: 'Jan-Mar, Jun-Oct',
            climate: 'Varies by altitude'
        },
        sections: []
    }
};


