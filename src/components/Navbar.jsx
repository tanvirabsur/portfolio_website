import React from 'react';

const Navbar = () => {
  return (
    <nav class="bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg fixed w-full top-0 z-50">
      <div class="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold gradient-text text">MyPortfolio</a>
        <div class="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-purple-400 text-white">Home</a>
          <a href="#about" className="hover:text-purple-400 text-white">About</a>
          <a href="#projects" className="hover:text-purple-400 text-white">Projects</a>
          <a href="#contact" className="hover:text-purple-400 text-white">Contact</a>
        </div>
        <div class="md:hidden">
          <button id="mobile-menu-button" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden">
        <a href="#home" class="block py-2 px-4 text-sm hover:bg-gray-700">Home</a>
        <a href="#about" class="block py-2 px-4 text-sm hover:bg-gray-700">About</a>
        <a href="#projects" class="block py-2 px-4 text-sm hover:bg-gray-700">Projects</a>
        <a href="#contact" class="block py-2 px-4 text-sm hover:bg-gray-700">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;