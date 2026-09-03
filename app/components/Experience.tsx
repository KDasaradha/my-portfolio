"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import HorizontalScrollGallery from "./HorizontalScrollGallery";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Award, 
  Code, 
  Shield, 
  Server, 
  Cloud, 
  Zap,
  Target,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Building,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Rocket,
  Database,
  Lock,
  Globe
} from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: Achievement[];
  technologies: string[];
  type: "full-time" | "internship" | "self-learning";
  icon: any;
  color: string;
  bgColor: string;
  metrics?: Metric[];
}

interface Achievement {
  title: string;
  description: string;
  impact?: string;
  icon: any;
}

interface Metric {
  label: string;
  value: string;
  improvement?: string;
  icon: any;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "KaryaHub Solutions",
    location: "Hyderabad, India",
    period: "November 2023 – Present",
    startDate: "2023-11",
    endDate: "Present",
    description:
      "Leading backend development initiatives for enterprise-grade applications, specializing in scalable API design, microservices architecture, and DevOps automation. Promoted from Software Engineer Intern to full-time developer role.",
    achievements: [
      {
        title: "API Development & Performance",
        description: "Designed and implemented scalable RESTful APIs using FastAPI, SQLAlchemy, and PostgreSQL. Reduced API response times by 40% through asynchronous programming and SQL query optimization.",
        impact: "40% performance improvement",
        icon: Rocket
      },
      {
        title: "Microservices Architecture & Deployment",
        description: "Designed and deployed Dockerized microservices behind an NGINX reverse proxy, enhancing application scalability and modularity. Migrated monolithic applications to microservices architecture.",
        impact: "Enhanced scalability",
        icon: Server
      },
      {
        title: "Security Implementation",
        description: "Implemented robust API security with JWT (RS256) and OAuth 2.0, using Pydantic validation to mitigate SQL injection and XSS vulnerabilities.",
        impact: "30% reduction in vulnerabilities",
        icon: Shield
      },
      {
        title: "CI/CD Automation",
        description: "Automated deployments with CI/CD pipelines using GitHub Actions and Jenkins, reducing release cycles by 25%. Integrated SonarQube and Snyk for static code analysis.",
        impact: "25% faster release cycles",
        icon: Zap
      },
      {
        title: "Documentation & Team Leadership",
        description: "Enhanced internal and external API documentation using Swagger and MkDocs, improving developer onboarding time by 35%. Mentored interns on REST API design, Git workflows, and best practices.",
        impact: "35% faster onboarding",
        icon: Users
      },
      {
        title: "Backend Module Development",
        description: "Developed backend modules for user and project management, and automated image workflows by integrating Pixabay and Unsplash APIs. Enhanced image processing capabilities using OpenCV and Pillow libraries.",
        impact: "Automated workflows",
        icon: Code
      }
    ],
    technologies: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Redis", "Docker", "Jenkins", "NGINX", "GitHub Actions", "SonarQube", "Snyk", "Swagger", "MkDocs", "OpenCV", "Pillow", "Pixabay API", "Unsplash API"],
    type: "full-time",
    icon: Briefcase,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20",
    metrics: [
      { label: "API Performance", value: "40%", improvement: "faster", icon: TrendingUp },
      { label: "Security Issues", value: "30%", improvement: "reduced", icon: Shield },
      { label: "Deployment Time", value: "25%", improvement: "faster", icon: Clock },
      { label: "Onboarding Time", value: "35%", improvement: "reduced", icon: Users }
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "KaryaHub Solutions",
    location: "Hyderabad, India",
    period: "July 2023 - October 2023",
    startDate: "2023-07",
    endDate: "2023-10",
    description:
      "Built foundational modules for user and project management, automated asset generation workflows, and enhanced image processing capabilities for template-based visual content generation.",
    achievements: [
      {
        title: "User & Project Management Modules",
        description: "Built foundational modules for user and project management using FastAPI and SQLAlchemy for clean, scalable architecture.",
        icon: Users
      },
      {
        title: "Automated Asset Generation",
        description: "Automated asset generation workflows by integrating external APIs such as Pixabay and Unsplash, reducing manual effort by 50% through workflow automation.",
        impact: "50% reduction in manual effort",
        icon: Zap
      },
      {
        title: "Image Processing Enhancement",
        description: "Enhanced image processing capabilities utilizing Pillow and OpenCV for dynamic image manipulation, enabling template-based generation of visual content for improved UX.",
        icon: Star
      },
      {
        title: "Static Code Analysis",
        description: "Performed static code analysis with SonarQube, identifying and resolving critical code quality and security issues proactively.",
        icon: Shield
      }
    ],
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Pixabay API", "Unsplash API", "OpenCV", "Pillow", "SonarQube"],
    type: "internship",
    icon: Code,
    color: "from-green-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20"
  },
  {
    id: 3,
    title: "Software Development Intern",
    company: "Wipro",
    location: "Remote",
    period: "March 2022 - July 2022",
    startDate: "2022-03",
    endDate: "2022-07",
    description:
      "Initiated my professional journey by mastering foundational programming concepts and applying them in a corporate environment.",
    achievements: [
      {
        title: "Java & OOP Mastery",
        description: "Learned Java and Object-Oriented Programming (OOP) principles, applying them to small-scale internal tools.",
        icon: BookOpen
      },
      {
        title: "Python Development",
        description: "Explored Python OOP, data structures, and web technologies (HTML, CSS) to broaden technical expertise.",
        icon: Code
      },
      {
        title: "Team Collaboration",
        description: "Collaborated with team members to understand requirement analysis and software development workflows.",
        icon: Users
      }
    ],
    technologies: ["Java", "Python", "HTML", "CSS", "OOP", "Data Structures"],
    type: "internship",
    icon: BookOpen,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
  },
  {
    id: 4,
    title: "Self-Taught Developer & B.Tech Student",
    company: "Self-Learning",
    location: "India",
    period: "Jul 2021 - Jul 2023",
    startDate: "2021-07",
    endDate: "2023-07",
    description:
      "Began my programming journey during my B.Tech, focusing on self-learning and foundational skills.",
    achievements: [
      {
        title: "Programming Foundation",
        description: "Started with Python basics in 2021, progressing to OOP, data structures, and foundational web development (HTML, CSS).",
        icon: Target
      },
      {
        title: "Project Development",
        description: "Created sample Python projects and basic Flask applications to solidify programming knowledge.",
        icon: Rocket
      },
      {
        title: "Academic Achievement",
        description: "Graduated with a B.Tech in July 2022, equipped with a strong academic and self-taught foundation.",
        icon: Award
      }
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Git"],
    type: "self-learning",
    icon: Star,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Docker Certified Associate",
  "PostgreSQL Performance Tuning",
];

const keyAchievements = [
  {
    title: "Performance Excellence",
    description: "Reduced API response times by 40% through asynchronous programming, SQL query optimization, and Redis caching implementation.",
    icon: TrendingUp,
    color: "text-green-600 dark:text-green-400"
  },
  {
    title: "Architecture Leadership",
    description: "Successfully migrated monolithic applications to microservices architecture using Docker, NGINX reverse proxy, and shared-volume code reuse strategies.",
    icon: Server,
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "DevOps Automation",
    description: "Automated CI/CD pipelines with GitHub Actions and Jenkins, reducing deployment cycles by 25% while integrating quality gates (SonarQube, Snyk, Dependabot).",
    icon: Zap,
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    title: "Security Implementation",
    description: "Enhanced application security by 30% through JWT (RS256), OAuth 2.0, Pydantic validation, and automated vulnerability scanning with SonarQube/Snyk.",
    icon: Shield,
    color: "text-red-600 dark:text-red-400"
  },
  {
    title: "Innovation in Design",
    description: "Developed dynamic design generation system using OpenCV/Pillow, then optimized with Fabric.js for real-time canvas manipulation and template generation.",
    icon: Star,
    color: "text-yellow-600 dark:text-yellow-400"
  },
  {
    title: "Database Mastery",
    description: "Designed efficient database schemas with SQLAlchemy ORM, implemented Alembic migrations, and optimized async query performance for high-throughput applications.",
    icon: Database,
    color: "text-indigo-600 dark:text-indigo-400"
  }
];

const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 relative bg-secondary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/20 to-indigo-50/30 dark:from-purple-950/10 dark:via-blue-950/5 dark:to-indigo-950/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced Page Title */}
        <motion.div
          className="text-center mb-20"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="section-kicker mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Career Journey</span>
            <Sparkles className="w-4 h-4 text-yellow-500" />
          </motion.div>
          
