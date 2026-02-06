import React from 'react'
import Image from "next/image";

function Section01() {
    return (
        <div className='grid-container'>
            <div className="hero-container relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/Images/Quality/heroim.jpeg"
                    alt="Certification Hero"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-apple-hero"
                    priority
                />

                {/* Floating Certification Image */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] animate-fade-in-up opacity-95 translate-y-[100px]">
                        <Image
                            src="/Images/Cetification/ceti.png"
                            alt="Floating Certification"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="absolute inset-x-0 top-0 pt-[70px] sm:pt-[90px] md:pt-[110px] lg:pt-[130px] z-30 flex justify-center">
                    <div className="flex flex-col items-center w-full px-4 text-center">
                        {/* Title */}
                        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                            <div className="animate-fade-in-up">
                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[100px] encode-sans-medium leading-[1.1] bg-clip-text text-transparent"
                                    style={{
                                        backgroundImage: 'linear-gradient(98.52deg, #040404 10.39%, #7A7A7A 93.32%)',
                                        animationDelay: '0.1s'
                                    }}>
                                    Quality You Can<br />Trust
                                </h1>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}>
                            <p className="description text-center mb-0 text-[#191919]/80">
                                Our commitment to excellence is backed by global certifications and rigorous standards, ensuring every product represents the highest quality in Sri Lankan spices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section01
