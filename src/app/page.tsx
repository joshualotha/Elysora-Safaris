import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { whyChooseUs, destinations, blogPosts } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import SafariCard from "@/components/shared/SafariCard";
import IconText from "@/components/shared/IconText";
import { ArrowRight, MoveRight } from "lucide-react";
import TestimonialCarousel from "@/components/shared/TestimonialCarousel";
import { reviews } from "@/lib/data";
import InteractiveHero from "@/components/shared/InteractiveHero";


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

      <section id="why-us" className="py-20 md:py-32 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">
              An Unmatched Safari Experience
            </h2>
            <p className="text-lg text-stone-gray">We blend luxury, adventure, and authentic local knowledge to create journeys that go beyond the ordinary.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

      <section id="destinations" className="py-20 md:py-32 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-semibold mb-4">Explore Our Destinations</h2>
            <p className="text-lg text-stone-gray">From the endless plains of the Serengeti to the tropical shores of Zanzibar, a world of wonder awaits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {featuredDestinations.map(dest => {
              const image = PlaceHolderImages.find(p => p.id === dest.image);
              return image ? (
                <Link href={`/destinations/${dest.slug}`} key={dest.slug} className="relative aspect-[3/4] rounded-2xl overflow-hidden group shadow-lg">
                  <Image 
                    src={image.imageUrl}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <h3 className="text-white text-2xl md:text-3xl font-headline font-bold">{dest.name}</h3>
                  </div>
                </Link>
              ) : null
            })}
          </div>
           <div className="text-center mt-16">
            <Button asChild size="lg" variant="outline">
              <Link href="/destinations">All Destinations</Link>
            </Button>
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

      <section className="bg-sand">
        <div className="container mx-auto px-4 md:px-6 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <TrustStat value="15+" label="Years of Experience" />
                <TrustStat value="2k+" label="Happy Travelers" />
                <TrustStat value="12" label="Destinations" />
                <TrustStat value="25+" label="Expert Guides" />
            </div>
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
