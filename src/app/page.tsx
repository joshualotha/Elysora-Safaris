import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { whyChooseUs, destinations, blogPosts, safariPackages } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import { ArrowRight, MoveRight } from "lucide-react";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import { reviews } from "@/lib/data";
import InteractiveHero from "@/components/shared/InteractiveHero";
import CountUp from "@/components/shared/CountUp";


const TrustStat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-4xl lg:text-5xl font-bold text-sahara-gold font-headline">{value}</p>
    <p className="text-sm lg:text-base text-stone-gray mt-2">{label}</p>
  </div>
);

export default function Home() {
  const featuredDestinations = destinations.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <InteractiveHero />

      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/tanzania-hero.jpg"
                alt="Safari Experience"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="inline-block">
                <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Welcome to the Wild</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-charcoal mt-2 leading-tight">
                  A Safari with <span className="text-sahara-gold">Elysora Safaris</span>
                </h2>
              </div>
              <p className="text-lg text-stone-gray leading-relaxed">
                Embark on a journey beyond the ordinary. At Elysora Safaris, we don't just show you nature; we immerse you in it. From the thundering herds of the Serengeti to the silent majesty of Kilimanjaro, our expert guides lead you through the untold stories of the wild.
              </p>
              <p className="text-lg text-stone-gray leading-relaxed">
                Experience luxury in the heart of the bush, authentic cultural encounters, and memories that will last a lifetime. Whether you seek the thrill of the chase or the peace of the sunset, we craft your perfect African adventure.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                {whyChooseUs.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.title} className="flex flex-col items-center text-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-sahara-gold/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-sahara-gold" />
                      </div>
                      <p className="font-semibold text-sm text-charcoal">{item.title}</p>
                    </div>
                  );
                })}
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-charcoal text-white hover:bg-sahara-gold hover:text-charcoal transition-all duration-300">
                  <Link href="/about">Discover Our Story <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-24 md:py-32 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Discover Tanzania</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-white mt-2 mb-4">
              Explore Our Destinations
            </h2>
            <p className="text-lg text-white/70">
              Hover to explore the landscapes that define the African spirit.
            </p>
          </div>

          {/* Accordion Gallery - Vertical Slices */}
          <div className="hidden md:flex h-[500px] lg:h-[600px] gap-2 rounded-3xl overflow-hidden">
            {featuredDestinations.map((dest, index) => {
              const image = PlaceHolderImages.find(p => p.id === dest.image);
              if (!image) return null;

              return (
                <Link
                  href={`/destinations/${dest.slug}`}
                  key={dest.slug}
                  className="group relative flex-1 hover:flex-[4] transition-all duration-1000 ease-out cursor-pointer overflow-hidden"
                >
                  <Image
                    src={image.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Number Badge */}
                    <span className="absolute top-6 left-6 text-white/30 text-6xl font-bold font-headline">
                      0{index + 1}
                    </span>

                    {/* Title - Rotated when collapsed */}
                    <h3 className="text-white text-2xl font-headline font-bold transition-all duration-700 origin-bottom-left md:group-hover:translate-y-0 md:group-hover:rotate-0 md:-rotate-90 md:translate-x-2 md:translate-y-[-100%] md:whitespace-nowrap">
                      {dest.name}
                    </h3>

                    {/* Description - Only visible on hover */}
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-700 overflow-hidden mt-4">
                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
                        {dest.description}
                      </p>
                      {dest.attractions && (
                        <div className="flex flex-wrap gap-2">
                          {dest.attractions.slice(0, 3).map(attr => (
                            <span key={attr} className="text-xs px-3 py-1 rounded-full bg-sahara-gold/20 text-sahara-gold border border-sahara-gold/30">
                              {attr}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Explore Button - Only on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300 mt-6">
                      <span className="inline-flex items-center gap-2 text-sahara-gold font-semibold text-sm">
                        Explore <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {featuredDestinations.map((dest, index) => {
              const image = PlaceHolderImages.find(p => p.id === dest.image);
              if (!image) return null;

              return (
                <Link
                  href={`/destinations/${dest.slug}`}
                  key={dest.slug}
                  className="relative flex-shrink-0 w-[280px] aspect-[3/4] rounded-2xl overflow-hidden snap-center"
                >
                  <Image
                    src={image.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover"
                    sizes="280px"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-sahara-gold text-xs font-bold uppercase tracking-wider">0{index + 1}</span>
                    <h3 className="text-white text-xl font-headline font-bold mt-1">{dest.name}</h3>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full border-white/20 text-white hover:bg-white hover:text-charcoal transition-colors duration-300">
              <Link href="/destinations">View All Destinations <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Signature Tours Section */}
      <section id="tours" className="bg-ivory">
        {/* Section Header */}
        <div className="container mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sahara-gold font-bold tracking-wider uppercase text-sm">Curated Experiences</span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-charcoal mt-2 mb-4">
              Explore Our Signature Tours
            </h2>
            <p className="text-lg text-stone-gray">
              Handcrafted Tanzania adventures, from the Great Migration to tropical Zanzibar beaches.
            </p>
          </div>
        </div>

        {/* Featured Safari Banner */}
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/tanzania-hero.jpg"
              alt="The Great Migration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30" />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-sahara-gold/20 text-sahara-gold text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-sahara-gold/30">
                Featured Safari
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-white mb-6 leading-tight">
                Witness the Great<br />
                <span className="text-sahara-gold">Migration</span>
              </h3>

              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Follow millions of wildebeest and zebra across the Serengeti in one of nature's most breathtaking spectacles. An 8-day journey through the heart of Africa.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-4 gap-6 mb-10 max-w-md">
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">8</p>
                  <p className="text-xs text-white/60">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">3</p>
                  <p className="text-xs text-white/60">Parks</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">5★</p>
                  <p className="text-xs text-white/60">Lodges</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-sahara-gold font-headline">$4,500</p>
                  <p className="text-xs text-white/60">From</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-sahara-gold text-charcoal hover:bg-white font-semibold rounded-full px-8">
                  <Link href="/safaris">View This Safari</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-8">
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Best Seller Badge */}
          <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden md:flex w-24 h-24 border-2 border-sahara-gold/50 rounded-full items-center justify-center bg-charcoal/50 backdrop-blur-sm">
            <span className="text-sahara-gold text-xs font-bold uppercase tracking-wider text-center leading-tight">
              Best<br />Seller
            </span>
          </div>
        </div>

        {/* Visual Connection - More Tours Label */}
        <div className="bg-ivory pt-8 pb-4">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-sahara-gold" />
              <span className="text-sahara-gold font-semibold text-sm uppercase tracking-widest">More Adventures</span>
            </div>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="bg-ivory pb-20 md:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            {/* Tour Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {safariPackages.slice(0, 6).map((safari) => {
                const image = PlaceHolderImages.find(p => p.id === safari.image);
                return (
                  <Link
                    href={`/safaris/${safari.slug}`}
                    key={safari.slug}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={safari.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Duration Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-charcoal">
                        {safari.duration} Days
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {safari.destinations.slice(0, 2).map(dest => (
                          <span key={dest} className="text-xs text-sahara-gold font-semibold uppercase tracking-wider">
                            {dest}
                          </span>
                        ))}
                        {safari.destinations.length > 2 && (
                          <span className="text-xs text-stone-gray">+{safari.destinations.length - 2} more</span>
                        )}
                      </div>

                      <h3 className="text-xl font-headline font-bold text-charcoal mb-2 group-hover:text-sahara-gold transition-colors">
                        {safari.name}
                      </h3>

                      <p className="text-stone-gray text-sm leading-relaxed mb-4 line-clamp-2">
                        {safari.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-stone-gray uppercase">From</span>
                          <p className="text-2xl font-bold text-charcoal font-headline">${safari.price.toLocaleString()}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-sahara-gold/10 flex items-center justify-center group-hover:bg-sahara-gold transition-colors duration-300">
                          <ArrowRight className="h-5 w-5 text-sahara-gold group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/safaris">View All Safari Packages <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 md:py-32 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              Stories from the Wild
            </h2>
            <p className="text-lg text-stone-gray">Don't just take our word for it. Here's what our travelers have to say about their Elysora experience.</p>
          </div>
          <TestimonialCarousel reviews={reviews} />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-stone-gray">Get inspired for your next adventure with our stories, tips, and insights from the heart of Tanzania.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map(post => {
              const image = PlaceHolderImages.find(p => p.id === post.image);
              return (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group">
                  <div className="overflow-hidden rounded-2xl mb-6 shadow-md">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                  <p className="text-sm text-primary font-semibold mb-2">{post.category}</p>
                  <h3 className="text-2xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-stone-gray line-clamp-2">{post.excerpt}</p>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" variant="link">
              <Link href="/blog">Read More Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
