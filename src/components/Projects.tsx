import { useState } from 'react';
import { motion } from 'framer-motion';

type ProjectCategory = 'Fullstack' | 'Webflow' | 'AI tools'|'LLM'|'Automation';

const projects: Record<ProjectCategory, Array<{ title: string; description: string; image: string; link: string; }>> = {
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
      link: ""
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
  ],
  "AI tools": [
    {
      title: "GPT-4o / GPT-4.5",
      description: "OpenAI's flagship model with multimodal capabilities, real-time reasoning, vision, and audio input/output for comprehensive AI solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      link: "https://openai.com/gpt-4"
    },
    {
      title: "Claude 3 Opus",
      description: "Anthropic's advanced AI with long-context understanding (up to 200K tokens), designed for safety and alignment in complex reasoning tasks.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      link: "https://claude.ai"
    },
    {
      title: "Gemini 1.5 Pro",
      description: "Google DeepMind's multimodal AI with deep integration into Google ecosystem, offering powerful reasoning and creative capabilities.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      link: "https://gemini.google.com"
    },
    {
      title: "LangChain",
      description: "Powerful framework for building LLM-powered applications with chaining capabilities, tools, memory, and intelligent agents.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      link: "https://langchain.com"
    },
    {
      title: "LlamaIndex",
      description: "RAG framework specialized in document loading, chunking, and intelligent querying for retrieval-augmented generation applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      link: "https://llamaindex.ai"
    },
    {
      title: "OpenAI Assistants API",
      description: "Chat-based workflow system offering plug-and-play AI agents with persistent memory for seamless conversational experiences.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
      link: "https://platform.openai.com/docs/assistants"
    },
    {
      title: "Pinecone Vector Database",
      description: "High-performance vector database enabling fast semantic search capabilities for RAG applications and similarity matching.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80",
      link: "https://pinecone.io"
    },
    {
      title: "Whisper",
      description: "OpenAI's accurate speech-to-text model capable of transcribing audio in multiple languages with high precision.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=800&q=80",
      link: "https://openai.com/whisper"
    },
    {
      title: "ElevenLabs",
      description: "Advanced text-to-speech platform generating lifelike AI voices with emotional depth and natural intonation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      link: "https://elevenlabs.io"
    },
    {
      title: "RunwayML",
      description: "AI video generation platform featuring Gen-2 technology for text-to-video conversion, inpainting, and creative video editing.",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2F746dqb4phvyi1xtji03z.png",
      link: "https://runwayml.com"
    },
    {
      title: "Midjourney",
      description: "Leading AI image generation platform creating stylized, artistic, and realistic images from text prompts with exceptional quality.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?auto=format&fit=crop&w=800&q=80",
      link: "https://midjourney.com"
    }
  ],
  LLM: [
    {
      title: "Mistral (Mixtral 8x7B)",
      description: "Open-weight Mixture of Experts model by Mistral.ai, delivering fast and powerful performance for various AI applications.",
      image: "https://framerusercontent.com/images/QbnO5yCmsn51bvHSt5vstNoJBM.webp",
      link: "https://mistral.ai"
    },
    {
      title: "LLaMA 3 (70B)",
      description: "Meta's open-source large language model widely used in private deployments for customizable AI solutions.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
      link: "https://llama.meta.com"
    },
    {
      title: "Command R+",
      description: "Cohere's retrieval-augmented generation (RAG) optimized model designed for enterprise knowledge management and search.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      link: "https://cohere.com"
    },
    {
      title: "xAI's Grok",
      description: "Advanced language model by xAI with real-time information access and conversational AI capabilities.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
      link: "https://grok.x.ai"
    },
    {
      title: "Ollama",
      description: "Run LLMs locally with support for LLaMA, Mistral, and other models for privacy-focused AI deployments.",
      image: "https://cdn.prod.website-files.com/6746e4625c4bb3fb49ba7f5b/679b62dadb56682d350878f5_ollama-ai-unleashed-4.svg",
      link: "https://ollama.ai"
    },
    {
      title: "OpenDevin",
      description: "Open-source AI software engineer capable of autonomous DevOps tasks and coding operations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/OpenDevin/OpenDevin"
    }
  ],
  Automation: [
    {
      title: "Zapier / Make.com",
      description: "Workflow automation platforms that connect apps and automate tasks with AI-enhanced steps for intelligent process automation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://zapier.com"
    },
    {
      title: "Autogen Studio (Microsoft)",
      description: "Agent orchestration platform for creating multi-agent workflows using LLMs for complex automated tasks.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      link: "https://github.com/microsoft/autogen"
    },
    {
      title: "SuperAGI / CrewAI",
      description: "Agent frameworks for building autonomous AI agents that can plan, act, and execute complex workflows independently.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      link: "https://superagi.com"
    },
    {
      title: "Browserless / Playwright",
      description: "Web automation tools with AI integration for programmatic browser control and intelligent web scraping.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://browserless.io"
    },
    {
      title: "Airbyte / Prefect",
      description: "Data workflow automation platforms for extract-transform-load (ETL) operations with AI-enhanced data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://airbyte.com"
    },
    {
      title: "Bardeen.ai",
      description: "Browser automation tool using natural language to automate repetitive browser tasks with AI intelligence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://bardeen.ai"
    },
    {
      title: "Firecrawl",
      description: "AI web crawler with intelligent filtering and RAG support for automated data extraction and processing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      link: "https://firecrawl.dev"
    },
    {
      title: "LangGraph",
      description: "State-machine powered agent orchestration framework for building complex AI workflows and decision trees.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBFl2C_iLLDe05PWiB4R3mKothPbnrosV_Q&s",
      link: "https://langchain-ai.github.io/langgraph"
    }
  ]
};

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
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};