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
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { DiDatabase } from "react-icons/di";
import { TbLetterP } from "react-icons/tb";
import { IoLogoBuffer } from "react-icons/io5";
import { MdCode } from "react-icons/md";

const technologies = [
  {
    name: "Python",
    icon: SiPython,
    category: "Backend",
    description: "High-level programming language",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    category: "Backend",
    description: "Modern, fast web framework for building APIs with Python",
  },
  {
    name: "SQLAlchemy",
    icon: DiDatabase,
    category: "Backend",
    description:
      "SQL toolkit and Object-Relational Mapping (ORM) library for Python",
  },
  {
    name: "Pydantic",
    icon: TbLetterP,
    category: "Backend",
    description:
      "Data validation and settings management using Python type annotations",
  },
  {
    name: "OpenCV",
    icon: SiOpencv,
    category: "Data Processing",
    description: "Computer vision and machine learning software library",
  },
  {
    name: "Pillow",
    icon: IoLogoBuffer,
    category: "Data Processing",
    description: "Python Imaging Library",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    description: "React framework for production-grade applications",
  },
  {
    name: "Third-Party APIs",
    icon: SiRapid,
    category: "Integration",
    description: "External service integrations",
  },
  {
    name: "Mailgun",
    icon: SiMailgun,
    category: "Integration",
    description: "Email automation service",
  },
  {
    name: "Fabric JSON",
    icon: MdCode,
    category: "Data Processing",
    description: "JSON manipulation library",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    category: "Database",
    description: "Advanced open-source relational database",
  },
  {
    name: "Docker",
    icon: SiDocker,
    category: "DevOps",
    description: "Platform for developing, shipping, and running applications",
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    category: "DevOps",
    description: "Open-source automation server",
  },
  {
    name: "AWS",
    icon: FaAws,
    category: "Cloud",
    description: "Comprehensive cloud computing platform",
  },
  {
    name: "React",
    icon: SiReact,
    category: "Frontend",
    description: "JavaScript library for building user interfaces",
  },
];

const categories = Array.from(
  new Set(technologies.map((tech) => tech.category))
);

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
    <div className="mt-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
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
