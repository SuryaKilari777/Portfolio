import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "Java", logo: "/logos/java.png" },
  { name: "Python", logo: "/logos/python.png" },
  { name: "C++", logo: "/logos/cpp.png" },
  { name: "DSA", logo: "/logos/dsa.png" },
  { name: "OOP", logo: "/logos/oop.png" },
  { name: "DBMS", logo: "/logos/dbms.png" },
  { name: "OS", logo: "/logos/os.png" },
  { name: "Git", logo: "/logos/git.png" },
  { name: "GitHub", logo: "/logos/github.png" },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const skillRefs = useRef([]);
  const roosterSound = useRef(null);
  const [canPlaySound, setCanPlaySound] = useState(false); // allow play after first interaction

  // Initialize chick sound
  useEffect(() => {
    roosterSound.current = new Audio("/sounds/chicks.mp3");
  }, []);

  // Enable sound on first user interaction
  useEffect(() => {
    const handleStart = () => setCanPlaySound(true);
    window.addEventListener("click", handleStart, { once: true });
    window.addEventListener("keydown", handleStart, { once: true });
    return () => {
      window.removeEventListener("click", handleStart);
      window.removeEventListener("keydown", handleStart);
    };
  }, []);

  // Update rooster position and play sound
  useEffect(() => {
    const el = skillRefs.current[activeSkill];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentNode.getBoundingClientRect();
      setPos({
        x: rect.left - parentRect.left + rect.width / 2 - 20,
        y: rect.top - parentRect.top - 40,
      });

      // Play rooster sound only if user interacted
      if (canPlaySound && roosterSound.current) {
        roosterSound.current.currentTime = 0;
        roosterSound.current.play().catch(() => {});
      }
    }
  }, [activeSkill, canPlaySound]);

  return (
    <motion.section
      className="py-16 px-8 flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center relative">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Skills
        </h2>
        <div
          className="grid grid-cols-3 justify-center relative"
          style={{ columnGap: "2cm", rowGap: "2cm" }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              ref={(el) => (skillRefs.current[idx] = el)}
              className="flex flex-col items-center justify-center w-28 h-28 bg-white rounded-xl shadow-md p-3 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.15 },
              }}
              onMouseEnter={() => setActiveSkill(idx)}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}

          {/* Chick Toy */}
          <motion.img
            src="/icons/chick.jpeg"
            alt="Rooster toy"
            className="absolute w-10 h-10"
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </div>
      </div>
    </motion.section>
  );
}
