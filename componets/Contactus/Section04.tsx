import React from 'react'

function Section04() {
  return (
    <div className=''>
      <div className='grid-container'>
        {/* Title Section */}
        <div className='mb-8 sm:mb-10 md:mb-12'>
          <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none mb-4 sm:mb-6'>
            FIND US
          </h1>
          
          <p className='description encode-sans-medium text-gray-500 leading-relaxed'>
            23 Spice Avenue, Onegalle Face, Colombo 03, Sri Lanka
          </p>
        </div>

        {/* Map Container */}
        <div className='w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.923123456789!2d79.8500!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MScwMC4wIkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mr Chilli Location - Onegalle Face, Colombo"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Section04