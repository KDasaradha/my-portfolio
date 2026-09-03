"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
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
  { name: "Python", icon: SiPython, category: "Programming Languages", description: "High-level programming language", proficiency: 95 },
  { name: "Java", icon: FaJava, category: "Programming Languages", description: "Platform-independent programming language", proficiency: 75 },
  { name: "JavaScript", icon: SiJavascript, category: "Programming Languages", description: "Core language for web development", proficiency: 85 },
  { name: "HTML", icon: SiHtml5, category: "Frontend", description: "Markup language for web pages", proficiency: 90 },
  { name: "CSS", icon: SiCss3, category: "Frontend", description: "Stylesheet language for web design", proficiency: 85 },
  { name: "FastAPI", icon: SiFastapi, category: "Backend", description: "Modern, fast web framework for building APIs with Python", proficiency: 95 },
  { name: "Flask", icon: SiFlask, category: "Backend", description: "Lightweight Python web framework", proficiency: 80 },
  { name: "SQLAlchemy", icon: DiDatabase, category: "Backend", description: "SQL toolkit and ORM library for Python", proficiency: 90 },
  { name: "Pydantic", icon: TbLetterP, category: "Backend", description: "Data validation using Python type annotations", proficiency: 90 },
  { name: "Alembic", icon: AiOutlineApi, category: "Backend", description: "Database migration tool for SQLAlchemy", proficiency: 85 },
  { name: "OpenCV", icon: SiOpencv, category: "Image Processing", description: "Computer vision and machine learning library", proficiency: 80 },
  { name: "Pillow", icon: IoLogoBuffer, category: "Image Processing", description: "Python Imaging Library", proficiency: 85 },
  { name: "Pandas", icon: SiPython, category: "Data Processing", description: "Data analysis and manipulation library", proficiency: 80 },
  { name: "NumPy", icon: SiPython, category: "Data Processing", description: "Library for numerical computations", proficiency: 80 },
  { name: "Fabric.js", icon: MdCode, category: "Frontend", description: "JavaScript library for canvas manipulation", proficiency: 75 },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", description: "React framework for production-grade applications", proficiency: 85 },
  { name: "React", icon: SiReact, category: "Frontend", description: "JavaScript library for building user interfaces", proficiency: 85 },
  { name: "Third-Party APIs", icon: SiRapid, category: "Integration", description: "External service integrations", proficiency: 85 },
  { name: "Pixabay API", icon: SiRapid, category: "Integration", description: "Image search and download API", proficiency: 80 },
  { name: "Unsplash API", icon: SiRapid, category: "Integration", description: "High-quality photo API", proficiency: 80 },
  { name: "Brevo", icon: SiMailgun, category: "Integration", description: "Email marketing and automation service", proficiency: 75 },
  { name: "2factor.io", icon: SiMailgun, category: "Integration", description: "SMS OTP service for authentication", proficiency: 75 },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database", description: "Advanced open-source relational database", proficiency: 90 },
  { name: "Redis", icon: SiRedis, category: "Database", description: "In-memory data structure store used as a cache", proficiency: 85 },
  { name: "Docker", icon: SiDocker, category: "DevOps", description: "Platform for containerized applications", proficiency: 90 },
  { name: "Jenkins", icon: SiJenkins, category: "DevOps", description: "Open-source automation server for CI/CD", proficiency: 85 },
  { name: "GitHub Actions", icon: SiGithub, category: "DevOps", description: "CI/CD workflows for GitHub repositories", proficiency: 90 },
  { name: "Nginx", icon: SiNginx, category: "DevOps", description: "High-performance web server and reverse proxy", proficiency: 85 },
  { name: "Git", icon: SiGit, category: "Version Control", description: "Distributed version control system", proficiency: 90 },
  { name: "AWS", icon: FaAws, category: "Cloud", description: "Comprehensive cloud computing platform", proficiency: 75 },
  { name: "Swagger", icon: BiBook, category: "Documentation", description: "API documentation and design tool", proficiency: 85 },
  { name: "MkDocs", icon: BiBook, category: "Documentation", description: "Static site generator for documentation", proficiency: 80 },
  { name: "SonarQube", icon: AiOutlineSecurityScan, category: "DevOps", description: "Static code analysis and quality assurance", proficiency: 80 },
  { name: "Snyk", icon: SiSnyk, category: "DevOps", description: "Vulnerability scanning and dependency management", proficiency: 80 },
  { name: "HashiCorp Vault", icon: VscKey, category: "DevOps", description: "Secrets management and data protection", proficiency: 75 },
  { name: "Caddy", icon: SiCaddy, category: "DevOps", description: "Modern web server with automatic HTTPS", proficiency: 70 },
  { name: "Postman", icon: SiPostman, category: "Testing", description: "API development and testing platform", proficiency: 85 },
  { name: "Pytest", icon: SiPytest, category: "Testing", description: "Python testing framework for unit and integration tests", proficiency: 85 },
  { name: "OAuth 2.0", icon: VscKey, category: "Security", description: "Industry-standard authorization framework", proficiency: 85 },
  { name: "JWT", icon: VscKey, category: "Security", description: "JSON Web Tokens for secure authentication", proficiency: 90 },
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
    <section id="skills" className="relative py-24 overflow-hidden bg-background">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20"></div>
      
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/10 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/10 dark:bg-purple-800/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200/10 dark:bg-cyan-800/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="section-kicker mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Zap className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Technologies & Tools</span>
          </motion.div>

          <motion.h3
            className="section-heading mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span>Tech Stack I'm Using</span>
          </motion.h3>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A comprehensive collection of technologies, frameworks, and tools I use to build 
            <span className="font-semibold text-foreground/80"> modern</span>, 
            <span className="font-semibold text-foreground/80"> scalable</span> applications.
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-5"
          layout
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {visibleTech.map((tech, index) => {
              const Icon = tech.icon;
              const proficiency = tech.proficiency || 80;
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
                          className="tech-stack-card relative flex flex-col items-center p-5 rounded-2xl cursor-pointer overflow-hidden"
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
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {/* Icon with enhanced styling */}
                          <div className="relative z-10 mb-3 p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <Icon className="tech-stack-icon text-3xl text-primary" />
                          </div>
                          
                          {/* Tech name with better typography */}
                          <span className="relative z-10 text-sm font-semibold text-center text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                            {tech.name}
                          </span>
                          
                          {/* Proficiency indicator */}
                          <div className="relative z-10 w-full mt-2">
                            <div className="h-1.5 bg-secondary/50 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${getCategoryColor(tech.category)} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${proficiency}%` }}
                                transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                              />
                            </div>
                            <span className="absolute right-0 top-[-14px] text-[10px] font-medium text-muted-foreground">
                              {proficiency}%
                            </span>
                          </div>
                          
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
                          <div className="flex items-center justify-between">
                            <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(tech.category)} text-white`}>
                              {tech.category}
                            </div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Proficiency: {proficiency}%
                            </div>
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