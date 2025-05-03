import React from 'react';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Software Engineer',
      company: 'XOBO Delivery Ltd',
      location: 'Nairobi',
      period: 'Feb 2023 – Present',
      achievements: [
        'System Architecture & Scalability: Redesigned core services to boost throughput by 50% and server efficiency by 30%.',
        'API Development: Delivered 10+ RESTful & microservice endpoints, improving third-party integration speed by 40%.',
        'Cloud Optimization: Maintained 99.9% uptime across AWS/Google Cloud; cut monthly infra costs by 20%.',
        'Security & Compliance: Rolled out automated vulnerability scans and hardened encryption, reducing incidents by 25%.',
        'AI-Driven Insights: Embedded ML models to predict peak demand, lowering operational spend by 15%.',
        'Leadership: Managed a team of 6 across Kenya, India and Europe—lifting delivery efficiency 40% and customer satisfaction 20%.'
      ]
    },
    {
      title: 'Junior Software Engineer',
      company: 'XOBO Delivery Ltd',
      location: 'Nairobi',
      period: 'Feb 2021 – Jan 2023',
      achievements: [
        'Engineered backend services that slashed response times by 25% and upped reliability 30%.',
        'Built and optimized APIs, accelerating integration workflows by 35%.',
        'Improved database queries to cut retrieval times by 20%.',
        'Developed AI prototypes that increased user engagement by 20%.'
      ]
    },
    {
      title: 'IT Intern',
      company: 'XOBO Delivery Ltd',
      location: 'Nairobi',
      period: 'Jan 2020 – Jan 2021',
      achievements: [
        'Supported backend development, boosting efficiency 15% via code refactoring.',
        'Assisted API integrations that shortened rollout time by 20%.',
        'Conducted security audits, improving data integrity 10%.',
        'Researched AI automation, reducing manual tasks by 30%.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-5"></div>
      <div className="absolute top-1/4 left-1/2 w-64 h-64 rounded-full bg-accent/10 blur-[80px]"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Professional Journey</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Building expertise and delivering impactful solutions throughout my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-surface/50"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`mb-12 md:mb-0 flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline content */}
              <div className="md:w-1/2 p-4">
                <div 
                  className={`p-6 glass-card transition-all duration-300 hover:shadow-glow group ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-xl font-display font-bold text-light">{exp.title}</h3>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-surface/50 text-sm text-light/80 rounded-full border border-accent/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-light/70 mb-4">{exp.company}, {exp.location}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-1.5 mr-2 group-hover:animate-pulse"></span>
                        <span className="text-light/80 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex items-center justify-center w-full md:w-0">
                <div className="w-6 h-6 rounded-full bg-accent/80 border-4 border-dark shadow-glow"></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="#projects" 
            className="inline-flex items-center text-light hover:text-accent transition-colors group"
          >
            <span className="relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all group-hover:after:w-full">
              View my project portfolio
            </span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;