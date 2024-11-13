import {
    FaTwitter,
    FaGithub,
    FaLinkedinIn,
    FaEnvelope
} from 'react-icons/fa';

const Contact = () => {
    const socials = [
        {
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: <FaTwitter className="text-xl" />
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: <FaGithub className="text-xl" />
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: <FaLinkedinIn className="text-xl" />
        },
        {
            name: 'Email',
            href: 'mailto:example@email.com',
            icon: <FaEnvelope className="text-xl" />
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-8">
            {/* Header */}
            <h2 className="text-4xl font-inconsolata font-bold text-gray-900 text-center mb-8 sm:mb-12">
                Contact Me
            </h2>

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8 mb-8 sm:mb-12">
                <div className="flex-shrink-0">
                    <img
                        src="/imgGallery/Vineet jana Profile.jpg"  // Adjust the path if needed
                        alt="Profile"
                        className="lg:w-40  lg:h-40 sm:w-32 sm:h-32  rounded-full filter grayscale hover:filter-none object-cover  border-gray-900"
                    />
                </div>

                <div className="text-center font-inconsolata sm:text-left">
                    <h1 className="text-5xl font-inconsolata sm:text-7xl font-bold text-gray-900 leading-tight tracking-wider">
                        Vineet
                        <br />
                        Jana
                    </h1>
                    <p className="text-xl font-inconsolata sm:text-2xl text-gray-600 mt-2 tracking-wide">Full-stack developer</p>
                </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socials.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="group flex justify-center font-inconsolata items-center text-lg font-medium text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg overflow-hidden relative h-14"
                    >
                        <span className="relative z-10 flex items-center gap-3 transition-colors duration-300 ease-out group-hover:text-white">
                            {social.icon}
                            <span>{social.name}</span>
                        </span>
                        <span className="absolute inset-0 w-full h-full bg-white"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out bg-gray-900 translate-x-full group-hover:translate-x-0"></span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Contact;
