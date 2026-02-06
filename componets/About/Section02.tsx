import React from 'react'
import { FaEye } from 'react-icons/fa6'
import { FaBullseye } from 'react-icons/fa6'

function Section02() {
  return (
    <div className='grid-container'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
        {/* OUR MISSION Card */}
        <div className='bg-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
          <div className='flex items-start gap-4 sm:gap-6'>
            {/* Icon Container */}
            <div className='bg-[#BF1D2E] rounded-xl sm:rounded-2xl p-4 sm:p-5 shrink-0'>
              <FaEye className='text-white text-2xl sm:text-3xl md:text-4xl' />
            </div>
            
            {/* Content */}
            <div className='flex-1'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4'>
                OUR MISSION
              </h2>
              
              {/* Separator Line */}
              <div className='w-full h-px sm:h-[2px] bg-gray-800 mb-4 sm:mb-6'></div>
              
              {/* Description */}
              <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>
                To Deliver The Purest, Most Authentic Sri Lankan Spices To Kitchens Around The World, While Supporting Sustainable Farming Practices And Empowering Local Farming Communities.
              </p>
            </div>
          </div>
        </div>

        {/* OUR VISION Card */}
        <div className='bg-[#BF1D2E] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
          <div className='flex items-start gap-4 sm:gap-6'>
            {/* Icon Container */}
            <div className='bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shrink-0'>
              <FaBullseye className='text-[#BF1D2E] text-2xl sm:text-3xl md:text-4xl' />
            </div>
            
            {/* Content */}
            <div className='flex-1'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4'>
                OUR VISION
              </h2>
              
              {/* Separator Line */}
              <div className='w-full h-px sm:h-[2px] bg-white mb-4 sm:mb-6'></div>
              
              {/* Description */}
              <p className='text-sm sm:text-base md:text-lg text-white leading-relaxed'>
                To Become The World's Most Trusted Source For Premium Ceylon Spices, Known For Our Commitment To Quality, Authenticity, And Sustainable Sourcing Practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section02