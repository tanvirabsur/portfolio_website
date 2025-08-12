import React from 'react';
import { NavLink } from 'react-router';

const Project = ({project}) => {
        const {title,id, image} = project
        
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <img src={image} alt="Project 1" className="w-full h-56 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4"></p>
                {/* <a href="#" className="text-purple-400 hover:underline"></a> */}
                <NavLink className={'text-purple-400 hover:underline'} to={`project-details/${id}`}>View Details</NavLink>
            </div>
        </div>
    );
};

export default Project;