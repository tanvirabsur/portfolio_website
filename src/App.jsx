import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Skills from './components/Skills';
import WorksFlow from './components/WorksFlow';
import Testtomonials from './components/Testtomonials';
import CTASection from './components/CTASection';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills></Skills>
      <WorksFlow></WorksFlow>
      <Testtomonials></Testtomonials>
      <CTASection></CTASection>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
