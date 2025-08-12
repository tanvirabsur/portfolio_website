import React from 'react';

const About = () => {
  return (
    <>
       <section id="about" class="py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-4xl font-bold text-center mb-12" data-aos="fade-down">About Me</h2>
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/2" data-aos="fade-right">
                    <img src="https://via.placeholder.com/400" alt="About Me" class="rounded-lg shadow-lg"/>
                </div>
                <div class="md:w-1/2 md:pl-12 mt-8 md:mt-0" data-aos="fade-left">
                    <h3 class="text-3xl font-bold mb-4">Who I Am</h3>
                    <p class="text-gray-400 mb-4">
                        I am a creative and dedicated web developer with a knack for building elegant and responsive websites. I have a strong background in front-end technologies and a passion for learning new things.
                    </p>
                    <p class="text-gray-400">
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
