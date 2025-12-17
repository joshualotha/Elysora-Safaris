import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts, teamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SafariCard from "@/components/shared/SafariCard";
import { safariPackages } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  const author = teamMembers.find(m => m.name === post?.author);
  const authorImage = PlaceHolderImages.find(p => p.id === author?.image);
  const relatedPosts = blogPosts.filter(p => p.category === post?.category && p.slug !== post?.slug).slice(0, 3);


  if (!post) {
    notFound();
  }
  
  const postImage = PlaceHolderImages.find(p => p.id === post.image);

  return (
    <div className="bg-ivory">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px]">
        {postImage && (
            <Image
                src={postImage.imageUrl}
                alt={post.title}
                fill
                className="object-cover"
                priority
                data-ai-hint={postImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <div className="container mx-auto px-4 md:px-6">
            <Badge>{post.category}</Badge>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white mt-4 max-w-4xl text-shadow">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 mt-6">
                {author && authorImage && (
                    <Avatar>
                        <AvatarImage src={authorImage.imageUrl} alt={author.name}/>
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                )}
                <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-stone-300">{post.date} · {post.readTime} min read</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg lg:prose-xl max-w-none prose-h2:font-headline prose-p:text-stone-gray prose-a:text-sahara-gold">
                <p>{post.excerpt}</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
                </p>
                
                <figure>
                    <Image 
                        src="https://picsum.photos/seed/133/1200/800" 
                        alt="A stunning landscape from Tanzania" 
                        width={1200}
                        height={800}
                        className="rounded-2xl"
                        data-ai-hint="tanzania landscape"
                    />
                    <figcaption>A beautiful view from the Serengeti plains.</figcaption>
                </figure>

                <h2>A Deeper Dive into the Wild</h2>
                <p>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. 
                </p>
                <blockquote>
                    "The only man I envy is the man who has not yet been to Africa – for he has so much to look forward to."
                    <cite>– Richard Mullin</cite>
                </blockquote>
                <p>
                    Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. 
                </p>
            </article>

            <Separator className="my-16" />

            {/* Author Bio */}
            {author && authorImage && (
                <div className="flex items-center gap-6 bg-sand p-8 rounded-2xl">
                    <Avatar className="h-24 w-24">
                        <AvatarImage src={authorImage.imageUrl} alt={author.name} />
                        <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold text-stone-gray">WRITTEN BY</p>
                        <h3 className="text-2xl font-bold font-headline mt-1">{author.name}</h3>
                        <p className="text-muted-foreground mt-2">{author.bio}</p>
                    </div>
                </div>
            )}
        </div>
      </div>
      
      {/* Related Posts */}
      <section className="py-16 md:py-24 bg-sand">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-center text-4xl font-headline font-bold mb-12">Related Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map(p => {
                const safariPackage = safariPackages.find(sp => sp.slug.includes(p.slug.substring(0,6)));
                return safariPackage ? <SafariCard key={p.slug} safari={safariPackage} /> : null
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
