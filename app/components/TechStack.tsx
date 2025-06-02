"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiReact,
  SiNextdotjs,
  SiRapid,
  SiMailgun,
  SiOpencv,
  SiFlask,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNginx,
  SiRedis,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import { TbLetterP } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io5";
import { MdCode } from "react-icons/md";
import { BiBook } from "react-icons/bi"; // For MkDocs/Swagger
import { AiOutlineApi, AiOutlineSecurityScan } from "react-icons/ai"; // For Alembic, SonarQube
import { VscKey } from "react-icons/vsc"; // For HashiCorp Vault
import { SiSnyk, SiCaddy, SiPostman, SiPytest } from "react-icons/si"; // Additional tools

const technologies = [
  { name: "Python", icon: SiPython, category: "Programming Languages", description: "High-level programming language" },
  { name: "Java", icon: FaJava, category: "Programming Languages", description: "Platform-independent programming language" },
  { name: "JavaScript", icon: SiJavascript, category: "Programming Languages", description: "Core language for web development" },
  { name: "HTML", icon: SiHtml5, category: "Frontend", description: "Markup language for web pages" },
  { name: "CSS", icon: SiCss3, category: "Frontend", description: "Stylesheet language for web design" },
  { name: "FastAPI", icon: SiFastapi, category: "Backend", description: "Modern, fast web framework for building APIs with Python" },
  { name: "Flask", icon: SiFlask, category: "Backend", description: "Lightweight Python web framework" },
  { name: "SQLAlchemy", icon: DiDatabase, category: "Backend", description: "SQL toolkit and ORM library for Python" },
  { name: "Pydantic", icon: TbLetterP, category: "Backend", description: "Data validation using Python type annotations" },
  { name: "Alembic", icon: AiOutlineApi, category: "Backend", description: "Database migration tool for SQLAlchemy" },
  { name: "OpenCV", icon: SiOpencv, category: "Image Processing", description: "Computer vision and machine learning library" },
  { name: "Pillow", icon: IoLogoBuffer, category: "Image Processing", description: "Python Imaging Library" },
  { name: "Pandas", icon: SiPython, category: "Data Processing", description: "Data analysis and manipulation library" },
  { name: "NumPy", icon: SiPython, category: "Data Processing", description: "Library for numerical computations" },
  { name: "Fabric.js", icon: MdCode, category: "Frontend", description: "JavaScript library for canvas manipulation" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", description: "React framework for production-grade applications" },
  { name: "React", icon: SiReact, category: "Frontend", description: "JavaScript library for building user interfaces" },
  { name: "Third-Party APIs", icon: SiRapid, category: "Integration", description: "External service integrations" },
  { name: "Mailgun", icon: SiMailgun, category: "Integration", description: "Email automation service" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database", description: "Advanced open-source relational database" },
  { name: "Redis", icon: SiRedis, category: "Database", description: "In-memory data structure store used as a cache" },
  { name: "Docker", icon: SiDocker, category: "DevOps", description: "Platform for containerized applications" },
  { name: "Jenkins", icon: SiJenkins, category: "DevOps", description: "Open-source automation server for CI/CD" },
  { name: "GitHub Actions", icon: SiGithub, category: "DevOps", description: "CI/CD workflows for GitHub repositories" },
  { name: "Nginx", icon: SiNginx, category: "DevOps", description: "High-performance web server and reverse proxy" },
  { name: "Git", icon: SiGit, category: "Version Control", description: "Distributed version control system" },
  { name: "AWS", icon: FaAws, category: "Cloud", description: "Comprehensive cloud computing platform" },
  { name: "Swagger", icon: BiBook, category: "Documentation", description: "API documentation and design tool" },
  { name: "MkDocs", icon: BiBook, category: "Documentation", description: "Static site generator for documentation" },
  { name: "SonarQube", icon: AiOutlineSecurityScan, category: "DevOps", description: "Static code analysis and quality assurance" },
  { name: "Snyk", icon: SiSnyk, category: "DevOps", description: "Vulnerability scanning and dependency management" },
  { name: "HashiCorp Vault", icon: VscKey, category: "DevOps", description: "Secrets management and data protection" },
  { name: "Caddy", icon: SiCaddy, category: "DevOps", description: "Modern web server with automatic HTTPS" },
  { name: "Postman", icon: SiPostman, category: "Testing", description: "API development and testing platform" },
  { name: "Pytest", icon: SiPytest, category: "Testing", description: "Python testing framework for unit and integration tests" },
  { name: "OAuth 2.0", icon: VscKey, category: "Security", description: "Industry-standard authorization framework" },
  { name: "JWT", icon: VscKey, category: "Security", description: "JSON Web Tokens for secure authentication" },
];

const categories = Array.from(new Set(technologies.map((tech) => tech.category)));

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

export default function TechStack() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredTech = useMemo(() => {
    return technologies.filter(
      (tech) =>
        (selectedCategory === "All" || tech.category === selectedCategory) &&
        tech.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, selectedCategory]);

  const visibleTech = showAll ? filteredTech : filteredTech.slice(0, 12);

  // Get category colors for better visual distinction
  const getCategoryColor = (category: string) => {
    const colors = {
      "Programming Languages": "from-blue-500 to-cyan-500",
      "Frontend": "from-purple-500 to-pink-500",
      "Backend": "from-green-500 to-emerald-500",
      "Database": "from-orange-500 to-red-500",
      "DevOps": "from-indigo-500 to-purple-500",
      "Cloud": "from-yellow-500 to-orange-500",
      "Testing": "from-teal-500 to-cyan-500",
      "Security": "from-red-500 to-pink-500",
      "Documentation": "from-gray-500 to-slate-500",
      "Integration": "from-violet-500 to-purple-500",
      "Image Processing": "from-rose-500 to-pink-500",
      "Data Processing": "from-emerald-500 to-teal-500",
      "Version Control": "from-slate-500 to-gray-500",
    };
    return colors[category as keyof typeof colors] || "from-blue-500 to-purple-500";
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/10 dark:bg-purple-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/10 dark:bg-cyan-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gradient-text">Tech Stack I'm Using</span>
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive collection of technologies, frameworks, and tools I use to build modern, scalable applications.
          </motion.p>
        </motion.div>

        {/* Enhanced search and filter section */}
        <motion.div
          className="mb-12 flex flex-col lg:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Enhanced search input */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search technologies..."
              className="tech-search-input pl-12 pr-4 py-3 text-base rounded-xl shadow-lg hover:shadow-xl focus:shadow-blue-500/25 transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Enhanced category filters */}
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className={`filter-button rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                selectedCategory === "All"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-gray-700 border-2 hover:border-blue-300"
              }`}
            >
              All ({technologies.length})
            </Button>
            {categories.map((category) => {
              const count = technologies.filter(tech => tech.category === category).length;
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-button rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                    selectedCategory === category
                      ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg hover:shadow-xl`
                      : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-gray-700 border-2 hover:border-blue-300"
                  }`}
                >
                  {category} ({count})
                </Button>
              );
            })}
          </div>
        </motion.div>

        {/* Enhanced tech grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {visibleTech.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  {...animationProps}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          className="tech-stack-card relative flex flex-col items-center p-6 rounded-2xl cursor-pointer overflow-hidden"
                          whileHover={{
                            scale: 1.05,
                            rotateY: 10,
                            rotateX: 5,
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Gradient background overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(tech.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                          
                          {/* Animated border */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                          
                          {/* Icon with enhanced styling */}
                          <div className="relative z-10 mb-3 p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <Icon className="tech-stack-icon text-3xl text-primary" />
                          </div>
                          
                          {/* Tech name with better typography */}
                          <span className="relative z-10 text-sm font-semibold text-center text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {tech.name}
                          </span>
                          
                          {/* Category badge */}
                          <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(tech.category)} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            {tech.category}
                          </div>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className="tech-tooltip max-w-xs p-3 shadow-xl">
                        <div className="space-y-2">
                          <p className="font-semibold text-foreground">{tech.name}</p>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(tech.category)} text-white`}>
                            {tech.category}
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced show more/less button */}
        {filteredTech.length > 12 && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="btn-primary-enhanced rounded-full px-8 py-3 font-semibold text-base"
            >
              {showAll ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  Show All ({filteredTech.length - 12} more)
                </>
              )}
            </Button>
          </motion.div>
        )}

        {/* Results counter */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Showing {visibleTech.length} of {filteredTech.length} technologies
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
        </motion.div>
      </div>
    </section>
  );
}