import React, { useState, useEffect } from "react";
import { NavLink , redirect, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);

    const isMobileView = window.innerWidth < 768;
    const isHomePage = location.pathname === '/';
    const isContactPageMobile = location.pathname === '/Contact' && isMobileView;
    const logoSrc = (isHomePage || isContactPageMobile) 
        ? "/images/shudevyamwhite.png" 
        : "/images/shydevyambrown.png";

    const activeLink = "flex h-full items-center border-t-4 border-[#800000] text-white";
    const inactiveLink = "flex h-full items-center border-t-4 border-transparent text-zinc-400 hover:text-white hover:pt-2 transition-all duration-200";

    // Close mobile menu when navigating
    const handleNavClick = (path) => {
      navigate(path);
      setOpen(false);
    };

    // Lock/unlock scroll when menu opens/closes
    useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : 'unset';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }, [open]);

  return (
    <nav className="absolute top-0 left-0 w-full z-10">
        
        {/* DESKTOP VIEW - Logo + Nav Bar */}
        <div className="hidden md:flex bg-transparent items-center justify-between pr-0 w-full">
          {/* LOGO */}
          <div className="flex w-1/3 h-24 items-center pl-20 pt-1 cursor-pointer" onClick={() => navigate('/')}>
              <img src={logoSrc} alt="Logo" className="max-h-full object-contain" />
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="bg-black font-fragment h-24 w-1/2 mr-28 uppercase flex items-center justify-between px-16 text-white">
            
            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? activeLink : inactiveLink}
            >
                Home
            </NavLink>

            <NavLink 
                to="/Gallery" 
                className={({ isActive }) => isActive ? activeLink : inactiveLink}
            >
                Gallery
            </NavLink>

            <NavLink 
                to="/Testimonials" 
                className={({ isActive }) => isActive ? activeLink : inactiveLink}
            >
                Testimonials
            </NavLink>

            <NavLink 
                to="/About" 
                className={({ isActive }) => isActive ? activeLink : inactiveLink}
            >
                Our Story
            </NavLink>

            <NavLink 
                to="/Contact" 
                className={({ isActive }) => isActive ? activeLink : inactiveLink}
            >
                Contact
            </NavLink>

        </div>
        </div>

        {/* MOBILE VIEW - Logo + Hamburger */}
        <div className="md:hidden flex items-center justify-between w-full px-6 pt-4">
          {/* LOGO */}
          <div className="flex h-20 items-center cursor-pointer" onClick={() => navigate('/')}>
              <img src={logoSrc} alt="Logo" className="max-h-full object-contain" />
          </div>
        <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className={`md:hidden relative z-50 p-3 bg-white rounded-full hover:bg-gray-100 transition-all duration-200 mr-6 ${
              open ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            <svg
              className="w-6 h-6 transition-transform duration-200"
              style={{ color: "#800000" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7h18" />
              <path d="M3 12h18" />
              <path d="M3 17h18" />
            </svg>
        </button>
        </div>

        {/* MOBILE MENU - Full Screen Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 transform transition-all duration-300 ${
            open
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
          style={{ backgroundColor: "#800000" }}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 z-50 p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo in Menu */}
          <div className="absolute top-6 left-6">
            <img
              src="/images/shudevyamwhite.png"
              alt="Logo"
              className="h-16 object-contain"
            />
          </div>

          {/* Menu Items */}
          <div className="h-full flex flex-col items-start justify-center px-8 gap-8">
            <button
              onClick={() => handleNavClick("/")}
              className="text-white uppercase tracking-wider text-4xl font-bold hover:translate-x-2 transition-transform duration-200 bg-none border-none cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => handleNavClick("/Gallery")}
              className="text-white uppercase tracking-wider text-4xl font-bold hover:translate-x-2 transition-transform duration-200 bg-none border-none cursor-pointer"
            >
              GALLERY
            </button>
            <button
              onClick={() => handleNavClick("/Testimonials")}
              className="text-white uppercase tracking-wider text-4xl font-bold hover:translate-x-2 transition-transform duration-200 bg-none border-none cursor-pointer"
            >
              TESTIMONIALS
            </button>
            <button
              onClick={() => handleNavClick("/About")}
              className="text-white uppercase tracking-wider text-4xl font-bold hover:translate-x-2 transition-transform duration-200 bg-none border-none cursor-pointer"
            >
              OUR STORY
            </button>
            <button
              onClick={() => handleNavClick("/Contact")}
              className="text-white uppercase tracking-wider text-4xl font-bold hover:translate-x-2 transition-transform duration-200 bg-none border-none cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>
    </nav>
  );
}