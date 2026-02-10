
"use client";
import React, { useState, useEffect, useRef } from 'react'
import Brownbutton from '../Button/Brownbutton'
import Image from 'next/image'

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Section08() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "Premium Chilli Powder - Authentic Sri Lankan Flavor",
      description: "Made from the finest Sri Lankan chillies, our chilli powder brings authentic heat and flavor to your dishes. GMP certified and sourced directly from local farms.",
      image: "/Images/Home/Section08/Product.png"
    },
    {
      id: 2,
      title: "Roasted Curry Powder - Traditional Island Recipe",
      description: "Experience the rich, aromatic blend of traditional Sri Lankan spices. Our roasted curry powder is carefully crafted using time-honored recipes passed down through generations.",
      image: "/Images/Home/Section08/Product.png"    
    },
    {
      id: 3,
      title: "Turmeric Powder - Pure Ceylon Gold",
      description: "Sourced from the finest Ceylon turmeric roots, our powder offers vibrant color and health benefits. Perfect for curries, rice dishes, and traditional Sri Lankan cuisine.",
      image: "/Images/Home/Section08/Product.png"
    },
    {
      id: 4,
      title: "Pepper Powder - Freshly Ground Black Pepper",
      description: "Premium black pepper from Sri Lankan plantations, freshly ground to preserve its bold flavor and aroma. Ideal for enhancing the taste of any dish.",
      image: "/Images/Home/Section08/Product.png"
    },
    {
      id: 5,
      title: "Coriander Powder - Aromatic & Fresh",
      description: "Our coriander powder is made from carefully selected seeds, ground to perfection. Adds a fresh, citrusy flavor to your curries and marinades.",
      image: "/Images/Home/Section08/Product.png"
    }
  ];

  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const cardsPerView = getCardsPerView();
  const totalSlides = Math.ceil(carouselItems.length / cardsPerView);

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
        <div className='bg-black/5 py-20 lg:py-30 overflow-hidden'>
            <div className=''>
                <div className='grid lg:grid-cols-5 gap-4 items-stretch'>
                    <div className='col-span-full lg:col-span-2 grid-container'>
                        <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                            PURE SRI LANKAN FROM THE SOURCE
                        </h2>
                        <div className='mt-8'>
                            <p className='description encode-sans-medium text-gray-500 leading-none '>
                                We believe in fair trade and long-term partnerships.By supporting local farmers, we help preserve Sri Lanka's spice.
                            </p>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-3 w-full overflow-hidden'>
                        <div 
                            ref={carouselRef}
                            className='flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-2 px-2'
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {carouselItems.map((item) => (
                                <div 
                                    key={item.id}
                                    className='min-w-[calc(100vw-3rem)] sm:min-w-[calc(100vw-4rem)] md:min-w-[320px] lg:min-w-[380px] shrink-0 bg-white rounded-2xl overflow-hidden snap-center relative'
                                >
                                    {/* Image Container */}
                                    <div className='relative w-full h-[400px] sm:h-[400px] md:h-[350px] lg:h-[400px] xl:h-[400px] 2xl:h-[450px] rounded-2xl'>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    
                                    {/* Text Overlay - covers bottom half */}
                                    <div className='absolute bottom-0 left-0 right-0 bg-white/85 backdrop-blur-sm p-4 sm:p-5 md:p-6 pt-6 sm:pt-8 m-2 rounded-2xl h-[140px] sm:h-[150px] md:h-[160px] lg:h-[170px] flex flex-col'>
                                        <h3 className='text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 leading-tight line-clamp-2'>
                                            {item.title}
                                        </h3>
                                        <p className='text-xs sm:text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Pagination Dots */}
                        <div className='flex justify-center gap-2 mt-4 sm:mt-6'>
                            {Array.from({ length: totalSlides }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentIndex === index 
                                            ? 'bg-gray-700 w-8' 
                                            : 'bg-gray-300 w-2 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Section08