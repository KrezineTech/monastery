
'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { allBlogs } from '@/lib/blog-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  const params = useParams();
  const blog = allBlogs.find((b) => b.id === params.id);

  if (!blog) {
    notFound();
  }

  const otherPosts = allBlogs.filter((p) => p.id !== blog.id).slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <article>
        <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold font-headline tracking-tight text-primary sm:text-5xl lg:text-6xl">
                {blog.title}
            </h1>
            <div className="mt-6 flex justify-center items-center gap-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blog.date}</span>
                </div>
            </div>
        </header>

        <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden mb-12">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={blog.aiHint}
          />
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto text-foreground/90 leading-relaxed">
          <p className="whitespace-pre-line">{blog.content}</p>
        </div>
      </article>

      <aside className="mt-16 pt-12 border-t">
        <h2 className="text-3xl font-bold font-headline text-center text-primary mb-12">
          You Might Also Like
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.id}`} className="block group">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="relative w-full aspect-[16/9] md:aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={post.aiHint}
                  />
                </div>
                <div className="md:col-span-2">
                  <h5 className="text-lg font-bold font-headline text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h5>
                   <p className="text-sm text-muted-foreground">
                    {post.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/blogs">View all posts</Link>
            </Button>
        </div>
      </aside>
    </div>
  );
}
