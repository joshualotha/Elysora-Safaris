import { Leaf, ShieldCheck, Smile, Users } from "lucide-react";
import type { Icon } from "lucide-react"

export type SafariPackage = {
  slug: string;
  name: string;
  duration: number;
  destinations: string[];
  highlights: string[];
  price: number;
  image: string;
  description: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  whatsIncluded: string[];
  whatsExcluded: string[];
};

export type Destination = {
  slug: string;
  name: string;
  description: string;
  image: string;
  attractions: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type ValueProposition = {
  icon: Icon;
  title: string;
  description: string;
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
  category: string;
}

export type Review = {
  author: string;
  country: string;
  authorImage: string;
  rating: number;
  comment: string;
  safariTaken: string;
}

export type Faq = {
  question: string;
  answer: string;
}

export type HeroCarouselItem = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export const heroCarouselItems: HeroCarouselItem[] = [
  { id: 1, title: "Tanzania", subtitle: "Experience an unparalleled journey through vast savannas, ancient cultures, and diverse ecosystems. From the snow-capped Kilimanjaro to the turquoise waters of Zanzibar, Tanzania offers a safari adventure that touches the soul and ignites the spirit of exploration.", image: "hero-home-luxury" },
  { id: 2, title: "Serengeti", subtitle: "Immerse yourself in the world's most famous wildlife sanctuary. Witness the thunderous spectacle of the Great Migration, where millions of wildebeest and zebras brave the plains in an ancient cycle of life, survival, and renewal across endless horizons.", image: "hero-serengeti" },
  { id: 3, title: "Ngorongoro", subtitle: "Descend into the world's largest inactive volcanic caldera, a self-contained ecosystem teeming with wildlife. Encounter the Big Five in this breathtaking natural wonder, often called the 'Garden of Eden', where nature thrives in a prehistoric setting.", image: "hero-ngorongoro" },
  { id: 4, title: "Kilimanjaro", subtitle: "Challenge yourself to conquer the 'Roof of Africa'. Trek through lush rainforests, alpine deserts, and glacial peaks to reach the summit of the world's highest free-standing mountain, rewarded with breathtaking sunrises above the clouds.", image: "destination-kilimanjaro" },
  { id: 5, title: "Zanzibar", subtitle: "Escape to a tropical paradise where history meets relaxation. Wander through the ancient, spice-filled alleys of Stone Town, then unwind on pristine white-sand beaches bordering the crystal-clear azure waters of the Indian Ocean.", image: "destination-zanzibar" },
  { id: 6, title: "Tarangire", subtitle: "Discover a landscape dotted with ancient baobab trees and teeming with massive elephant herds. Tarangire offers a wilder, quieter safari experience, especially during the dry season when wildlife gathers in thousands along the lifeline of the Tarangire River.", image: "hero-tarangire" },
];

export const safariPackages: SafariPackage[] = [
  {
    slug: "classic-serengeti-ngorongoro",
    name: "Classic Serengeti & Ngorongoro",
    duration: 5,
    destinations: ["Serengeti", "Ngorongoro Crater"],
    highlights: ["Big Five Sighting", "Great Migration", "Crater View"],
    price: 2500,
    image: "safari-card-1",
    description: "Experience the best of Tanzania's northern circuit. Witness the endless plains of the Serengeti and descend into the magnificent Ngorongoro Crater.",
    itinerary: [
      { day: 1, title: "Arrival in Arusha", description: "Arrive at Kilimanjaro International Airport (JRO), transfer to your lodge in Arusha." },
      { day: 2, title: "To Serengeti National Park", description: "Drive to Serengeti, enjoying a game drive en route. Afternoon game drive in the heart of the park." },
      { day: 3, title: "Full Day in Serengeti", description: "Explore the vast plains of the Serengeti, tracking the Great Migration if in season." },
      { day: 4, title: "Ngorongoro Crater", description: "Drive to Ngorongoro, descend into the crater for a full day of game viewing." },
      { day: 5, title: "Departure", description: "Morning game drive in Ngorongoro or visit a Maasai village, then drive back to Arusha for your departure." },
    ],
    whatsIncluded: ["Accommodation", "All meals", "4x4 Safari Vehicle", "Professional Guide", "Park Fees"],
    whatsExcluded: ["International Flights", "Visa", "Tips", "Personal Items"],
  },
  {
    slug: "tanzania-wildlife-explorer",
    name: "Tanzania Wildlife Explorer",
    duration: 7,
    destinations: ["Tarangire", "Lake Manyara", "Serengeti", "Ngorongoro"],
    highlights: ["Elephant Herds", "Tree-climbing Lions", "Diverse Landscapes"],
    price: 3500,
    image: "safari-card-2",
    description: "A comprehensive journey through Tanzania's most famous national parks, offering a wide variety of wildlife and landscapes.",
    itinerary: [
      { day: 1, title: "Arrival & Tarangire", description: "Arrive, meet your guide and drive to Tarangire National Park, famous for its large elephant herds and baobab trees." },
      { day: 2, title: "Tarangire Game Drive", description: "Full day exploring Tarangire, searching for elephants, lions, and other wildlife along the Tarangire River." },
      { day: 3, title: "Lake Manyara", description: "Drive to Lake Manyara National Park, known for its tree-climbing lions and flocks of flamingos." },
      { day: 4, title: "To the Serengeti", description: "Journey to the world-famous Serengeti National Park, with a game drive on the way." },
      { day: 5, title: "Serengeti Exploration", description: "A full day to discover the Serengeti's secrets, from its vast plains to its hidden corners." },
      { day: 6, title: "Ngorongoro Crater", description: "Travel to the Ngorongoro Conservation Area and descend into the breathtaking crater for a packed day of wildlife viewing." },
      { day: 7, title: "Return to Arusha", description: "Enjoy a final morning activity before driving back to Arusha for your onward journey." },
    ],
    whatsIncluded: ["Accommodation", "All meals", "4x4 Safari Vehicle", "Professional Guide", "Park Fees", "Crater Service"],
    whatsExcluded: ["International Flights", "Visa", "Tips", "Alcoholic Beverages"],
  },
  {
    slug: "ultimate-safari-zanzibar-beach",
    name: "Ultimate Safari & Zanzibar Beach",
    duration: 10,
    destinations: ["Serengeti", "Ngorongoro", "Zanzibar"],
    highlights: ["Wildlife Adventure", "Beach Relaxation", "Cultural Experience"],
    price: 5000,
    image: "safari-card-3",
    description: "The perfect blend of adventure and relaxation. Witness incredible wildlife in the Serengeti and Ngorongoro before unwinding on the white sandy beaches of Zanzibar.",
    itinerary: [
      // Days 1-5 same as classic safari
      { day: 1, title: "Arrival in Arusha", description: "Arrive at Kilimanjaro International Airport (JRO), transfer to your lodge in Arusha." },
      { day: 2, title: "To Serengeti National Park", description: "Drive to Serengeti, enjoying a game drive en route. Afternoon game drive in the heart of the park." },
      { day: 3, title: "Full Day in Serengeti", description: "Explore the vast plains of the Serengeti." },
      { day: 4, title: "Ngorongoro Crater", description: "Drive to Ngorongoro, descend into the crater for a full day of game viewing." },
      { day: 5, title: "Flight to Zanzibar", description: "After a morning activity, transfer to Arusha Airport (ARK) for your flight to Zanzibar. Transfer to your beach resort." },
      { day: 6, title: "Zanzibar Beach", description: "Relax on the beach, swim in the turquoise waters, or enjoy water sports." },
      { day: 7, title: "Stone Town Tour", description: "Explore the historic alleyways of Stone Town, a UNESCO World Heritage site." },
      { day: 8, title: "Spice Farm & Jozani Forest", description: "Discover Zanzibar's 'Spice Island' heritage and visit the Jozani Forest to see the rare Red Colobus monkeys." },
      { day: 9, title: "Leisure Day", description: "A final day to relax, shop for souvenirs, or take an optional tour." },
      { day: 10, title: "Departure", description: "Transfer to Abeid Amani Karume International Airport (ZNZ) for your departure." },
    ],
    whatsIncluded: ["All Accommodations", "Meals as specified", "Safari Vehicle & Guide", "Park Fees", "Domestic Flight (ARK-ZNZ)"],
    whatsExcluded: ["International Flights", "Visa", "Tips", "Optional Tours in Zanzibar"],
  },
  {
    slug: "budget-camping-adventure",
    name: "Budget Camping Adventure",
    duration: 4,
    destinations: ["Tarangire", "Ngorongoro Crater"],
    highlights: ["Affordable", "Authentic Experience", "Close to Nature"],
    price: 1500,
    image: "safari-card-4",
    description: "An adventurous and budget-friendly camping safari that brings you close to nature without breaking the bank.",
    itinerary: [
      { day: 1, title: "Tarangire National Park", description: "Drive from Arusha to Tarangire. Full day game drive and overnight at a public campsite." },
      { day: 2, title: "To Ngorongoro", description: "Morning game drive in Tarangire, then drive to the Ngorongoro crater rim for overnight camping with stunning views." },
      { day: 3, title: "Ngorongoro Crater", description: "Full day game drive inside the Ngorongoro Crater. Overnight at a campsite." },
      { day: 4, title: "Return to Arusha", description: "Morning activities, then drive back to Arusha." },
    ],
    whatsIncluded: ["Camping Equipment", "Cook", "All meals", "Safari Vehicle & Guide", "Park Fees"],
    whatsExcluded: ["Sleeping Bag", "International Flights", "Visa", "Tips"],
  },
  {
    slug: "luxury-tanzania-experience",
    name: "Luxury Tanzania Experience",
    duration: 8,
    destinations: ["Tarangire", "Ngorongoro", "Serengeti"],
    highlights: ["Luxury Lodges", "Exclusive Experiences", "Gourmet Dining"],
    price: 8000,
    image: "safari-card-5",
    description: "Indulge in the ultimate safari experience with stays at exclusive luxury lodges, personalized service, and unforgettable moments.",
    itinerary: [
      { day: 1, title: "Arrival & Luxury Lodge", description: "Arrive at JRO, where you'll be greeted and transferred to a luxurious lodge in Arusha." },
      { day: 2, title: "Tarangire Treetops", description: "Drive to Tarangire and check into a unique treetop lodge. Enjoy an afternoon game drive." },
      { day: 3, title: "Explore Tarangire", description: "Full day in Tarangire with options for walking safaris and night game drives." },
      { day: 4, title: "Ngorongoro Crater Lodge", description: "Travel to the Ngorongoro Conservation Area and check into a lodge with breathtaking crater views." },
      { day: 5, title: "Crater Game Drive", description: "Private full-day game drive in the Ngorongoro Crater with a gourmet picnic lunch." },
      { day: 6, title: "Luxury Camp in Serengeti", description: "Fly from Manyara airstrip to a central Serengeti airstrip and transfer to a luxurious tented camp." },
      { day: 7, title: "Serengeti Balloon Safari", description: "Experience a magical hot air balloon safari at sunrise, followed by a champagne breakfast. Afternoon game drive." },
      { day: 8, title: "Departure", description: "Enjoy one last morning game drive before flying from the Serengeti back to JRO for your departure." },
    ],
    whatsIncluded: ["Luxury Accommodation", "All meals and drinks", "Domestic Flights", "Balloon Safari", "Private 4x4 & Guide", "Park Fees"],
    whatsExcluded: ["International Flights", "Visa", "Tips", "Premium Liquors"],
  },
];

export const destinations: Destination[] = [
  { slug: "serengeti", name: "Serengeti National Park", description: "Home to the Great Migration, the Serengeti's vast plains teem with wildlife, offering arguably the most quintessential African safari experience.", image: "destination-serengeti", attractions: ["Lion", "Leopard", "Elephant", "Zebra"] },
  { slug: "ngorongoro", name: "Ngorongoro Crater", description: "A self-contained ecosystem within a massive volcanic caldera, often called 'The Garden of Eden' for its density of wildlife.", image: "destination-ngorongoro", attractions: ["Rhino", "Hippo", "Flamingo", "Hyena"] },
  { slug: "tarangire", name: "Tarangire National Park", description: "Famous for its huge elephant herds that gather along the Tarangire River and the iconic, ancient baobab trees that dot the landscape.", image: "destination-tarangire", attractions: ["Elephant", "Baobab", "Giraffe", "Wildebeest"] },
  { slug: "manyara", name: "Lake Manyara", description: "Known for its tree-climbing lions, vast flocks of pink flamingos, and diverse scenery ranging from forest to soda lake.", image: "destination-manyara", attractions: ["Tree-climbing Lions", "Flamingo", "Baboon", "Buffalo"] },
  { slug: "zanzibar", name: "Zanzibar Island", description: "An archipelago with a rich Swahili history, spice-scented air, and stunning white-sand beaches bordering turquoise waters.", image: "destination-zanzibar", attractions: ["Beaches", "Stone Town", "Spice Farms", "Dolphins"] },
  { slug: "kilimanjaro", name: "Mount Kilimanjaro", description: "Africa's highest peak and the world's tallest free-standing mountain, offering a challenging and rewarding climb through multiple ecosystems.", image: "destination-kilimanjaro", attractions: ["Climbing", "Views", "Glaciers", "Alpine Desert"] },
];

export const teamMembers: TeamMember[] = [
  { name: "Juma Khamis", role: "Head Guide & Founder", bio: "With over 20 years of experience, Juma's passion for wildlife is infectious. He founded Elysora to share the magic of his homeland.", image: "team-member-1" },
  { name: "Aisha Mchumo", role: "Safari Operations Manager", bio: "Aisha ensures every safari runs smoothly, from logistics to guest satisfaction. Her attention to detail is second to none.", image: "team-member-2" },
  { name: "David Molel", role: "Senior Safari Guide", bio: "A certified expert in ornithology and botany, David brings a deeper understanding of the Tanzanian ecosystem to every tour.", image: "team-member-3" },
];


export const whyChooseUs: ValueProposition[] = [
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Our guides are our greatest asset. Born and raised in Tanzania, they possess an unparalleled knowledge of the parks, wildlife, and culture."
  },
  {
    icon: Smile,
    title: "Personalized Experiences",
    description: "We don't do one-size-fits-all. Every itinerary is crafted to match your interests, budget, and travel style for a truly unique adventure."
  },
  {
    icon: ShieldCheck,
    title: "Best Value Guaranteed",
    description: "We offer competitive pricing without compromising on quality. Our local connections ensure you get the best value for your safari."
  },
  {
    icon: Leaf,
    title: "Responsible Tourism",
    description: "We are committed to preserving Tanzania's natural heritage. We practice sustainable tourism and support local communities."
  }
];

