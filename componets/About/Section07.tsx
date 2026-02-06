"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function Section07() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: 'Rajitha Fernando',
      title: 'Founder & CEO',
      description: 'Passionate about bringing authentic Sri Lankan spices to the world.',
      image: '/Images/Home/Section04/Product01.png'
    },
    {
      id: 2,
      name: 'Kavinda Manohara',
      title: 'Founder & CEO',
      description: 'Works directly with our network of local farmers.',
      image: '/Images/Home/Section04/Product02.png'
    },
    {
      id: 3,
      name: 'Kumari Perera',
      title: 'Head of Quality',
      description: '15+ years experience in spice quality control and processing.',
      image: '/Images/Home/Section04/Product03.png'
    },
    {
      id: 4,
      name: 'Lahiru Rathnayake',
      title: 'Head of Quality',
      description: '15+ years experience in spice quality control and processing.',
      image: '/Images/Home/Section04/Product04.png'
    },
    {
      id: 5,
      name: 'Kumari Perera',
      title: 'Head of Quality',
      description: '15+ years experience in spice quality control and processing.',
      image: '/Images/Home/Section04/Product03.png'
    },
  ]

  
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

   
    const initCarousel = () => {
      if (!carousel || carousel.scrollWidth === 0) {
        setTimeout(initCarousel, 100);
        return;
      }

      let scrollAmount = 0;
      const scrollSpeed = 0.8; 
      let animationFrameId: number;

      const updateIndex = () => {
        
        const cardWidth = typeof window !== 'undefined' 
          ? window.innerWidth >= 1024 
            ? 350 + 32  
            : window.innerWidth >= 768
            ? 320 + 32  
            : window.innerWidth >= 640
            ? 300 + 24 
            : 280 + 24  
          : 280 + 24;

        const index = Math.floor(scrollAmount / cardWidth) % teamMembers.length;
        setCurrentIndex(index);
      };

      const autoScroll = () => {
        if (!carousel) return;
        
        scrollAmount += scrollSpeed;
        
        carousel.scrollLeft = scrollAmount;
        updateIndex();

        
        const maxScroll = carousel.scrollWidth / 2;
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
          carousel.scrollLeft = 0;
        }

        animationFrameId = requestAnimationFrame(autoScroll);
      };

      
      animationFrameId = requestAnimationFrame(autoScroll);

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    };

    const cleanup = initCarousel();
    return cleanup;
  }, [teamMembers.length]);

  return (
    <div className=''>
      <div className='grid-container'>
       
        <div className='text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
            <p className='description encode-sans-medium text-gray-500 leading-none '>
Meet The Team
            </p>
          <h1 className='uppercase main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
            THE FACES BEHIND
          </h1>
          <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none font-bold'>
            MR CHILLI
          </h1>
        </div>
=
        <div className='overflow-hidden w-full'>
          <div
            ref={carouselRef}
            className='flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide'
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollBehavior: 'auto' }}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
                className='min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[350px] shrink-0 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300'
              >
               
                <div className='flex justify-center mb-4 sm:mb-6'>
                  <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-[#BF1D2E]'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-black text-center mb-2'>
                  {member.name}
                </h3>

                <p className='text-sm sm:text-base md:text-lg text-[#BF1D2E] font-medium text-center mb-3 sm:mb-4'>
                  {member.title}
                </p>

               
                <p className='text-xs sm:text-sm md:text-base text-gray-600 text-center leading-relaxed'>
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className='flex justify-center gap-2 mt-8 sm:mt-10 md:mt-12'>
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-[#BF1D2E] w-8' 
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Section07