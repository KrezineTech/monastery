
import Image from 'next/image';
import Link from 'next/link';
import { allBlogs } from '@/lib/blog-data';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';

export default function BlogsPage() {
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
        <section>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`} className="group block">
                <Card className="flex flex-col h-full rounded-[26px] border-none bg-transparent shadow-none">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <AvatarImage src={`https://i.pravatar.cc/32?u=${blog.author}`} alt={blog.author} />
                                <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                           <Calendar className="w-4 h-4" />
                           <span>{blog.date}</span>
                        </div>
                    </div>
                     <div className="relative w-full aspect-video rounded-[18px] overflow-hidden mb-4">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={blog.aiHint}
                        />
                      </div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