export const blogPosts: BlogPost[] = [
  { slug: "serengeti-migration-guide", title: "A Guide to Witnessing the Great Migration in the Serengeti", excerpt: "The Great Migration is one of nature's most awe-inspiring spectacles. Here's how and when to see it.", image: "blog-post-1", author: "Juma Khamis", date: "June 15, 2024", readTime: 8, category: "Safari Tips" },
  { slug: "packing-for-safari", title: "The Ultimate Safari Packing List: What to Bring to Tanzania", excerpt: "Packing for a safari can be tricky. We've compiled the ultimate list to ensure you're prepared for your adventure.", image: "blog-post-2", author: "Aisha Mchumo", date: "May 22, 2024", readTime: 6, category: "Safari Tips" },
  { slug: "photographing-the-big-five", title: "Tips for Photographing the Big Five", excerpt: "Capture stunning photos of Africa's most iconic animals with these expert tips from our guides.", image: "blog-post-3", author: "David Molel", date: "April 30, 2024", readTime: 7, category: "Wildlife Spotting" },
  { slug: "tarangire-hidden-gem", title: "Tarangire: Tanzania's Hidden Gem", excerpt: "Why Tarangire National Park should be on every safari-goer's list, especially for its elephant population.", image: "blog-post-4", author: "Juma Khamis", date: "April 10, 2024", readTime: 5, category: "Destination Guides" }
];

