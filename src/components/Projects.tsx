import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../types/Project';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const toggleProjectDetails = (projectId: string) => {
    if (activeProject === projectId) {
      setActiveProject(null);
    } else {
      setActiveProject(projectId);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-heading">Key Projects</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto px-4">
            Innovative solutions that delivered measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 px-4 sm:px-6">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="glass-card group overflow-hidden transition-all duration-500"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-dark bg-opacity-60 backdrop-blur-sm group-hover:bg-opacity-40 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8">
                  <span className="text-xs text-accent uppercase tracking-widest font-medium mb-1 sm:mb-2">Project {index + 1}</span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="w-12 sm:w-16 h-1 bg-accent transform origin-left group-hover:w-20 sm:group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <p className="text-light/90 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                <div className="flex items-center mb-4 sm:mb-6 bg-surface/30 p-2 sm:p-3 rounded-lg border-l-4 border-accent">
                  <p className="text-light/80 text-xs sm:text-sm">
                    <span className="font-semibold text-accent">Achievement:</span> {project.achievements}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 sm:px-3 py-1 bg-surface/50 text-light/80 text-xs rounded-full border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="text-accent hover:text-white transition-colors duration-300 text-xs sm:text-sm font-medium flex items-center gap-1 focus:outline-none group/btn"
                  >
                    <span className="relative overflow-hidden">
                      <span className="relative inline-block transform group-hover/btn:translate-y-full transition-transform duration-300">
                        {activeProject === project.id ? 'View Less' : 'View Details'}
                      </span>
                      <span className="absolute inset-0 inline-block -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300">
                        {activeProject === project.id ? 'View Less' : 'View Details'}
                      </span>
                    </span>
                    <svg 
                      className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${
                        activeProject === project.id ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>

                  <div className="flex space-x-2">
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-accent hover:bg-accent/90 px-3 py-1.5 rounded-md text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Demo
                      </a>
                    )}
                    
                    {project.hasReadme && (
                      <Link 
                        to={`/project/${project.id}`}
                        className="text-white bg-surface/50 hover:bg-surface/70 px-3 py-1.5 rounded-md text-xs transition-colors duration-300 flex items-center gap-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Readme
                      </Link>
                    )}
                  </div>
                </div>

                {activeProject === project.id && (
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-accent/20 animate-fadeIn">
                    <h4 className="font-semibold text-accent mb-2 sm:mb-3 text-sm sm:text-base">Project Details</h4>
                    <p className="text-light/70 text-xs sm:text-sm leading-relaxed mb-4">
                      This project involved complex system design and implementation, requiring expertise in multiple technical domains. The solution was designed with scalability in mind, supporting high-volume transactions while maintaining security and performance.
                    </p>
                    
                    {project.companyOwned && (
                      <div className="bg-surface/30 p-3 rounded-md border-l-2 border-amber-500">
                        <p className="text-light/80 text-xs">
                          <span className="text-amber-400 font-semibold">Note:</span> This project is company-owned and in production. Due to contractual obligations, the demo is not publicly available, but I can provide a private walkthrough during an interview session.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:mt-16">
          <Link 
            to="/projects"
            className="inline-flex items-center px-6 py-3 bg-accent text-dark font-medium rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;