"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  User, 
  Code, 
  Rocket, 
  Shield, 
  Cloud, 
  BookOpen, 
  Target, 
  Lightbulb,
  TrendingUp,
  Award,
  Zap,
  Brain,
  Heart,
  Star,
  ChevronRight,
  Calendar,
  MapPin,
  Coffee,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Server,
  Lock
} from "lucide-react";
import { Timeline, TimelineItem } from "./ui/timeline";

// Define interfaces for props
interface SummaryPoint {
  title: string;
  description: string;
  icon: any;
  color: string;
  bgColor: string;
}

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  technologies?: string[];
  icon: any;
  color: string;
  achievements?: string[];
}

interface AboutProps {
  summary?: SummaryPoint[];
  timelineEvents?: TimelineEvent[];
  whyWorkWithMe?: string[];
  learningTopics?: string[];
}

// Enhanced static data with icons and colors
const defaultTimelineEvents: TimelineEvent[] = [
  {
    title: "Python Foundation & Academic Excellence",
    date: "2021-2022",
    description:
      "Started programming journey with Python fundamentals while completing B.Tech in Electrical & Electronics Engineering (CGPA: 7.64). Gained foundational experience in Java and OOP during Wipro internship.",
    technologies: ["Python", "Java", "OOP", "Data Structures"],
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    achievements: [
      "Completed B.Tech with 7.64 CGPA",
      "Mastered Python fundamentals",
      "Learned Java and OOP concepts"
    ]
  },
  {
    title: "Professional Entry: API Development",
    date: "July-Oct 2023",
    description:
      "Began professional career as Software Engineer Intern at KaryaHub Solutions. Built foundational modules for user and project management, automated asset generation workflows, and enhanced image processing capabilities.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Pixabay API", "Unsplash API", "OpenCV", "Pillow", "SonarQube"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    achievements: [
      "Built user & project management modules",
      "50% reduction in manual asset generation",
      "Enhanced image processing with OpenCV/Pillow"
    ]
  },
  {
    title: "Backend Mastery & Security Implementation",
    date: "Nov 2023-2024",
    description:
      "Promoted to Software Developer. Designed scalable RESTful APIs, implemented JWT/OAuth 2.0 security, optimized database performance by 40%, and developed dynamic design systems using OpenCV/Pillow and Fabric.js. Enhanced API documentation and mentored team members.",
    technologies: ["FastAPI", "JWT", "OAuth 2.0", "PostgreSQL", "Redis", "OpenCV", "Fabric.js", "Swagger", "MkDocs"],
    icon: Shield,
    color: "from-purple-500 to-pink-500",
    achievements: [
      "40% API performance improvement",
      "Implemented robust security with JWT/OAuth 2.0",
      "35% faster developer onboarding through documentation"
    ]
  },
  {
    title: "Microservices & DevOps Excellence",
    date: "2024-Present",
    description:
      "Architected microservices migration from monolithic applications. Implemented comprehensive CI/CD pipelines with Jenkins, GitHub Actions, SonarQube, and Snyk. Mastered Docker containerization, NGINX reverse proxy, and HashiCorp Vault for secrets management. Reduced critical vulnerabilities by 30%.",
    technologies: ["Microservices", "Docker", "Jenkins", "GitHub Actions", "SonarQube", "Snyk", "HashiCorp Vault", "NGINX"],
    icon: Server,
    color: "from-orange-500 to-red-500",
    achievements: [
      "Migrated monolithic to microservices architecture",
      "25% faster deployment cycles",
      "30% reduction in critical vulnerabilities"
    ]
  },
  {
    title: "Full-Stack & Cloud Expansion",
    date: "2024-Present",
    description:
      "Expanding expertise in AWS cloud services (EC2, S3, VPC), full-stack development with React/Next.js, and advanced system design. Mentoring junior developers and leading technical documentation initiatives.",
    technologies: ["AWS", "React", "Next.js", "System Design", "Mentorship"],
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    achievements: [
      "AWS cloud expertise",
      "Full-stack development",
      "Team mentorship"
    ]
  },
];

