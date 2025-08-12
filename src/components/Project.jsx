import React from 'react';
import { NavLink } from 'react-router';

const Project = ({project}) => {
        const {title,id} = project
        
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300" data-aos="fade-up">
            <img src="https://images.unsplash.com/photo-1696258686454-af5025857777?q=80&w=400&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project 1" className="w-full h-56 object-cover" />
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