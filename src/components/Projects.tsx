import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectCategory = 'Nodejs' | 'Webflow';

const projects = {
  Nodejs: [
    {
      title: "SkillXYZ",
      description: "Professional Networking Platform Contributed to the development of SkillXYZ",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://skillxyz.com/" // Add your project link
    },
    {
      title: "RECOVERA",
      description: "RECOVERA, an innovative app for therapists to track patient recovery",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://play.google.com/store/apps/details?id=com.mindcrew.therapyclinicapp&pcampaignid=web_share&pli=1" // Add your project link
    },
    {
      title: "Accessibility Research Platform",
      description: "Accessibility Research Platform, connecting researchers with participants for accessibility studies",
      image: "https://play-lh.googleusercontent.com/Pidwbce_FuBdwHvsNA0TfxpjfHalf-DQql8Az4mobwTwR5x22WuHv6LNSEbJqlKKU4I=w240-h480-rw",
      link: "https://play.google.com/store/apps/details?id=com.accessibilityresearch&pcampaignid=web_share" // Add your project link
    },
    {
      title: "WhatsApp Lease Agreement Chatbot",
      description: "WhatsApp bot for rental agreements, allowing landlords to send agreement forms directly to tenants via WhatsApp.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
   // Add your project link
    }
  ],
  Webflow: [
    {
      title: "Flexecharge",
      description: "Developed a comprehensive EV charging platform using Webflow, providing a powerful foundation for managing electric vehicle charging.",
      image: "https://cdn.prod.website-files.com/65e72f3b6a6f3fc81c1aed32/674845565912713328571880_6720976fac0991a852601f20_image-203.png",
      link: "https://www.flexecharge.com/" // Add your project link
    }
  ]
} as Record<ProjectCategory, Array<{ title: string; description: string; image: string; link: string; }>>;

export const Projects = () => {
  const [category, setCategory] = useState<ProjectCategory>('Nodejs');

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(projects).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as ProjectCategory)}
              className={`px-6 py-2 rounded-full ${
                category === cat 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-700 text-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects[category]?.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
