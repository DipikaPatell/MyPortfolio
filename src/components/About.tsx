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
I am a dedicated Backend Developer with two years of professional experience at MindCrew Technologies, specializing in crafting high-performance web applications. My technical expertise centers on Node.js, Express.js, and MongoDB, where I've consistently demonstrated the ability to develop scalable and efficient software solutions.

Throughout my career, I have:
- Enhanced system performance by 30% through strategic optimization techniques
- Leveraged AI technologies to improve team productivity by 40%
- Developed robust backend infrastructure that supports complex web applications
- Collaborated effectively within cross-functional teams to deliver innovative technological solutions

My passion lies in exploring cutting-edge technologies and transforming complex challenges into elegant, efficient code. I thrive on continuous learning and am always eager to adopt new technologies that can drive technological innovation and business growth.

As a technology enthusiast, I'm committed to creating impactful software that not only meets but exceeds performance expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}