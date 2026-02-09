import React from 'react'
import Brownbutton from '../Button/Brownbutton'
import Image from 'next/image'

function Section02() {
    return (

        <section>
            <div className='grid-container '>
                <h1 className='uppercase main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none'>
                Why choose
                </h1>
                <div className="sm:flex items-center gap-6  lg:gap-6">
                    <h1 className="uppercase main-title encode-sans-medium leading-none bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent">
                    Mr Chilli?</h1>
                    <div className='mt-4 sm:mt-0'>
                        <Brownbutton />
                    </div>
                </div>
                <div className='grid lg:grid-cols-13 gap-4 mt-4'>
                    <div className='lg:col-span-2 flex gap-4 lg:gap-0 lg:flex-col items-start justify-between'>
                        <div className='relative w-full aspect-square '>
                            <Image
                                src="/Images/Home/Section02/Middleimage.png"
                                alt="Middle Image"
                                fill
                                className="object-cover rounded-apple-image"
                            />
                        </div>
                        <div>
                            <div className='bg-black w-full h-[2px] mb-4'>

                            </div>
                            <div>
                                <h1 className='title'>
                                    100%
                                </h1>
                            </div>
                            <div>
                                <p className='description'>
                                authentic Sri Lankan spices with bold, real flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-8 relative w-full h-[400px] sm:h-[500px] md:h-[300px] lg:h-[500px] xl:h-[500px] 2xl:h-[700px]'>
                        <div className='relative w-full h-full'>
                            <video
                                src="/Videos/Section02/SectionTwo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover rounded-apple-image"
                            />
                            <div className='absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-white/20 backdrop-blur-lg p-6 rounded-apple-card max-w-[300px] border border-white/30 shadow-lg'>
                                <h2 className='subtitle '>
                                Why “Mr Chilli”?
                                </h2>
                                <p className='description'>
                                We chose the name Mr Chilli because chilli represents bold flavor, heat, and authenticity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-3 flex flex-col justify-between'>
                        <div>
                            <ul className='space-y-2 list-disc pl-6'>
                                <li className='description'>
                                    Quality raw materials from farmers
                                </li>
                                <li className='description'>
                                    Hygienic processing
                                </li>
                                <li className='description'>
                                    Consistent taste and colour
                                </li>
                                <li className='description'>
                                    Trusted supplier to Lanka Sathosa
                                </li>
                            </ul>
                            <div className='relative w-full aspect-square mt-4'>
                            <video
                                src="/Videos/Section02/Section02secondimage.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover rounded-apple-image"
                            />
                            </div>
                        </div>
                        <div className='flex flex-col items-end justify-end mt-4 lg:mt-0'>
                            <div className='flex gap-2 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-2 group-hover:gap-2.5 sm:group-hover:gap-2.5 md:group-hover:gap-2.5 lg:group-hover:gap-3 xl:group-hover:gap-3 transition-all duration-300'>
                                <button className="bg-[#BF1D2E] backdrop-blur-sm aspect-square h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-full flex items-center justify-center outline outline-2 outline-[#BF1D2E] outline-offset-2 transition-all duration-300 group-hover:bg-[#BF1D2E]/80 group-hover:backdrop-blur-md group-hover:scale-110 group-hover:outline-[#BF1D2E]/80">
                                </button>
                                <button className="bg-[#BF1D2E] backdrop-blur-sm aspect-[3/6] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-r-full flex items-center justify-center outline outline-2 outline-[#BF1D2E]  transition-all duration-300 group-hover:bg-[#BF1D2E]/80 group-hover:backdrop-blur-md group-hover:scale-110 group-hover:outline-[#BF1D2E]/80">
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </section>


    )
}

export default Section02