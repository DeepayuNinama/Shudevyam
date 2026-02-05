import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex flex-col bg-stone-50 w-screen leading-none ml-[50%] -translate-x-1/2 bottom-0 left-0 pt-16 h-auto">
            {/* DESKTOP VIEW */}
            <div className="hidden md:flex flex-col">
                <div className="flex justify-between mx-20 mb-20">
                    <p className="text-left">
                        Ratilal Park, A-1, opp. Devkinandan Jain Temple Road, <br />nr. Darpan Six Road, Arunesh Society, ROADS, Naranpura,<br /> Ahmedabad, Gujarat 380009 <br /><br /> shudevyam@gmail.com
                    </p>

                    <div className="flex flex-col gap-10 text-left w-1/3">
                        <div>
                            <h1 className="uppercase font-bold mb-2">Tailored Perfection</h1>
                            <h3 className="text-gray-400 text-sm">
                                A flawless fit is our signature. Every piece is made-to-measure to feel effortless and look refined.
                            </h3>
                        </div>

                        <div>
                            <h1 className="uppercase font-bold mb-2">Premium Quality Fabrics</h1>
                            <h3 className="text-gray-400 text-sm">
                                We curate high-grade fabrics that drape beautifully, feel luxurious, and elevate every design.
                            </h3>
                        </div>

                        <div>
                            <h1 className="uppercase font-bold mb-2">Complete Personalisation</h1>
                            <h3 className="text-gray-400 text-sm">
                                Choose your colours, detailing, cuts, and finish — we customise every element to match your personal style.
                            </h3>
                        </div>

                    </div>

                </div>

                <div className="flex justify-between mx-20 items-center mt-20">

                    <div className="flex gap-36">
                        <NavLink to="/"> Home</NavLink>
                        <NavLink to="/gallery"> Gallery</NavLink>
                        <NavLink to="/testimonials"> Testimonials</NavLink>
                        <NavLink to="/about"> Our Story</NavLink>
                    </div>

                    <div className="flex items-center gap-5 border-b pb-2">
                        <NavLink to="/contact" className="pt-2">Brief Us</NavLink>
                        <div className="w-10 h-10 rounded-3xl bg-black text-white flex items-center justify-center">
                            <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4 rotate-45" />
                        </div>
                    </div>

                </div>
                <hr className="border-0 h-px bg-zinc-400 mx-20 mt-6" />

                <div className="flex justify-between mx-20 items-baseline pb-20">
                    <h1 className="text-[250px] leading-none">SHUDEVYAM</h1>

                    <h3 className="text-gray-400 text-sm">
                        @ 2025 Shudevyam. all rights reserved.
                    </h3>
                </div>
            </div>

            {/* MOBILE VIEW */}
            <div className="md:hidden flex flex-col px-6 pb-12">
                {/* Navigation Links */}
                <div className="flex flex-col gap-8 mb-12 text-left">
                    <NavLink to="/" className="text-lg font-medium">HOME</NavLink>
                    <NavLink to="/gallery" className="text-lg font-medium">GALLERY</NavLink>
                    <NavLink to="/testimonials" className="text-lg font-medium">TESTIMONIALS</NavLink>
                    <NavLink to="/about" className="text-lg font-medium">OUR STORY</NavLink>
                </div>

                <hr className="border-0 h-px bg-zinc-400 my-8" />

                {/* Brand Name */}
                <h1 className="text-6xl font-bold mb-8 text-left leading-none w-full">SHUDEVYAM</h1>

                {/* Contact Info */}
                <div className="text-left mb-8">
                    <p className="text-sm mb-4">shudevyam@gmail.com</p>
                    <p className="text-sm leading-relaxed">
                        Ratilal Park, A-1, opp. Devkinandan Jain Temple Road, nr. Darpan Six Road, Arunesh Society, ROADS, Naranpura, Ahmedabad, Gujarat 380009
                    </p>
                </div>

                <hr className="border-0 h-px bg-zinc-400 mb-8" />

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    @ 2025 Shudevyam. all rights reserved.
                </p>
            </div>

        </div>
    );
};

export default Footer;
