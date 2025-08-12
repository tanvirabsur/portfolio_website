import React from 'react';

const Project = ({project}) => {
        const {title} = project
        
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <img src="" alt="Project 1" className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4"></p>
                <a href="#" className="text-purple-400 hover:underline">View Details</a>
            </div>
        </div>
    );
};

export default Project;