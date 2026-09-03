"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import {
  Server,
  Database,
  Code2,
  GitBranch,
  Wrench,
  Layout,
} from "lucide-react";
import { memo, useRef } from "react";

const skillCategories = [
  {
    id: 1,
    category: "Backend Development",
    description: "Building scalable backend services.",
    icon: Server,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    category: "Databases",
    description: "Efficient data modeling & management.",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    category: "API Development",
    description: "RESTful and secure API design.",
    icon: Code2,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    category: "DevOps",
    description: "CI/CD pipelines, containerization, automation.",
    icon: GitBranch,
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    category: "Version Control & Tools",
    description: "Efficient code collaboration.",
    icon: Wrench,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: 6,
    category: "Frontend & UI Integration",
    description: "Responsive and modern web interfaces.",
    icon: Layout,
    gradient: "from-indigo-500 to-purple-500",
  },
];

interface SkillCategoryCardProps {
  readonly category: string;
  readonly description: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly gradient: string;
  readonly index: number;
}

function SkillCategoryCard({
  category,
  description,
  icon: Icon,
  gradient,
  index,
}: Readonly<SkillCategoryCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden bg-card rounded-xl shadow-lg hover:shadow-2xl p-6 border border-border tech-card cursor-pointer"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        initial={false}
      />
      
      {/* Floating Decoration */}
      <motion.div
        className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gradient-to-br ${gradient} opacity-10 rounded-full`}
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <motion.div
            className={`p-3 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
          <h4 className="text-xl font-bold ml-4 text-foreground group-hover:text-primary transition-colors duration-300">
            {category}
          </h4>
        </div>
        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl"
        initial={false}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function SkillCategoriesGrid() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-900 bg-opacity-0 dark:bg-opacity-0"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my expertise across various technical domains.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {skillCategories.map((cat, index) => (
            <SkillCategoryCard key={cat.id} index={index} {...cat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
