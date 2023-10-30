import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isFixed = window.pageYOffset > 0;
      setIsHeaderFixed(isFixed);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white ${isHeaderFixed ? 'fixed' : ''} w-full z-10`}>
      <nav className="container mx-auto flex items-center justify-between py-8 px-8">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-1000 cursor-pointer">Ethiography</h1>
        </div>
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#places" className="text-gray-800 hover:text-gray-200">
                Places
              </a>
            </li>
            <li>
              <a href="#holidays" className="text-gray-800 hover:text-gray-200">
                Holidays
              </a>
            </li>
            <li>
              <a href="#footer" className="text-gray-800 hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#footer" className="text-gray-800 hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            className="text-gray-800 hover:text-gray-200 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                Places
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                Holidays
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:text-gray-200">
                Contact
              </a>
            </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;