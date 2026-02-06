"use client";
import React, { useState, useEffect } from 'react'
import { FaCheck } from 'react-icons/fa6'
import Image from 'next/image'

function Card() {
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(5)

    useEffect(() => {
        const updateCardsPerPage = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth >= 1280) {
                    // xl: 4 columns - 8 cards per page
                    setCardsPerPage(8)
                } else if (window.innerWidth >= 1024) {
                    // lg: 3 columns - 6 cards per page
                    setCardsPerPage(6)
                } else {
                    // Mobile: 1 column - 5 cards per page
                    setCardsPerPage(5)
                }
            }
        }

        updateCardsPerPage()
        window.addEventListener('resize', updateCardsPerPage)
        return () => window.removeEventListener('resize', updateCardsPerPage)
    }, [])

    // Reset to page 1 when cardsPerPage changes
    useEffect(() => {
        setCurrentPage(1)
    }, [cardsPerPage])

    const products = [
        {
            id: 1,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 2,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]   
        },
        {
            id: 3,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 4,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 5,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 6,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 7,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },
        {
            id: 8,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
                "1kg"
            ]
        },      
        {
            id: 9,
            name: "CEYLON CINNAMON",
            image: "/Images/Products/Product01.png",
            description: "CEYLON CINNAMON is a spice that is used to add flavor to food. It is made from the bark of the cinnamon tree.",
            condition: [
                "100% Pure Ceylon Cinnamon",
                "Handpicked from the best cinnamon trees",
                "100% Natural"
            ],
            packagesize: [
                "10g",
                "20g",
                "50g",
                "100g",
                "200g",
                "500g",
            ]
        }
    ]

   
    const totalPages = Math.ceil(products.length / cardsPerPage)
    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    const currentProducts = products.slice(startIndex, endIndex)

    const goToPage = (page: number) => {
        setCurrentPage(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const goToPrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const goToNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

  return (
    <div className='grid-container'>
        <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch'>
            {currentProducts.map((product) => (
                <div key={product.id} className='col-span-1 shadow-md transition-shadow duration-300 bg-gray-100 rounded-apple-card'>
                    <div className='bg-white rounded-apple-card p-6 lg:p-8 h-full flex flex-col relative'>
                        <div className='relative w-full h-[300px] md:h-[300px] lg:h-[200px] rounded-xl sm:rounded-2xl overflow-hidden mb-4'>
                            <Image 
                                src={product.image} 
                                alt={product.name} 
                                fill 
                                className='object-cover rounded-xl sm:rounded-2xl' 
                            />
                        </div>
                        <h3 className='text-lg sm:text-xl font-medium text-gray-800 uppercase tracking-tight '>
                            {product.name}
                        </h3>
                        <div className='h-[2px] bg-[#BF1D2E] mb-4 w-1/4'></div>
                        <p className='description encode-sans-medium text-gray-500 leading-none'>
                            {product.description}
                        </p>
                        <div className='flex flex-col gap-2 ml-4 mt-4'>
                            {product.condition.map((condition) => (
                                <div key={condition} className='flex items-center gap-2'>
                                    <FaCheck className='text-[#BF1D2E]' />
                                    <p className='text-sm encode-sans-medium text-gray-500 leading-none'>
                                        {condition}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className='h-[2px] bg-[#BF1D2E] mb-4 w-full my-4'></div>
                        <h2>
                            Available Package Sizes
                        </h2>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {product.packagesize.map((packagesize) => (
                                <div key={packagesize} className='flex items-center gap-2 bg-gray-100 p-2 rounded-apple-card'>
                                    {packagesize}
                                </div>
                            ))}
                        </div>
                        <button className='bg-[#BF1D2E] text-white px-4 py-2 rounded-apple-button w-full mt-4'>
                            Request Quote
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-12'>
                {/* Previous Button */}
                <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        currentPage === 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#BF1D2E] text-white hover:bg-[#BF1D2E]/90'
                    }`}
                >
                    Previous
                </button>

                {/* Page Numbers */}
                <div className='flex items-center gap-2'>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-10 h-10 rounded-lg font-medium transition-colors duration-200 ${
                                currentPage === page
                                    ? 'bg-[#BF1D2E] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                        currentPage === totalPages
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            : 'bg-[#BF1D2E] text-white hover:bg-[#BF1D2E]/90'
                    }`}
                >
                    Next
                </button>
            </div>
        )}
    </div>
  )
}

export default Card