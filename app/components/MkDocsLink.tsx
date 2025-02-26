// "use client";

// import React from "react";
// import { useTheme } from "next-themes";

// const MkDocsLink = () => {
//   const { theme } = useTheme();

//   return (
//     <section id="mkdocs" className="py-20 bg-primary/10 flex justify-center">
//       <div className="max-w-3xl w-full mx-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
//         <div className="flex flex-col items-center justify-center text-center">
//           <h2 className="text-2xl font-semibold">
//             📖 My MkDocs – A Collection of My Learnings & Notes
//           </h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
//             This MkDocs website serves as my shorthand notes, covering things I
//             have learned and want to explore further. Written in Markdown, it
//             includes essential topics like Python, FastAPI, Pytest, DevOps, and
//             more.
//           </p>

//           <div className="mt-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg max-w-2xl bg-secondary/10">
//             <h3 className="text-lg font-semibold mb-2">📌 Key Topics Covered</h3>
//             <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
//               <li>✅ Core Python Concepts</li>
//               <li>✅ Functions & Classes</li>
//               <li>✅ Decorators & Error Handling</li>
//               <li>✅ OOP & Data Structures</li>
//               <li>✅ Code Optimization</li>
//               <li>✅ Docker & GitHub</li>
//               <li>✅ FastAPI & HTTP Status Codes</li>
//               <li>✅ Pytest & CI/CD Pipelines</li>
//               <li>✅ DevOps Essentials</li>
//               <li>✅ SQLAlchemy & SQLite Testing</li>
//               <li>✅ RESTful APIs</li>
//               <li>✅ Microservices Architecture</li>
//             </ul>
//           </div>

//           <a
//             href="https://night-fury.onrender.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`mt-6 px-4 py-2 rounded-lg shadow-lg transition-all text-white font-medium ${
//               theme === "dark"
//                 ? "bg-gray-800 hover:bg-gray-700"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             View My Documentation 🚀
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MkDocsLink;



"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function MkDocsLink() {
  const { theme } = useTheme();

  return (
    <section id="mkdocs" className="py-20 flex justify-center">
      <motion.div
        className="max-w-4xl w-full mx-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <motion.h2
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            📖 FastAPI Guide
          </motion.h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl text-sm md:text-base">
            A comprehensive guide to FastAPI and related technologies, written by <span className="font-medium">KDasaradha525</span>. This MkDocs site is my personal collection of notes, covering Python, FastAPI, SQLAlchemy, Pytest, DevOps, and more—all in Markdown.
          </p>

          <motion.div
            className="mt-6 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md max-w-3xl bg-secondary/5"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
              📌 Key Sections Covered
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-700 dark:text-gray-300">
              <li>✅ Core Python Concepts</li>
              <li>✅ FastAPI Fundamentals</li>
              <li>✅ SQLAlchemy & Databases</li>
              <li>✅ Pydantic Integration</li>
              <li>✅ Sync vs Async Processing</li>
              <li>✅ RESTful API Design</li>
              <li>✅ Microservices Architecture</li>
              <li>✅ Pytest & Testing</li>
              <li>✅ DevOps & CI/CD</li>
              <li>✅ WebSockets in FastAPI</li>
              <li>✅ Security Best Practices</li>
              <li>✅ Code Optimization</li>
            </ul>
          </motion.div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://night-fury.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 rounded-lg shadow-lg text-white font-medium ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } flex items-center gap-2`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              Explore Documentation 📓🚀
            </motion.a>
            <motion.a
              href="https://github.com/KDasaradha/my-tutorials.git"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg shadow-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium flex items-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGithub className="w-4 h-4" />
              View Repository
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}