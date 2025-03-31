import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";
import profileImage from "@/assets/profile.jpg";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Hero() {
  const { darkMode } = useDarkMode();

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent dark:text-blue-400 mb-4">hello, i'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight dark:text-white">prajukta dey</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              computer science student & aspiring ml engineer specializing in natural language processing
            </p>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://github.com/prajuktadey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prajukta-dey-a24252239/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://x.com/prajzisclueless" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent dark:text-blue-400 hover:text-dark dark:hover:text-white transition-colors"
                aria-label="Twitter/X"
              >
                <SiX className="text-2xl" />
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-dark dark:bg-gray-800 text-white rounded-lg hover:bg-accent dark:hover:bg-blue-600 transition-colors"
              >
                view my work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 border border-dark dark:border-white text-black dark:text-white rounded-lg hover:bg-light dark:hover:bg-gray-700 transition-colors"
              >
                get in touch
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-light dark:border-gray-700 shadow-lg">
              <img 
                src={profileImage} 
                alt="Prajukta Dey" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
