import React from 'react';

const ProjectCard = ({project}) => {
    const {thamble, technologies,description,name,link,repo,image} =project
    return (
        <section id="project-detail" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                {/* Project Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-2" data-aos="fade-down">{name}</h1>
                    <p className="text-lg text-purple-400" data-aos="fade-down" data-aos-delay="100">Web Development</p>
                </div>

                {/* Project Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <div data-aos="fade-right">
                        <img src={image} alt="Project Main" className="rounded-lg shadow-lg mb-4" />
                        <div className="grid grid-cols-3 gap-4">
                            {
                                thamble.map((img,index) => <img key={index} src={img.img} className=' className="rounded-lg shadow-md cursor-pointer transform hover:scale-110 transition-transform duration-300"' alt="" />)
                            }
                        </div>
                    </div>
                    <div data-aos="fade-left">
                        <h2 className="text-3xl font-bold mb-4">About This Project</h2>
                        <p className="text-gray-400 mb-6">
                            {description}
                        </p>
                        <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
                        <div className="flex flex-wrap mb-6">
                            {
                                technologies.map((tecq,index) => <span key={index} className="bg-gray-800 text-purple-400 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full">{tecq}</span>)
                            }
                        </div>
                        <div className="flex space-x-4">
                            <a href={link} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                View Live Project
                            </a>
                            <a href={repo} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                                View Source Code
                            </a>
                        </div>
                    </div>
                </div>

                {/* Back to Projects */}
                <div className="text-center mt-12">
                    <a href="/" className="text-purple-400 hover:underline">
                        &larr; Back to All Projects
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectCard;