import PageHeader from "@/components/shared/PageHeader";
import { blogPosts, blogCategories } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const featuredPostImage = PlaceHolderImages.find(p => p.id === featuredPost.image);

  return (
    <div>
      <PageHeader
        title="Safari Stories & Travel Tips"
        subtitle="Insights and inspiration from the heart of Tanzania."
        imageId="blog-hero"
      />

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {featuredPost && featuredPostImage && (
             <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="overflow-hidden md:grid md:grid-cols-2 items-center hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-80 md:h-full min-h-[400px]">
                        <Image
                            src={featuredPostImage.imageUrl}
                            alt={featuredPost.title}
                            fill
                            className="object-cover"
                            data-ai-hint={featuredPostImage.imageHint}
                        />
                    </div>
                    <div className="p-8 md:p-12">
                        <Badge>{featuredPost.category}</Badge>
                        <h2 className="text-3xl lg:text-4xl font-headline font-bold mt-4 mb-4">
                            {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                        <p className="font-semibold text-primary">Read More &rarr;</p>
                    </div>
                </Card>
             </Link>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            <main className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => {
                  const image = PlaceHolderImages.find(p => p.id === post.image);
                  return (
                    <Link href={`/blog/${post.slug}`} key={post.slug}>
                      <Card className="overflow-hidden h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        {image && (
                          <div className="relative h-60 w-full">
                            <Image
                              src={image.imageUrl}
                              alt={post.title}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <Badge variant="secondary">{post.category}</Badge>
                          <h3 className="text-xl font-headline font-bold mt-3 mb-2">{post.title}</h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                          <p className="text-xs text-stone-gray mt-4">{post.date}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </main>
            <aside className="lg:col-span-1 space-y-8">
               <div className="p-6 bg-ivory rounded-2xl">
                    <h3 className="font-headline font-bold text-xl mb-4">Search Blog</h3>
                    <div className="flex gap-2">
                        <Input placeholder="Keywords..." />
                        <Button>Search</Button>
                    </div>
                </div>
                <div className="p-6 bg-ivory rounded-2xl">
                    <h3 className="font-headline font-bold text-xl mb-4">Categories</h3>
                    <ul className="space-y-2">
                        {blogCategories.map(cat => (
                            <li key={cat}>
                                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">{cat}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="p-6 bg-primary/10 rounded-2xl text-center">
                    <h3 className="font-headline font-bold text-xl mb-2">Get Safari Tips</h3>
                    <p className="text-sm text-muted-foreground mb-4">Subscribe for travel tips and special offers.</p>
                    <Input placeholder="Your email" className="mb-2" />
                    <Button className="w-full">Subscribe</Button>
                </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
