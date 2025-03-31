import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { DarkModeToggle } from "@/components/ui/darkModeToggle";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 ${scrolled ? 'bg-opacity-90 shadow-sm dark:bg-opacity-90' : 'bg-opacity-90 dark:bg-opacity-90'} z-50 border-b border-subtle dark:border-gray-700`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-black dark:text-white">
          prajukta<span className="text-accent dark:text-blue-400">.</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-4">
            <li>
              <a href="#about" className="nav-link text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                about
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                projects
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                skills
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                experience
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                contact
              </a>
            </li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1v4Emtcn2ZM-A0ROnVNp-rxAiLEisbz8i/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link text-accent dark:text-blue-400 hover:text-black dark:hover:text-white transition-colors relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-accent dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                resume
              </a>
            </li>
          </ul>
          <DarkModeToggle />
        </nav>
        
        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button 
            className="ml-2 text-dark dark:text-white focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white dark:bg-gray-900 py-4 px-6 border-t border-subtle dark:border-gray-700 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <ul className="space-y-4">
          <li>
            <a 
              href="#about" 
              className="block py-2 text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              about
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="block py-2 text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              projects
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className="block py-2 text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              skills
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="block py-2 text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="block py-2 text-black dark:text-white hover:text-accent dark:hover:text-blue-400 transition-colors"
              onClick={closeMobileMenu}
            >
              contact
            </a>
          </li>
          <li>
            <a 
              href="https://drive.google.com/file/d/1v4Emtcn2ZM-A0ROnVNp-rxAiLEisbz8i/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-accent dark:text-blue-400 hover:text-black dark:hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
