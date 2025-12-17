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
  { slug: "serengeti", name: "Serengeti National Park", description: "Home to the Great Migration, the Serengeti's vast plains teem with wildlife.", image: "destination-serengeti", attractions: ["Great Migration", "Big Five", "Hot Air Balloon Safaris"] },
  { slug: "ngorongoro", name: "Ngorongoro Conservation Area", description: "A self-contained ecosystem within a massive volcanic caldera, often called 'The Garden of Eden'.", image: "destination-ngorongoro", attractions: ["Dense Wildlife Population", "Crater Views", "Maasai Culture"] },
  { slug: "tarangire", name: "Tarangire National Park", description: "Famous for its huge elephant herds and iconic baobab trees.", image: "destination-tarangire", attractions: ["Elephants", "Baobab Trees", "Bird Watching"] },
  { slug: "manyara", name: "Lake Manyara National Park", description: "Known for its tree-climbing lions and vast flocks of flamingos.", image: "destination-manyara", attractions: ["Tree-Climbing Lions", "Flamingos", "Diverse Scenery"] },
  { slug: "zanzibar", name: "Zanzibar Island", description: "An archipelago with a rich history and stunning white-sand beaches.", image: "destination-zanzibar", attractions: ["Beaches", "Stone Town", "Spice Farms"] },
  { slug: "kilimanjaro", name: "Mount Kilimanjaro", description: "Africa's highest peak and the world's tallest free-standing mountain.", image: "destination-kilimanjaro", attractions: ["Climbing Expeditions", "Stunning Views", "Unique Ecosystems"] },
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
]
