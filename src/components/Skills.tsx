import React from 'react';

type SkillCategory = {
  name: string;
  skills: string[];
};

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Backend & APIs',
      skills: ['PHP', 'Python', 'Java', 'Laravel', 'Django', 'RESTful', 'Microservices']
    },
    {
      name: 'Front-end',
      skills: ['React.js', 'HTML5', 'CSS3', 'AJAX', 'JavaScript', 'Responsive Design']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions']
    },
    {
      name: 'Databases & Storage',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Data Modeling']
    },
    {
      name: 'Security',
      skills: ['CISSP-certified', 'Encryption', 'Vulnerability Assessments', 'PCI-DSS', 'Security Audits']
    },
    {
      name: 'AI/ML',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Keras']
    },
    {
      name: 'Methodologies & Tools',
      skills: ['Agile/Scrum', 'Waterfall', 'Git', 'Jira', 'VS Code', 'Apache Tomcat']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Technical Expertise</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            A comprehensive toolkit spanning multiple domains of software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden transition-all duration-500 hover:shadow-glow group"
            >
              <div className="h-1 bg-gradient-to-r from-accent to-accent/30"></div>
              <div className="p-8">
                <h3 className="text-xl font-display font-semibold text-light mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-light transition-colors duration-300">
                    {index + 1}
                  </span>
                  <span>{category.name}</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-1.5 bg-surface/50 text-light/80 text-sm rounded-full border border-accent/10 hover:border-accent/30 hover:bg-surface/80 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-light/70 mb-8 max-w-2xl mx-auto">
            My diverse skill set enables me to take on complex technical challenges and deliver comprehensive solutions.
          </p>
          <a 
            href="#experience" 
            className="inline-flex items-center text-light hover:text-accent transition-colors group"
          >
            <span className="relative after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all group-hover:after:w-full">
              See these skills in action
            </span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;