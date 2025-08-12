import React from 'react';

const ProjectCard = () => {
    return (
        <section id="project-detail" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                {/* Project Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-2" data-aos="fade-down">Project Title</h1>
                    <p className="text-lg text-purple-400" data-aos="fade-down" data-aos-delay="100">Web Development</p>
                </div>

                {/* Project Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <div data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1696258686454-af5025857777?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Main" className="rounded-lg shadow-lg mb-4" />
                        <div className="grid grid-cols-3 gap-4">
                            <img src="https://images.unsplash.com/photo-1696258686454-af5025857777?q=80&w=150&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Thumbnail 1" className="rounded-lg shadow-md cursor-pointer transform hover:scale-110 transition-transform duration-300" />
                            <img src="https://images.unsplash.com/photo-1696258686454-af5025857777?q=80&w=150&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Thumbnail 2" className="rounded-lg shadow-md cursor-pointer transform hover:scale-110 transition-transform duration-300" />
                            <img src="https://images.unsplash.com/photo-1696258686454-af5025857777?q=80&w=150&h=100&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Thumbnail 3" className="rounded-lg shadow-md cursor-pointer transform hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-3xl font-bold mb-4">About This Project</h2>
                        <p className="text-gray-400 mb-6">
                            A detailed description of the project goes here. This section will explain the project's purpose, the challenges faced, and the solutions implemented. It will highlight the key features and the overall impact of the project.
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap mb-6">
                            <span className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">React</span>
                            <span className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">Tailwind CSS</span>
                            <span className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">Node.js</span>
                            <span className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">Express</span>
                            <span className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">MongoDB</span>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                View Live Project
                            </a>
                            <a href="#" className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                View Source Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Projects */}
                <div className="text-center mt-12">
                    <a href="/#projects" className="text-purple-400 hover:underline">
                        &larr; Back to All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;