import React from 'react'
import Image from 'next/image'

function Section04() {
  const benefits = [
    'Growing company with expansion opportunities',
    'Competitive salary and benefits',
    'Friendly and supportive work environment',
    'Training and development opportunities',
    'Be part of a trusted local brand'
  ]

  return (
    <div className='grid-container'>
    <div className='relative w-full overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[40px]'>
      <div className='relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center'>
        {/* Full Background Image */}
        <div className='absolute inset-0 w-full h-full'>
          <div className='relative w-full h-full'>
            <Image
              src="/Images/Career/Career.png"
              alt="Team Collaboration"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.7) saturate(1.2)' }}
            />
            {/* Red overlay for tint effect */}
            <div className='absolute inset-0 bg-[#BF1D2E]/40'></div>
          </div>
        </div>

        {/* Text Overlay on Left Side */}
        <div className='relative z-10 w-full sm:w-3/5 md:w-3/5 lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20'>
          <div className='bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 uppercase'>
              WHY WORK WITH MR CHILLI?
            </h2>
            
            <ul className='space-y-4 sm:space-y-5'>
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 sm:gap-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'
                >
                  <span className='text-[#BF1D2E] text-xl sm:text-2xl font-bold mt-0.5 shrink-0'>•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Section04