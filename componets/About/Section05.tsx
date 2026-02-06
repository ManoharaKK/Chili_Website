import React from 'react'

function Section05() {
    return (
        <div className='grid-container'>
            <h1 className='uppercase main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
                Excellence in Every Batch
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8 lg:gap-4 xl:gap-8 items-end'>
                <div className='col-span-2 animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                <div className='w-full h-px bg-black mb-4 mt-4 sm:mt-6 md:mt-6 sm:mb-6'></div>
                    <h2 className='title uppercase encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                        Quality Assurance
                    </h2>
                    <div className='mt-10'>
                        <p className='description encode-sans-medium text-gray-500 leading-none '>
                            Our state-of-the-art processing facility combines traditional methods with modern technology. Every batch undergoes strict quality testing to ensure you receive only the finest spices.
                        </p>
                    </div>
                </div>
                <div className='col-span-3 animate-scale-in' style={{ animationDelay: '0.3s' }}>
                    <div className='relative col-span-2 h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-xl sm:rounded-2xl overflow-hidden'>
                        <video
                            src="/Videos/Section02/SectionTwo.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover rounded-apple-image"
                        />
                    </div>
                </div>
                <div className='col-span-2 animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='w-full p-4 bg-[#BF1D2E] rounded-xl sm:rounded-2xl animate-fade-in-up' style={{ animationDelay: '0.5s' }}>
                            <h2 className='title uppercase encode-sans-medium text-white leading-none'>
                                50+
                            </h2>
                            <p className='description encode-sans-medium text-white leading-none'>
                            Countries Served
                            </p>
                        </div>
                        <div className='w-full p-4 rounded-xl sm:rounded-2xl animate-fade-in-up' style={{ animationDelay: '0.6s' }}>
                            <h2 className='title uppercase encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none '>
                                50+
                            </h2>
                            <p className='description encode-sans-medium text-gray-500 leading-none '>
                            Countries Served
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section05