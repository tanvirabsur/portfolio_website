import React from 'react';

const About = () => {
  return (
    <>
       <section id="about" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 relative group">
                    <img src="https://avatars.githubusercontent.com/u/125306854?v=4" alt="About Me" className="rounded-lg shadow-lg w-full h-full object-cover"/>
                    {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 backdrop-filter group-hover:backdrop-blur-sm rounded-lg"></div> */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-purple-900/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0" data-aos="fade-left">
                    <h3 className="text-3xl font-bold mb-4">Who I Am</h3>
                    <p className="text-gray-400 mb-4">
                        I am a passionate web developer with a journey that began with a simple curiosity for how websites work. This curiosity quickly turned into a passion for coding and creating beautiful, functional, and user-centric web applications. I thrive on turning complex problems into simple, elegant solutions.
                    </p>
                    <p className="text-gray-400 mb-4">
                        I enjoy working on projects that challenge me and allow me to learn new technologies. I am particularly interested in front-end development and building interactive user interfaces with modern frameworks like React. I love the process of bringing ideas to life and seeing the impact of my work on users.
                    </p>
                    <p className="text-gray-400">
                        Outside of programming, I am an avid sports fan and enjoy playing basketball in my free time. I also have a keen interest in landscape photography, which allows me to express my creativity in a different medium. I believe that having a balance between my technical and creative pursuits makes me a more well-rounded developer.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
