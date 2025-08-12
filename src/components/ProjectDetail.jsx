import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProjectCard from './ProjectCard';

const ProjectDetail = () => {
  const { id } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, [])

  const projects = products.filter(product => product.id === Number(id))

  return (
   projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
  );
};

export default ProjectDetail;
