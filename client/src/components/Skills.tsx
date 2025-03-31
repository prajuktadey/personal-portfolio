import { motion } from "framer-motion";
import { FaCode, FaRobot, FaCubes, FaCloud, FaDatabase } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

const skillCategories = [
  {
    id: 1,
    title: "programming languages",
    icon: <FaCode className="text-accent mr-3" />,
    skills: ["python", "java", "c"]
  },
  {
    id: 2,
    title: "ai & machine learning",
    icon: <FaRobot className="text-accent mr-3" />,
    skills: ["langchain", "hugging face transformers", "gpt-3/gpt-4", "mistral (7b)", "scikit-learn", "pytorch"]
  },
  {
    id: 3,
    title: "frameworks",
    icon: <FaCubes className="text-accent mr-3" />,
    skills: ["django", "fastapi", "flask", "node.js", "spring boot"]
  },
  {
    id: 4,
    title: "cloud & devops",
    icon: <FaCloud className="text-accent mr-3" />,
    skills: ["aws", "gcp", "microsoft azure", "docker", "git", "github"]
  },
  {
    id: 5,
    title: "databases",
    icon: <FaDatabase className="text-accent mr-3" />,
    skills: ["mysql", "mongodb"]
  }
];

export default function Skills() {
  const { darkMode } = useDarkMode();
  
  return (
    <section id="skills" className="py-20 bg-light dark:bg-gray-800 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
                {category.icon} {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="skill-pill px-4 py-2 bg-light dark:bg-gray-600 rounded-lg transition-colors duration-300 hover:bg-dark hover:text-white dark:hover:bg-gray-900 dark:text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
