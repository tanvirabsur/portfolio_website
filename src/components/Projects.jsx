import React from 'react';
import Project from './Project';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of the project goes here. It was built using modern technologies.',
    },
    {
      id: 2,
      title: 'Project two',
      description: 'A brief description of the project goes here. It was built using modern technologies.',
    },
   
  ]
// console.log(projects);
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            projects.map((project)=><Project project={project}></Project>)
          }
        </div>
      </div>

    </section>
  );
};

export default Projects;