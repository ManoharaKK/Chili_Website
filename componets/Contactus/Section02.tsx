import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { FaEnvelope } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa6'

function Section02() {
  const contactCards = [
    {
      icon: FaLocationDot,
      title: 'VISIT US',
      details: [
        '23 Spice Avenue',
        'Colombo 03, Sri Lanka'
      ]
    },
    {
      icon: FaPhone,
      title: 'CALL US',
      details: [
        '+94 77 123 4567',
        '+94 11 234 5678'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'EMAIL US',
      details: [
        'hello@mrchilli.lk',
        'orders@mrchilli.lk'
      ]
    },
    {
      icon: FaClock,
      title: 'BUSINESS HOURS',
      details: [
        'Mon - Fri: 9:00 AM - 6:00 PM',
        'Sat: 9:00 AM - 1:00 PM'
      ]
    }
  ]

  return (
    <div className=''>
      <div className='grid-container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4'>
          {contactCards.map((card, index) => {
            const IconComponent = card.icon
            return (
              <div
                key={index}
                className='bg-gray-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 text-center animate-fade-in-up'
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Icon Container */}
                <div className='mb-4 sm:mb-6 flex justify-center'>
                  <div className='bg-[#BF1D2E]/10 rounded-xl sm:rounded-2xl p-4 sm:p-5'>
                    <IconComponent className='text-[#BF1D2E] text-2xl sm:text-3xl md:text-4xl' />
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4'>
                  {card.title}
                </h3>

                {/* Separator Line */}
                <div className='w-full h-px bg-black/20 mb-4 sm:mb-6'></div>

                {/* Details */}
                <div className='space-y-2'>
                  {card.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className='text-sm sm:text-base text-gray-800 leading-relaxed'
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Section02