import React from 'react';

const Hero = () => {
  return (
    <section id="home" class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-purple-900">
      <div class="container mx-auto px-6">
        <div class="text-left">
          <div class="bg-gray-800 bg-opacity-50 rounded-lg shadow-lg p-8">
            <div class="flex items-center justify-between mb-4">
              <div class="flex space-x-2 text-red-500">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p class="text-sm text-gray-400">bash</p>
            </div>
            <div class="font-mono text-lg">
              <span id="typed"></span>
            </div>
          </div>
          <div class="mt-8 flex justify-center space-x-4" data-aos="fade-up">
            <a href="#projects" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              View My Work
            </a>
            <a href="#" class="bg-transparent hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full border border-white transition duration-300">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
