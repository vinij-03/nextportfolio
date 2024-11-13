// import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaPython, FaReact, FaJs} from 'react-icons/fa';
import { SiThreedotjs } from 'react-icons/si';
import { FaGolang } from "react-icons/fa6";
import { RiJavaLine } from "react-icons/ri";

const Hero = () => {
    return (
        <div className="flex justify-center items-center min-h-[66vh] lg:ml-20 mt-8  lg:mt-0  ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-3/5 xl:w-2/3 gap-20 items-center">
                {/* Left Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
                    <h1 className="font-inconsolata text-3xl lg:text-4xl font-bold leading-tight">
                        Hey, I&apos;m Vineet
                    </h1>
                    <p className="font-inconsolata text-[20px] font-light mt-4">
                        {/* Computer Science Undergrad, <br />
                        Co-Founder Twinverse Tech, <br /> */}
                        Turning big tech dreams into reality with 
                        AR and VR, and having a blast doing it!
                    </p>
                    <div className="flex justify-center lg:justify-start gap-4 mt-6">
                        <a href="https://github.com/vinij-03" aria-label="GitHub" className="text-gray-600 hover:text-black transition-colors">
                            <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://www.instagram.com/i.m_vini_?igsh=OGQ5ZDc2ODk2ZA==" aria-label="Instagram" className="text-gray-600 hover:text-black transition-colors">
                            <FaInstagram className="w-7 h-7 sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/vineetjana/?originalSubdomain=in" aria-label="LinkedIn" className="text-gray-600 hover:text-black transition-colors">
                            <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
                        </a>
                        <a href="https://x.com/vineetjana" aria-label="Twitter" className="text-gray-600 hover:text-black transition-colors">
                            <FaTwitter className="w-7 h-7 sm:w-8 sm:h-8" />
                        </a>
                        <a href="/public/CV_GM.pdf" className="relative inline-block text-base sm:text-lg group">
                            <span className="relative z-10 block px-6 sm:px-8 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                <span className="absolute inset-0 w-full h-full px-8 py-1 rounded-lg  bg-white"></span>
                                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                <span className="relative">CV ↓</span>
                            </span>
                            <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                        </a>
                    </div>
                </div>

                {/* Right Content (Animated Orbit) */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto lg:mx-0  ">
                    <div className="absolute inset-0 flex justify-center items-center">
                        {/* Inner Orbit */}
                        <div className="absolute w-48 sm:w-52 lg:w-56 h-48 sm:h-52 lg:h-56 animate-[spin_30s_linear_infinite]">
                            <div className="relative w-full h-full">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="animate-[spin_30s_linear_infinite_reverse]">
                                        <FaPython className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                                <div className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-1/2">
                                    <div className="animate-[spin_30s_linear_infinite_reverse]">
                                        <FaReact className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                                    <div className="animate-[spin_30s_linear_infinite_reverse]">
                                        <FaJs className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-900 border-opacity-50 z-10"></div>
                        </div>

                        {/* Outer Orbit */}
                        <div className="absolute w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 animate-[spin_30s_linear_infinite_reverse]">
                            <div className="relative w-full h-full">
                                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                                    <div className="animate-[spin_30s_linear_infinite]">
                                        <SiThreedotjs className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                                <div className="absolute top-[1.5rem] right-[4.5rem] translate-x-1/2 -translate-y-1/2">
                                    <div className="animate-[spin_30s_linear_infinite]">
                                        <FaGolang className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                                <div className="absolute bottom-[1.4rem] right-[4.5rem] translate-x-1/2 translate-y-1/2">
                                    <div className="animate-[spin_30s_linear_infinite]">
                                        <RiJavaLine className="text-gray-800 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 opacity-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-900 border-opacity-50 z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
