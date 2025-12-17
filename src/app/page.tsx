import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { safariPackages, whyChooseUs, destinations, blogPosts, reviews } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import PersonalizedRecommendations from "@/components/ai/PersonalizedRecommendations";
import { ArrowDown, ArrowRight, MoveRight, Star } from "lucide-react";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home-luxury');
  const featuredPackages = safariPackages.slice(0, 3);
  const featuredDestinations = destinations.slice(0, 6);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-4 text-shadow max-w-4xl tracking-wide">
              Discover the Magic of Tanzania
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 mb-8 font-body">
              Experience authentic African safaris with expert local guides.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button asChild size="lg">
                <Link href="/safaris">Explore Safari Packages</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                <Link href="/custom-safari">Plan Your Safari <MoveRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
        </div>
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <a href="#featured-packages" aria-label="Scroll down">
            <ArrowDown className="h-8 w-8 text-white/70 animate-bounce" />
          </a>
        </div>
      </section>

      <section id="featured-packages" className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              Our Signature Safaris
            </h2>
             <p className="text-lg text-stone-gray">Each itinerary is meticulously crafted to showcase the very best of Tanzania's wildlife and landscapes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <SafariCard key={pkg.slug} safari={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/safaris">View All Packages</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="why-us" className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              An Unmatched Safari Experience
            </h2>
            <p className="text-lg text-stone-gray">We blend luxury, adventure, and authentic local knowledge to create journeys that go beyond the ordinary.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item) => (
              <IconText
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="destinations" className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">Explore Our Destinations</h2>
            <p className="text-lg text-stone-gray">From the endless plains of the Serengeti to the tropical shores of Zanzibar, a world of wonder awaits.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredDestinations.map(dest => {
              const image = PlaceHolderImages.find(p => p.id === dest.image);
              return image ? (
                <Link href={`/destinations/${dest.slug}`} key={dest.slug} className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image 
                    src={image.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <h3 className="text-white text-xl md:text-2xl font-headline font-bold">{dest.name}</h3>
                  </div>
                </Link>
              ) : null
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              Stories from the Wild
            </h2>
            <p className="text-lg text-stone-gray">Don't just take our word for it. Here's what our travelers have to say about their Elysora experience.</p>
          </div>
          <TestimonialCarousel reviews={reviews} />
        </div>
      </section>

       <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto mb-12">
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
                  <div className="overflow-hidden rounded-2xl mb-4">
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
                  <p className="text-sm text-primary font-semibold">{post.category}</p>
                  <h3 className="text-xl font-headline font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-stone-gray line-clamp-2">{post.excerpt}</p>
                </Link>
              )
            })}
          </div>
           <div className="text-center mt-12">
            <Button asChild size="lg" variant="link">
              <Link href="/blog">Read More Stories <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
