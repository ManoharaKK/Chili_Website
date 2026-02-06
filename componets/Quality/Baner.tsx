import React from 'react'

function Baner() {
    return (
        <section className="py-20">
            <div className='grid-container'>
                <div className="w-full bg-[#BF1D2E] rounded-[40px] sm:rounded-[60px] md:rounded-[80px] lg:rounded-[100px] overflow-hidden relative py-16 sm:py-24 md:py-32 px-6 sm:px-12 text-center flex flex-col items-center">

                    {/* Header Badge */}
                    <div className="mb-8">
                        <span className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full text-white text-xs sm:text-sm font-medium border border-white/30 uppercase tracking-widest">
                            Our Commitment
                        </span>
                    </div>

                    {/* Main Title */}
                    <h2 className="text-transparent bg-clip-text text-[28px] sm:text-[36px] md:text-[48px] leading-[101%] mb-8 uppercase tracking-normal w-full text-center whitespace-nowrap"
                        style={{
                            backgroundImage: 'linear-gradient(98.52deg, #FFFFFF 10.39%, #D7D7D7 93.32%)',
                            fontWeight: 400
                        }}>
                        QUALITY AT EVERY STEP
                    </h2>

                    {/* Description */}
                    <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-[800px] mb-12">
                        Our GMP Certified Facility Ensures Hygienic Processing And Consistent Quality.
                        We Are Currently In The Process Of Obtaining ISO 22000 Certification
                        To Further Strengthen Our Quality Management Systems.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

                        <div className='flex gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 group transition-all duration-300 cursor-pointer'>
                            <div>
                                <button className="bg-white text-[#BF1D2E] outline outline-2 outline-white outline-offset-2 h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] px-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-full text-xs sm:text-xs md:text-sm lg:text-base xl:text-base font-bold flex items-center justify-center transition-all duration-300 group-hover:bg-white/90 group-hover:scale-105">
                                    View Certifications
                                </button>
                            </div>

                            <div className='flex gap-2 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-2 transition-all duration-300'>
                                <button className="bg-white aspect-square h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-full flex items-center justify-center outline outline-2 outline-white outline-offset-2 transition-all duration-300 group-hover:bg-white/90 group-hover:scale-110">
                                </button>
                                <button className="bg-white aspect-[3/6] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-r-full flex items-center justify-center outline outline-2 outline-white transition-all duration-300 group-hover:bg-white/90 group-hover:scale-110">
                                </button>
                            </div>
                        </div>

                        {/* Contact Quality Team Button */}
                        <button className="border-2 border-white text-white px-8 py-4 rounded-full text-sm sm:text-base hover:bg-white hover:text-[#BF1D2E] transition-all h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] flex items-center"
                            style={{ fontWeight: 400 }}>
                            Contact Quality Team
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Baner
