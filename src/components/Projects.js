import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { title: "CRM System", desc: "Retail CRM system with 5000+ records (Java, DBMS)", link: "#" },
    { title: "Drone Communication Security", desc: "ECC vs RSA, AES, PQC, ZKP comparisons", link: "#" },
    { title: "To-Do List App", desc: "Java-based task manager with data structures", link: "#" },
  ];

  return (
    <motion.section
      className="py-16 px-8 text-center bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="mb-4">{proj.desc}</p>
            <a href={proj.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
