import React from 'react';

const Testtomonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
                        <p className="text-gray-400 mb-4">"Working with this developer was a fantastic experience. They are highly skilled, professional, and delivered a product that exceeded our expectations."</p>
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfd72fee?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client 1" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h4 className="font-bold">Client Name</h4>
                                    <p className="text-sm text-gray-500">CEO, Company</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-left">
                        <p className="text-gray-400 mb-4">"I'm incredibly impressed with the quality of work. The website is not only beautiful but also highly functional and responsive. I would highly recommend them."</p>
                        <div className="flex items-center">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cfd72fee?q=80&w=50&h=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Client 2" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h4 className="font-bold">Client Name</h4>
                                    <p className="text-sm text-gray-500">Marketing Manager, Another Company</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testtomonials;