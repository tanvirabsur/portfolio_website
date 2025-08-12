import React from 'react';

const Testtomonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-white" data-aos="fade-down">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-right">
                        <p className="text-gray-400 mb-4">"Working with this developer was a fantastic experience. They are highly skilled, professional, and delivered a product that exceeded our expectations."</p>
                        <div className="flex items-center">
                            <img src='https://imgs.search.brave.com/uFZs2xkRBRUqTi6vAffZc2ylKwiOSCR820ItW1AKNYk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMjQ5/MTEyMzAyL3N0b2Nr/LXBob3RvLXlvdW5n/LWhhbmRzb21lLW1h/bi1zaXR0aW5nLXBv/c3NpbmctbW9kZWxp/bmcteWVsbG93LWlz/b2xhdGVkLWJhY2tn/cm91bmQ' alt="Client 1" className="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <h4 className="font-bold">Client Name</h4>
                                    <p className="text-sm text-gray-500">CEO, Company</p>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg transform hover:scale-105 transition-transform duration-300" data-aos="fade-left">
                        <p className="text-gray-400 mb-4">"I'm incredibly impressed with the quality of work. The website is not only beautiful but also highly functional and responsive. I would highly recommend them."</p>
                        <div className="flex items-center">
                            <img src="https://imgs.search.brave.com/DN1VmBhK097nSplr3bCUT-XOFhfvGx-VfYYFncdqGvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW1nYWNhZGVteS5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9p/bWctYWNhZGVteS1i/b2FyZGluZy1zY2hv/b2wtd29ybGRzLW1v/c3QtZGVkaWNhdGVk/LmpwZw" alt="Client 2" className="w-12 h-12 rounded-full mr-4"/>
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