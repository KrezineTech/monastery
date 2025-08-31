'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, X, ChevronDown } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useWishlist } from '@/hooks/use-wishlist';
import type { Product } from '@/lib/types';
import { ProductCard } from '../product-card';

export function WishlistSheet() {
  const { wishlist, removeFromWishlist, addToWishlist } = useWishlist();
  const [sortOption, setSortOption] = useState('');
  const [layoutCol, setLayoutCol] = useState<number>(2);
  const [type, setType] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState(0);
  
  const productsPerPage = 6; // Reduced for sheet view
  const offset = currentPage * productsPerPage;

  const totalItems = wishlist.length;

  const handleLayoutCol = (col: number) => {
    setLayoutCol(col);
  };

  const handleType = (type: string) => {
    setType((prevType) => (prevType === type ? undefined : type));
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  // Filter product data by type
  let filteredData: Product[] = wishlist.filter(product => {
    let isTypeMatched = true;
    if (type) {
      isTypeMatched = product.category === type; // Assuming product.category is the type
    }
    return isTypeMatched;
  });

  const totalProducts = filteredData.length;
  const selectedType = type;

  // Sort filtered data
  let sortedData = [...filteredData];

  if (sortOption === 'soldQuantityHighToLow') {
    // Assuming no `sold` property, we can sort by name for now
    sortedData.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sortOption === 'discountHighToLow') {
    sortedData
      .sort((a, b) => (
        (Math.floor(100 - ((b.price / (b.originalPrice || b.price)) * 100))) - 
        (Math.floor(100 - ((a.price / (a.originalPrice || a.price)) * 100)))
      ));
  }

  if (sortOption === 'priceHighToLow') {
    sortedData.sort((a, b) => b.price - a.price);
  }

  if (sortOption === 'priceLowToHigh') {
    sortedData.sort((a, b) => a.price - b.price);
  }

  filteredData = sortedData;

  // Get product data for current page
  const currentProducts = filteredData.slice(offset, offset + productsPerPage);
  const pageCount = Math.ceil(filteredData.length / productsPerPage);

  const handlePageChange = (selected: number) => {
    setCurrentPage(selected);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Heart className="h-5 w-5 text-gray-600" />
          <span className="sr-only">Wishlist</span>
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col p-0 sm:max-w-2xl">
        <SheetHeader className="p-6 pb-4">
          <SheetTitle className="flex items-center justify-between font-headline text-lg">
            Wishlist
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7 -mr-2">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <Separator />
        
        {wishlist.length > 0 ? (
          <>
            {/* Filter and Layout Controls */}
            <div className="p-6 pb-4">
              <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                <div className="left flex has-line items-center flex-wrap gap-5">
                  <div className="choose-layout flex items-center gap-2">
                    <div
                      className={`item p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 1 ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => handleLayoutCol(1)}
                    >
                      <div className='flex items-center gap-0.5'>
                        <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                      </div>
                    </div>
                    <div
                      className={`item p-2 border border-line rounded flex items-center justify-center cursor-pointer ${layoutCol === 2 ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => handleLayoutCol(2)}
                    >
                      <div className='flex items-center gap-0.5'>
                        <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                        <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right flex items-center gap-3">
                  <div className="select-block filter-type relative">
                    <select
                      className='text-sm py-2 pl-3 pr-8 rounded-lg border capitalize bg-background'
                      name="select-type"
                      id="select-type"
                      onChange={(e) => handleType(e.target.value)}
                      value={type === undefined ? 'Type' : type}
                    >
                      <option value="Type" disabled>Type</option>
                      {['essence', 'serum', 'moisturizer', 'set'].map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={12} className='absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none' />
                  </div>
                  <div className="select-block relative">
                    <select
                      id="select-filter"
                      name="select-filter"
                      className='text-sm py-2 pl-3 pr-8 rounded-lg border bg-background'
                      onChange={(e) => { handleSortChange(e.target.value) }}
                      defaultValue={'Sorting'}
                    >
                      <option value="Sorting" disabled>Sorting</option>
                      <option value="soldQuantityHighToLow">Best Selling</option>
                      <option value="discountHighToLow">Best Discount</option>
                      <option value="priceHighToLow">Price High To Low</option>
                      <option value="priceLowToHigh">Price Low To High</option>
                    </select>
                    <ChevronDown size={12} className='absolute top-1/2 -translate-y-1/2 right-2 pointer-events-none' />
                  </div>
                </div>
              </div>

              {/* Filter Results */}
              <div className="list-filtered flex items-center gap-3 mt-4">
                <div className="total-product text-sm">
                  {totalProducts}
                  <span className='text-muted-foreground pl-1'>Products Found</span>
                </div>
                {selectedType && (
                  <>
                    <div className="list flex items-center gap-3">
                      <div className='w-px h-4 bg-border'></div>
                      <div className="item flex items-center px-2 py-1 gap-1 bg-primary/10 rounded-full capitalize cursor-pointer" onClick={() => { setType(undefined) }}>
                        <X size={12} className='cursor-pointer' />
                        <span className="text-xs">{selectedType}</span>
                      </div>
                    </div>
                    <div
                      className="clear-btn flex items-center px-2 py-1 gap-1 rounded-full border border-destructive cursor-pointer"
                      onClick={() => {
                        setType(undefined);
                      }}
                    >
                      <X size={12} className='text-destructive cursor-pointer' />
                      <span className='text-xs uppercase text-destructive'>Clear All</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <ScrollArea className="flex-1">
              {/* Grid Layout */}
              <div className={`p-6 pt-0 grid ${layoutCol === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-4`}>
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <div key={product.id} className="group relative border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="relative aspect-square overflow-hidden rounded-md mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={product.aiHint}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-2 right-2 h-8 w-8 bg-background/80 hover:bg-background"
                          onClick={() => removeFromWishlist(product.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-sm text-foreground line-clamp-2">{product.name}</h3>
                        <div className="flex items-baseline gap-2">
                          <p className="font-semibold text-primary">
                            ₹{product.price.toFixed(2)}
                          </p>
                          {product.originalPrice && (
                            <p className="text-xs text-muted-foreground line-through">
                              ₹{product.originalPrice.toFixed(2)}
                            </p>
                          )}
                        </div>
                        <Button size="sm" className="w-full">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-8">
                    <p className="text-muted-foreground">No products match the selected criteria.</p>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="p-6 pt-0">
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                  >
                    Previous
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {currentPage + 1} of {pageCount}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(Math.min(pageCount - 1, currentPage + 1))}
                    disabled={currentPage === pageCount - 1}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}

            <SheetFooter className="p-6 border-t bg-background">
              <div className="flex w-full flex-col gap-2">
                <Button asChild size="lg" className="w-full">
                  <Link href="/wishlist">View All Wish List</Link>
                </Button>
                <SheetClose asChild>
                  <Button variant="link" className="text-sm font-medium text-muted-foreground">
                    OR CONTINUE SHOPPING
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center p-4">
            <Heart className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="font-headline text-xl font-semibold">Your Wishlist is Empty</h3>
            <p className="text-sm text-muted-foreground">
              Add your favorite products to your wishlist to keep track of them.
            </p>
            <SheetClose asChild>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
