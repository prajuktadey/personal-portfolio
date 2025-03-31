import { motion } from "framer-motion";
import { FaBriefcase, FaUsers, FaCertificate } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

const workExperience = [
  {
    id: 1,
    title: "te-oracle analyst intern",
    company: "kpmg",
    year: "jan 2025 - current",
    description: [
      "working as an oracle analyst with experience in implementing and optimizing oracle-based solutions for clients."
    ]
  },
  {
    id: 2,
    title: "intern",
    company: "stellablue interactive services, kolkata",
    year: "2023",
    description: [
      "designed and implemented a machine learning pipeline using amazon textract to automate medical term extraction, reducing manual processing time by 30%.",
      "applied advanced natural language processing (nlp) techniques for data preprocessing, achieving 90% accuracy in medical term extraction from unstructured documents."
    ]
  }
];

const responsibilities = [
  {
    id: 1,
    title: "machine learning lead",
    organization: "google developer students club",
    period: "2023-2024",
    description: "mentored 30+ students, helping them implement end-to-end ml pipelines."
  },
  {
    id: 2,
    title: "organizing committee member",
    organization: "kiit techfest 7.0",
    period: "2023-2024",
    description: "coordinated events, increasing participation by 30% compared to the previous year."
  }
];

const certifications = [
  {
    id: 1,
    title: "oracle cloud infrastructure 2024 generative ai certified professional",
    issuer: "oracle university",
    year: "2024",
    link: "https://drive.google.com/file/d/1AMyn9EQj_MTBZG5CGiH8Zeh0qjix3QNW/view?usp=drive_link"
  },
  {
    id: 2,
    title: "django web framework",
    issuer: "meta",
    year: "2024",
    link: "https://drive.google.com/file/d/15qUo19qIPjdqSg5hdWDSbdRKeT7twIAN/view?usp=drive_link"
  },
  {
    id: 3,
    title: "aws academy cloud foundations",
    issuer: "aws academy",
    year: "2024",
    link: "https://drive.google.com/file/d/1_5G5R5UVxwTVDb6qVhCBMmfz3IWzNJt-/view?usp=drive_link"
  },
  {
    id: 4,
    title: "prompt engineering for chatgpt",
    issuer: "vanderbilt university",
    year: "2024",
    link: "https://drive.google.com/file/d/1j40E0lQZnvSY1esaIfiCxyWhCTQS7fdP/view?usp=drive_link"
  },
  {
    id: 5,
    title: "microsoft azure ai fundamentals (ai-900)",
    issuer: "microsoft",
    year: "2023",
    link: "https://drive.google.com/file/d/1_zsdezThKvNoMJy_sOGbAeO35bx8RXy3/view?usp=drive_link"
  },
  {
    id: 6,
    title: "generative ai with large language models",
    issuer: "deeplearning.ai",
    year: "2023",
    link: "https://drive.google.com/file/d/1NJMjSy-QEjsMst3-wpkP4aKYfIN-_2WK/view?usp=drive_link"
  }
];

export default function Experience() {
  const { darkMode } = useDarkMode();
  
  return (
    <section id="experience" className="py-20 px-6 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          experience
        </motion.h2>
        
        {/* Work Experience */}
        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-6 flex items-center dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaBriefcase className="text-accent dark:text-blue-400 mr-3" /> work experience
          </motion.h3>
          
          <div className="relative timeline pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            {workExperience.map((item, index) => (
              <motion.div 
                key={item.id}
                className="timeline-item relative pb-12 pl-4 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-[10px] before:h-[10px] before:rounded-full before:bg-dark dark:before:bg-blue-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="font-semibold dark:text-white">{item.title}</h4>
                <p className="text-accent dark:text-blue-400 mb-1">{item.company} | {item.year}</p>
                {item.description.map((desc, i) => (
                  <p key={i} className="text-gray-700 dark:text-gray-300 mb-2">
                    {desc}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Positions of Responsibility */}
        <div className="mb-16">
          <motion.h3 
            className="text-xl font-semibold mb-6 flex items-center dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaUsers className="text-accent dark:text-blue-400 mr-3" /> positions of responsibility
          </motion.h3>
          
          <div className="relative timeline pl-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
            {responsibilities.map((item, index) => (
              <motion.div 
                key={item.id}
                className="timeline-item relative pb-12 pl-4 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-[10px] before:h-[10px] before:rounded-full before:bg-dark dark:before:bg-blue-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <h4 className="font-semibold dark:text-white">{item.title}</h4>
                <p className="text-accent dark:text-blue-400 mb-1">{item.organization} | {item.period}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <motion.h3 
            className="text-xl font-semibold mb-6 flex items-center dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FaCertificate className="text-accent dark:text-blue-400 mr-3" /> certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-subtle"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block hover:opacity-80 transition-opacity"
                >
                  <p className="font-semibold dark:text-white">{cert.title}</p>
                  <p className="text-accent dark:text-blue-400">{cert.issuer} | {cert.year}</p>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
