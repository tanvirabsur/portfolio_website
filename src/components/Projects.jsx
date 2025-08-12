import React from 'react';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={link} className="text-blue-500 hover:underline">View Project</a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A brief description of the first project.',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'A brief description of the second project.',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'A brief description of the third project.',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-gray-200 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;