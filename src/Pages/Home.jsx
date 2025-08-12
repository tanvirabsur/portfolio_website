import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorksFlow from '../components/WorksFlow';
import Testtomonials from '../components/Testtomonials';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
           
            <Hero />
            <About />
            <Projects />
            <Skills></Skills>
            <WorksFlow></WorksFlow>
            <Testtomonials></Testtomonials>
            <CTASection></CTASection>
            <Contact />
        
        </>
    );
};

export default Home;