"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/safaris", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
  { href: "/planning-guide", label: "Planning Guide" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === '/';
  const headerTextColor = isScrolled || !isHome ? 'text-charcoal' : 'text-white';
  const headerBg = isScrolled ? "bg-white/80 backdrop-blur-lg border-b border-black/10" : "bg-transparent";

  return (
    <header className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        headerBg
    )}>
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className={cn(
          "flex items-center gap-2 transition-colors",
           headerTextColor
        )}>
          <Mountain className="h-8 w-8 text-sahara-gold" />
          <span className="font-headline text-2xl font-bold">Elysora</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-sahara-gold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sahara-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0",
                pathname.startsWith(link.href) ? "text-sahara-gold after:w-full after:left-0" : headerTextColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
           <Button asChild>
            <Link href="/custom-safari">Book Now</Link>
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className={cn(headerTextColor, "hover:bg-black/10")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-ivory w-full sm:max-w-sm p-0">
             <div className="flex justify-between items-center p-6 border-b">
                 <Link href="/" className="flex items-center gap-2 text-charcoal" onClick={() => setIsMobileMenuOpen(false)}>
                    <Mountain className="h-6 w-6 text-sahara-gold" />
                    <span className="font-headline text-xl font-bold">Elysora</span>
                  </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6 text-charcoal"/>
                </Button>
             </div>
            <div className="flex flex-col gap-6 p-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors hover:text-sahara-gold",
                      pathname.startsWith(link.href)
                        ? "text-sahara-gold"
                        : "text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-8" onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="/custom-safari">Book Your Safari</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
