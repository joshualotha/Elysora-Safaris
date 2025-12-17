import Link from "next/link";
import { Mountain, Facebook, Instagram, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: Logo & Social */}
          <div className="flex flex-col gap-4 items-start">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold">Elysora</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Experience the magic of Tanzania with authentic African safaris by expert local guides.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/safaris" className="text-muted-foreground hover:text-primary transition-colors">Safari Packages</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>Sokoine Road, Arusha, Tanzania</p>
              <p>
                <a href="tel:+255754000000" className="hover:text-primary transition-colors">
                  Phone: +255 754 000 000
                </a>
              </p>
              <p>
                <a href="mailto:info@elysora.com" className="hover:text-primary transition-colors">
                  Email: info@elysora.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Get safari tips and special offers directly in your inbox.
            </p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elysora Safaris. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
