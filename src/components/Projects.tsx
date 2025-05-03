import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  achievements: string;
  technologies: string[];
  image: string;
};

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Order Management System',
      description: 'A comprehensive system for handling customer orders from placement to delivery.',
      achievements: 'Reduced order-processing time 35%; order accuracy +25%.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
      image: 'https://images.pexels.com/photos/7948027/pexels-photo-7948027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Secure Payment Gateway',
      description: 'PCI-compliant payment processing system with advanced fraud detection.',
      achievements: 'Integrated PCI-compliant payments; 15% rise in repeat purchases.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'AWS'],
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Courier Tracking API',
      description: 'Real-time tracking API for delivery personnel and packages with customer notifications.',
      achievements: 'Real-time shipment updates; customer satisfaction +20%.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Google Maps API', 'Kubernetes'],
      image: 'https://images.pexels.com/photos/7709929/pexels-photo-7709929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 4,
      title: 'AI-Powered Chatbot',
      description: 'Natural language processing chatbot that handles customer support inquiries.',
      achievements: 'NLP-based helpdesk bot; support efficiency +40%.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Google Cloud'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const toggleProjectDetails = (projectId: number) => {
    if (activeProject === projectId) {
      setActiveProject(null);
    } else {
      setActiveProject(projectId);
    }
  };

  return (
    <section id="projects" className="py-24 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-5"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-accent/10 blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Key Projects</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Innovative solutions that delivered measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card group overflow-hidden transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700" 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className="absolute inset-0 bg-dark bg-opacity-60 backdrop-blur-sm group-hover:bg-opacity-40 transition-all duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-xs text-accent uppercase tracking-widest font-medium mb-2">Project {project.id}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2 transform group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <div className="w-16 h-1 bg-accent transform origin-left group-hover:w-24 transition-all duration-300"></div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-light/90 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex items-center mb-6 bg-surface/30 p-3 rounded-lg border-l-4 border-accent">
                  <p className="text-light/80 text-sm">
                    <span className="font-semibold text-accent">Achievement:</span> {project.achievements}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-surface/50 text-light/80 text-xs rounded-full border border-accent/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => toggleProjectDetails(project.id)}
                  className="text-accent hover:text-white transition-colors duration-300 text-sm font-medium flex items-center gap-1 focus:outline-none group/btn"
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
                    className={`w-4 h-4 transition-transform duration-300 ${
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

                {activeProject === project.id && (
                  <div className="mt-6 pt-6 border-t border-accent/20 animate-fadeIn">
                    <h4 className="font-semibold text-accent mb-3">Project Details</h4>
                    <p className="text-light/70 text-sm leading-relaxed">
                      This project involved complex system design and implementation, requiring expertise in multiple technical domains. The solution was designed with scalability in mind, supporting high-volume transactions while maintaining security and performance.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;