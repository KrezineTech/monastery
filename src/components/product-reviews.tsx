
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Star, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const initialReviews: Review[] = [
  { id: 1, author: 'Sarah K.', avatar: '/avatars/01.png', rating: 5, date: '2 weeks ago', text: 'Absolutely love this serum! My skin has never felt smoother or looked more radiant. The texture is lightweight and absorbs instantly. Worth every penny!' },
  { id: 2, author: 'Jessica L.', avatar: '/avatars/02.png', rating: 4, date: '1 month ago', text: 'Really good product. It has helped even out my skin tone. I took off one star because I wish it came in a larger size. Otherwise, fantastic!' },
  { id: 3, author: 'Mike P.', avatar: '/avatars/03.png', rating: 5, date: '3 days ago', text: 'I was skeptical, but this stuff works. My skin feels hydrated all day long without being greasy. I\'ve gotten compliments on my glow!' },
];

const ratingDistribution = [
  { star: 5, percentage: 75 },
  { star: 4, percentage: 15 },
  { star: 3, percentage: 5 },
  { star: 2, percentage: 3 },
  { star: 1, percentage: 2 },
];


export function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && rating > 0 && reviewText) {
      const newReview: Review = {
        id: reviews.length + 1,
        author: name,
        avatar: '',
        rating,
        date: 'Just now',
        text: reviewText,
      };
      setReviews([newReview, ...reviews]);
      // Reset form
      setName('');
      setRating(0);
      setHoverRating(0);
      setReviewText('');
    }
  };

  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews || 0;

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <Card className="p-6 rounded-lg bg-muted/50 border-none">
            <h3 className="text-lg font-bold text-foreground">Customer Reviews</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={cn('w-5 h-5', averageRating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')}
                  />
                ))}
              </div>
              <span className="font-bold">{averageRating.toFixed(1)} out of 5</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Based on {totalReviews} reviews</p>

            <div className="space-y-2 mt-6">
              {ratingDistribution.map((dist) => (
                <div key={dist.star} className="flex items-center gap-2">
                  <span className="text-sm">{dist.star} star</span>
                  <Progress value={dist.percentage} className="w-full h-2" />
                  <span className="text-sm text-muted-foreground">{dist.percentage}%</span>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <h4 className="font-semibold text-foreground">Share your thoughts</h4>
            <p className="text-sm text-muted-foreground mt-1">
              If you’ve used this product, share your thoughts with other customers.
            </p>
            <Button variant="outline" className="w-full mt-4">Write a review</Button>
          </Card>
        </div>

        <div className="md:col-span-8">
          <h3 className="text-lg font-bold text-foreground mb-4">Showing {reviews.length} reviews</h3>
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="flex gap-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.author} />
                  <AvatarFallback><User className="w-5 h-5" /></AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{review.author}</p>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={cn(
                          'w-4 h-4',
                          review.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 mt-2 leading-relaxed">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
