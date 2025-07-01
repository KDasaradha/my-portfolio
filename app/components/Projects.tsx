// Projects.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code2, 
  Zap, 
  Target, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Eye,
  Star,
  Calendar,
  Users
} from "lucide-react";

// Define the Project type with enhanced properties
type Project = {
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  github: string;
  demo: string;
  challenge: string;
  solution: string;
  impact: string;
  beforeMetrics: string;
  afterMetrics: string;
  thoughtProcess: string;
  category: string;
  status: "completed" | "in-progress" | "planning";
  featured: boolean;
  metrics: {
    performance?: string;
    users?: string;
    timeline?: string;
    complexity?: "low" | "medium" | "high";
  };
  highlights: string[];
};

// Updated projects array with multiple images and new project
const projects: Project[] = [
  {
    title: "InstaDe – Instant Design Generator",
    description:
      "A comprehensive design platform with user management, team collaboration, and dynamic design generation using advanced image processing and canvas manipulation technologies.",
    images: [
      "/images/instade-screenshot.svg",
    ],
    techStack: [
      "FastAPI",
      "SQLAlchemy (sync)",
      "Fabric.js",
      "JWT",
      "Redis",
      "Brevo",
      "2factor.io",
      "OpenCV",
      "Pillow",
    ],
    github: "https://github.com/johndoe/instade",
    demo: "https://develop.instade.ai/",
    challenge:
      "Building a scalable design platform that could handle thousands of marketing assets with real-time canvas manipulation, secure authentication, and efficient template generation while maintaining high performance under concurrent usage.",
    solution:
      "Implemented a monolithic FastAPI architecture with core modules for user, project, and team management. Integrated OTP-based login with JWT authentication, Brevo for emails, and 2factor.io for SMS. Developed design engine initially using Python OpenCV to draw text on canvases, later transitioning to Fabric.js for generating Fabric JSON and rendering designs on the frontend. Used Redis for caching and designed database with hardcoded coordinates for design combinations.",
    impact:
      "Delivered an MVP capable of generating thousands of marketing assets over 8 months with real-time editing capabilities and seamless user experience.",
    beforeMetrics:
      "No existing design platform - built from ground up with static image processing limitations.",
    afterMetrics:
      "Dynamic canvas-based design platform generating thousands of assets with real-time collaboration features.",
    thoughtProcess:
      "Started with Python OpenCV for backend template generation by drawing text on canvases, but realized frontend canvas manipulation was essential for user experience. Migrated to Fabric.js for JSON-based templates while maintaining Python backend for business logic and data management. Understood software development workflows, canvas manipulation, and performance optimization techniques.",
    category: "Full-Stack Platform",
    status: "completed",
    featured: true,
    metrics: {
      performance: "40% faster rendering",
      users: "1000+ designs created",
      timeline: "8 months",
      complexity: "high"
    },
    highlights: [
      "Real-time canvas manipulation",
      "JWT & OAuth 2.0 security",
      "Redis caching optimization",
      "Multi-tenant architecture"
    ]
  },
  {
    title: "Efanish – School Management ERP",
    description:
      "A comprehensive asynchronous school management system with user profiles, document management, library system, real-time chat, attendance tracking, and leave management for educational institutions.",
    images: [
      "/images/school-erp-screenshot.svg",
    ],
    techStack: ["Async FastAPI", "PostgreSQL", "SQLAlchemy (async)", "Pydantic", "Git"],
    github: "https://github.com/johndoe/school-erp",
    demo: "https://efanish.com/",
    challenge:
      "Building a scalable ERP system that could handle large volumes of student/staff data with complex relational integrity, efficient pagination for thousands of records, and strict security validations to prevent SQL injection and XSS attacks.",
    solution:
      "Developed modules for user management, user profile management (including documents), library, chat, leaves, holidays, and attendance. Transitioned the application from synchronous to asynchronous SQLAlchemy queries, optimizing database performance. Improved database schema design, established better table relationships, and implemented API pagination for efficiency. Used Pydantic for input validation to prevent SQL injections and cross-site scripting.",
    impact:
      "Improved database performance significantly through async queries and optimized schema relations while strengthening security posture with rigorous input validation.",
    beforeMetrics:
      "Traditional synchronous operations with basic validation and limited scalability for large datasets.",
    afterMetrics:
      "High-performance async operations with enterprise-grade security and efficient handling of large record volumes.",
    thoughtProcess:
      "Focused on transitioning from synchronous to asynchronous architecture to handle concurrent operations efficiently. Prioritized database schema optimization and security through Pydantic validations. Gained expertise in asynchronous programming, database optimization, and breaking down project requirements into modules while learning Git workflows.",
    category: "Enterprise ERP",
    status: "completed",
    featured: true,
    metrics: {
      performance: "60% faster queries",
      users: "500+ students managed",
      timeline: "6 months",
      complexity: "high"
    },
    highlights: [
      "Async FastAPI architecture",
      "Complex relational schema",
      "Pydantic validation",
      "Real-time chat system"
    ]
  },
  {
    title: "SHOU – HRMS & Animation Pipeline Tracker",
    description:
      "A production-grade microservices platform integrating HRMS, payroll management with attendance-based salary computations, and animation pipeline tracking with comprehensive CI/CD automation and security.",
    images: [
      "/images/shou-dashboard.svg",
      "/images/shou-microservices.svg",
      "/images/shou-cicd.svg",
      "/images/shou-payroll.svg",
      "/images/shou-animation-pipeline.svg",
    ],
    techStack: ["FastAPI", "Docker", "Jenkins", "Microservices", "NGINX", "Caddy", "PostgreSQL", "Pydantic", "Pytest", "HashiCorp Vault", "SonarQube", "Snyk"],
    github: "https://github.com/johndoe/shou",
    demo: "https://shou-only-ui.vercel.app/",
    challenge:
      "Migrating from a monolithic FastAPI application to independently deployable microservices while implementing enterprise-grade CI/CD pipelines, security scanning, and managing shared code redundancy across services.",
    solution:
      "Implemented modules for leaves, holidays, payroll, and pipeline management. Developed payroll logic with salary breakdowns (basic, HRA, conveyance) and attendance-based calculations, validated using Pydantic. Containerized the application with Docker, creating Dockerfiles and docker-compose files. Set up Jenkins pipeline for CI/CD, integrating SonarQube, Snyk, and Dependabot. Converted from monolithic to microservices architecture, using NGINX as reverse proxy and managing code duplication with Docker shared volumes.",
    impact:
      "Delivered a production-grade HRMS with seamless payroll and animation pipeline integration, achieving improved resilience, modularity, and security through microservices architecture.",
    beforeMetrics:
      "Monolithic application with manual deployments and basic security measures.",
    afterMetrics:
      "Scalable microservices with automated CI/CD, comprehensive security scanning, and enterprise-grade secrets management.",
    thoughtProcess:
      "Started with monolithic architecture but recognized the need for microservices scalability. Implemented Docker containerization first, then gradually decomposed services while establishing robust CI/CD pipelines and security measures. Mastered DevOps tools, microservices architecture, and CI/CD pipelines while managing code duplication with shared Docker volumes.",
    category: "Microservices Platform",
    status: "completed",
    featured: true,
    metrics: {
      performance: "80% faster payroll processing",
      users: "200+ employees",
      timeline: "12 months",
      complexity: "high"
    },
    highlights: [
      "Microservices migration",
      "Jenkins CI/CD automation",
      "HashiCorp Vault integration",
      "SonarQube & Snyk security"
    ]
  },
  {
    title: "DocuCraft – AI-Enhanced Documentation Platform",
    description:
      "A comprehensive Next.js-based documentation platform featuring AI-powered code explanation, enhanced search capabilities, dynamic content generation, and modern responsive design. Built with TypeScript, Tailwind CSS, and integrated AI services for intelligent documentation assistance.",
    images: [
      "/images/docucraft-dashboard.svg",
      "/images/docucraft-ai-demo.svg",
      "/images/docucraft-docs-view.svg",
      "/images/docucraft-search.svg",
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Gray Matter",
      "Genkit AI",
      "Markdown Rendering",
      "Responsive Design",
      "Server Components",
      "API Routes"
    ],
    github: "https://github.com/KDasaradha/docucraft",
    demo: "https://docucraft-blue.vercel.app/",
    challenge:
      "Creating a modern, scalable documentation platform that combines traditional markdown-based content management with cutting-edge AI capabilities for code explanation and content assistance, while maintaining excellent performance and user experience across all devices.",
    solution:
      "Developed a full-stack Next.js application with server-side rendering, dynamic routing for documentation pages, integrated AI services using Genkit for code explanation and documentation assistance. Implemented responsive design with Tailwind CSS, smooth animations with Framer Motion, and comprehensive search functionality. Built modular component architecture with TypeScript for type safety and maintainability.",
    impact:
      "Delivered a production-ready documentation platform that enhances developer productivity through AI-powered features, providing instant code explanations, intelligent search, and seamless content navigation with modern UX/UI design.",
    beforeMetrics:
      "Traditional static documentation sites with limited interactivity and no AI assistance for code understanding.",
    afterMetrics:
      "Dynamic, AI-enhanced documentation platform with real-time code explanation, intelligent search, and responsive design across all devices.",
    thoughtProcess:
      "Started with Next.js 15 for modern React features and server components. Integrated AI capabilities early in development to differentiate from standard documentation sites. Focused on developer experience with TypeScript, component reusability, and performance optimization. Implemented comprehensive error handling including custom 404 pages and graceful fallbacks.",
    category: "Personal Projects",
    status: "completed",
    featured: true,
    metrics: {
      performance: "95+ Lighthouse score",
      users: "AI code explanation, enhanced search, responsive design",
      timeline: "3 months",
      complexity: "high"
    },
    highlights: [
      "AI-powered code explanation",
      "Next.js 15 with Server Components",
      "TypeScript for type safety",
      "Responsive Tailwind CSS design",
      "Dynamic markdown rendering",
      "Custom 404 error handling",
      "Framer Motion animations",
      "Modular component architecture"
    ]
  },
  {
    title: "Mermaid Magic Draw – AI-Powered Diagram Editor",
    description:
      "A sophisticated React-based Mermaid diagram editor featuring AI-powered diagram generation, real-time preview, advanced export capabilities, and modern responsive design. Built with TypeScript, Vite, shadcn/ui, and integrated with multiple AI providers for intelligent diagram creation and enhancement.",
    images: [
      "/images/mermaid-editor-dashboard.svg",
      "/images/mermaid-ai-assistant.svg",
      "/images/mermaid-templates-gallery.svg",
      "/images/mermaid-export-options.svg",
      "/images/mermaid-responsive-design.svg",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "shadcn/ui",
      "Tailwind CSS",
      "Radix UI",
      "Monaco Editor",
      "Mermaid.js",
      "HTML2Canvas",
      "React Query",
      "Lucide React",
      "Multiple AI APIs",
      "Responsive Design",
      "PWA Ready"
    ],
    github: "https://github.com/yourusername/mermaid-magic-draw",
    demo: "https://preview--mermaid-magic-draw.lovable.app/",
    challenge:
      "Creating a comprehensive, user-friendly Mermaid diagram editor that combines powerful editing capabilities with AI assistance, while maintaining excellent performance, responsive design, and supporting multiple export formats. The challenge was to make complex diagram creation accessible to both beginners and advanced users.",
    solution:
      "Developed a full-featured React application with Monaco Editor integration for syntax highlighting, real-time Mermaid rendering, AI-powered diagram generation using multiple providers (OpenAI, Gemini, Perplexity), comprehensive template library, advanced export options (SVG, PNG, PDF), responsive design with mobile support, and modern UI/UX with dark/light themes.",
    impact:
      "Delivered a production-ready diagram editor that significantly reduces the time needed to create professional Mermaid diagrams, with AI assistance making diagram creation accessible to non-technical users while providing advanced features for power users.",
    beforeMetrics:
      "Manual Mermaid diagram creation requiring extensive syntax knowledge and time-consuming trial-and-error process.",
    afterMetrics:
      "AI-assisted diagram creation with 80% faster workflow, intuitive template system, and professional export capabilities.",
    thoughtProcess:
      "Started with React 18 and Vite for optimal development experience and performance. Integrated Monaco Editor for professional code editing experience. Implemented multiple AI providers for flexibility and reliability. Focused on responsive design and accessibility. Built comprehensive template system and export functionality for professional use cases.",
    category: "Personal Projects",
    status: "completed",
    featured: true,
    metrics: {
      performance: "98+ Lighthouse score",
      users: "50+ diagram templates, 4 AI providers, 5 export formats",
      timeline: "4 months",
      complexity: "high"
    },
    highlights: [
      "Multi-AI provider integration (OpenAI, Gemini, Perplexity, Anthropic)",
      "Real-time Mermaid diagram rendering",
      "Monaco Editor with syntax highlighting",
      "50+ professional diagram templates",
      "Advanced export options (SVG, PNG, PDF, URL sharing)",
      "Responsive design with mobile support",
      "Modern emerald-teal theme system",
      "Auto-save and keyboard shortcuts"
    ]
  },
  {
    title: "AWS Full-Stack CI/CD Pipeline (In Progress)",
    description:
      "Developing a full-stack application using React, Next.js, and FastAPI, with deployment on AWS featuring a CI/CD pipeline.",
    images: [
      "/images/aws-project-screenshot1.svg",
      "/images/aws-project-screenshot2.svg",
      "/images/aws-project-screenshot3.svg",
    ],
    techStack: [
      "React",
      "Next.js",
      "FastAPI",
      "AWS (EC2, S3, VPC)",
      "Docker",
      "Jenkins",
    ],
    github: "https://github.com/yourusername/aws-fullstack",
    demo: "#", // Placeholder until live
    challenge:
      "Acquiring proficiency in cloud deployment and full-stack integration despite limited prior experience.",
    solution:
      "Mastering AWS services (EC2, S3, VPC) and establishing a CI/CD pipeline using Jenkins and GitHub Actions.",
    impact:
      "Currently in progress: Building expertise in cloud infrastructure and full-stack development.",
    beforeMetrics: "Not applicable.",
    afterMetrics: "Not applicable.",
    thoughtProcess:
      "We initiated the project using the AWS Free Tier, incrementally constructed the infrastructure, and aligned development with full-stack objectives.",
    category: "Cloud Development",
    status: "in-progress",
    featured: false,
    metrics: {
      timeline: "Ongoing",
      complexity: "medium"
    },
    highlights: [
      "AWS cloud services",
      "Full-stack development",
      "CI/CD with Jenkins",
      "React & Next.js"
    ]
  },
];

