import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../types/Project';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-light py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-accent hover:underline mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-white mb-4">
            My Projects
          </h1>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            A collection of significant projects I've worked on throughout my career
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.filter(p => !p.companyOwned).map((project) => (
              <div key={project.id} className="glass-card rounded-lg overflow-hidden transition-all duration-500 hover:shadow-glow">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700" 
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-dark bg-opacity-60 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="w-16 h-1 bg-accent"></div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-light/80 mb-4">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 bg-surface/50 text-light/80 text-xs rounded-full border border-accent/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center px-4 py-2 bg-surface/50 text-white rounded-md hover:bg-surface/70 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Details
                    </Link>
                    
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-accent text-dark rounded-md hover:bg-accent/90 transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-accent mb-6">Company-Owned Projects</h2>
          
          <div className="glass-card p-6 rounded-lg mb-8">
            <div className="bg-surface/30 p-4 rounded-md border-l-2 border-amber-500 mb-6">
              <h3 className="text-md font-semibold mb-2 text-amber-400">Confidentiality Notice</h3>
              <p className="text-light/80 text-sm">
                The following projects are owned by the companies I've worked for and are subject to confidentiality agreements. While I cannot provide public demos, I can discuss the technical aspects, architecture decisions, and my contributions during an interview setting.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.filter(p => p.companyOwned).map((project) => (
                <div key={project.id} className="border border-surface/30 rounded-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center blur-sm opacity-50" 
                      style={{ backgroundImage: `url(${project.image})` }}
                    ></div>
                    <div className="absolute inset-0 bg-dark bg-opacity-60"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <h3 className="text-xl font-display font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <div className="w-12 h-0.5 bg-accent"></div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-light/80 mb-4 text-sm">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-accent mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="px-2 py-1 bg-surface/50 text-light/80 text-xs rounded-full border border-accent/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/project/${project.id}`}
                      className="inline-flex items-center px-3 py-1.5 text-xs bg-surface/50 text-white rounded hover:bg-surface/70 transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Technical Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 