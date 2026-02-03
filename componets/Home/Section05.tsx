import React from 'react'
import Image from 'next/image'
function Section05() {
    return (
        <div className='grid-container'>
            <div className='grid lg:grid-cols-2 gap-4 items-stretch'>
                <div className='flex flex-col mb-4 lg:mb-8'>
                    <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                        PURE SRI LANKAN FROM THE SOURC
                    </h2>
                    <div className='bg-black w-3/6 h-[2px] mt-4 mb-4'></div>
                    <p className='description encode-sans-medium text-gray-500 leading-none '>
                    Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.
                    </p>
                </div>
                <div className='h-[200px] lg:h-full'>
                    <div className='grid grid-cols-5 gap-4 h-full'>
                        <div className='col-span-3 h-full'>
                            <div className='relative w-full h-full'>
                                <Image
                                    src="/Images/Home/Section02/Middleimage.png"
                                    alt="Middle Image"
                                    fill
                                    className="object-cover rounded-apple-image"
                                />
                            </div>
                        </div>
                        <div className='col-span-2 h-full'>
                            <div className='relative w-full h-full'>
                                <Image
                                    src="/Images/Home/Section02/Middleimage.png"
                                    alt="Middle Image"
                                    fill
                                    className="object-cover rounded-apple-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section05