"use client";
import React, { useState } from 'react'
import { FaChartLine } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa6'
import { FaHandHolding } from 'react-icons/fa6'
import { FaLocationDot } from 'react-icons/fa6'

function Section02() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        businessBackground: '',
        cv: null as File | null
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({
                ...formData,
                cv: e.target.files[0]
            })
        }
    }

    const features = [
        {
            icon: FaChartLine,
            title: 'GROWING SPICE BRAND',
            description: 'Every batch of raw materials is tested for quality, purity, and contamination before processing.'
        },
        {
            icon: FaUsers,
            title: 'REPEAT MARKET DEMAND',
            description: 'Multiple quality checkpoints during manufacturing ensure consistent product quality.'
        },
        {
            icon: FaHandHolding,
            title: 'MANUFACTURER SUPPORT',
            description: 'Finished products undergo rigorous testing for colour, taste, moisture, and packaging integrity.'
        },
        {
            icon: FaLocationDot,
            title: 'AREA-WISE DISTRIBUTION',
            description: 'Complete traceability from raw material source to finished product for quality assurance.'
        }
    ]

    return (
        <div className='grid-container' >
             <h1 className='main-title uppercase encode-sans-medium bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent leading-none text-center'>
             Become a Mr Chilli Distributor
                </h1>
                <div className='mt-4 mb-10'>
                    <p className='description encode-sans-medium text-gray-500 leading-none text-center'>
                    Partner with us and grow your business distributing premium spice products in your area.
                    </p>
                </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
                <div className='space-y-4 sm:space-y-6'>
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div
                                key={index}
                                className='bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up'
                                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                            >
                                <div className='flex items-start gap-4 sm:gap-6'>
                                    {/* Icon Container - Red square with white outline */}
                                    <div className='bg-[#BF1D2E] rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 border-white shrink-0'>
                                        <IconComponent className='text-white text-2xl sm:text-3xl md:text-4xl' />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className='flex-1'>
                                        <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-black mb-3 sm:mb-4'>
                                            {feature.title}
                                        </h3>
                                        <p className='text-sm sm:text-base text-gray-700 leading-relaxed'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='animate-fade-in-up' style={{ animationDelay: '0.5s' }}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        // Handle form submission here
                        console.log('Form submitted:', formData)
                    }} className='bg-gray-100 rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-5 md:space-y-6'>
                        {/* Form Title */}
                        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-8'>
                            APPLY TO BECOME A DISTRIBUTOR
                        </h2>

                        {/* Full Name */}
                        <div>
                            <label htmlFor='fullName' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Full Name<span className='text-[#BF1D2E]'>*</span>
                            </label>
                            <input
                                type='text'
                                id='fullName'
                                name='fullName'
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder='John'
                                required
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base'
                            />
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

                        {/* Business Background */}
                        <div>
                            <label htmlFor='businessBackground' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Business Background<span className='text-[#BF1D2E]'>*</span>
                            </label>
                            <textarea
                                id='businessBackground'
                                name='businessBackground'
                                value={formData.businessBackground}
                                onChange={handleChange}
                                placeholder='Tell Us About Your Requirements'
                                rows={6}
                                required
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base resize-none'
                            />
                        </div>

                        {/* Send Your CV */}
                        <div>
                            <label htmlFor='cv' className='block text-sm sm:text-base font-medium text-gray-800 mb-2'>
                                Send Your CV
                            </label>
                            <input
                                type='file'
                                id='cv'
                                name='cv'
                                onChange={handleFileChange}
                                accept='.pdf,.doc,.docx'
                                className='w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#BF1D2E] rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BF1D2E] focus:border-transparent text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-[#BF1D2E] file:text-white hover:file:bg-[#BF1D2E]/80'
                            />
                        </div>

                        {/* Submit Button with Decorative Circles */}
                        <div className='flex items-center gap-3 sm:gap-4'>
                            <button
                                type='submit'
                                className='bg-[#BF1D2E] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-[#BF1D2E]/80 transition-colors duration-300'
                            >
                                Submit Application
                            </button>
                            
                            {/* Decorative Red Circles */}
                            <div className='flex items-center gap-1'>
                                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#BF1D2E] rounded-full'></div>
                                <div className='w-5 h-10 sm:w-6 sm:h-12 bg-[#BF1D2E] rounded-r-full'></div>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>

    )
}

export default Section02