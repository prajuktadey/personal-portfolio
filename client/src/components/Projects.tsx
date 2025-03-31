import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBook, FaRoad, FaUsers } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

const projects = [
  {
    id: 1,
    title: "scribe",
    year: "2024",
    description: "a secure local application for private document interaction using language models with rag implementation.",
    icon: <FaBook className="text-4xl text-accent" />,
    techs: ["ollama", "langchain", "rag", "mistral 7b"],
    githubLink: "https://github.com/prajuktadey/scribe",
    liveLink: null
  },
  {
    id: 2,
    title: "yoda",
    year: "2024",
    description: "an ai-powered career roadmap generator that creates personalized learning paths based on job roles.",
    icon: <FaRoad className="text-4xl text-accent" />,
    techs: ["flowise ai", "vercel", "ai agents", "llm"],
    githubLink: "https://github.com/prajuktadey/road-map-generator",
    liveLink: null
  },
  {
    id: 3,
    title: "gitmatch",
    year: "2023",
    description: "a platform connecting developers with compatible hackathon teammates using ml-based matching.",
    icon: <FaUsers className="text-4xl text-accent" />,
    techs: ["react", "node.js", "bert", "nlp"],
    githubLink: null,
    liveLink: "https://gitmatchv1.vercel.app/"
  }
];

export default function Projects() {
  const { darkMode } = useDarkMode();
  
  return (
    <section id="projects" className="py-20 px-6 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">{project.year}</p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-light dark:bg-gray-600 dark:text-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-accent dark:text-blue-400 hover:underline"
                    >
                      <FaGithub className="inline mr-1" /> view on github
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block text-accent dark:text-blue-400 hover:underline"
                    >
                      <FaExternalLinkAlt className="inline mr-1" /> live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
