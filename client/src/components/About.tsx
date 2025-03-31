import { motion } from "framer-motion";
import { useDarkMode } from "@/hooks/useDarkMode";

export default function About() {
  const { darkMode } = useDarkMode();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-light dark:bg-gray-800 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          about me
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="dark:text-white">
            <h3 className="text-xl font-semibold mb-4">who i am</h3>
            <p className="mb-6 leading-relaxed dark:text-gray-300">
              i'm a computer science and engineering student at kalinga institute of industrial technology (kiit), bhubaneswar, 
              with a passion for machine learning, particularly in natural language processing.
            </p>
            <p className="mb-6 leading-relaxed dark:text-gray-300">
              currently interning as a te-oracle analyst at kpmg, where i'm applying my technical skills to solve real-world problems.
              my academic foundation and practical experience have equipped me with strong problem-solving abilities and a deep understanding of 
              ai/ml technologies.
            </p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">education</h3>
              <div className="mb-4">
                <p className="font-semibold">bachelor of technology in computer science and engineering</p>
                <p className="dark:text-gray-300">kalinga institute of industrial technology, bhubaneswar</p>
                <p className="text-accent dark:text-blue-400">2021 - 2025 | cgpa: 8.60</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="dark:text-white">
            <h3 className="text-xl font-semibold mb-4">what drives me</h3>
            <p className="mb-6 leading-relaxed dark:text-gray-300">
              i'm passionate about creating innovative solutions using the latest technologies, particularly in the fields 
              of machine learning and natural language processing. my goal is to develop applications that make a meaningful impact.
            </p>
            <p className="mb-6 leading-relaxed dark:text-gray-300">
              beyond technical work, i enjoy mentoring others, having guided 30+ students in implementing end-to-end ml pipelines 
              as machine learning lead at google developer students club.
            </p>
            <div>
              <h3 className="text-xl font-semibold mb-4">current focus</h3>
              <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">
                <li>expanding expertise in large language models and generative ai</li>
                <li>developing privacy-focused ai applications</li>
                <li>creating educational content for aspiring ml engineers</li>
                <li>exploring cloud-based ml deployment solutions</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
