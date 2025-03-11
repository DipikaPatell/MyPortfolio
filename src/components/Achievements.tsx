import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  "Best Personality Award Awarded 'Best Personality Award' at Mindcrew for uplifting the team with positivity, collaboration, and inspiring presence",
];

export const Achievements = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h3 className="text-xl text-indigo-400 text-center mb-2">SOME GLIMPSES ON...</h3>
        <h1 className="text-4xl font-bold text-white mb-12 text-center">Achievements.</h1>
        
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 mb-6"
            >
              <div className="p-2 bg-indigo-600 rounded-lg shrink-0">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-300 text-lg">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}