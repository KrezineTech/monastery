
'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { ProductCard } from '@/components/product-card'
import { useWishlist } from '@/hooks/use-wishlist'
import { Button } from '@/components/ui/button';
import { ChevronDown, X } from 'lucide-react';
import type { Product } from '@/lib/types';


const WishlistPage = () => {
    const { wishlist } = useWishlist();
    const [sortOption, setSortOption] = useState('');
    const [layoutCol, setLayoutCol] = useState<number | null>(4)
    const [type, setType] = useState<string | undefined>()
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 12;
    const offset = currentPage * productsPerPage;

    const handleLayoutCol = (col: number) => {
        setLayoutCol(col)
    }

    const handleType = (type: string) => {
        setType((prevType) => (prevType === type ? undefined : type))
    }

    const handleSortChange = (option: string) => {
        setSortOption(option);
    };

    let filteredData: Product[] = wishlist.filter(product => {
        let isTypeMatched = true;
        if (type) {
            isTypeMatched = product.category === type;
        }

        return isTypeMatched
    })

    const totalProducts = filteredData.length
    const selectedType = type

    if (filteredData.length === 0) {
        filteredData = [];
    }

    let sortedData = [...filteredData];

    if (sortOption === 'soldQuantityHighToLow') {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortOption === 'discountHighToLow') {
        sortedData
            .sort((a, b) => (
                (Math.floor(100 - ((b.price / (b.originalPrice || b.price)) * 100))) - (Math.floor(100 - ((a.price / (a.originalPrice || a.price)) * 100)))
            ))
    }

    if (sortOption === 'priceHighToLow') {
        sortedData.sort((a, b) => b.price - a.price)
    }

    if (sortOption === 'priceLowToHigh') {
        sortedData.sort((a, b) => a.price - b.price)
    }

    filteredData = sortedData;


    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    if (pageCount > 0 && pageCount <= currentPage) {
        setCurrentPage(pageCount - 1);
    }
    
    let currentProducts: Product[];

    if (filteredData.length > 0) {
        currentProducts = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentProducts = []
    }

    const handlePageChange = ({selected}: {selected: number}) => {
        setCurrentPage(selected);
    };


    return (
        <>
            <div className="shop-product lg:py-20 md:py-14 py-10">
                <div className="container">
                    <div className="list-product-block relative">
                        <div className="filter-heading flex items-center justify-between gap-5 flex-wrap">
                            <div className="left flex has-line items-center flex-wrap gap-5">
                                <div className="choose-layout flex items-center gap-2">
                                    <div
                                        className={`item three-col p-2 border rounded flex items-center justify-center cursor-pointer ${layoutCol === 3 ? 'bg-primary text-primary-foreground' : ''}`}
                                        onClick={() => handleLayoutCol(3)}
                                    >
                                        <div className='flex items-center gap-0.5'>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                        </div>
                                    </div>
                                    <div
                                        className={`item four-col p-2 border rounded flex items-center justify-center cursor-pointer ${layoutCol === 4 ? 'bg-primary text-primary-foreground' : ''}`}
                                        onClick={() => handleLayoutCol(4)}
                                    >
                                        <div className='flex items-center gap-0.5'>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                            <span className='w-[3px] h-4 bg-current rounded-sm'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right flex items-center gap-3">
                                <div className="select-block filter-type relative">
                                    <select
                                        className='text-sm py-2 pl-3 md:pr-12 pr-8 rounded-lg border capitalize bg-background'
                                        name="select-type"
                                        id="select-type"
                                        onChange={(e) => handleType(e.target.value)}
                                        value={type === undefined ? 'Type' : type}
                                    >
                                        <option value="Type" disabled>Type</option>
                                        {['essence', 'serum', 'moisturizer', 'set'].map((item, index) => (
                                            <option
                                                key={index}
                                                className={`item cursor-pointer`}
                                                value={item}
                                            >
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2 pointer-events-none' />
                                </div>
                                <div className="select-block relative">
                                    <select
                                        id="select-filter"
                                        name="select-filter"
                                        className='text-sm py-2 pl-3 md:pr-20 pr-10 rounded-lg border bg-background'
                                        onChange={(e) => { handleSortChange(e.target.value) }}
                                        defaultValue={'Sorting'}
                                    >
                                        <option value="Sorting" disabled>Sorting</option>
                                        <option value="soldQuantityHighToLow">Best Selling</option>
                                        <option value="discountHighToLow">Best Discount</option>
                                        <option value="priceHighToLow">Price High To Low</option>
                                        <option value="priceLowToHigh">Price Low To High</option>
                                    </select>
                                    <ChevronDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2 pointer-events-none' />
                                </div>
                            </div>
                        </div>

                        <div className="list-filtered flex items-center gap-3 mt-4">
                            <div className="total-product text-sm">
                                {totalProducts}
                                <span className='text-muted-foreground pl-1'>Products Found</span>
                            </div>
                            {
                                (selectedType) && (
                                    <>
                                        <div className="list flex items-center gap-3">
                                            <div className='w-px h-4 bg-border'></div>
                                            {selectedType && (
                                                <div className="item flex items-center px-2 py-1 gap-1 bg-primary/10 rounded-full capitalize cursor-pointer" onClick={() => { setType(undefined) }}>
                                                    <X size={12} className='cursor-pointer' />
                                                    <span className="text-xs">{selectedType}</span>
                                                </div>
                                            )}
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
                                )
                            }
                        </div>

                        <div className={`list-product grid lg:grid-cols-${layoutCol} sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] mt-7`}>
                            {currentProducts.length > 0 ? currentProducts.map((item) => (
                                <ProductCard key={item.id} product={item} />
                            )) : (
                                <div className="col-span-full text-center py-20">
                                    <p className="text-lg text-muted-foreground">Your wishlist is empty or no products match the selected criteria.</p>
                                </div>
                            )}
                        </div>

                        {pageCount > 1 && (
                             <div className="flex items-center justify-center md:mt-10 mt-7">
                                <Button
                                  variant="outline"
                                  onClick={() => handlePageChange({selected: currentPage - 1})}
                                  disabled={currentPage === 0}
                                >
                                  Previous
                                </Button>
                                <span className="px-4 text-sm text-muted-foreground">
                                  Page {currentPage + 1} of {pageCount}
                                </span>
                                <Button
                                  variant="outline"
                                  onClick={() => handlePageChange({selected: currentPage + 1})}
                                  disabled={currentPage >= pageCount - 1}
                                >
                                  Next
                                </Button>
                              </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishlistPage;
