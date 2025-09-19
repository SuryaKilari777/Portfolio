import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ dark, setDark }) {
  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-4 shadow-md bg-gray-100 dark:bg-gray-800"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="font-bold text-xl">Surya's Portfolio</h2>
      <div className="flex gap-3 items-center">
        <a
          href="/resume.pdf"
          download
          className="px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
        >
          Resume
        </a>
        <a
          href="https://www.linkedin.com/in/surya-kilari-891981354/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900"
        >
          GitHub
        </a>
        <a
          href="https://instagram.com/yourinstagram"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
        >
          Instagram
        </a>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </motion.nav>
  );
}
