import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8">
          <img src="https://via.placeholder.com/400" alt="John Doe" className="rounded-full shadow-lg" />
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            I am a passionate and creative full-stack developer with a knack for building beautiful and functional web applications. I have experience with a variety of technologies, including React, Node.js, and Python.
          </p>
          <p className="text-gray-700">
            I am always eager to learn new things and take on new challenges. I am a strong believer in the power of teamwork and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;