"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Mountain, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/safaris", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === '/';

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled || !isHome ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "bg-transparent",
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={cn(
          "flex items-center gap-2 transition-colors",
          isScrolled || !isHome ? "text-primary" : "text-white"
        )}>
          <Mountain className="h-8 w-8" />
          <span className="font-headline text-2xl font-bold">Elysora</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 bg-background/50 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200/20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : (isScrolled || !isHome ? "text-foreground/80" : "text-white")
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
           <Button variant="ghost" size="icon" className={cn(isScrolled || !isHome ? "" : "text-white hover:bg-white/10 hover:text-white")}><Search className="h-5 w-5"/></Button>
           <Button asChild className={cn(isScrolled || !isHome ? "" : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20")}>
            <Link href="/custom-safari">Plan Your Trip</Link>
          </Button>
        </div>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className={cn(isScrolled || !isHome ? "" : "bg-transparent border-white/50 text-white hover:bg-white/10 hover:text-white")}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold">Elysora</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                <Link href="/custom-safari">Plan Your Safari</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
