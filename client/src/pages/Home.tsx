import { useEffect } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { darkMode } = useDarkMode();
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="font-manrope text-black dark:text-white bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
