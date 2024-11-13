// import { CgDarkMode } from 'react-icons/cg';

const Navbar = () => {
    return (
        <div className="shadow-md w-full top-0">
            <div className="flex justify-between items-center py-4 px-7 md:px-10">
                <div className="font-bold cursor-pointer">
                    <img src="/Vineet_transparent.png" alt="logo" className="w-auto h-10" />
                </div>

                {/* <button className="flex items-center text-2xl">
                    <CgDarkMode className="mr-2" />
                </button> */}
            </div>
        </div>
    );
};

export default Navbar;