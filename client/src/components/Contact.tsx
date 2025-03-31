import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMedium, SiX } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { useDarkMode } from "@/hooks/useDarkMode";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { darkMode } = useDarkMode();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const openInGmail = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "missing information",
        description: "please fill out all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Prepare Gmail compose link parameters
    const to = "theprajuktadey@gmail.com";
    const subject = encodeURIComponent(formData.subject || "Message from Portfolio");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    
    // Open Gmail compose in a new tab
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`, '_blank');
    
    console.log('Gmail compose opened');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "missing information",
        description: "please fill out all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare mailto parameters
      const subject = encodeURIComponent(formData.subject || "Message from Portfolio");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      );
      
      // Open the default mail client
      window.open(`mailto:theprajuktadey@gmail.com?subject=${subject}&body=${body}`);
      
      console.log('Email client opened');
      
      toast({
        title: "message ready to send",
        description: "your message has been prepared. if outlook opened instead of gmail, use the 'open in gmail' link on the left!",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error: any) {
      console.error('Email error:', error);
      toast({
        title: "error",
        description: "there was an error preparing your message. please try again or email me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          get in touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="dark:text-white"
          >
            <h3 className="text-xl font-semibold mb-6">contact info</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FaEnvelope className="text-accent dark:text-blue-400 mr-4 w-6" />
                <a href="mailto:theprajuktadey@gmail.com" className="hover:text-accent dark:hover:text-blue-400 transition-colors">
                  theprajuktadey@gmail.com
                </a>
              </div>
              <div className="flex items-center mt-2">
                <FaEnvelope className="text-accent dark:text-blue-400 mr-4 w-6" />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=theprajuktadey@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-accent dark:hover:text-blue-400 transition-colors"
                >
                  open in gmail
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-accent dark:text-blue-400 mr-4 w-6" />
                <span>bangalore, india</span>
              </div>
            </div>
            
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              feel free to reach out via email for job opportunities, collaborations, 
              or any inquiries you might have. i'm always open to discussing new projects 
              and ideas.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/prajuktadey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="GitHub profile"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prajukta-dey-a24252239/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://x.com/prajzisclueless" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="X/Twitter profile"
              >
                <SiX className="text-2xl" />
              </a>
              <a 
                href="https://medium.com/@theprajuktadey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="Medium profile"
              >
                <SiMedium className="text-2xl" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium dark:text-white">name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-subtle dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium dark:text-white">email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-subtle dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium dark:text-white">subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-subtle dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium dark:text-white">message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-subtle dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-3 bg-dark dark:bg-gray-800 text-white rounded-lg hover:bg-accent dark:hover:bg-blue-600 transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "sending..." : "send with email app"}
                </button>
                
                <button 
                  type="button" 
                  onClick={openInGmail}
                  disabled={isSubmitting}
                  className="w-full py-3 bg-accent dark:bg-blue-600 text-white rounded-lg hover:bg-dark dark:hover:bg-gray-800 transition-colors disabled:opacity-70"
                >
                  send with gmail
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
