// SkillCategoriesGrid.tsx - Broad Overview of Skills
"use client";

import { motion } from "framer-motion";
import {
  Server,
  Database,
  Code2,
  GitBranch,
  Wrench,
  Layout,
} from "lucide-react";

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gradient-to-br ${gradient} opacity-10 rounded-full`}
      />
      <div className="flex items-center mb-4">
        <div
          className={`p-3 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}
        >
          <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </div>
        <h4 className="text-xl font-bold ml-4 text-gray-900 dark:text-gray-100">
          {category}
        </h4>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
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
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my expertise across various technical domains.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <SkillCategoryCard key={cat.id} index={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
