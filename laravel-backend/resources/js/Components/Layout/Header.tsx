

import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Menu, X, ChevronDown, Compass, Bed, Info, Plane, Group, HandHeart, Star } from "lucide-react";
import * as React from "react"

import { Button } from "@/Components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/Components/ui/navigation-menu";
import { planningNavItems, safariStyleNavItems, servicesNavItems } from "@/lib/data";


const navLinks = [
  { href: "/safaris", label: "Safaris" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Get shared props
  const { url: pathname, props } = usePage();
  const navImages = props.navImages as Record<string, any> | undefined;

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
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className={cn(
          "relative flex items-center justify-center w-[150px] h-full transition-colors",
          headerTextColor
        )}>
          <img src="/elysora-logo.png" alt="Elysora Logo" width={150} height={150} className="object-contain absolute top-2 left-0" />
        </Link>
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.slice(0, 1).map((link) => (
            <Link
              key={link.href}
              href={link.href!}
              className={cn(
                "text-base font-semibold transition-colors hover:text-sahara-gold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sahara-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 px-4 py-2",
                pathname.startsWith(link.href!) ? "text-sahara-gold after:w-full after:left-0" : headerTextColor
              )}
            >
              {link.label}
            </Link>
          ))}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-base font-semibold transition-colors hover:text-sahara-gold outline-none",
                  pathname.startsWith("/services")
                    ? "text-sahara-gold"
                    : headerTextColor
                )}>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col justify-center rounded-lg bg-sand p-6">
                      <img
                        src={navImages?.nav_services_featured?.image_path ? `/storage/${navImages.nav_services_featured.image_path}` : 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop'}
                        alt={navImages?.nav_services_featured?.alt_text || 'Services'}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover mb-4 aspect-video"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero-serengeti.jpg';
                        }}
                      />
                      <h3 className="font-headline text-lg font-bold">Curated Adventures</h3>
                      <p className="text-sm text-stone-gray mt-1 mb-4">Discover the myriad ways to experience the magic of Tanzania.</p>
                      <Button variant="link" asChild className="p-0 justify-start h-auto">
                        <Link href="/custom-safari">Start Planning &rarr;</Link>
                      </Button>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {servicesNavItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(
                  "text-base font-semibold transition-colors hover:text-sahara-gold outline-none",
                  pathname.startsWith("/planning")
                    ? "text-sahara-gold"
                    : headerTextColor
                )}>Planning</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-4 p-4">
                    <div className="flex flex-col justify-center rounded-lg bg-sand p-6">
                      <img
                        src={navImages?.nav_planning_featured?.image_path ? `/storage/${navImages.nav_planning_featured.image_path}` : 'https://images.unsplash.com/photo-1519974749222-634241604d59?q=80&w=2070&auto=format&fit=crop'}
                        alt={navImages?.nav_planning_featured?.alt_text || 'Planning'}
                        width={400}
                        height={400}
                        className="rounded-lg object-cover mb-4 aspect-video"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero-ngorongoro.jpg';
                        }}
                      />
                      <h3 className="font-headline text-lg font-bold">Your Adventure Starts Here</h3>
                      <p className="text-sm text-stone-gray mt-1 mb-4">Let us help you craft the perfect Tanzanian safari.</p>
                      <Button variant="link" asChild className="p-0 justify-start h-auto">
                        <Link href="/custom-safari">Design Your Dream Trip &rarr;</Link>
                      </Button>
                    </div>
                    <ul className="flex flex-col gap-2">
                      {planningNavItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href} icon={item.icon}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {navLinks.slice(1, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href!}
              className={cn(
                "text-base font-semibold transition-colors hover:text-sahara-gold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sahara-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 px-4 py-2",
                pathname.startsWith(link.href!) ? "text-sahara-gold after:w-full after:left-0" : headerTextColor
              )}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href!}
              className={cn(
                "text-base font-semibold transition-colors hover:text-sahara-gold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sahara-gold after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 px-4 py-2",
                pathname.startsWith(link.href!) ? "text-sahara-gold after:w-full after:left-0" : headerTextColor
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
          <SheetContent side="right" className="bg-ivory w-full sm:max-w-sm p-0 overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-ivory z-10">
              <Link href="/" className="flex items-center gap-2 text-charcoal" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/elysora-logo.png" alt="Elysora Logo" width={80} height={80} className="object-contain" />
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-charcoal" />
              </Button>
            </div>
            <div className="flex flex-col gap-6 p-6 pb-20">
              <nav className="flex flex-col gap-4">
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors hover:text-sahara-gold",
                      pathname.startsWith(link.href!)
                        ? "text-sahara-gold"
                        : "text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div>
                  <p className="text-2xl font-semibold text-charcoal mb-2">Services</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {servicesNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-sahara-gold",
                          pathname.startsWith(item.href)
                            ? "text-sahara-gold"
                            : "text-stone-gray"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-charcoal mb-2">Planning</p>
                  <div className="flex flex-col gap-2 pl-4">
                    {planningNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors hover:text-sahara-gold",
                          pathname.startsWith(item.href)
                            ? "text-sahara-gold"
                            : "text-stone-gray"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors hover:text-sahara-gold",
                      pathname.startsWith(link.href!)
                        ? "text-sahara-gold"
                        : "text-charcoal"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild size="lg" className="mt-8">
                <Link href="/custom-safari" onClick={() => setIsMobileMenuOpen(false)}>Book Your Safari</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-sand focus:bg-sand",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 text-primary p-2 rounded-md">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-bold leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-stone-gray">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
