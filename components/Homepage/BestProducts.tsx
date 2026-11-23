"use client"
import { useEffect, useRef, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { ArrowLeft, ArrowRight } from '../Icons/IconArrows';
import Image from 'next/image';
import { IconOffer } from '../Icons/IconOffer';
import { GreyStar, HalfYellowStar, YellowStar } from '../Icons/IconStar';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button, { ButtonVar2 } from '../Button';
import { ProductType } from '@/Types/Product';
import { getProducts } from '@/actions/products';

const BestProducts = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const [cartItems, setCartItems] = useState<ProductType[]>([]);
    const [products, setProducts] = useState<ProductType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartItems((prevCart) => {
            const existing = prevCart.find(
                (item) => item.id === product.id
            );

            if (existing) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, cartQuantity: item.cartQuantity + 1 }
                        : item
                );
            }

            return [...prevCart, { ...product, cartQuantity: 1 }];
        });
    };

    const removeFromCart = (productId: string | number) => {
        setCartItems((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, cartQuantity: item.cartQuantity - 1 }
                        : item
                )
                .filter((item) => item.cartQuantity > 0)
        );
    };


    useEffect(() => {
        async function getData() {
            const data = await getProducts();
            setProducts(data ?? [])
        }

        getData()
    }, [])

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center w-full relative'>
            <h2 className='font-nyght text-2xl sm:text-3xl lg:text-36 relative text-center leading-tight'>
                Best Selling Products
            </h2>
            <div className='flex w-full items-center gap-2 sm:gap-4'>
                <button
                    type="button"
                    onClick={() => swiperRef.current?.slidePrev()}
                    disabled={isBeginning}
                    aria-label="Previous products"
                    className={`w-[38px] h-[38px] bg-white border-2 border-button-text rounded-[8px] flex items-center justify-center shrink-0 transition-opacity 
                        lg:absolute left-[-75] top-75 z-3
                        ${isBeginning ? 'opacity-40 cursor-not-allowed' : 'hover:bg-black/5 cursor-pointer'
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
                        allowTouchMove={true}
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
                            const cartItem = cartItems.find((item) => item.id === prod.id);
                            const quantity = cartItem?.cartQuantity || 0;
                            return (
                                <SwiperSlide key={prod.id} className='h-auto py-1'>
                                    <div className='flex flex-col h-full border border-button-text rounded-[12px] overflow-hidden bg-white'>
                                        <div className='h-[160px] relative w-full flex justify-center items-center bg-[#D5F9F3] shrink-0'>
                                            {prod.image && (
                                                <Image
                                                    src={prod.image}
                                                    width={100}
                                                    height={100}
                                                    className="h-[80%] w-auto object-contain"
                                                    alt={prod.name}
                                                />
                                            )}
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
                                                    <p className='font-poppins text- text-dark-bg/60 font-light'>
                                                        {prod.description}
                                                    </p>
                                                </div>
                                                <div className='flex font-[300] font-poppins text-dark-bg/60 max-h-[20px] items-center gap-[4px]'>
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
                                                    <p className='text-[#0F759D] text-[24px] font-poppins'>
                                                        £{prod.price}
                                                        <span className='text-20 ml-1 text-dark-bg/60'>/{prod.unit}</span>
                                                        <span className='text-16 ml-2 text-dark-bg/60'>Was <s>£{prod.oldPrice}</s></span>
                                                    </p>
                                                    <span className='flex items-center p-[4px] text-14 bg-[#E8F3F6] text-[#0F759D] rounded-[8px]'>
                                                        {prod.discount}
                                                    </span>
                                                </div>
                                                <span className='text-14 text-dark-bg/60'>
                                                    {prod.size} | {prod.pricePerUnit}
                                                </span>
                                            </div>

                                            <div className='mt-4 flex justify-between items-center w-full text-[14px]'>
                                                {quantity === 0 ? (
                                                    <ButtonVar2 onClick={() => addToCart(prod)}>
                                                        Add to Cart
                                                    </ButtonVar2>
                                                ) : (
                                                    <div className='flex gap-5 items-center'>
                                                        <ButtonVar2 onClick={() => removeFromCart(prod.id)}>-</ButtonVar2>
                                                        <span>{quantity}</span>
                                                        <ButtonVar2 onClick={() => addToCart(prod)}>+</ButtonVar2>
                                                    </div>
                                                )}

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
                    className={`w-[38px] h-[38px] border-2 border-button-text rounded-[8px] flex items-center justify-center shrink-0 transition-opacity 
                        lg:absolute top-75 right-[-75] z-3 bg-white
                        ${isEnd ? 'opacity-40 cursor-not-allowed' : 'hover:bg-black/5 cursor-pointer'
                        }`}
                >
                    <ArrowRight />
                </button>
            </div>
            <Button className='text-[18px]'>View All</Button>
        </section>
    );
};

export default BestProducts;