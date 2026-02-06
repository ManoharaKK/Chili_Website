import React from 'react'
import { FaIndustry } from 'react-icons/fa6'
import { FaClipboardCheck } from 'react-icons/fa6'
import { FaHandshake } from 'react-icons/fa6'
import { FaWarehouse } from 'react-icons/fa6'

function Section03() {
  const jobOpenings = [
    {
      title: 'PRODUCTION STAFF',
      description: 'Every batch of raw materials is tested for quality, purity, and contamination before processing.',
      type: 'Full-time',
      icon: FaIndustry
    },
    {
      title: 'QUALITY CONTROL EXECUTIVE',
      description: 'Every batch of raw materials is tested for quality, purity, and contamination before processing.',
      type: 'Full-time',
      icon: FaClipboardCheck
    },
    {
      title: 'SALES REPRESENTATIVES',
      description: 'Every batch of raw materials is tested for quality, purity, and contamination before processing.',
      type: 'Full-time',
      icon: FaHandshake
    },
    {
      title: 'WAREHOUSE MANAGER',
      description: 'Every batch of raw materials is tested for quality, purity, and contamination before processing.',
      type: 'Full-time',
      icon: FaWarehouse
    }
  ]

  return (
    <div className='bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24'>
      <div className='grid-container'>
        {/* Header Section */}
        <div className='text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
          <h1 className='main-title uppercase encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none mb-4 sm:mb-6'>
            JOIN OUR TEAM
          </h1>
          <p className='text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed'>
            We're Looking For Talented Individuals To Join Our Growing Team. Check Out Our Current Openings Below.
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
          {jobOpenings.map((job, index) => {
            const IconComponent = job.icon
            return (
              <div
                key={index}
                className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up relative'
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Top Section with Icon and Tag */}
                <div className='flex items-start justify-between mb-4 sm:mb-6'>
                  {/* Icon Container - Light red/pink square with icon */}
                  <div className='bg-[#BF1D2E]/20 rounded-xl sm:rounded-2xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shrink-0'>
                    <div className='bg-[#BF1D2E] rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center'>
                      <IconComponent className='text-white text-xl sm:text-2xl md:text-3xl' />
                    </div>
                  </div>

                  {/* Full-time Tag */}
                  <div className='bg-[#BF1D2E]/20 text-[#BF1D2E] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold uppercase'>
                    {job.type}
                  </div>
                </div>

                {/* Job Title */}
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4'>
                  {job.title}
                </h3>

                {/* Job Description */}
                <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                  {job.description}
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