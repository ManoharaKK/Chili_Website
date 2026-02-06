import React from 'react'
import Image from "next/image";

function Section02() {
    const certifications = [
        {
            title: "GMP CERTIFIED",
            subtitle: "Certified",
            description: "Good Manufacturing Practice certification ensures our facility follows strict quality standards in production, testing, and quality assurance.",
            points: [
                "Hygienic manufacturing environment",
                "Regular facility inspections",
                "Documented quality procedures",
                "Staff training and hygiene protocols",
                "Traceable production batches"
            ],
            headerBg: "#F8D7DA", // Light red tint
            tagColor: "bg-[#BF1D2E]"
        },
        {
            title: "ISO 22000",
            subtitle: "Certified",
            description: "Food Safety Management System certification. We are currently in the process of implementing ISO 22000 standards in our facility.",
            points: [
                "International food safety standards",
                "Hazard analysis and critical control",
                "Systematic management approach",
                "Continuous improvement process",
                "Global recognition"
            ],
            headerBg: "rgba(145, 85, 25, 0.18)", // Custom brown tint
            tagColor: "bg-[#BF1D2E]"
        }
    ];

    return (
        <section className="max-w-[1600px] mx-auto px-4 py-16 -mt-20 sm:-mt-32 lg:-mt-48 relative z-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                {certifications.map((cert, index) => (
                    <div key={index} className="rounded-apple-card overflow-hidden shadow-xl border border-gray-100 flex flex-col bg-white">
                        {/* Card Header with Seal */}
                        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center p-8"
                            style={{ backgroundColor: cert.headerBg }}>
                            {/* Top Left Approval Icon */}
                            <div className="absolute top-6 left-6 bg-white p-2.5 flex items-center justify-center" style={{ borderRadius: '9px', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)' }}>
                                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                    <Image
                                        src="/Images/Cetification/Approval.png"
                                        alt="Approval Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Certification Tag */}
                            <div className={`absolute top-6 right-6 ${cert.tagColor} text-white px-4 py-1.5 rounded-full text-[11px] uppercase font-bold flex items-center gap-2 z-10`}>
                                <div className="relative w-4 h-4">
                                    <Image
                                        src="/Images/Quality/Checkmark.png"
                                        alt="Certified icon"
                                        fill
                                        className="object-contain invert brightness-0"
                                    />
                                </div>
                                {cert.subtitle}
                            </div>

                            {/* Main Certification Seal */}
                            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-fade-in">
                                <Image
                                    src="/Images/Cetification/ceticon.png"
                                    alt="Certification Seal"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 sm:p-10 md:p-14 flex flex-col bg-white rounded-t-[19px] -mt-5 relative z-20">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#191919] mb-4" style={{ fontWeight: 600 }}>
                                {cert.title}
                            </h2>
                            <div className="w-48 md:w-64 lg:w-[350px] h-[3px] bg-[#BF1D2E] mb-8" />

                            <p className="mb-8 leading-relaxed text-base sm:text-lg w-full" style={{ color: 'rgba(140, 140, 140, 1)' }}>
                                {cert.description}
                            </p>

                            <ul className="space-y-5">
                                {cert.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-5 group">
                                        <div className="mt-1 flex-shrink-0 relative w-6 h-6">
                                            <Image
                                                src="/Images/Quality/Checkmark.png"
                                                alt="Checkmark"
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className="text-gray-700 font-medium text-base sm:text-lg">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Section02;
