import React from 'react'
import { FaLeaf } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa6'
import { FaAward } from 'react-icons/fa6'

function Section03() {
  const coreValues = [
    {
      icon: FaLeaf,
      title: 'SUSTAINABILITY',
      description: 'We work with farmers who use sustainable and organic farming practices.'
    },
    {
      icon: FaHeart,
      title: 'PASSION',
      description: 'Every spice is selected with care and passion for authentic flavors.'
    },
    {
      icon: FaUsers,
      title: 'COMMUNITY',
      description: 'Supporting local farming communities in Sri Lanka.'
    },
    {
      icon: FaAward,
      title: 'QUALITY',
      description: 'Only the finest, hand-picked spices make it to your kitchen.'
    }
  ]

  return (
    <div className='bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='grid-container'>
        {/* Top Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20'>
          {/* Left Side - OUR CORE VALUES */}
          <div className='animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
          <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
              OUR CORE
            </h1>
            <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
              VALUES
            </h1>
          </div>

          {/* Right Side - WHAT WE STAND FOR */}
          <div className='flex flex-col justify-center animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
          <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none' > 
              WHAT WE STAND FOR
            </h2>
            <div className='w-full h-px bg-black mb-4 mt-4 sm:mt-6 md:mt-6 sm:mb-6'></div>
            <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
              Born From A Deep Love For Sri Lankan Culinary Heritage, Mr Chilli Connects You Directly With The Finest Spices From The Heart Of Ceylon. Our Journey Began With A Simple Mission: To Share The Authentic Flavors That Have Made Sri Lankan Cuisine Legendary.
            </p>
          </div>
        </div>

        {/* Bottom Section - Core Values Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4'>
          {coreValues.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up'
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className='flex justify-center mb-4 sm:mb-6'>
                  <div className='bg-[#BF1D2E] rounded-xl sm:rounded-2xl p-4 sm:p-5'>
                    <IconComponent className='text-white text-3xl sm:text-4xl md:text-5xl' />
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-black text-center mb-3 sm:mb-4'>
                  {value.title}
                </h3>

                {/* Separator Line */}
                <div className='w-full h-px bg-black mb-4 sm:mb-6'></div>

                {/* Description */}
                <p className='text-sm sm:text-base text-gray-700 text-center leading-relaxed'>
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section03