import React from 'react'
import Brownbutton from '../Button/Brownbutton'
import Image from 'next/image'

function Section03() {
  return (
    <div className='grid-container'>
      <div className='grid lg:grid-cols-5 gap-4 lg:gap-6 xl:gap-7 2xl:gap-8 mt-4 items-end'>
        <div className='lg:col-span-2 pr-[10px] sm:pr-[100px] md:pr-[100px] lg:pr-[20px] xl:pr-[5px] 2xl:pr-[100px] '>
          <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
            PURE SRI LANKAN FROM THE SOURCE
          </h2>
          <div className='mt-8'>
            <p className='description encode-sans-medium text-gray-500 leading-none '>
              Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, qualit
            </p>
          </div>
          <div className='mt-4'>
            <Brownbutton />
          </div>
        </div>
        <div className='lg:col-span-1 h-full'>
          <div className='relative w-full  h-[200px] sm:h-[300px] md:h-[400px] lg:w-full lg:h-full'>
            <Image
              src="/Images/Home/Section02/Middleimage.png"
              alt="Middle Image"
              fill
              className="object-cover rounded-apple-image"
            />
          </div>
        </div>
        <div className='lg:col-span-2'>
          <h1 className='title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
            90%
          </h1>
          <div className='mt-4 bg-black w-3/6 h-[2px]'>
          </div>
          <div className='mt-4'>
            <p className='description encode-sans-medium text-gray-500 leading-none '>
              Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Section03