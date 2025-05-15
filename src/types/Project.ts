export type Project = {
  id: string;
  title: string;
  description: string;
  achievements: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  hasReadme?: boolean;
  companyOwned?: boolean;
};

export const projects: Project[] = [
  {
    id: 'order-management',
    title: 'Order Management System',
    description: 'A comprehensive system for handling customer orders from placement to delivery.',
    achievements: 'Reduced order-processing time 35%; order accuracy +25%.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'React', 'Docker'],
    image: 'https://images.pexels.com/photos/7948027/pexels-photo-7948027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: 'https://drive.google.com/file/d/1vHe3j1lVtpGEJdCEVsVe3r_GCW-MhNTu/view?usp=drive_link',
    hasReadme: true
  },
  {
    id: 'payment-gateway',
    title: 'Secure Payment Gateway',
    description: 'PCI-compliant payment processing system with advanced fraud detection.',
    achievements: 'Integrated PCI-compliant payments; 15% rise in repeat purchases.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'AWS'],
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    companyOwned: true,
    hasReadme: true
  },
  {
    id: 'courier-tracking',
    title: 'Courier Tracking API',
    description: 'Real-time tracking API for delivery personnel and packages with customer notifications.',
    achievements: 'Real-time shipment updates; customer satisfaction +20%.',
    technologies: ['Java', 'Spring Boot', 'MongoDB', 'Google Maps API', 'Kubernetes'],
    image: 'https://images.pexels.com/photos/7709929/pexels-photo-7709929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    companyOwned: true,
    hasReadme: true
  },
  {
    id: 'ai-chatbot',
    title: 'AI-Powered Chatbot',
    description: 'Natural language processing chatbot that handles customer support inquiries.',
    achievements: 'NLP-based helpdesk bot; support efficiency +40%.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'React', 'Google Cloud'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: 'https://drive.google.com/file/d/1n6YCqf2Ty__CFc6scnn4RRDD7KVVFN-d/view?usp=drive_link',
    hasReadme: true
  }
]; 