export const blogCategories: string[] = ["Safari Tips", "Wildlife Spotting", "Destination Guides", "Travel Stories", "Conservation News"];

export const reviews: Review[] = [
  { author: "Emily & John", country: "USA", authorImage: "review-author-1", rating: 5, comment: "An absolutely magical experience. Juma was an incredible guide, his knowledge was encyclopedic. We saw the Big Five and so much more. The lodges were breathtaking. Couldn't recommend Elysora more!", safariTaken: "Luxury Tanzania Experience" },
  { author: "Hans Schmidt", country: "Germany", authorImage: "review-author-2", rating: 4.5, comment: "The whole trip was organized perfectly. From the airport pickup to the final drop-off, everything was seamless. The camping was authentic but comfortable. Only downside was the rain on one day, but that's nature!", safariTaken: "Budget Camping Adventure" },
  { author: "Sophie Dubois", country: "France", authorImage: "review-author-3", rating: 5, comment: "I went on the 10-day safari and Zanzibar trip for my honeymoon and it was the trip of a lifetime. The contrast between the wild Serengeti and the calm beaches of Zanzibar was perfect. Thank you Aisha and team!", safariTaken: "Ultimate Safari & Zanzibar Beach" },
  { author: "Chen Wei", country: "China", authorImage: "review-author-4", rating: 5, comment: "Our family had an amazing time. The guide was so patient with our children and made it fun for them. We felt safe and well-cared-for throughout. The memories we made are priceless.", safariTaken: "Tanzania Wildlife Explorer" },
  { author: "Maria Garcia", country: "Spain", authorImage: "review-author-5", rating: 4.5, comment: "Seeing the Ngorongoro Crater was a dream come true. The density of wildlife is unbelievable. The vehicle was comfortable and our guide, David, was fantastic.", safariTaken: "Classic Serengeti & Ngorongoro" },
];

