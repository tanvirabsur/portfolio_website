import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
           
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Experience />
            <Contact />
        
        </>
    );
};

export default Home;