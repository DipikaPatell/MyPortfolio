import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import { CodeModel } from './CodeModel';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const titles = [
  "Software Engineer",
  "Backend Developer",
  "Problem Solver",
  "Tech Enthusiast",
];

export const Hero = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
    // Replace with the actual path to your resume file
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1xZyG6pEzjsOABl-Cb99EWIjxVYnjfQC_';
    ;

    
    // Create an anchor element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Dipika_Patel_Resume.pdf'; // The name that will be used when downloading
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen bg-[#020617]" id="home">
      {/* 3D Model Background */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <CodeModel />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <motion.h1 
                className="text-7xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Hi there, I'm{' '}
                <span className="font-['Pacifico'] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Dipika Patel
                </span>
              </motion.h1>

              <div className="h-16 mb-6 text-3xl font-bold text-emerald-500">
                <Typewriter
                  options={{
                    strings: titles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </div>
              
              {/* Resume Download Button */}
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold mb-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <motion.div 
                className="flex gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {[
                  { icon: Github, href: "https://github.com/DipikaPatel" },
                  { icon: Linkedin, href: "https://linkedin.com/in/dipika-patel-8224821b4" },
                  { icon: Mail, href: "mailto:dipika155patel@gmail.com" }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <item.icon className="w-8 h-8" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-indigo-500">
                <img 
                  src="" 
                  alt="Dipika Patel"
                  className="w-full h-full object-cover"
                />
              </div> */}
              {/* <motion.div 
                className="absolute -bottom-4 -right-4 bg-indigo-600 rounded-lg p-2 shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              > */}
              {/* </motion.div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}