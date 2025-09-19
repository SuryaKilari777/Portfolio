import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(false);
  const typingSound = useRef(null);
  const [canPlaySound, setCanPlaySound] = useState(false);

  // Initialize typing sound
  useEffect(() => {
    typingSound.current = new Audio(`${process.env.PUBLIC_URL}/sounds/typing.mp3`);
  }, []);

  // Enable sound after first user interaction
  useEffect(() => {
    const handleStart = () => setCanPlaySound(true);
    window.addEventListener("click", handleStart, { once: true });
    window.addEventListener("keydown", handleStart, { once: true });
    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
    }),
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.3 },
      onUpdate: () => {
        if (canPlaySound && typingSound.current) {
          typingSound.current.currentTime = 0;
          typingSound.current.play().catch(() => {});
        }
      }
    },
  };

  const name = "Hi, I'm Surya 👋";
  const subtitle = "Aspiring Software Development Engineer";

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <Navbar dark={dark} setDark={setDark} />
        
        {/* Hero Section */}
        <motion.section
          className="flex flex-col items-center justify-center h-screen text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/p.jpg`}
            alt="Surya"
            className="w-60 h-60 rounded-full shadow-xl mb-6 border-4 border-blue-500"
          />

          {/* Name Animation */}
          <motion.h1
            className="text-5xl font-bold"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {name.split("").map((char, idx) => (
              <motion.span key={idx} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.p
            className="mt-4 text-xl"
            variants={container}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {subtitle.split("").map((char, idx) => (
              <motion.span key={idx} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.section>

        {/* Description Section */}
        <motion.section
          className="py-16 px-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed">
            I'm Surya, a passionate and dedicated aspiring Software Development Engineer 
            with strong interest in Full Stack Development. I enjoy building scalable 
            applications, solving real-world problems through code, and continuously 
            learning new technologies to improve my skills. My journey is driven by 
            determination and the goal of making my family proud through my work and 
            achievements.
          </p>
        </motion.section>

        <Skills canPlaySound={canPlaySound} />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
