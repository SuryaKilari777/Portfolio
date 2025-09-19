import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="py-16 px-8 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4">Let’s connect! You can reach me at:</p>
      <div className="flex flex-col gap-3">
        <a href="mailto:kilarisurya13@gmail.com" className="text-blue-500 hover:underline">
          📧 kilarisurya13@gmail.com
        </a>
        <a href="https://github.com/yourgithub" className="text-blue-500 hover:underline">
          💻 GitHub
        </a>
        <a href="https://www.linkedin.com/in/surya-kilari-891981354/" className="text-blue-500 hover:underline">
          🔗 LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
