import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">John Doe</h1>
        <p className="text-xl">Full Stack Developer</p>
        <a href="#projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 inline-block">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;