
'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { allBlogs } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function BlogPostPage() {
  const params = useParams();
  const blog = allBlogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  const otherPosts = allBlogs.filter((p) => p.id !== blog.id).slice(0, 3);

  return (
    <>
      <section className="w-full md:pt-8 pt-7 md:mb-5 mb-3">
        <div className="w-[96%] mx-auto px-0">
          <div className="relative w-full h-[500px] md:h-[55vh] rounded-[26px] overflow-hidden">
            <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover w-full h-full"
                data-ai-hint={blog.aiHint}
            />
            <div className="absolute inset-0 bg-black/30 z-10 h-full flex flex-col justify-end items-start text-white p-12">
                <div className="w-full">
                     <h1 className="text-[32px] font-extrabold font-headline">
                        {blog.title}
                    </h1>
                     <div className="mt-6 flex items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{blog.date}</span>
                        </div>
                    </div>
                    <div className="mt-4 border-t border-white/50 w-full"></div>
                </div>
            </div>
         </div>
        </div>
      </section>

    <div className="w-[96%] mx-auto px-4 py-12 sm:py-16">
      <article>
        <div className="prose prose-lg mx-auto text-foreground/90 leading-relaxed">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>
      </article>

      <aside className="mt-16 pt-12 border-t">
        <h2 className="text-3xl font-bold font-headline text-center text-primary mb-12">
          You Might Also Like
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {otherPosts.map((blog) => (
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
                    <h5 className="text-lg font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                      {blog.title}
                    </h5>
                  </div>
                </Card>
              </Link>
            ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/blogs">View All Posts</Link>
            </Button>
        </div>
      </aside>
    </div>
    </>
  );
}
