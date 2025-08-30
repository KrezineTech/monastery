
import Image from 'next/image';
import Link from 'next/link';
import { allBlogs } from '@/lib/blog-data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BlogsPage() {
  const featuredPost = allBlogs[0];
  const otherPosts = allBlogs.slice(1);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Island Journals
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Your guide to skincare, self-care, and the stories behind our glow.
        </p>
      </header>
      
      <main>
        {featuredPost && (
            <section className="mb-16">
                <Link href={`/blogs/${featuredPost.id}`} className="block group">
                    <Card className="grid md:grid-cols-2 gap-8 items-center border-none overflow-hidden">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={featuredPost.aiHint}
                            />
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-primary font-semibold mb-2">Featured Story</p>
                            <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                {featuredPost.title}
                            </h2>
                            <p className="text-muted-foreground mb-4 text-sm">
                                By {featuredPost.author} on {featuredPost.date}
                            </p>
                            <p className="text-foreground/80 leading-relaxed mb-6">
                                {featuredPost.excerpt}
                            </p>
                            <Button variant="link" className="p-0 text-primary">
                                Read More
                            </Button>
                        </div>
                    </Card>
                </Link>
            </section>
        )}

        <section>
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            More Stories
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`} className="block group">
                <Card className="overflow-hidden h-full flex flex-col border-none shadow-none rounded-[26px]">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[26px]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      data-ai-hint={post.aiHint}
                    />
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground mb-2 flex-1 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                     <p className="text-sm text-muted-foreground mt-2">
                        {post.date}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
