import { useState } from 'react';

const Info = () => {
    const achievements = [
        { year: '2022', achievement: 'Won GITEX Global Dubai SuperNova YouthX Hackathon' },
        { year: '2023', achievement: 'Co-founded Twinverse Tech recognized by Startup India' },
        { year: '2023', achievement: 'Represented at G20 India (Sikkim & Bhubaneswar) & Indian Mobile Congress' },
        { year: '2023', achievement: ' Won Best Student Startup Award 2023 Startup Odisha' },
        { year: '2023', achievement: 'Startup India Award - 2023 Nominee' }

        // Add more achievements as needed
    ];

    const galleryImages = [
        '/imgGallery/Vineet jana 1.jpg',
        '/imgGallery/Vineet jana 2.jpg',
        '/imgGallery/Vineet jana 3.jpg',
        '/imgGallery/Vineet jana 4.jpg',
        '/imgGallery/Vineet jana 5.jpg',
        '/imgGallery/Vineet jana 6.jpg',
        '/imgGallery/Vineet jana 7.jpg',
        '/imgGallery/Vineet jana 8.jpg',
        // '/imgGallery/Vineet jana 9.jpg',
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 lg:px-20 ">
            {/* About Me Section */}
            <div className="mb-10 w-full lg:w-3/4 text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 font-inconsolata">About Me</h2>
                <p className="text-lg leading-relaxed font-inconsolata">
                    Hi! I&apos;m Vineet, a Computer Science undergrad with a passion for immersive technologies.
                    As the co-founder of Twinverse Tech, I’ve dedicated myself to transforming big tech ideas into reality
                    through AR and VR. Whether it’s building new tools or pushing boundaries, I love to innovate and lead.
                </p>
            </div>

            {/* Achievements and Gallery Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full lg:w-3/4">
                {/* Achievements Table */}
                <div className="w-full lg:w-2/3">
                    <h3 className="text-xl font-inconsolata font-semibold mb-4">Few Achievements✌️ </h3>
                    <table className="table-auto w-full border border-black rounded-lg overflow-hidden">
                        <thead>
                            <tr className=" border-b border-black">
                                <th className="px-4 py-3 font-inconsolata text-left font-medium text-gray-700 border-r border-black">Year</th>
                                <th className="px-4 py-3 font-inconsolata text-left font-medium text-gray-700">Achievement</th>
                            </tr>
                        </thead>
                        <tbody>
                            {achievements.map((item, index) => (
                                <tr key={index} className={` border-b border-black`}>
                                    <td className="px-4 font-inconsolata lg:py-4 py-2 text-gray-600 border-r border-black">{item.year}</td>
                                    <td className="px-4 font-inconsolata lg:py-4 py-2 text-gray-600">{item.achievement}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

                {/* Gallery Carousel */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                        <img
                            src={galleryImages[currentImage]}
                            alt={`Gallery image ${currentImage + 1}`}
                            className="object-cover w-full h-full filter grayscale hover:filter-none transition-all duration-500"
                        />
                        {/* Carousel Controls */}
                        <div
                            onClick={prevImage}
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </div>
                        <div
                            onClick={nextImage}
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Info;

