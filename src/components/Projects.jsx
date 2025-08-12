import React from 'react';

const Projects = () => {
  return (
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-down">My Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Project 1 --> */}
          <div class="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <img src="https://via.placeholder.com/400x300" alt="Project 1" class="w-full h-56 object-cover"/>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">Project One</h3>
                <p class="text-gray-400 mb-4">A brief description of the project goes here. It was built using modern technologies.</p>
                <a href="#" class="text-purple-400 hover:underline">View Details</a>
              </div>
          </div>
          {/* <!-- Project 2 --> */}
          <div class="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
            <img src="https://via.placeholder.com/400x300" alt="Project 2" class="w-full h-56 object-cover"/>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">Project Two</h3>
                <p class="text-gray-400 mb-4">A brief description of the project goes here. It was built using modern technologies.</p>
                <a href="#" class="text-purple-400 hover:underline">View Details</a>
              </div>
          </div>
          {/* <!-- Project 3 --> */}
          <div class="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay="400">
            <img src="https://via.placeholder.com/400x300" alt="Project 3" class="w-full h-56 object-cover"/>
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2">Project Three</h3>
                <p class="text-gray-400 mb-4">A brief description of the project goes here. It was built using modern technologies.</p>
                <a href="#" class="text-purple-400 hover:underline">View Details</a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;