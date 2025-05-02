"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineMenuBook } from "react-icons/md";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

export default function MkDocsLink() {
  const { theme } = useTheme();

  return (
    <section
      id="mkdocs"
      className="py-20 px-4 md:px-8 flex justify-center dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        className="max-w-4xl w-full p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <MdOutlineMenuBook className="text-4xl" />
            FastAPI Guide
          </motion.h2>

          <motion.p
            className="text-gray-700 dark:text-gray-300 text-base md:text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Your go-to reference for mastering FastAPI, written by{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              KDasaradha525
            </span>. 
            Explore concepts like Python, SQLAlchemy, DevOps, and CI/CD—all in
            a clean MkDocs interface.
          </motion.p>

          <motion.div
            className="mt-8 p-6 border border-gray-300 dark:border-gray-700 rounded-xl bg-secondary/10 shadow-sm w-full cursor-pointer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
              📌 Key Topics
            </h3>
            <motion.ul
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm md:text-base text-gray-700 dark:text-gray-300"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                "Core Python Concepts",
                "FastAPI Fundamentals",
                "SQLAlchemy & Databases",
                "Pydantic Integration",
                "Sync vs Async Processing",
                "RESTful API Design",
                "Microservices Architecture",
                "Pytest & Testing",
                "DevOps & CI/CD",
                "WebSockets in FastAPI",
                "Security Best Practices",
                "Code Optimization",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={listItemVariants}
                  className="flex items-center gap-1"
                >
                  ✅ {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:justify-center">
            <motion.a
              href="https://night-fury.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Open the MkDocs site"
              aria-label="Explore Documentation"
              className={`px-6 py-3 rounded-xl shadow-md text-white font-semibold ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } flex items-center justify-center gap-2`}
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
              title="View GitHub Repository"
              aria-label="View GitHub Repository"
              className="px-6 py-3 rounded-xl shadow-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold flex items-center justify-center gap-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaGithub className="w-4 h-4" />
              GitHub Repo
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
