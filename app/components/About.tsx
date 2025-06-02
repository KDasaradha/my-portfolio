"use client";

import { motion, Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Timeline, TimelineItem } from "@/app/components/ui/timeline";

// Define interfaces for props
interface SummaryPoint {
  title: string;
  description: string;
}

interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  technologies?: string[];
}

interface AboutProps {
  summary?: SummaryPoint[];
  timelineEvents?: TimelineEvent[];
  whyWorkWithMe?: string[];
  learningTopics?: string[];
}

// Static data (moved outside to prevent redefinition)
const defaultTimelineEvents: TimelineEvent[] = [
  {
    title: "🚀 Python Foundation & Academic Excellence",
    date: "2021-2022",
    description:
      "Started programming journey with Python fundamentals while completing B.Tech in Electrical & Electronics Engineering (CGPA: 7.64). Gained foundational experience in Java and OOP during Wipro internship.",
    technologies: ["Python", "Java", "OOP"],
  },
  {
    title: "🔍 Professional Entry: API Development",
    date: "July-Nov 2023",
    description:
      "Began professional career as Software Engineer Intern at KaryaHub Solutions. Developed web scraping scripts, built initial FastAPI applications with SQLAlchemy ORM, and explored third-party API integrations.",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "Web Scraping"],
  },
  {
    title: "🏗️ Backend Mastery & Security Implementation",
    date: "Nov 2023-2024",
    description:
      "Promoted to Backend Developer. Designed scalable RESTful APIs, implemented JWT/OAuth 2.0 security, optimized database performance by 40%, and developed dynamic design systems using OpenCV/Pillow and Fabric.js.",
    technologies: ["FastAPI", "JWT", "OAuth 2.0", "PostgreSQL", "Redis", "OpenCV", "Fabric.js"],
  },
  {
    title: "🔄 Microservices & DevOps Excellence",
    date: "2024-Present",
    description:
      "Architected microservices migration from monolithic applications. Implemented comprehensive CI/CD pipelines with Jenkins, GitHub Actions, SonarQube, and Snyk. Mastered Docker containerization, NGINX reverse proxy, and HashiCorp Vault for secrets management.",
    technologies: ["Microservices", "Docker", "Jenkins", "SonarQube", "Snyk", "HashiCorp Vault", "NGINX"],
  },
  {
    title: "☁️ Full-Stack & Cloud Expansion",
    date: "2024-Present",
    description:
      "Expanding expertise in AWS cloud services (EC2, S3, VPC), full-stack development with React/Next.js, and advanced system design. Mentoring junior developers and leading technical documentation initiatives.",
    technologies: ["AWS", "React", "Next.js", "System Design", "Mentorship"],
  },
];

const defaultSummary = [
  {
    title: "Performance-First Architecture",
    description:
      "I've consistently delivered 40% API performance improvements through asynchronous programming, strategic caching with Redis, and SQL query optimization. My approach combines algorithmic efficiency with practical database indexing and real-world load testing to ensure systems perform under pressure.",
  },
  {
    title: "Security-by-Design Implementation",
    description:
      "Security isn't an afterthought—it's built into every layer. I implement JWT (RS256), OAuth 2.0, and Pydantic validation to prevent SQL injection and XSS attacks. My CI/CD pipelines include SonarQube and Snyk scanning, reducing security vulnerabilities by 30% across projects.",
  },
  {
    title: "Microservices & Scalability Expert",
    description:
      "I've successfully migrated monolithic applications to microservices architecture using Docker, NGINX reverse proxy, and shared-volume strategies. My containerized solutions with Docker Compose enable independent service deployment while maintaining code reusability and system resilience.",
  },
  {
    title: "DevOps Automation Specialist",
    description:
      "I build comprehensive CI/CD pipelines that reduce deployment cycles by 25%. My Jenkins and GitHub Actions workflows integrate automated testing (Pytest), static analysis (SonarQube), vulnerability scanning (Snyk), and secrets management via HashiCorp Vault for enterprise-grade automation.",
  },
  {
    title: "Cloud-Native, Cost-Conscious",
    description:
      "Serverless functions aren’t just buzzwords—they’re tools for balancing scalability with operational costs. I architect AWS/GCP solutions where infrastructure costs scale linearly with business growth, using reserved instances and auto-scaling groups to eliminate waste.",
  },
  {
    title: "Learning Through Teaching",
    description:
      "My mastery of technologies like Docker or Kafka solidifies when I document processes or mentor team members. I maintain personal knowledge repositories and actively contribute to internal wikis—because understanding something well enough to explain it reveals hidden complexities.",
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
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          {...fadeIn}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Left Column: Journey Timeline */}
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
                <CardDescription>
                  A progressive evolution from a Python enthusiast to a seasoned
                  backend specialist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {timelineEvents.map((event) => (
                    <TimelineItem
                      key={`${event.title}-${event.date}`}
                      title={event.title}
                      date={event.date}
                      aria-label={`${event.title} in ${event.date}`}
                    >
                      {event.description}
                      {event.technologies && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          <strong>Technologies:</strong>{" "}
                          {event.technologies.join(", ")}
                        </p>
                      )}
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Philosophy & Learning */}
          <motion.div variants={fadeIn}>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>🚀 My Development Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {summary.map((point: SummaryPoint) => (
                    <li key={point.title} className="flex items-start gap-3">
                      <span className="text-xl">✅</span>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

            {/* Why Work With Me and Learning sections */}
            <motion.div variants={fadeIn} className="grid-cols-1 md:grid-cols-2 gap-8 contents">
            <Card>
              <CardHeader>
              <CardTitle>What I'm Currently Learning</CardTitle>
              </CardHeader>
              <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {learningTopics.map((topic) => (
                <li key={topic}>{topic}</li>
                ))}
              </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
              <CardTitle>Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {whyWorkWithMe.map((point) => (
                <li key={point}>{point}</li>
                ))}
              </ul>
              </CardContent>
            </Card>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
