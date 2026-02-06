import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'

function Section04() {
    const processSteps = [
        'DIRECT PARTNERSHIPS WITH LOCAL FARMERS',
        'TRADITIONAL PROCESSING METHODS',
        'RIGOROUS QUALITY CONTROL',
        'ECO-FRIENDLY PACKAGING'
    ]

    return (
        <div className='grid-container'>
            <div className='mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
                <h1 className='main-title uppercase encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                    From Farm to Your Kitchen
                </h1>
                <div className='mt-4'>
                    <p className='description encode-sans-medium text-gray-500 leading-none '>
                        We work directly with over 200 local farmers across Sri Lanka's renowned spice-growing regions. Each spice is handpicked at peak freshness, traditionally processed, and carefully packaged to preserve its authentic aroma and flavor.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-stretch'>
                {/* Left Section - FROM FARM TO YOUR KITCHEN */}
                <div className='flex flex-col h-full animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                    {/* Spice Images */}
                    <div className='grid grid-cols-3 gap-4 sm:gap-6 flex-1'>
                        <div className='relative col-span-2 h-[200px] sm:h-[300px] lg:h-full rounded-xl sm:rounded-2xl overflow-hidden'>
                            <video
                                src="/Videos/Section02/SectionTwo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover rounded-apple-image"
                            />
                        </div>
                        <div className='relative col-span-1 h-full rounded-xl sm:rounded-2xl overflow-hidden'>
                            <Image
                                src="/Images/Home/Section02/Middleimage.png"
                                alt="Middle Image"
                                fill
                                className="object-cover rounded-apple-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section - OUR PROCESS */}
                <div className='flex flex-col justify-start h-full animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
                    {/* Title */}
                    <h2 className='title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none mb-6 sm:mb-8'>
                        OUR PROCESS
                    </h2>

                    {/* Process Steps */}
                    <div className='space-y-4 sm:space-y-5 mt-8'>
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className='bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 flex items-start gap-4 animate-fade-in-up'
                                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                            >
                                {/* Checkmark Icon */}
                                <div className='shrink-0 mt-1'>
                                    <FaCheck className='text-[#BF1D2E] text-xl sm:text-2xl' />
                                </div>

                                {/* Step Text */}
                                <p className='description encode-sans-medium text-gray-500 leading-none '>
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section04