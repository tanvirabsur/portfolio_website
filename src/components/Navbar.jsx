import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">MyPortfolio</a>
        <ul className="flex space-x-4">
          <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;