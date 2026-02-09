import React from 'react'
import Image from "next/image";
import WppButton from '../Button/WppButton';

function Section01() {
    return (
        <div className='grid-container'>
            <div className="hero-container relative w-full min-h-screen overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Images/Quality/BG.jpg"
                    alt="Quality & Process Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-apple-hero"
                    priority
                />

                {/* Content Container - Stacked Vertically */}
                <div className="relative z-30 flex flex-col items-center justify-between min-h-screen w-full px-4 pt-[70px] sm:pt-[90px] md:pt-[110px] lg:pt-[130px] pb-4 sm:pb-6 md:pb-8 lg:pb-10">
                    {/* Top Section - Title and Description */}
                    <div className="flex flex-col items-center w-full shrink-0">
                        {/* Title */}
                        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                            <div className="animate-fade-in-up">
                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(98.52deg, #040404 10.39%, #7A7A7A 93.32%)',
                                        animationDelay: '0.1s'
                                    }}>
                                    From Farm To
                                </h1>
                            </div>
                            <div className="mt-1 sm:mt-2 animate-fade-in-up">
                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(98.52deg, #040404 10.39%, #7A7A7A 93.32%)',
                                        animationDelay: '0.2s'
                                    }}>
                                    Your Kitchen
                                </h1>
                            </div>
                            <div className='mt-4'>
                                <WppButton />
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] animate-fade-in-up mb-8 sm:mb-10 md:mb-12 lg:mb-16"
                            style={{ animationDelay: '0.4s' }}>
                            <p className="description text-center mb-0 text-[#191919]/80">
                                We follow a rigorous manufacturing process to ensure every packet of Mr Chilli spices meets our high quality standards. Here's how we bring you the best.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section - Product Image */}
                    <div className="flex items-end justify-center w-full shrink-0 pointer-events-none mt-auto -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10">
                        <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] animate-scale-in-up opacity-90">
                            <Image
                                src="/Images/Quality/Product.png"
                                alt="Floating Spice"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section01
