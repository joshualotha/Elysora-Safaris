import { Link } from "@inertiajs/react";
import { Facebook, Instagram, Twitter, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] text-stone-300 border-t border-white/5 relative overflow-hidden">
      {/* Organic decorative element - subtle gradient/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sahara-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-white/10 pb-12">
          <div className="max-w-xl">
            <span className="accent-script text-sahara-gold text-3xl md:text-4xl mb-2 block">Stay Connected</span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">
              Join our journey into the wild.
            </h2>
          </div>
          <div className="w-full md:w-auto">
            <form className="flex w-full md:w-[400px] relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-stone-600 focus:border-sahara-gold px-0 py-4 text-white placeholder:text-stone-500 outline-none transition-all"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-sahara-gold hover:text-white transition-colors">
                <ArrowRight className="h-6 w-6" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              {/* Use text logo if image not strictly required, or image with white filter */}
              <div className="font-headline font-bold text-3xl text-white tracking-wide">
                ELYSORA
              </div>
            </Link>
            <p className="text-stone-400 leading-relaxed max-w-sm font-light">
              Crafting authentic, sustainable, and unforgettable safari experiences in the heart of Tanzania. We believe in travel that transforms.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-sahara-gold hover:border-sahara-gold hover:text-charcoal transition-all duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-sahara-gold hover:border-sahara-gold hover:text-charcoal transition-all duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-sahara-gold hover:border-sahara-gold hover:text-charcoal transition-all duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Explore</h3>
            <ul className="space-y-4 font-light">
              <li><Link href="/about" className="hover:text-sahara-gold transition-colors block w-fit">Our Story</Link></li>
              <li><Link href="/destinations" className="hover:text-sahara-gold transition-colors block w-fit">Destinations</Link></li>
              <li><Link href="/safaris" className="hover:text-sahara-gold transition-colors block w-fit">Safari Packages</Link></li>
              <li><Link href="/blog" className="hover:text-sahara-gold transition-colors block w-fit">Journal</Link></li>
              <li><Link href="/gallery" className="hover:text-sahara-gold transition-colors block w-fit">Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-sahara-gold transition-colors block w-fit">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Experiences</h3>
            <ul className="space-y-4 font-light">
              <li><Link href="/services/tailor-made-safari" className="hover:text-sahara-gold transition-colors block w-fit">Tailor Made Safaris</Link></li>
              <li><Link href="/services/luxury-safari" className="hover:text-sahara-gold transition-colors block w-fit">Luxury Safaris</Link></li>
              <li><Link href="/services/cultural-tours" className="hover:text-sahara-gold transition-colors block w-fit">Cultural Tours</Link></li>
              <li><Link href="/services/mountain-hiking" className="hover:text-sahara-gold transition-colors block w-fit">Mountain Trekking</Link></li>
              <li><Link href="/services/zanzibar-beach-safari" className="hover:text-sahara-gold transition-colors block w-fit">Zanzibar Beach</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm">Contact</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-sahara-gold shrink-0 mt-1" />
                <span className="font-light">Sokoine Road, Arusha,<br />Tanzania, East Africa</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-sahara-gold shrink-0" />
                <a href="tel:+255754000000" className="font-light hover:text-white transition-colors">+255 754 000 000</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-sahara-gold shrink-0" />
                <a href="mailto:info@elysora.com" className="font-light hover:text-white transition-colors">info@elysora.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-light">
          <p>&copy; {currentYear} Elysora Safaris. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms Conditions</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
