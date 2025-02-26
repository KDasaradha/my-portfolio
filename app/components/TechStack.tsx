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
import { AiOutlineApi } from "react-icons/ai"; // For Alembic

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

  const visibleTech = showAll ? filteredTech : filteredTech.slice(0, 8);

  return (
    <div className="mt-16 px-4 sm:px-6 lg:px-8 bg-transparent">
      <h3 className="gradient-text text-3xl font-bold mb-12 text-center">
        Tech Stack I'm Using
      </h3>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search technologies..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === "All" ? "default" : "outline"}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 bg-transparent"
        layout
      >
        <AnimatePresence>
          {visibleTech.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div key={tech.name} {...animationProps}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex flex-col items-center p-4 rounded-lg shadow-md bg-card text-card-foreground cursor-pointer">
                        <Icon className="text-4xl mb-2 text-primary" />
                        <span className="text-sm font-medium text-center">
                          {tech.name}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{tech.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      {filteredTech.length > 8 && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={() => setShowAll(!showAll)}>
            {showAll ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show All ({filteredTech.length - 8} more)
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}