          <h2 className="section-heading mb-5">
            Professional Experience
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of continuous growth, from self-taught programming to leading backend development 
            initiatives in <span className="font-semibold text-foreground/80">enterprise-grade</span> applications.
          </p>
          
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full" />
          </motion.div>
        </motion.div>
        </div>

        {/* Sticky Horizontal Experience Gallery */}
        <HorizontalScrollGallery
          ariaLabel="Professional experience history"
          progressGradient="from-purple-500 via-blue-500 to-indigo-500"
          items={experiences}
          renderItem={(experience, index) => (
            <>
              {/* Experience Icon */}
              <div className="flex-shrink-0">
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${experience.color} shadow-lg flex items-center justify-center`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={activeExperience === experience.id ? { scale: 1.05 } : { scale: 1 }}
                  onHoverStart={() => setActiveExperience(experience.id)}
                  onHoverEnd={() => setActiveExperience(null)}
                >
                  <experience.icon className="w-10 h-10 text-white" />
                </motion.div>
              </div>

              {/* Experience Content */}
              <motion.div
                className="flex-1"
                whileHover={{ y: -5 }}
              >
                <Card className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 ${experience.bgColor}`}>
                  {/* Card Header */}
                  <CardHeader className={`bg-gradient-to-r ${experience.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <experience.icon className="w-full h-full" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-white text-2xl font-bold mb-2">
                            {experience.title}
                          </CardTitle>
                          <div className="flex items-center space-x-4 text-white/90">
                            <div className="flex items-center space-x-1">
                              <Building className="w-4 h-4" />
                              <span className="font-semibold">{experience.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="bg-white/20 text-white border-white/30"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {experience.period}
                        </Badge>
                      </div>
                      
                      <p className="text-white/95 leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="p-6 space-y-6">
                    {/* Metrics */}
                    {experience.metrics && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {experience.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metricIndex}
                            className="text-center p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + metricIndex * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center">
                              <metric.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{metric.value}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{metric.improvement}</div>
                            <div className="text-xs font-semibold mt-1">{metric.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-4 flex items-center">
                        <Award className="w-5 h-5 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {experience.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="flex items-start space-x-3 p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:shadow-md transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.1 + achIndex * 0.05 }}
                            whileHover={{ x: 4, scale: 1.01 }}
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                              <achievement.icon className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <div>
                              <h5 className="font-semibold text-sm mb-1">{achievement.title}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {achievement.description}
                              </p>
                              {achievement.impact && (
                                <Badge variant="secondary" className="mt-2 text-xs bg-yellow-500/10 text-yellow-700 dark:text-yellow-300 border-yellow-500/20">
                                  {achievement.impact}
                                </Badge>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-blue-500" />
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.02 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/30 border border-border/30 transition-all duration-200"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
        />

        <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced Key Achievements Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center space-x-2">
              <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Key Achievements</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Highlights of my technical contributions and measurable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-2xl bg-background/60 backdrop-blur-sm border border-border/40 hover:border-primary/40 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl bg-gradient-to-br from-purple-50/80 via-blue-50/60 to-indigo-50/40 dark:from-purple-950/30 dark:via-blue-950/20 dark:to-indigo-950/10 border border-purple-200/40 dark:border-purple-800/30 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground relative z-10">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
              With proven experience in backend development, microservices architecture, and DevOps automation, 
              I'm ready to tackle your next challenging project and deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                <span className="flex items-center gap-2">
                  Let's Collaborate
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                <span className="flex items-center gap-2">
                  View Projects
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Button>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