// Enhanced Carousel component with controls and better animations
const EnhancedCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (images.length > 1 && !isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [images.length, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full h-40 overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            width={400}
            height={200}
            className="w-full h-full object-cover"
            onLoad={() => setImageLoaded(true)}
            priority={currentIndex === 0}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls - Only show if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous/Next Buttons */}
          <motion.button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </motion.button>

          <motion.button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </motion.button>

          {/* Dot Indicators */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}

      {/* Loading Skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}
    </div>
  );
};

// Enhanced Project Card Component
const ProjectCard = ({ 
  project, 
  index, 
  onOpenDialog 
}: { 
  project: Project; 
  index: number; 
  onOpenDialog: (project: Project) => void;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });



  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
    >
      <Card className="h-full min-h-[500px] flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 overflow-hidden bg-card/95 backdrop-blur-sm relative">
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
          <div className={`w-2 h-2 rounded-full ${getStatusDotColor(project.status)} shadow-sm`} />
          <br/>
          <span className="text-xs font-medium bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full border border-border/30 text-foreground/80">
            {project.status.replace('-', ' ').toUpperCase()}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg border border-white/20"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Featured</span>
            </motion.div>
          </div>
        )}



        <CardHeader className="relative z-10 pb-3 p-4">
          <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 mt-6 line-clamp-2">
            {project.title}
          </CardTitle>
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground bg-background/50">
              {project.category}
            </Badge>
            {project.metrics.complexity && (
              <div className="flex items-center space-x-1 bg-background/50 px-2 py-1 rounded-md border border-border/30">
                <Code2 className={`w-3 h-3 ${getComplexityColor(project.metrics.complexity)}`} />
                <span className={`text-xs font-medium ${getComplexityColor(project.metrics.complexity)}`}>
                  {project.metrics.complexity}
                </span>
              </div>
            )}
          </div>
          <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 line-clamp-3">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-grow space-y-3 p-4">
          {/* Enhanced Carousel */}
          <div className="mb-3">
            <EnhancedCarousel images={project.images} title={project.title} />
          </div>

          {/* Tech Stack - Compact */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold flex items-center space-x-1 text-foreground/90">
              <Zap className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 4).map((tech, i) => (
                <Badge
                  key={`${project.title}-${tech}`}
                  variant="secondary"
                  className="text-xs bg-secondary/80 hover:bg-secondary border border-border/30 text-secondary-foreground/90 transition-colors duration-200"
                >
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 4 && (
                <Badge variant="outline" className="text-xs border-border/50 text-muted-foreground">
                  +{project.techStack.length - 4}
                </Badge>
              )}
            </div>
          </div>

          {/* Key Metrics - Compact */}
          {(project.metrics.performance || project.metrics.users || project.metrics.timeline) && (
            <div className="grid grid-cols-2 gap-2 text-xs">
              {project.metrics.performance && (
                <div className="flex items-center space-x-1 bg-green-50/80 dark:bg-green-900/30 p-2 rounded-md border border-green-200/50 dark:border-green-800/50">
                  <TrendingUp className="w-3 h-3 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 truncate font-medium">{project.metrics.performance}</span>
                </div>
              )}
              {project.metrics.timeline && (
                <div className="flex items-center space-x-1 bg-purple-50/80 dark:bg-purple-900/30 p-2 rounded-md border border-purple-200/50 dark:border-purple-800/50">
                  <Calendar className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-700 dark:text-purple-300 truncate font-medium">{project.metrics.timeline}</span>
                </div>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-4 pt-2">
          {/* Action Buttons */}
          <div className="flex space-x-2 w-full">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenDialog(project)}
              className="flex-1 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900/20 transition-all duration-300 group"
            >
              <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Details
            </Button>

            {project.demo !== "#" ? (
              <Button 
                asChild
                size="sm"
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white border-0 transition-all duration-300"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1"
                >
                  <Play className="w-4 h-4" />
                  <span>Demo</span>
                </a>
              </Button>
            ) : (
              <Button 
                size="sm"
                disabled
                variant="outline"
                className="flex-1 opacity-50 cursor-not-allowed border-gray-300 text-gray-500 dark:border-gray-600 dark:text-gray-400"
              >
                <Play className="w-4 h-4 mr-1" />
                <span>Soon</span>
              </Button>
            )}

            <Button 
              asChild
              variant="outline"
              size="sm"
              className="px-3 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all duration-300"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </CardFooter>

        {/* Hover Effect Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
          initial={false}
        />
      </Card>
    </motion.div>
  );
};

// Enhanced Project Dialog Component
const EnhancedProjectDialog = ({ project }: { project: Project | null }) => {
  if (!project) return null;

  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="outline">{project.category}</Badge>
              <Badge className={getStatusColor(project.status)}>
                {project.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>
          {project.featured && (
            <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              <Star className="w-4 h-4 fill-current" />
              <span>Featured</span>
            </div>
          )}
        </div>
        <DialogDescription className="text-base leading-relaxed">
          {project.description}
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        {/* Image Gallery */}
        <div className="w-full">
          <EnhancedCarousel images={project.images} title={project.title} />
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.performance && (
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-green-700 dark:text-green-400">
                {project.metrics.performance}
              </div>
              <div className="text-xs text-green-600">Performance</div>
            </div>
          )}
          {project.metrics.users && (
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                {project.metrics.users}
              </div>
              <div className="text-xs text-blue-600">Users/Scale</div>
            </div>
          )}
          {project.metrics.timeline && (
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-semibold text-purple-700 dark:text-purple-400">
                {project.metrics.timeline}
              </div>
              <div className="text-xs text-purple-600">Timeline</div>
            </div>
          )}
          {project.metrics.complexity && (
            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
              <Code2 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className={`text-sm font-semibold ${getComplexityColor(project.metrics.complexity)}`}>
                {project.metrics.complexity.toUpperCase()}
              </div>
              <div className="text-xs text-orange-600">Complexity</div>
            </div>
          )}
        </div>

        {/* Enhanced Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="challenge">Challenge</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span>Technology Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center space-x-2">
                  <Target className="w-5 h-5 text-primary" />
                  <span>Key Highlights</span>
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="challenge">
            <div className="prose dark:prose-invert max-w-none">
              <h4 className="font-semibold mb-3">The Challenge</h4>
              <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
            </div>
          </TabsContent>

          <TabsContent value="solution">
            <div className="prose dark:prose-invert max-w-none">
              <h4 className="font-semibold mb-3">Our Solution</h4>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              <h4 className="font-semibold mb-3 mt-6">Thought Process</h4>
              <p className="text-muted-foreground leading-relaxed">{project.thoughtProcess}</p>
            </div>
          </TabsContent>

          <TabsContent value="impact">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Project Impact</h4>
                <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-red-700 dark:text-red-400">Before</h5>
                  <p className="text-sm text-red-600 dark:text-red-300">{project.beforeMetrics}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2 text-green-700 dark:text-green-400">After</h5>
                  <p className="text-sm text-green-600 dark:text-green-300">{project.afterMetrics}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4 border-t">
          <Button asChild className="flex-1">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
              <ExternalLink className="w-4 h-4" />
              <span>View Live Demo</span>
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

// Helper function for status colors
const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'completed': return 'bg-green-500 text-white';
    case 'in-progress': return 'bg-yellow-500 text-black';
    case 'planning': return 'bg-blue-500 text-white';
    default: return 'bg-gray-500 text-white';
  }
};

// Helper function for complexity colors
const getComplexityColor = (complexity: Project['metrics']['complexity']) => {
  switch (complexity) {
    case 'high': return 'text-red-500';
    case 'medium': return 'text-yellow-500';
    case 'low': return 'text-green-500';
    default: return 'text-gray-500';
  }
};

// Helper function for status dot colors (used in ProjectCard)
const getStatusDotColor = (status: Project['status']) => {
  switch (status) {
    case 'completed': return 'bg-green-500';
    case 'in-progress': return 'bg-yellow-500';
    case 'planning': return 'bg-blue-500';
    default: return 'bg-gray-500';
  }
};

// Main Projects component
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<'all' | 'featured' | 'completed' | 'in-progress'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.status === filter;
  });

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Explore my portfolio of backend development projects, showcasing expertise in 
            Python, FastAPI, microservices architecture, and DevOps automation.
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { key: 'all', label: 'All Projects', count: projects.length },
              { key: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
              { key: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
              { key: 'in-progress', label: 'In Progress', count: projects.filter(p => p.status === 'in-progress').length },
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(filterOption.key as any)}
                className="transition-all duration-300"
              >
                {filterOption.label} ({filterOption.count})
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index} 
                onOpenDialog={handleOpenDialog}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <EnhancedProjectDialog project={selectedProject} />
        </Dialog>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-muted-foreground">
              No projects found for the selected filter.
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary-enhanced">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/KDasaradha" target="_blank" rel="noopener noreferrer">
                View All Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
