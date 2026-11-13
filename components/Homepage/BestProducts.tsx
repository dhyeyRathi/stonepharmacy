"use client"
import { useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight } from '../Icons/IconArrows';
import Image from 'next/image';
import { IconOffer } from '../Icons/IconOffer';
import { GreyStar, HalfYellowStar, YellowStar } from '../Icons/IconStar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BestProducts = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const products = [
        {
            id: 1,
            name: "Plum Cream",
            category: "Health & Beauty",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/plum.webp",
            price: 10,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 1,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
        {
            id: 2,
            name: "Panadol",
            category: "Pain Relief",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/panadol.webp",
            price: 6,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 2.5,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
        {
            id: 3,
            name: "Halls",
            category: "Lozenges",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/halls.webp",
            price: 9,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 3.5,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
        {
            id: 4,
            name: "Plum Cream",
            category: "Health & Beauty",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/plum.webp",
            price: 10,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 1,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
        {
            id: 5,
            name: "Panadol",
            category: "Pain Relief",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/panadol.webp",
            price: 6,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 2.5,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
        {
            id: 6,
            name: "Halls",
            category: "Lozenges",
            description: "Effective for 62-82% of men, Works in 25 mins and lasts 4-5 hours.",
            image: "/Images/halls.webp",
            price: 9,
            oldPrice: 19.53,
            discount: "Save £9.53",
            unit: "pack",
            rating: 3.5,
            reviews: 9403,
            quantity: "2ML",
            pricePerUnit: "£192.50 per 100ML",
            offer: true,
        },
    ];

    return (
        <section className='flex flex-col gap-[40px] items-center w-full'>
            <h2 className='font-nyght text-36 relative'>
                Best Selling Products
            </h2>
            <div className='flex w-full items-center gap-2 sm:gap-4'>
                <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    aria-label="Previous products"
                    className={`w-[38px] h-[38px] border-2 border-button-text rounded-[8px] flex items-center justify-center shrink-0 transition-opacity ${isBeginning ? 'opacity-40 cursor-not-allowed' : 'hover:bg-black/5 cursor-pointer'
                        }`}
                >
                    <ArrowLeft />
                </button>

                <div className='flex-1 min-w-0'>
                    <Swiper
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsBeginning(swiper.isBeginning);
                            setIsEnd(swiper.isEnd);
                        }}
                        allowTouchMove={false}
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                        }}
                        className='w-full'
                    >
                        {products.map((prod) => {
                            const fullCount = Math.floor(prod.rating);
                            const hasHalf = prod.rating % 1 !== 0;
                            const emptyCount = 5 - fullCount - (hasHalf ? 1 : 0);
                            return (
                                <SwiperSlide key={prod.id} className='h-auto py-1'>
                                    <div className='flex flex-col h-full border border-button-text rounded-[12px] overflow-hidden bg-white'>
                                        <div className='h-[160px] relative w-full flex justify-center items-center bg-[#D5F9F3] shrink-0'>
                                            <Image
                                                src={prod.image}
                                                width={100}
                                                height={100}
                                                className="h-[80%] w-auto object-contain"
                                                alt={prod.name}
                                            />
                                            {prod.offer && (
                                                <IconOffer className='absolute top-3 left-3' />
                                            )}
                                        </div>
                                        <div className='p-[16px] flex flex-col gap-2 flex-1 justify-between'>
                                            <div className='flex flex-col gap-2'>
                                                <div>
                                                    <p className='text-14 font-poppins text-[#0F759D]'>{prod.category}</p>
                                                    <h3 className='text-[24px] font-[500] font-poppins text-text-primary'>{prod.name}</h3>
                                                </div>
                                                <div>
                                                    <p className='font-poppins text-16 text-dark-bg/60 font-light'>
                                                        {prod.description}
                                                    </p>
                                                </div>
                                                <div className='flex font-[300] font-poppins text-dark-bg/60 items-center gap-[4px]'>
                                                    {Array.from({ length: fullCount }).map((_, index) => (
                                                        <YellowStar key={`full-${prod.id}-${index}`} />
                                                    ))}
                                                    {hasHalf && <HalfYellowStar />}
                                                    {Array.from({ length: emptyCount }).map((_, index) => (
                                                        <GreyStar key={`empty-${prod.id}-${index}`} />
                                                    ))}
                                                    <span>({prod.reviews})</span>
                                                </div>
                                                <div className='flex w-full justify-between items-center flex-wrap gap-1'>
                                                    <p className='text-[#0F759D] text-[32px] font-poppins'>
                                                        £{prod.price}
                                                        <span className='text-20 ml-1 text-dark-bg/60'>/{prod.unit}</span>
                                                        <span className='text-16 ml-2 text-dark-bg/60'>Was <s>£{prod.oldPrice}</s></span>
                                                    </p>
                                                    <span className='flex items-center p-[4px] text-14 bg-[#E8F3F6] text-[#0F759D] rounded-[8px]'>
                                                        {prod.discount}
                                                    </span>
                                                </div>
                                                <span className='text-16 text-dark-bg/60'>
                                                    {prod.quantity} | {prod.pricePerUnit}
                                                </span>
                                            </div>

                                            <div className='mt-4 flex justify-between items-center w-full text-[14px]'>
                                                <div className='rounded-xl bg-gradient-to-r from-[#E1E1E1] to-[#ADADAD] p-[1px]'>
                                                    <button type="button" className='rounded-xl bg-[#FEFEFE] px-[24px] py-[10px] cursor-pointer hover:bg-neutral-50 transition-colors'>
                                                        Add to Cart
                                                    </button>
                                                </div>

                                                <button type="button" className='underline text-[#107B91] cursor-pointer hover:opacity-80 transition-opacity'>
                                                    More Information
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>

                <button
                    type="button"
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    aria-label="Next products"
                    className={`w-[38px] h-[38px] border-2 border-button-text rounded-[8px] flex items-center justify-center shrink-0 transition-opacity ${isEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-black/5 cursor-pointer'
                        }`}
                >
                    <ArrowRight />
                </button>
            </div>
        </section>
    );
};

export default BestProducts;