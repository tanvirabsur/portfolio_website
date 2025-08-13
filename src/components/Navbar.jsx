
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-white gradient-text">
          Portfolio
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#home" className="text-white hover:text-purple-400 transition duration-300">Home</a>
          <a href="#about" className="text-white hover:text-purple-400 transition duration-300">About</a>
          <a href="#projects" className="text-white hover:text-purple-400 transition duration-300">Projects</a>
          <a href="#skills" className="text-white hover:text-purple-400 transition duration-300">Skills</a>
          <a href="education" className="text-white hover:text-purple-400 transition duration-300">Education</a>
          {/* <a href="#experience" className="text-white hover:text-purple-400 transition duration-300">Experience</a> */}
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-900`}>
        <a href="#home" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Home</a>
        <a href="#about" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">About</a>
        <a href="#projects" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Projects</a>
        <a href="#skills" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Skills</a>
        <a href="#education" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Education</a>
        {/* <a href="#experience" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Experience</a> */}
        <a href="#contact" className="block py-2 px-4 text-sm text-white hover:bg-gray-800">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
