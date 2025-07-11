import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { LaptopModel } from './LaptopModel';

export const About = () => {
  return (
    <section className="relative py-20 bg-gray-900/95" id="about">
      <div className="absolute inset-0 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <LaptopModel />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-12">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
          I'm a passionate Full Stack Developer with 2+ years of experience building scalable web applications using Java Spring Boot, Node.js, javascript, Typescript and React.js. At Mindcrew Technologies, I've architected 60+ RESTful APIs and improved system performance by 40% while implementing robust security measures with JWT and OAuth2.
My expertise spans microservices architecture, database optimization with MongoDB and MySQL, and modern frontend development. I've successfully reduced deployment time by 50% through CI/CD pipeline implementation and containerization with Docker. Additionally, I've ventured into AI development, building intelligent chatbots with OpenAI integration and leveraging LLM models for real-world applications like my Renvantion.AI project. My prompt engineering skills enable me to create sophisticated AI-powered solutions that enhance user experiences.
I thrive in collaborative Agile environments, mentoring junior developers and delivering innovative solutions that drive real business impact.
When I'm not coding, you'll find me solving algorithmic challenges on LeetCode and exploring emerging technologies in web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}