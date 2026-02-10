import React from 'react'
import Brownbutton from '../Button/Brownbutton'

function Section07() {
    return (
        <div className='grid-container'>
            <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none lg:max-w-3/5'>
                PURE SRI LANKAN FROM THE SOURCE
            </h2>
            <div className='grid lg:grid-cols-5 gap-4 items-stretch mt-8'>
                <div className='col-span-3 lg:mr-[50px]'>
                    <p className='description encode-sans-medium text-gray-500 leading-none '>
                        Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.
                    </p>
                    <div className='my-8 lg:mt-4 flex lg:justify-end'>
                        <Brownbutton />
                    </div>
                </div>
                <div className='col-span-2'>
                <h2 className='title  encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none '>
                From Sri Lanka to the World.
            </h2>
            <div className='mt-8'>
            <p className='description encode-sans-medium text-gray-500 leading-none '>
                        Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.Harvested from fertile lands and carefully processed to preserve authenticity, our spices bring tradition, quality, and excellence to every kitchen.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section07