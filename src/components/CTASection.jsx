import React from 'react';

const CTASection = () => {
    return (
        <section id="cta" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">Interested in working with me?</h2>
                <p className="text-gray-200 mb-8" data-aos="fade-up">
                    I'm always open to discussing new projects and opportunities.
                </p>
                <div className="flex justify-center space-x-4" data-aos="zoom-in">
                    <a href="#" className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300">
                        Download CV
                    </a>
                    <a href="https://github.com/tanvirabsur" className="bg-gray-900 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
                        View GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTASection;