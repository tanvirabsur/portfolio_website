import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null)
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hi, I'm Tanvir Absar 👋",
        "A Passionate Web Developer 💻",
        "Building Modern & Responsive Websites 🌐",
        "Specialized in React & Tailwind CSS ⚡",
        "Let's Create Something Amazing Together 🚀"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    })

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-6">
        <div className="text-left">
          <div className="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2 text-red-500">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-400">bash</p>
            </div>
            <div className="font-mono text-lg">
              <span className='text-white' ref={el}></span>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4" data-aos="fade-up">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View My Work
            </a>
            <a href="#" className="bg-transparent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full border border-white transition duration-300">
              Download Resume
            </a>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-purple-400 transition duration-300"><i className="fab fa-github fa-2x"></i></a>
            <a href="#" className="text-white hover:text-purple-400 transition duration-300"><i className="fab fa-linkedin fa-2x"></i></a>
            <a href="#" className="text-white hover:text-purple-400 transition duration-300"><i className="fab fa-twitter fa-2x"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
