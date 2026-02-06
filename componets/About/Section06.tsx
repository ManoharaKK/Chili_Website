import React from 'react'

function Section06() {
  const milestones = [
    {
      year: '2010',
      description: 'Founded in Colombo, Sri Lanka'
    },
    {
      year: '2013',
      description: 'Started exporting to Europe'
    },
    {
      year: '2016',
      description: 'Achieved organic certification'
    },
    {
      year: '2019',
      description: 'Expanded to 50+ countries'
    },
    {
      year: '2022',
      description: 'Launched premium gift collections'
    },
    {
      year: '2024',
      description: '1 Million customers worldwide'
    }
  ]

  return (
    <div className='py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='grid-container'>
        {/* Title Section */}
        <div className='mb-12 sm:mb-16 md:mb-20 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
          <h1 className='uppercase main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
            Our Journey
          </h1>
          <div className='mt-4 sm:mt-6'>
            <h2 className='title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
              Milestones
            </h2>
          </div>
        </div>

        {/* Alternating Timeline Design */}
        <div className='relative max-w-6xl mx-auto'>
          {/* Central Vertical Line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BF1D2E] via-[#BF1D2E]/50 to-[#BF1D2E] transform -translate-x-1/2 animate-fade-in' style={{ animationDelay: '0.2s' }}></div>

          {/* Timeline Items */}
          <div className='space-y-12 sm:space-y-16 md:space-y-20'>
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 group animate-fade-in-up ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Timeline Node */}
                  <div className='relative shrink-0 z-10'>
                    <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#BF1D2E] flex items-center justify-center shadow-xl group-hover:scale-125 transition-all duration-300 border-4 border-white'>
                      <div className='w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full bg-white'></div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 w-full md:w-[45%] ${
                      isEven ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#BF1D2E]/50 group-hover:-translate-y-1'>
                      {/* Year */}
                      <div className='mb-4'>
                        <span className='inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#BF1D2E]'>
                          {milestone.year}
                        </span>
                      </div>

                      {/* Description */}
                      <div className='w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4'></div>
                      <p className='description encode-sans-medium text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl'>
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className='hidden md:block w-[45%]'></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section06