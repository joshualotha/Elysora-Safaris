import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 border-t border-acacia/20">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col gap-4 items-start">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/elysora-logo.png" alt="Elysora Logo" width={150} height={150} className="object-contain" />
            </Link>
            <p className="text-sm max-w-xs">
              Experience the magic of Tanzania with authentic African safaris by expert local guides.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 hover:text-sahara-gold transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 hover:text-sahara-gold transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 hover:text-sahara-gold transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-headline font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-sahara-gold transition-colors">About Us</Link></li>
              <li><Link href="/safaris" className="hover:text-sahara-gold transition-colors">Safari Packages</Link></li>
              <li><Link href="/destinations" className="hover:text-sahara-gold transition-colors">Destinations</Link></li>
              <li><Link href="/contact" className="hover:text-sahara-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-bold text-white mb-4">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Sokoine Road, Arusha, Tanzania</p>
              <p>
                <a href="tel:+255754000000" className="hover:text-sahara-gold transition-colors">
                  Phone: +255 754 000 000
                </a>
              </p>
              <p>
                <a href="mailto:info@elysora.com" className="hover:text-sahara-gold transition-colors">
                  Email: info@elysora.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-headline font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Get safari tips and special offers directly in your inbox.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1 bg-stone-gray/20 border-acacia text-white placeholder:text-ivory/50" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-acacia/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-gray">
          <p>&copy; {new Date().getFullYear()} Elysora Safaris. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-sahara-gold transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-sahara-gold transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
