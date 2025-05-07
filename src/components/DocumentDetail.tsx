import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Document, documents } from '../types/Document';

const DocumentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [document, setDocument] = useState<Document | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = documents.find(doc => doc.id === id);
    setDocument(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-light">Loading...</div>
      </div>
    );
  }

  if (!document) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-light">
        <h2 className="text-2xl mb-4">Document not found</h2>
        <Link to="/#documents" className="px-6 py-3 bg-accent text-dark rounded-full hover:bg-accent/90 transition">
          Back to Documents
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-light py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/#documents" 
          className="inline-flex items-center text-accent hover:underline mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Documents
        </Link>

        <div className="glass-card p-8 relative overflow-hidden">
          {document.logo && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${document.logo})` }}
            ></div>
          )}
          
          <div className="relative z-10">
            <h1 className="text-3xl font-display font-bold mb-4">{document.title}</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-surface/30 px-4 py-2 rounded-md">
                <span className="text-sm text-light/70">Issuer</span>
                <div className="text-lg">{document.issuer}</div>
              </div>
              
              <div className="bg-surface/30 px-4 py-2 rounded-md">
                <span className="text-sm text-light/70">Date</span>
                <div className="text-lg">{document.date}</div>
              </div>
            </div>
            
            {document.url && (
              <div className="mt-8">
                <a 
                  href={document.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-accent text-dark rounded-full hover:bg-accent/90 transition inline-flex items-center"
                >
                  View Document
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail; 