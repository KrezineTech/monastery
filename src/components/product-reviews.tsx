
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Star, User, Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import Image from 'next/image';

interface Review {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  photos?: string[];
}

const reviewSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  rating: z.number().min(1, { message: 'Please select a rating.' }),
  review: z.string().min(10, { message: 'Review must be at least 10 characters.' }),
  photos: z.any().optional(),
});


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


function ReviewFormDialog({ open, onOpenChange, onSubmit }: { open: boolean, onOpenChange: (open: boolean) => void, onSubmit: (data: Review) => void }) {
  const form = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: '',
      review: '',
      rating: 0,
    },
  });
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const { control, handleSubmit, setValue, watch } = form;
  const rating = watch('rating');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setImagePreviews(prev => [...prev, ...newPreviews].slice(0, 5));
      setValue('photos', files);
    }
  };

  const processSubmit = (data: z.infer<typeof reviewSchema>) => {
    const newReview: Review = {
      id: Date.now(),
      author: data.name,
      avatar: '',
      rating: data.rating,
      date: 'Just now',
      text: data.review,
      photos: imagePreviews,
    };
    onSubmit(newReview);
    form.reset();
    setImagePreviews([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <Form {...form}>
          <form onSubmit={handleSubmit(processSubmit)}>
            <DialogHeader>
              <DialogTitle>Write a review</DialogTitle>
              <DialogDescription>
                Share your thoughts about the product with other customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="rating"
                render={() => (
                   <FormItem>
                    <FormLabel>Your Rating</FormLabel>
                    <FormControl>
                       <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              'w-6 h-6 cursor-pointer',
                              rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                            )}
                            onClick={() => setValue('rating', star, { shouldValidate: true })}
                          />
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="review"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Review</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Share your thoughts..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={control}
                name="photos"
                render={() => (
                  <FormItem>
                    <FormLabel>Upload Photos (optional)</FormLabel>
                    <FormControl>
                      <div className="relative border-2 border-dashed border-muted rounded-lg p-6 flex flex-col items-center justify-center">
                        <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">Drag & drop or click to upload</p>
                        <Input 
                          type="file" 
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                        />
                      </div>
                    </FormControl>
                     {imagePreviews.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {imagePreviews.map((src, index) => (
                          <Image key={index} src={src} alt={`preview ${index}`} width={64} height={64} className="rounded-md object-cover" />
                        ))}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Submit Review</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}


export function ProductReviews({ productId }: { productId: string }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);

  const handleAddReview = (newReview: Review) => {
    setReviews([newReview, ...reviews]);
  };

  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews || 0;

  return (
    <div className="w-full">
      <ReviewFormDialog 
        open={isReviewFormOpen}
        onOpenChange={setIsReviewFormOpen}
        onSubmit={handleAddReview}
      />
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
            <Button variant="outline" className="w-full mt-4" onClick={() => setIsReviewFormOpen(true)}>Write a review</Button>
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
                   {review.photos && review.photos.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {review.photos.map((photo, index) => (
                        <Image key={index} src={photo} alt={`Review photo ${index + 1}`} width={80} height={80} className="rounded-md object-cover" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