const defaultSummary: SummaryPoint[] = [
  {
    title: "Performance-First Architecture",
    description:
      "I've consistently delivered 40% API performance improvements through asynchronous programming, strategic caching with Redis, and SQL query optimization. My approach combines algorithmic efficiency with practical database indexing and real-world load testing to ensure systems perform under pressure.",
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Security-by-Design Implementation",
    description:
      "Security isn't an afterthought—it's built into every layer. I implement JWT (RS256), OAuth 2.0, and Pydantic validation to prevent SQL injection and XSS attacks. My CI/CD pipelines include SonarQube and Snyk scanning, reducing security vulnerabilities by 30% across projects.",
    icon: Lock,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Microservices & Scalability Expert",
    description:
      "I've successfully migrated monolithic applications to microservices architecture using Docker, NGINX reverse proxy, and shared-volume strategies. My containerized solutions with Docker Compose enable independent service deployment while maintaining code reusability and system resilience.",
    icon: Server,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "DevOps Automation Specialist",
    description:
      "I build comprehensive CI/CD pipelines that reduce deployment cycles by 25%. My Jenkins and GitHub Actions workflows integrate automated testing (Pytest), static analysis (SonarQube), vulnerability scanning (Snyk), and secrets management via HashiCorp Vault for enterprise-grade automation.",
    icon: Rocket,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Cloud-Native, Cost-Conscious",
    description:
      "Serverless functions aren’t just buzzwords—they’re tools for balancing scalability with operational costs. I architect AWS/GCP solutions where infrastructure costs scale linearly with business growth, using reserved instances and auto-scaling groups to eliminate waste.",
    icon: Cloud,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Learning Through Teaching",
    description:
      "My mastery of technologies like Docker or Kafka solidifies when I document processes or mentor team members. I maintain personal knowledge repositories and actively contribute to internal wikis—because understanding something well enough to explain it reveals hidden complexities.",
    icon: Brain,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
];

const defaultWhyWorkWithMe = [
  "Expertise in designing and implementing scalable, secure, and maintainable architectures.",
  "A steadfast commitment to delivering high-quality, clean code and embracing continuous improvement.",
  "Proven ability to excel in collaborative, Agile environments with cross-functional teams.",
];

const defaultLearningTopics = [
  "Advanced AWS Cloud services for scalable backend deployments",
  "Modern React patterns for dynamic, interactive user interfaces",
  "Next.js for optimized server-side rendering and static site generation",
  "Comprehensive system design and microservices architecture",
  "CI/CD pipeline optimization with contemporary DevOps tools",
];

// Reusable animation variants
const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About({
  summary = defaultSummary,
  timelineEvents = defaultTimelineEvents,
  whyWorkWithMe = defaultWhyWorkWithMe,
  learningTopics = defaultLearningTopics,
}: AboutProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-secondary/5">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-blue-950/30 dark:to-purple-950/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="section-kicker mb-5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <User className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">Get to know me</span>
          </motion.div>
          
          <h2 className="section-heading mb-5">
            <span>About Me</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A results-driven Python Backend Engineer with a strong foundation in OOP and system design, 
            transitioning from electrical engineering to crafting <span className="font-semibold text-foreground/80">scalable</span>, 
            <span className="font-semibold text-foreground/80"> production-grade</span> API architectures.
          </p>
          
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          {/* Journey Timeline - Takes 2 columns on xl screens */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="h-full bg-background/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader className="pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-2xl">My Journey</CardTitle>
                </div>
                <CardDescription className="text-base">
                  A progressive evolution from a Python enthusiast to a seasoned backend specialist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {timelineEvents.map((event, index) => {
                    const IconComponent = event.icon;
                    return (
                      <motion.div
                        key={`${event.title}-${event.date}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <TimelineItem
                          title={event.title}
                          date={event.date}
                          aria-label={`${event.title} in ${event.date}`}
                        >
                          <div className="space-y-3">
                            <p className="text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                            
                            {event.technologies && (
                              <div className="flex flex-wrap gap-2">
                                {event.technologies.map((tech) => (
                                  <Badge 
                                    key={tech} 
                                    variant="secondary" 
                                    className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            
                            {event.achievements && (
                              <div className="space-y-1">
                                <p className="text-sm font-medium text-primary">Key Achievements:</p>
                                <ul className="space-y-1">
                                  {event.achievements.map((achievement) => (
                                    <li key={achievement} className="flex items-center gap-2 text-sm text-muted-foreground">
                                      <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </TimelineItem>
                      </motion.div>
                    );
                  })}
                </Timeline>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats Card */}
          <motion.div
            className="xl:col-span-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-950/30 dark:to-purple-950/30 border-0 shadow-xl backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-blue-600 shadow-lg shadow-green-500/20">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">Quick Stats</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "3+", label: "Years Experience", gradient: "from-blue-600 to-cyan-600" },
                    { value: "40%", label: "Performance Boost", gradient: "from-green-600 to-emerald-600" },
                    { value: "25%", label: "Faster Deployments", gradient: "from-purple-600 to-pink-600" },
                    { value: "30%", label: "Security Improvement", gradient: "from-orange-600 to-red-600" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 rounded-xl bg-background/60 backdrop-blur-sm border border-border/30 hover:shadow-md transition-all duration-300"
                      whileHover={{ y: -3, scale: 1.02 }}
                    >
                      <div className={`text-2xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    Location & Availability
                  </h4>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    {[
                      { icon: Globe, text: "Based in India" },
                      { icon: Coffee, text: "Available for remote work" },
                      { icon: Calendar, text: "Open to new opportunities" },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-background/50 transition-colors">
                        <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-3 h-3 text-primary" />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Development Philosophy Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-3xl">Development Philosophy</CardTitle>
              </div>
              <CardDescription className="text-lg max-w-2xl mx-auto">
                My approach to building software that makes a difference
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {summary.map((point: SummaryPoint, index) => {
                  const IconComponent = point.icon;
                  return (
                    <motion.div
                      key={point.title}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -6 }}
                    >
                      <Card className="h-full bg-gradient-to-br from-background to-secondary/20 border border-border/40 shadow-md group-hover:shadow-xl group-hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                        {/* Subtle gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
                        
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-xl ${point.bgColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                              <IconComponent className={`w-6 h-6 ${point.color}`} />
                            </div>
                            <div className="space-y-2">
                              <h3 className="font-bold text-lg text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                                {point.title}
                              </h3>
                              <p className="text-muted-foreground leading-relaxed text-sm">
                                {point.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Bottom Section: Learning & Collaboration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/50 dark:to-blue-950/50 border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-blue-600">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">Currently Learning</CardTitle>
                </div>
                <CardDescription>
                  Staying ahead with the latest technologies and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5">
                  {learningTopics.map((topic, index) => (
                    <motion.div
                      key={topic}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background/60 hover:bg-background border border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-default"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{topic}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Card className="h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl">Why Work With Me?</CardTitle>
                </div>
                <CardDescription>
                  What makes our collaboration successful and impactful
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {whyWorkWithMe.map((point, index) => (
                    <motion.div
                      key={point}
                      className="flex items-start gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium leading-relaxed">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
