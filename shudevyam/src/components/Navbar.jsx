import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  
  const activeLink = "flex h-full items-center border-t-4 border-[#800000] text-white";
  const inactiveLink = "flex h-full items-center border-t-4 border-transparent text-zinc-400 hover:text-white hover:pt-2 transition-all duration-200";

  return (
    <nav className="flex bg-transparent  items-center justify-between absolute top-0 left-0 w-full z-10 pr-0">
        
        <div className="flex w-1/3 h-24 items-center pl-28 pt-1">
            <img src="/images/pnglogo.png" alt="Logo" className="max-h-full object-contain" />
        </div>

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
    </nav>
  );
}