import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">Get In Touch</h2>
        <p className="text-gray-400 mb-8" data-aos="fade-up">
          I'm currently available for freelance work. If you have a project in mind, feel free to contact me.
        </p>
        <a href="mailto:your-email@example.com" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300" data-aos="zoom-in">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;