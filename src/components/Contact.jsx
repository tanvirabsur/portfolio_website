import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">Get In Touch</h2>
        <p className="text-gray-400 mb-8" data-aos="fade-up">
          I'm currently available for freelance work. If you have a project in mind, feel free to contact me.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-8 md:space-y-0 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-400">tanvirbasar@yahoo.com</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-400">+880 1 804 766 480</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold">WhatsApp</h3>
            <p className="text-gray-400">+1 (518) 841 1946</p>
          </div>
        </div>
        <a href="mailto:your-email@example.com" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300" data-aos="zoom-in">
          Send a Message
        </a>
      </div>
    </section>
  );
};

export default Contact;