export const faqs = {
  "Booking & Payments": [
    { question: "How do I book a safari?", answer: "You can book by contacting us through our website, email, or phone. We will then send you a detailed itinerary and booking form." },
    { question: "What is the payment schedule?", answer: "A 30% deposit is required to confirm your booking. The final balance is due 60 days before your safari starts." },
    { question: "What payment methods do you accept?", answer: "We accept bank transfers and major credit cards (Visa, MasterCard). Please note that credit card payments may incur a small processing fee." }
  ],
  "Health & Safety": [
    { question: "What vaccinations do I need?", answer: "We recommend consulting your doctor for the most up-to-date advice. Common recommendations include Yellow Fever, Tetanus, and Hepatitis A. Anti-malarial medication is also highly recommended." },
    { question: "Is Tanzania safe for tourists?", answer: "Yes, Tanzania is a very safe country for tourists. We take every precaution to ensure your safety and well-being throughout your trip. Always listen to your guide's instructions, especially concerning wildlife." }
  ],
  "On Safari": [
    { question: "What kind of vehicle will we be in?", answer: "You will be in a 4x4 Toyota Land Cruiser, specially converted for safaris with a pop-up roof for optimal wildlife viewing and photography." },
    { question: "What is the accommodation like?", answer: "Accommodation varies based on your chosen safari style, ranging from budget-friendly public campsites to luxurious lodges and tented camps with all modern amenities." },
    { question: "What should I pack?", answer: "We recommend packing lightweight, neutral-colored clothing, a warm jacket for early mornings, comfortable shoes, a hat, sunglasses, sunscreen, insect repellent, and of course, a good camera and binoculars." }
  ]
};
