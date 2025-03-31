import { motion } from "framer-motion";
import { FaAward, FaTrophy, FaMedal, FaGlobe } from "react-icons/fa";
import { useDarkMode } from "@/hooks/useDarkMode";

const achievements = [
  {
    id: 1,
    title: "mentee, amazon ml summer school",
    year: "2024",
    icon: <FaAward className="text-3xl" />,
    description: "secured selection as one of 3,000 top students across india for a competitive program in advanced machine learning. attended expert-led sessions on key topics like supervised learning, unsupervised learning, and neural networks conducted by amazon scientists."
  },
  {
    id: 2,
    title: "top 30 teams, smart india hackathon",
    year: "2023",
    icon: <FaTrophy className="text-3xl" />,
    description: "achieved top 30 position for integrating ml models such as vgg net and real-time eeg-based emotion recognition systems enhancing borewell rescue efficiency by 30%."
  },
  {
    id: 3,
    title: "best all girls' team, hack4bengal 2.0",
    year: "2023",
    icon: <FaMedal className="text-3xl" />,
    description: "awarded \"best all-girls team\" for innovative gitmatch project."
  },
  {
    id: 4,
    title: "delegate, harvard project for asian and international relations (hpair)",
    year: "2023",
    icon: <FaGlobe className="text-3xl" />,
    description: "selected to represent india at the asia conference, engaging with global leaders on tech innovation."
  }
];

export default function Achievements() {
  const { darkMode } = useDarkMode();
  
  return (
    <section className="py-20 bg-light dark:bg-gray-900 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 text-accent dark:text-blue-400">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white">{achievement.title}</h3>
                  <p className="text-accent dark:text-blue-400">{achievement.year}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
