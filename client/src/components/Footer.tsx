import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Footer() {
  const { darkMode } = useDarkMode();
  
  return (
    <footer className={`${darkMode ? 'bg-black' : 'bg-dark'} text-white py-10 px-6`}>
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">prajukta dey</h2>
            <p className="text-gray-400">computer science student & aspiring ml engineer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a 
                href="https://github.com/prajuktadey" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/prajukta-dey-a24252239/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="mailto:theprajuktadey@gmail.com" 
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} prajukta dey. all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
