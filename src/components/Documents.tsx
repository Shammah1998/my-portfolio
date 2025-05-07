import React from 'react';
import { Link } from 'react-router-dom';
import { documents } from '../types/Document';

const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-24 bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern bg-repeat opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px]"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-600/10 blur-[80px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Documents</h2>
          <p className="text-lg text-light/70 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {documents.map((doc) => (
            <Link 
              key={doc.id}
              to={doc.url ? `/document/${doc.id}` : '#'}
              className={`relative glass-card overflow-hidden transition-all duration-500 hover:shadow-glow group h-64 ${doc.url ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-15 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundImage: `url(${doc.logo})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-12 h-1 bg-accent mb-4 transform origin-left group-hover:w-20 transition-all duration-300"></div>
                <h3 className="text-lg font-display font-semibold text-light mb-3 group-hover:text-accent transition-colors duration-300">{doc.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-light/70">{doc.issuer}</p>
                  <span className="px-3 py-1 text-xs bg-surface/70 text-light/80 rounded-full border border-accent/20">
                    {doc.date}
                  </span>
                </div>
                {doc.url && (
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-accent text-sm">View Document →</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents; 