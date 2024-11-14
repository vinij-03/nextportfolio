import { FaGithub } from 'react-icons/fa';
const experiences = [
    {
        company: "Twinverse Technology",
        duration: "Dec. 2022 - Present",
        role: "Co-Founder and Web XR Developer",
        tech: "React, Three.js, Babylon.js, MongoDB",
        description: [
            "Enhanced Web VR services to showcase architectural projects using ThreeJs and R3F.",
            "Successfully led a team of 9 individuals across 7 client projects.",
            "Handled all copywriting responsibilities for the firm.",
            "Acted as the firm's representative at 4 international events and 6 investor pitches.",
            "Secured a total of INR 9 Lakh in funding for the firm within one year."
        ],
        image: "/imgExp/twinv.jpg", // Replace with actual path
        website: "https://twinverse.in" // Replace with actual URL
    },
    {
        company: "S'O’A Fablab",
        duration: "Jan 2022 - Jun 2023",
        role: "Core Member & Full Stack Developer",
        description: [
            "Organized Google I/O Extended and Azure DevDay in my college, drawing 200+ attendees and promoting tech knowledge.",
            "Executed two major Hackathons, Code For Odisha and Innovate Odisha 1.0, with 20+ teams from Odisha, encouraging student innovation.",
            "Delivered seminars on REST APIs and Frontend Development (HTML, CSS, JavaScript) to over 50 participants."
        ],
        image: "/imgExp/FabLab.png", // Replace with actual path
        website: "https://karkhana.co.in/soafablab/" // Replace with actual URL
    }
];
const projects = [
    {
        title: "My CHAT",
        tech: "React, Node.js, Express.js, MongoDB, Tailwind, Git",
        description: [
            "Developed a fullstack chat application optimizing real-time messaging, data storage, and file sharing.",
            "Designed a scalable backend infrastructure using Node.js, enhancing performance and reducing response time by 40%.",
            "Implemented a JWT authentication system with MongoDB, ensuring high data security."
        ],
        github: "https://github.com/vinij-03/Chat-App.git", // Replace with actual GitHub link
        image: "/imgWork/ChatApp.png" // Replace with actual image path
    },
    {
        title: "My-AR",
        tech: "React, Three.js, MongoDB, Git",
        description: [
            "Optimized image and plane tracking algorithms to achieve 95% accuracy and significantly reduce model load time, delivering seamless 3D model placement and a smoother AR experience.",
            "Developed a user-friendly fullstack platform allowing users to upload and integrate personalized 3D models, enhancing customization capabilities.",
            "Implemented user-based authentication to efficiently store and manage 3D models, ensuring cross-device accessibility and consistent user experiences."
        ],
        github: "https://github.com/vinij-03/MY-AR.git", // Replace with actual GitHub link
        image: "/imgWork/MyAR.png" // Replace with actual image path
    },
    {
        title: "CLI-ToDo",
        tech: "Golang, Go Standard Library, JSON, Git",
        description: [
            "Built a Go-based CLI application for managing tasks, enabling users to add, list, complete, and delete to-dos.",
            "Utilized the Go standard library and JSON for seamless data handling and storage.",
            "Designed the system to support piping input from other programs and ensure well-formatted output."
        ],
        github: "https://github.com/vinij-03/CLI-ToDo.git", // Replace with actual GitHub link
        image: "/imgWork/Clitodo.png" // Replace with actual image path
    }
];

function Work() {
    return (
        <div className="mb-12 px-4 sm:px-8 md:px-20">
            {/* Section 1: Experience */}
            <section className="mb-12 px-4 sm:px-8 md:px-20">
                <h2 className="text-2xl font-bold mb-6 text-center font-inconsolata">Experience</h2>
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center mb-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                        <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-1/3 mb-4 md:mb-0"
                        >
                            <img src={exp.image} alt={exp.company} className="w-full rounded-lg hover:opacity-90 filter grayscale hover:filter-none transition-all duration-300" />
                        </a>
                        <div className="w-full md:w-2/3 p-4 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start mb-2">
                                <h3 className="text-xl font-inconsolata font-semibold pr-10">{exp.company}</h3>
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block text-base sm:text-lg group"
                                >
                                    <span className="relative z-10 block px-6 sm:px-8 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-8 py-1 rounded-lg  bg-white"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">Visit</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                            <p className="text-gray-500 font-inconsolata ">{exp.duration}</p>
                            <h4 className="font-medium text-gray-700 mt-2 font-inconsolata ">{exp.role}</h4>
                            <p className="text-sm text-gray-500 mb-2 font-inconsolata ">{exp.tech}</p>
                            <ul className="list-disc list-inside space-y-1 hidden md:block font-inconsolata ">
                                {exp.description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

            {/* Section 2: Projects */}
            <section className='lg:px-20'>
                <h2 className="text-2xl font-bold mb-6 text-center font-inconsolata ">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
                    {projects.map((project, index) => (
                        <div key={index} className="border border-gray-300 rounded-lg p-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-80 object-cover rounded-lg mb-2 filter grayscale hover:filter-none transition-all duration-300"
                                />
                            </a>
                            {/* Container for title and button */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-center flex-grow">{project.title}</h3>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-block text-base sm:text-lg group ml-2 "
                                >
                                    <span className="relative z-10 block px-6 sm:px-8 py-1 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                                        <span className="absolute inset-0 w-full h-full px-8 py-1 rounded-lg  bg-white"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                                        <span className="relative"><FaGithub /></span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-8 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </a>
                            </div>
                            <p className="text-sm text-gray-500 mb-2 mt-4">{project.tech}</p>
                            <ul className="list-disc list-inside space-y-1">
                                {project.description.map((line, idx) => (
                                    <li key={idx}>{line}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Work;
