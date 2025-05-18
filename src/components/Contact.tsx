import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import * as LucideIcons from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    try {
      setIsSubmitting(true);
      
      const formData = new FormData(formRef.current);
      const response = await fetch("https://formspree.io/f/mqaqnopp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      
      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
      iconName.charAt(0).toUpperCase() + iconName.slice(1)
    ];
    return Icon ? <Icon size={20} className="text-indigo-600" /> : null;
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 transition-opacity duration-1000 opacity-0 bg-gray-50"
    >
      <Toaster position="bottom-center" />
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Get In Touch</h2>
          <div className="w-16 h-1 mx-auto mb-6 bg-indigo-600"></div>
          <p className="text-gray-700">
            Have a question or want to work together? Feel free to reach out to me.
          </p>
        </div>
        
        <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto md:grid-cols-2">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-xl font-semibold">Send Me a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">
                  Your Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="mb-6 text-xl font-semibold">Contact Information</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">Email</span>
                    <a href="mailto:omkarsoni7277@gmail.com" className="text-gray-600 hover:text-indigo-600">
                      omkarsoni7277@gmail.com
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <span className="block text-sm font-medium text-gray-700">Location</span>
                    <span className="text-gray-600">Bhilai, Chhattisgarh, India</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="mb-6 text-xl font-semibold">Connect With Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition-colors duration-300 bg-indigo-100 rounded-full hover:bg-indigo-600 hover:text-white"
                    aria-label={link.name}
                  >
                    {renderIcon(link.icon)}
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-2 font-medium text-indigo-600 transition-colors duration-300 border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;