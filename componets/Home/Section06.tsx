import React from 'react'
import Image from 'next/image'
function Section06() {
  return (
    <div className='grid-container'>
        <div className='grid lg:grid-cols-3 gap-4 items-stretch'>
            <div className='col-span-1'>
            <div className='relative h-[400px] lg:h-full'>
                            <Image
                                src="/Images/Home/Section06/Section06.png"
                                alt="Middle Image"
                                fill
                                className="object-cover rounded-apple-image"
                            />
                        </div>
            </div>
            <div className='col-span-1'>
                <div className='bg-white rounded-apple-card p-6 lg:p-8 h-full flex flex-col relative'>
                    {/* Number 01 */}
                    <div className='mb-4 top-6 right-6 lg:top-8 lg:right-8'>
                        <span className='text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 encode-sans-regular'>01</span>
                    </div>
                    
                    {/* Content */}
                    <div className='mt-auto'>
                        <h2 className='subtitle encode-sans-medium text-gray-800 leading-none mb-4'>
                            SRI LANKAN FROM THE SOURC
                        </h2>
                        <div className='bg-gray-800 w-3/6 h-[2px] mt-4 mb-4'></div>
                        <p className='description encode-sans-medium text-gray-500 leading-none'>
                            Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, qualit
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1'>
                <div className='bg-[#BF1D2E] rounded-apple-card p-6 lg:p-8 h-full flex flex-col relative'>                    {/* Number 02 */}
                    <div className='mb-4 top-6 right-6 lg:top-8 lg:right-8'>
                        <span className='text-6xl lg:text-7xl xl:text-8xl font-bold text-white encode-sans-regular'>02</span>
                    </div>
                    
                    {/* Content */}
                    <div className='mt-auto'>
                        <h2 className='subtitle encode-sans-medium text-white leading-none '>
                            SRI LANKAN FROM THE SOURC
                        </h2>
                        <div className='mt-4'>
                        <p className='description encode-sans-medium text-white/90 leading-none'>
                            Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.Harvested from
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section06