import React, { useState } from 'react';
import { Mail, Linkedin, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Create FormData object
    const apiFormData = new FormData();
    
    // Add form fields
    apiFormData.append('name', formData.name);
    apiFormData.append('email', formData.email);
    apiFormData.append('message', formData.message);
    
    // Add access key from Web3Forms
    apiFormData.append('access_key', '3e9ce5af-3fed-4362-bbec-cefdb829457e');
    
    // Customize email sender name and template
    apiFormData.append('from_name', 'Portfolio');
    apiFormData.append('subject', 'New Portfolio Contact Request');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: apiFormData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Reset form status after 3 seconds
        setTimeout(() => {
          setFormStatus('idle');
        }, 3000);
      } else {
        console.error('Form submission error:', data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Let's connect!
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+254725940547" className="opacity-80 hover:opacity-100 transition-opacity">
                    +254 725 940 547
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:victorshammah50@gmail.com" className="opacity-80 hover:opacity-100 transition-opacity">
                    victorshammah50@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/victor-shammah-8949211b2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    victor-shammah-8949211b2
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="opacity-80">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                  placeholder="Hello Victor, I'd like to discuss a project..."
                ></textarea>
              </div>
              
              {/* Honeypot field to prevent spam */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <button
                type="submit"
                disabled={formStatus === 'sending' || formStatus === 'success'}
                className={`px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 ${
                  formStatus === 'success' 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-accent hover:bg-accent/90'
                } text-white w-full`}
              >
                {formStatus === 'sending' && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {formStatus === 'success' && <span>Message Sent!</span>}
                {(formStatus === 'idle' || formStatus === 'error') && (
                  <>
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {formStatus === 'error' && (
                <p className="text-red-300 text-sm mt-2">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;