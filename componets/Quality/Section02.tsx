import React from 'react'
import Image from 'next/image'

function Section02() {
    const sourcingFeatures = [
        'DIRECT PARTNERSHIPS WITH LOCAL FARMERS',
        'TRADITIONAL PROCESSING METHODS',
        'RIGOROUS QUALITY CONTROL',
        'ECO-FRIENDLY PACKAGING'
    ]

    return (
        
            <div className='grid-container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>


                    <div className='flex flex-col animate-fade-in-up' style={{ animationDelay: '0.1s' }}>

                        <div className="flex items-center gap-4 mb-6">

                            <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-[#BF1D2E1A] rounded-[15px] flex items-center justify-center border border-[#BF1D2E33]">
                                <div className="relative w-[30px] h-[30px] sm:w-[35px] sm:h-[35px]">
                                    <Image
                                        src="/Images/Quality/In Transit.png"
                                        alt="In Transit Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] bg-[#BF1D2E] rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-white text-xl sm:text-2xl font-bold encode-sans-bold">01</span>
                            </div>
                        </div>

                        {/* Title Section */}
                        <div className="mb-6">
                            <h2 className="text-[#191919] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[40px] xl:text-[48px] encode-sans-medium leading-tight uppercase tracking-tight">
                                Raw Material Sourcing
                            </h2>
                            <div className="w-full h-[1px] bg-[#E5E5E5] mt-4"></div>
                        </div>

                        {/* Description */}
                        <div className="mb-10">
                            <p className="description text-gray-500 leading-relaxed max-w-none">
                                We Source Premium Quality Raw Materials Directly From Trusted Farmers Across Sri Lanka. Our Procurement Team Ensures Only The Best Chillies, Spices, And Ingredients Are Selected.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col gap-4">
                            {sourcingFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 bg-[#F8F8F8] p-4 sm:p-5 rounded-[20px] transition-all hover:bg-[#F0F0F0]"
                                >
                                    <div className="shrink-0 w-6 h-6 relative">
                                        <Image
                                            src="/Images/Quality/Checkmark.png"
                                            alt="Checkmark"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="text-[#191919] text-sm sm:text-base encode-sans-medium tracking-tight">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className='w-full h-full animate-fade-in-up' style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-full min-h-[500px] bg-gray-100 rounded-apple-image overflow-hidden">
                            <Image
                                src="/Images/Quality/sec2.png"
                                alt="Raw Material Sourcing"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        
    )
}

export default Section02
