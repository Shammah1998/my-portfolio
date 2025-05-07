import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Documents from './components/Documents';
import DocumentDetail from './components/DocumentDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  useEffect(() => {
    // Implement smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
        });
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Documents />
      <Contact />
      <Footer />
    </>
  );
};

function App() {
  useEffect(() => {
    document.title = "Victor Shammah | Senior Software Engineer";
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/document/:id" element={<DocumentDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;