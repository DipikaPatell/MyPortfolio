import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectCategory = 'Fullstack' | 'Webflow';

const projects = {
  Fullstack: [
    {
      title: "SkillXYZ",
      description: "Professional Networking Platform Contributed to the development of SkillXYZ",
      image: "https://skillxyz.com/website_hero_bot.svg",
      link: "https://skillxyz.com/"
    },
    {
      title: "RECOVERA",
      description: "RECOVERA, an innovative app for therapists to track patient recovery",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://play.google.com/store/apps/details?id=com.mindcrew.therapyclinicapp&pcampaignid=web_share&pli=1"
    },
    {
      title: "Accessibility Research Platform",
      description: "Accessibility Research Platform, connecting researchers with participants for accessibility studies",
      image: "https://www.ux-republic.com/wp-content/uploads/2023/03/image2-16.png",
      link: "https://www.accessibilityresearch.com/"
    },
    {
      title: "WhatsApp Lease Agreement Chatbot",
      description: "WhatsApp bot for rental agreements, allowing landlords to send agreement forms directly to tenants via WhatsApp.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "" // Add your project link
    },
    {
      title: "Revnation.ai",
      description: "RevNation.ai – Your AI-Powered Corvette Expert. RevNation.ai is an intelligent AI assistant built to answer all Corvette-related queries—from performance upgrades and maintenance tips to feature insights. Powered by Grok API and fine-tuned with real user queries stored in Pinecone, our assistant also recommends relevant products, YouTube videos, review sites, and forum discussions to enhance your Corvette experience.",
      image: "https://trackobit.com/wp-content/uploads/Artificial-Intelligence-The-Future-of-Vehicles.jpeg",
      link: "https://revnation.ai/"
    }
  ],
  Webflow: [
    {
      title: "Flexecharge",
      description: "Developed a comprehensive EV charging platform using Webflow, providing a powerful foundation for managing electric vehicle charging.",
      image: "https://cdn.prod.website-files.com/65e72f3b6a6f3fc81c1aed32/67cfcc39b82d265a604d319a_FEC_SYSTEM-p-800.png",
      link: "https://www.flexecharge.com/"
    }
  ]
} as Record<ProjectCategory, Array<{ title: string; description: string; image: string; link: string; }>>;

export const Projects = () => {
  const [category, setCategory] = useState<ProjectCategory>('Fullstack');

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