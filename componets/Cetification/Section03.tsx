import React from 'react'

function Section03() {
    const qualityMeasures = [
        {
            number: "01",
            title: "RAW MATERIAL TESTING",
            description: "Every batch of raw materials is tested for quality, purity, and contamination before processing."
        },
        {
            number: "02",
            title: "IN-PROCESS QUALITY CHECKS",
            description: "Multiple quality checkpoints during manufacturing ensure consistent product quality."
        },
        {
            number: "03",
            title: "FINAL PRODUCT TESTING",
            description: "Finished products undergo rigorous testing for colour, taste, moisture, and packaging integrity."
        },
        {
            number: "04",
            title: "BATCH TRACEABILITY",
            description: "Complete traceability from raw material source to finished product for quality assurance."
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 lg:py-32" style={{ background: 'rgba(217, 217, 217, 0.39)' }}>
            <div className="w-full px-4 sm:px-6 lg:px-12">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    {/* Badge */}
                    <div className="bg-[#BF1D2E] text-white px-4 py-1.5 rounded-full text-[10px] sm:text-[12px] uppercase font-bold mb-6 sm:mb-8 md:mb-10">
                        Our Commitment
                    </div>

                    {/* Title */}
                    <h2 className="main-title uppercase tracking-tighter mb-6 leading-tight text-[#191919]"
                        style={{
                            fontWeight: 400,
                            fontSize: '48px',
                            background: 'linear-gradient(98.52deg, #0C0C0C 10.39%, #7A7A7A 93.32%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                        OUR QUALITY PROMISE
                    </h2>

                    {/* Description */}
                    <p className="description max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg"
                        style={{ fontWeight: 600, color: 'rgba(122, 122, 122, 1)' }}>
                        Beyond Certifications, We Implement Rigorous Quality Control Measures At Every Stage Of Production.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {qualityMeasures.map((measure, index) => (
                        <div key={index} className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 flex items-center md:items-start gap-6 md:gap-8 shadow-sm">
                            {/* Number Box */}
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#BF1D2E] rounded-[10px] flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                                {measure.number}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col">
                                <h3 className="text-lg sm:text-xl md:text-2xl mb-2 uppercase"
                                    style={{ fontWeight: 500, color: 'rgba(12, 12, 12, 1)' }}>
                                    {measure.title}
                                </h3>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed">
                                    {measure.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section03;
