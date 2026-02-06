"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Brownbutton from '../Button/Brownbutton';
import { FaWhatsapp } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import WppButton from '../Button/WppButton'

function Section03() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
    }

    return (
        <div className='grid-container'>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-2 sm:gap-4 items-end'>
                <div className='col-span-3'>
                    <h1 className='main-title encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none animate-fade-in-up' style={{ animationDelay: '0.1s' }}>
                        Let's start a conversation
                    </h1>
                </div>
                <div className='col-span-2'>
                    <h2 className='title flex items-end justify-end encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                        Contact us
                    </h2>
                    <div className='h-px bg-black/20 my-4 animate-fade-in' style={{ animationDelay: '0.3s' }}>
                    </div>
                    <p className='description encode-sans-medium text-gray-500 leading-none text-end animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-2 sm:gap-4 lg:items-stretch mt-6'>
                <div className='col-span-3 flex flex-col'>
                    <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5 md:space-y-6 bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mt-4 lg:mt-0 flex-1 animate-fade-in-up' style={{ animationDelay: '0.5s' }}>
                        {/* First Name and Last Name Row */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6'>
                            {/* First Name */}
                            <div>
                                <label htmlFor='firstName' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                    First Name
                                </label>
                                <input
                                    type='text'
                                    id='firstName'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder='John'
                                    className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base'
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor='lastName' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                    Last Name
                                </label>
                                <input
                                    type='text'
                                    id='lastName'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder='Doe'
                                    className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base'
                                />
                            </div>
                        </div>

                        {/* Email Address */}
                        <div>
                            <label htmlFor='email' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Email Address
                            </label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='John@Example.Com'
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base'
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label htmlFor='phone' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Phone Number
                            </label>
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder='012 35 87 98'
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base'
                            />
                        </div>

                        {/* Your Message */}
                        <div>
                            <label htmlFor='message' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Your Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                placeholder='Tell Us About Your Requirements'
                                rows={6}
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base resize-none'
                            />
                        </div>

                        {/* Submit Button */}
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <Brownbutton />

                            {/* Red Circular Elements */}

                        </div>
                    </form>
                </div>
                <div className='col-span-2 flex flex-col gap-6 sm:gap-8 lg:mt-0'>
                    <div className='rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mt-6 sm:mt-8 lg:mt-0 text-center relative overflow-hidden flex-1 flex flex-col justify-center animate-fade-in-up' style={{ animationDelay: '0.6s' }}>
                        {/* Background Image */}
                        <div className='absolute inset-0 z-0'>
                            <Image
                                src="/Images/Contactus/Wppbg.png"
                                alt="WhatsApp Background"
                                fill
                                className="object-cover rounded-xl sm:rounded-2xl"
                            />
                        </div>

                        <div className='relative z-10 flex-1 flex flex-col justify-center'>
                            {/* WhatsApp Icon */}
                            <div className='flex justify-center mb-4 sm:mb-6'>
                                <div className='bg-[#25D366] rounded-full p-4 sm:p-5 md:p-6'>
                                    <FaWhatsapp className='text-white text-4xl sm:text-5xl md:text-6xl' />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-black uppercase mb-3 sm:mb-4'>
                                CHAT ON WHATSAPP
                            </h3>

                            {/* Separator Line */}
                            <div className='flex items-center justify-center mb-4 sm:mb-6'>

                                <div className='w-full h-px bg-black mx-2'></div>

                            </div>

                            {/* Instructional Text */}
                            <p className='text-sm sm:text-base text-gray-800 mb-6 sm:mb-8'>
                                For quick inquiries, reach us directly on WhatsApp.
                            </p>

                            {/* Start Chat Button */}
                            <div className='flex justify-center'>
                                <WppButton/>
                            </div>
                        </div>
                    </div>

                    {/* Immediate Assistance Section */}
                    <div className='bg-[#BF1D2E] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 mt-6 sm:mt-8 lg:mt-0 animate-fade-in-up' style={{ animationDelay: '0.7s' }}>
                        {/* Title */}
                        <h3 className='text-xl sm:text-xl md:text-xl lg:text-[18px] xl:text-2xl font-bold text-white uppercase mb-3 sm:mb-4'>
                            NEED IMMEDIATE ASSISTANCE?
                        </h3>

                        {/* Separator Line */}
                        <div className='w-full h-px bg-white mb-4 sm:mb-6'></div>

                        {/* Instructional Text */}
                        <p className='text-sm sm:text-base text-white mb-4 sm:mb-6'>
                            Call us during business hours for urgent inquiries.
                        </p>

                        {/* Phone Number */}
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <FaPhone className='text-white text-xl sm:text-2xl md:text-3xl shrink-0' />
                            <a
                                href='tel:+94112334567'
                                className='text-xl sm:text-xl md:text-2xl font-bold text-white hover:opacity-80 transition-opacity'
                            >
                                0112 334 567
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section03