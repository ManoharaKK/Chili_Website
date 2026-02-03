"use client";
import React, { useState, useEffect, useRef } from 'react'
import Brownbutton from '../Button/Brownbutton'
import Image from 'next/image'

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  nft: string;
}

function Section04() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "CEYLON CINNAMON",
      image: "/Images/Home/Section04/Product01.png", // Replace with actual spice images
      price: "0.75 LKR",
      nft: "#87652"
    },
    {
      id: 2,
      name: "BLACK PEPPER",
      image: "/Images/Home/Section04/Product02.png",
      price: "0.75 LKR",
      nft: "#87652"
    },
    {
      id: 3,
      name: "CLOVES",
      image: "/Images/Home/Section04/Product01.png",
      price: "0.75 LKR",
      nft: "#87652"
    },
    {
      id: 4,
      name: "CARDAMOM",
      image: "/Images/Home/Section04/Product02.png",
      price: "0.75 LKR",
      nft: "#87652"
    },
    {
      id: 5,
      name: "TURMERIC",
      image: "/Images/Home/Section04/Product01.png",
      price: "0.75 LKR",
      nft: "#87652"
    },
    {
      id: 6,
      name: "CINNAMON",
      image: "/Images/Home/Section04/Product04.png",
      price: "0.75 LKR",
      nft: "#87652"
    }

  ];

  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const cardsPerView = getCardsPerView();
  const totalSlides = Math.ceil(products.length / cardsPerView);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const cardWidth = carousel.offsetWidth / cardsPerView;
      const newIndex = Math.round(scrollLeft / (cardWidth * cardsPerView));
      setCurrentIndex(Math.min(newIndex, totalSlides - 1));
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, [cardsPerView, totalSlides]);

  const scrollToSlide = (index: number) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const cardWidth = carousel.offsetWidth / cardsPerView;
      carousel.scrollTo({
        left: index * cardWidth * cardsPerView,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  return (
    <div className='grid-container'>
         <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                    SRI LANKAN FROM
                </h1>
                <div className="sm:flex items-center gap-6  lg:gap-6">
                    <h1 className="main-title encode-sans-medium leading-none bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent">
                        THE SOURCE</h1>
                    <div className='mt-4 sm:mt-0'>
                        <Brownbutton />
                    </div>
                </div>

                <div className='mt-8'>
                    <div 
                      ref={carouselRef}
                      className='flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth lg:pl-[100px] xl:pl-[150px] 2xl:pl-[200px]'
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {products.map((product) => (
                            <div 
                              key={product.id}
                              className='min-w-[280px] sm:min-w-[300px] md:min-w-[320px] shrink-0 bg-white rounded-2xl shadow-sm overflow-hidden snap-center border border-black'
                            >
                                {/* Product Card */}
                                <div className='flex flex-col h-full'>
                                    {/* Spice Name */}
                                    <div className='px-6 pt-6 pb-4'>
                                        <h3 className='text-lg sm:text-xl font-medium text-gray-800 uppercase tracking-tight text-center'>
                                            {product.name}
                                        </h3>
                                    </div>
                                    
                                    {/* Jar Image */}
                                    <div className='relative w-full h-[250px] sm:h-[280px] md:h-[300px] flex items-center justify-center px-6'>
                                        <div className='relative w-full h-full'>
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* Price and NFT Section */}
                                    <div className='mt-auto bg-[#4D4D4D] rounded-2xl px-6 py-4 m-1'>
                                        <div className='flex items-center justify-between mb-3'>
                                            <div>
                                                <p className='text-xs text-white/80 mb-1'>Current Price</p>
                                                <p className='text-2xl font-semibold text-white'>{product.price}</p>
                                            </div>
                                            <div className='text-right'>
                                                <p className='text-xs text-white/80'>NFT</p>
                                                <p className='text-sm text-white font-medium'>{product.nft}</p>
                                            </div>
                                        </div>
                                        
                                        {/* Buy Now Button */}
                                        <button className='w-full bg-white text-gray-800 font-medium py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination Dots */}
                    <div className='flex justify-center gap-2 mt-6'>
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollToSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    currentIndex === index 
                                        ? 'bg-gray-600 w-6' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default Section04