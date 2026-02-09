import React from 'react'
import Image from "next/image";
import Brownbutton from "../Button/Brownbutton";
import Contact from '../Button/Contact';

function Section01() {
  return (
    <div className="grid-container ">
      <div className="hero-container relative w-full h-screen overflow-hidden">
        <Image
          src="/Images/Home/HeroBackground.jpg"      // Local image in public folder
          alt="Hero Image"
          fill                        // makes image cover the parent
          style={{ objectFit: "cover" }}
          className="rounded-apple-hero"
          priority                    // loads fast for hero images
        />
        <div className="absolute inset-0 px-1 sm:px-5 md:px-10 mt-[50px] md:mt-[100px] items-center justify-center">
          <div className="grid md:grid-cols-3 gap-[20px] md:gap-0 items-end">

            <div className="md:col-span-2 mt-10 ">
              <div className="ml-[10px] md:ml-[50px] lg:ml-[100px]">
                <h1 className="uppercase text-[38px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none ml-[100px] animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent" style={{ animationDelay: '0.2s' }}>
                  Premium </h1>
              </div>

              <div className="sm:flex  items-center gap-2 lg:gap-6">
                <h1 className="uppercase text-[38px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>
                  Spices</h1>
                <div className="z-10 animate-fade-in ml-[20px] sm:ml-0 my-2 sm:my-0" style={{ animationDelay: '0.3s' }}>
                  <Brownbutton />
                </div>
              </div>

              <h1 className="uppercase text-[38px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
                Manufacturer </h1>
              <div className="ml-[10px] md:ml-[50px] lg:ml-[100px]">
                <h1 className="uppercase text-[38px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
                  Sri Lanka</h1>
              </div>
              <div className="relative z-50 animate-fade-in ml-[20px] sm:ml-0 my-4" style={{ animationDelay: '0.3s' }}>
                <Contact />
              </div>
            </div>


            <div className="relative z-50 md:col-span-1  items-end justify-end">
              <div className="flex flex-col items-end">
                <div className="bg-[#BF1D2E] w-[200px] h-[6px]  mb-2 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
                </div>
                <h2 className="subtitle text-end animate-slide-in-right" style={{ animationDelay: '0.5s' }}>
                  SRI LANKAN SPICES
                </h2>
                <h1 className="description md:max-w-full text-end animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
                  GMP Certified | Supplying Lanka Sathosa | ISO 22000 Certified Factory – Coming Soon
                </h1>
              </div>
            </div>
          </div>

          <div className="relative w-full h-full mt-[-250px] sm:mt-[-250px] md:mt-[-200px] lg:mt-[-200px] xl:mt-[-230px] 2xl:mt-[-280px] animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Image
              src="/Images/Home/SPICES.svg"
              alt="Illustration"
              fill
              className="object-contain"
            />
          </div>

        </div>
        <div className="absolute inset-1 ">
          <div className="relative w-full h-[550px]  sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[800px] 2xl:h-[900px] mt-[250px] sm:mt-[150px] md:mt-[200px] lg:mt-[150px] xl:mt-[100px] 2xl:mt-[150px] animate-scale-in" style={{ animationDelay: '0s' }}>
            <Image
              src="/Images/Home/Cartoonlogo.svg"
              alt="Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
// ll
export default Section01