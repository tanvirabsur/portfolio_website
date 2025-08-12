import React from 'react';

const About = () => {
  return (
    <>
       <section id="about" className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">About Me</h2>
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2" >
                    <img src="https://avatars.githubusercontent.com/u/125306854?v=4" alt="About Me" className="rounded-lg shadow-lg"/>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0" data-aos="fade-left">
                    <h3 className="text-3xl font-bold mb-4">Who I Am</h3>
                    <p className="text-gray-400 mb-4">
                        I am a creative and dedicated web developer with a knack for building elegant and responsive websites. I have a strong background in front-end technologies and a passion for learning new things.
                    </p>
                    <p className="text-gray-400">
                        My goal is to create digital experiences that are not only visually appealing but also intuitive and user-friendly. I believe in the power of clean code and good design.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default About;
