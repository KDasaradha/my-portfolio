"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPython, FaRocket, FaCode, FaDatabase, FaShieldAlt, FaCogs } from "react-icons/fa";
import { MdOutlineMenuBook, MdSpeed, MdSecurity, MdCloud } from "react-icons/md";
import { SiPydantic, SiFastapi, SiPytest } from "react-icons/si";

// Animation variants
const sectionVariants: Variants = {
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

  // Enhanced topic data with icons and categories
  const topicCategories = [
    {
      title: "Core Technologies",
      icon: FaPython,
      color: "from-blue-500 to-cyan-500",
      topics: [
        { name: "Core Python Concepts", icon: FaPython },
        { name: "FastAPI Fundamentals", icon: SiFastapi },
        { name: "SQLAlchemy & Databases", icon: FaDatabase },
        { name: "Pydantic Integration", icon: SiPydantic },
      ]
    },
    {
      title: "Architecture & Design",
      icon: FaCogs,
      color: "from-purple-500 to-pink-500",
      topics: [
        { name: "RESTful API Design", icon: FaCode },
        { name: "Microservices Architecture", icon: MdCloud },
        { name: "Sync vs Async Processing", icon: MdSpeed },
        { name: "WebSockets in FastAPI", icon: FaRocket },
      ]
    },
    {
      title: "Testing & Security",
      icon: FaShieldAlt,
      color: "from-green-500 to-emerald-500",
      topics: [
        { name: "Pytest & Testing", icon: SiPytest },
        { name: "Security Best Practices", icon: MdSecurity },
        { name: "DevOps & CI/CD", icon: FaCogs },
        { name: "Code Optimization", icon: MdSpeed },
      ]
    }
  ];

  return (
    <section
      id="mkdocs"
      className="relative py-24 overflow-hidden"
    >
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/40 dark:from-indigo-950/40 dark:via-purple-950/30 dark:to-pink-950/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-200/15 dark:bg-pink-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative container mx-auto px-4 md:px-8 flex justify-center">
        <motion.div
          className="max-w-6xl w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Enhanced header section */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-4 mb-6 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                <MdOutlineMenuBook className="text-3xl" />
              </div>
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  FastAPI Guide
                </h2>
                <p className="text-sm text-muted-foreground font-medium">
                  Comprehensive Documentation
                </p>
              </div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Your comprehensive reference for mastering FastAPI, crafted by{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                KDasaradha525
              </span>. 
              Dive deep into Python, SQLAlchemy, DevOps, and CI/CD—all presented in
              a beautifully designed MkDocs interface.
            </motion.p>
          </div>

          {/* Enhanced topics grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {topicCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  className="group relative"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <div className="relative p-6 rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Category header */}
                    <div className="relative z-10 flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <CategoryIcon className="text-xl" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    {/* Topics list */}
                    <motion.ul
                      className="space-y-3"
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {category.topics.map((topic, topicIndex) => {
                        const TopicIcon = topic.icon;
                        return (
                          <motion.li
                            key={topic.name}
                            variants={listItemVariants}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-300 group/item"
                            transition={{ delay: topicIndex * 0.05 }}
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-sm group-hover/item:scale-110 transition-transform duration-200`}>
                              <TopicIcon className="text-sm" />
                            </div>
                            <span className="text-sm font-medium text-foreground/90 group-hover/item:text-foreground transition-colors duration-200">
                              {topic.name}
                            </span>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Enhanced action buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="https://night-fury.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Open the MkDocs site"
              aria-label="Explore Documentation"
              className="group relative px-8 py-4 rounded-2xl font-bold text-lg text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300"></div>
              
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <FaExternalLinkAlt className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span>Explore Documentation</span>
                <div className="flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: '0s' }}>📓</span>
                  <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🚀</span>
                </div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/KDasaradha/my-tutorials.git"
              target="_blank"
              rel="noopener noreferrer"
              title="View GitHub Repository"
              aria-label="View GitHub Repository"
              className="group relative px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-600 dark:via-gray-500 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-sm"></div>
              
              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub Repository</span>
              </div>
            </motion.a>
          </motion.div>

          {/* Additional info section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-muted-foreground">
                Regularly updated with latest FastAPI features
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
