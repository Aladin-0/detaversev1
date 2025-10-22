import React, { useState } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon } from './Icons'; // Assuming 'Icons' is a valid path to your SVG icons

const NavLink: React.FC<{ href: string; children: React.ReactNode; hasDropdown?: boolean }> = ({ href, children, hasDropdown }) => (
  <a href={href} className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200">
    {children}
    {hasDropdown && <ChevronDownIcon className="ml-1 h-4 w-4" />}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-light/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* Replaced 'LOGO' text with an image tag */}
            <a href="#">
              <img src="\dataverselogoRM.png" alt="Dataverse Logo" className="h-10 w-auto" /> 
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Destination</NavLink>
            <NavLink href="#" hasDropdown>Services</NavLink>
            <NavLink href="#" hasDropdown>Resources</NavLink>
            <NavLink href="#">Career</NavLink>
            <NavLink href="#">Others</NavLink>
          </nav>
          <div className="hidden md:flex items-center">
            <a href="#" className="px-5 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Get a Quote
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-yellow">
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="#">About Us</NavLink>
            <NavLink href="#">Destination</NavLink>
            <NavLink href="#" hasDropdown>Services</NavLink>
            <NavLink href="#" hasDropdown>Resources</NavLink>
            <NavLink href="#">Career</NavLink>
            <NavLink href="#">Others</NavLink>
            <a href="#" className="block w-full text-left mt-4 px-5 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;