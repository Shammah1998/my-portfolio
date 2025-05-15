import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project, projects } from '../types/Project';
import MarkdownRenderer from './MarkdownRenderer';

// Import the README files directly
import orderManagementReadme from '../assets/readme/order-management-readme.md?raw';
import paymentGatewayReadme from '../assets/readme/payment-gateway-readme.md?raw';
import courierTrackingReadme from '../assets/readme/courier-tracking-readme.md?raw';
import aiChatbotReadme from '../assets/readme/ai-chatbot-readme.md?raw';

// Create a mapping of project IDs to README files
const readmeFiles: Record<string, string> = {
  'order-management': orderManagementReadme,
  'payment-gateway': paymentGatewayReadme,
  'courier-tracking': courierTrackingReadme,
  'ai-chatbot': aiChatbotReadme
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'readme' | 'build'>('overview');

  useEffect(() => {
    const found = projects.find(proj => proj.id === id);
    setProject(found || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-light">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-dark text-light">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Link to="/#projects" className="px-6 py-3 bg-accent text-dark rounded-full hover:bg-accent/90 transition">
          Back to Projects
        </Link>
      </div>
    );
  }

  const renderTab = () => {
    switch (activeTab) {
      case 'readme':
        return (
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold text-accent mb-6">README</h2>
            
            <div className="bg-surface/10 p-5 rounded-md border border-accent/20 mb-8">
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="text-lg font-mono text-accent">Shammah1998/{project.id}</span>
              </div>
              <h1 className="text-2xl font-bold mb-3">{project.title}</h1>
              <p className="text-light/80 border-b border-surface/30 pb-4 mb-4">
                {project.description} Developed with {project.technologies.join(', ')}.
              </p>
              <div className="flex gap-3 mb-4">
                <span className="bg-surface/30 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span> Active
                </span>
                <span className="bg-surface/30 px-3 py-1 rounded-full text-xs font-medium">v1.2.0</span>
                <span className="bg-surface/30 px-3 py-1 rounded-full text-xs font-medium">MIT License</span>
              </div>
            </div>

            <MarkdownRenderer content={readmeFiles[project.id]} />
            
            {project.companyOwned && (
              <div className="bg-surface/30 p-4 rounded-md border-l-2 border-amber-500 mt-6">
                <p className="text-light/80 text-sm">
                  <span className="text-amber-400 font-semibold">Note:</span> This project is company-owned and in production. Due to intellectual property and contractual obligations, specific implementation details are intentionally omitted. I can provide more detailed explanations during an interview session.
                </p>
              </div>
            )}
          </div>
        );
      
      case 'build':
        return (
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold text-accent mb-6">Build Process</h2>
            
            <div className="bg-surface/30 p-4 rounded-md border-l-2 border-amber-500 mb-6">
              <p className="text-light/80 text-sm">
                <span className="text-amber-400 font-semibold">Note:</span> For security and privacy reasons, the complete build process including specific setup instructions has been omitted from the public portfolio. This section provides a general overview of the project structure instead.
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-4">Project Structure</h3>
            <div className="bg-surface/30 rounded-md p-5 mb-6">
              <pre className="text-sm overflow-x-auto font-mono">
                <code>
                  {project.id === 'order-management' ? 
                    `${project.id}/
├── api/                          # REST API endpoints
│   ├── views/                    # API view controllers
│   ├── serializers/              # Data serialization
│   ├── permissions/              # Custom permission classes
│   └── tests/                    # API tests
├── core/                         # Core business logic
│   ├── models/                   # Database models
│   ├── services/                 # Business logic services
│   ├── utils/                    # Utility functions
│   └── tests/                    # Core logic tests
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/           # UI components
│   │   ├── pages/                # Page components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API service clients
│   │   ├── redux/                # State management
│   │   └── utils/                # Frontend utilities
│   ├── public/                   # Static assets
│   └── package.json              # Frontend dependencies
├── config/                       # Configuration files
├── templates/                    # HTML templates
├── static/                       # Static files
├── docs/                         # Documentation
│   ├── api/                      # API documentation
│   └── architecture/             # Architecture diagrams
├── scripts/                      # Utility scripts
├── docker/                       # Docker configuration
│   ├── Dockerfile                # Application Dockerfile
│   └── docker-compose.yml        # Service definitions
├── .github/                      # GitHub Actions workflows
├── requirements/                 # Python dependencies
│   ├── base.txt                  # Base requirements
│   ├── dev.txt                   # Development requirements
│   └── prod.txt                  # Production requirements
├── manage.py                     # Django management script
├── requirements.txt              # Main dependencies file
└── README.md                     # Project documentation` 
                    : project.id === 'ai-chatbot' ?
                    `${project.id}/
├── api/                          # API endpoints
│   ├── views/                    # API view controllers
│   ├── serializers/              # Data serialization
│   └── tests/                    # API tests
├── core/                         # Core chatbot logic
│   ├── models/                   # Database models
│   ├── nlp/                      # Natural language processing
│   │   ├── intent/               # Intent recognition
│   │   ├── entity/               # Entity extraction
│   │   └── context/              # Context management
│   ├── knowledge/                # Knowledge base integration
│   └── services/                 # Business logic services
├── frontend/                     # React frontend application
│   ├── src/
│   │   ├── components/           # UI components
│   │   ├── hooks/                # Custom React hooks
│   │   ├── services/             # API clients
│   │   └── utils/                # Frontend utilities
│   └── package.json              # Frontend dependencies
├── config/                       # Configuration files
├── templates/                    # HTML templates
├── static/                       # Static files
├── docs/                         # Documentation
├── scripts/                      # Utility scripts
├── docker/                       # Docker configuration
├── ml_models/                    # Machine learning model files
├── training_data/                # NLP training datasets
├── manage.py                     # Django management script
├── requirements.txt              # Python dependencies
└── README.md                     # Project documentation`
                    : project.id === 'payment-gateway' ?
                    `${project.id}/
├── app/                          # Laravel application
│   ├── Http/
│   │   ├── Controllers/          # Request handlers
│   │   └── Middleware/           # Request middleware
│   ├── Models/                   # Database models
│   ├── Services/                 # Business logic services
│   │   ├── Payment/              # Payment processors
│   │   ├── Fraud/                # Fraud detection
│   │   └── Reporting/            # Financial reporting
│   └── Jobs/                     # Background jobs
├── bootstrap/                    # Application bootstrap
├── config/                       # Configuration files
├── database/                     # Database migrations/seeders
├── public/                       # Public assets
├── resources/                    # Frontend resources
│   ├── js/                       # JavaScript files
│   │   ├── components/           # Vue components
│   │   ├── pages/                # Page components
│   │   └── services/             # API clients
│   ├── css/                      # CSS styles
│   └── views/                    # Blade templates
├── routes/                       # Application routes
├── storage/                      # Application storage
├── tests/                        # Automated tests
│   ├── Unit/                     # Unit tests
│   ├── Feature/                  # Feature tests
│   └── Integration/              # Integration tests
├── vendor/                       # Composer dependencies
├── docker/                       # Docker configuration
├── .github/                      # GitHub Actions workflows
├── composer.json                 # PHP dependencies
├── package.json                  # Node.js dependencies
└── README.md                     # Project documentation` 
                    : 
                    `${project.id}/
├── src/                          # Source code
│   ├── main/
│   │   ├── java/
│   │   │   └── com/shammah/tracking/
│   │   │       ├── controller/    # API controllers
│   │   │       ├── service/       # Business logic
│   │   │       ├── repository/    # Data access
│   │   │       ├── model/         # Domain models
│   │   │       ├── config/        # Configuration
│   │   │       ├── exception/     # Exception handling
│   │   │       └── util/          # Utilities
│   │   └── resources/
│   │       ├── static/            # Static resources
│   │       ├── templates/         # Templates
│   │       └── application.yml    # Application config
│   └── test/                      # Test code
├── frontend/                      # React frontend
│   ├── src/
│   │   ├── components/            # UI components
│   │   ├── pages/                 # Page components
│   │   ├── services/              # API clients
│   │   └── utils/                 # Frontend utilities
│   └── package.json               # Frontend dependencies
├── gradle/                        # Gradle configuration
├── docker/                        # Docker configuration
├── k8s/                           # Kubernetes manifests
├── docs/                          # Documentation
├── .github/                       # CI/CD workflows
├── build.gradle                   # Build configuration
├── settings.gradle                # Project settings
└── README.md                      # Project documentation`
                  }
                </code>
              </pre>
            </div>
            
            {project.companyOwned && (
              <div className="bg-surface/30 p-4 rounded-md border-l-2 border-amber-500 mt-6">
                <p className="text-light/80 text-sm">
                  <span className="text-amber-400 font-semibold">Note:</span> The build process shown here is a generic representation. Actual implementation details are proprietary and have been simplified for demonstration purposes.
                </p>
              </div>
            )}
          </div>
        );
      
      default: // overview
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-bold text-accent mb-4">Overview</h2>
              <p className="text-light/80">{project.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-accent">Key Achievements</h3>
              <div className="bg-surface/30 p-4 rounded-md border-l-4 border-accent">
                <p className="text-light/90">{project.achievements}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-accent">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1.5 bg-surface/50 text-light/80 text-sm rounded-full border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.demoLink && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-accent">Demo</h3>
                <a 
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-accent text-dark font-medium rounded-md hover:bg-accent/90 transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Demo
                </a>
              </div>
            )}

            {project.companyOwned && (
              <div className="bg-surface/30 p-4 rounded-md border-l-2 border-amber-500">
                <p className="text-light/80 text-sm">
                  <span className="text-amber-400 font-semibold">Note:</span> This project is company-owned and in production. Due to contractual obligations, the demo is not publicly available, but I can provide a private walkthrough during an interview session.
                </p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <div className="mb-8">
          <Link 
            to="/#projects" 
            className="inline-flex items-center text-light/70 hover:text-accent transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </div>
        
        <div className="glass-card p-6 sm:p-8 rounded-lg">
          <div className="flex mb-8 border-b border-surface/30">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-3 font-medium text-sm transition-colors duration-300 relative ${
                activeTab === 'overview' ? 'text-accent' : 'text-light/70 hover:text-light'
              }`}
            >
              Overview
              {activeTab === 'overview' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('readme')}
              className={`px-4 py-3 font-medium text-sm transition-colors duration-300 relative ${
                activeTab === 'readme' ? 'text-accent' : 'text-light/70 hover:text-light'
              }`}
            >
              README
              {activeTab === 'readme' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>}
            </button>
            <button 
              onClick={() => setActiveTab('build')}
              className={`px-4 py-3 font-medium text-sm transition-colors duration-300 relative ${
                activeTab === 'build' ? 'text-accent' : 'text-light/70 hover:text-light'
              }`}
            >
              Build Process
              {activeTab === 'build' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>}
            </button>
          </div>

          <div className="py-4">
            {renderTab()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 