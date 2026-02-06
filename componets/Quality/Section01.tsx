import React from 'react'
import Image from "next/image";

function Section01() {
    return (
        <div className='grid-container'>
            <div className="hero-container relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Images/Quality/heroim.jpeg"
                    alt="Quality & Process Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-apple-hero"
                    priority
                />

                {/* Floating Spice Image */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] animate-fade-in-up opacity-90 translate-y-[100px]">
                        <Image
                            src="/Images/Quality/spice.png"
                            alt="Floating Spice"

                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="absolute inset-x-0 top-0 pt-[70px] sm:pt-[90px] md:pt-[110px] lg:pt-[130px] z-30 flex justify-center">
                    <div className="flex flex-col items-center w-full px-4">
                        {/* Title */}
                        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">

                            <div className="translate-x-[-15%] sm:translate-x-[-25%] md:translate-x-[-35%] lg:translate-x-[-40%] animate-fade-in-up">
                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(98.52deg, #040404 10.39%, #7A7A7A 93.32%)',
                                        animationDelay: '0.1s'
                                    }}>
                                    From Farm To
                                </h1>
                            </div>
                            <div className="translate-x-[8%] sm:translate-x-[15%] md:translate-x-[20%] lg:translate-x-[25%] mt-1 sm:mt-2 animate-fade-in-up">
                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(98.52deg, #040404 10.39%, #7A7A7A 93.32%)',
                                        animationDelay: '0.2s'
                                    }}>
                                    Your Kitchen
                                </h1>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}>
                            <p className="description text-center mb-0 text-[#191919]/80">
                                We follow a rigorous manufacturing process to ensure every packet of Mr Chilli spices meets our high quality standards. Here's how we bring you the best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section01
