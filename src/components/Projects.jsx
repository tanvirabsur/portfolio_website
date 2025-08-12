import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])
 

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12" data-aos="fade-down">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            products.map((project) => <Project key={project.id} project={project}></Project>)
          }
        </div>
      </div>

    </section>
  );
};

export default Projects;