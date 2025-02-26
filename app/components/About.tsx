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
    title: "🚀 Embarked on Python Journey",
    date: "2021",
    description:
      "Initiated my coding career by mastering Python fundamentals, igniting a passion for problem-solving and innovation.",
    technologies: ["Python"],
  },
  {
    title: "💼 Wipro Internship: Java & OOP",
    date: "2022",
    description:
      "Gained hands-on experience in Java and Object-Oriented Programming during my internship at Wipro, while also exploring Python OOP, data structures, HTML, and CSS.",
    technologies: ["Java", "Python"],
  },
  {
    title: "🔍 Karyahub Solutions Internship: API & Web Scraping",
    date: "2023",
    description:
      "Developed foundational projects using Python and Flask, delved into web scraping with third-party APIs, and advanced my skills with FastAPI by building user and project management modules.",
    technologies: ["Python", "FastAPI", "Web Scraping"],
  },
  {
    title: "🖼️ Advanced Backend & Frontend Integration",
    date: "2024",
    description:
      "Enhanced my expertise by leveraging image processing libraries like Pillow and OpenCV for dynamic design generation, implementing Fabric.js for interactive frontend rendering, and mastering asynchronous programming with FastAPI—including JWT security and efficient database management.",
    technologies: ["Python", "FastAPI", "Pillow", "OpenCV", "Fabric.js"],
  },
  {
    title: "☁️ Microservices, CI/CD & Cloud Integration",
    date: "2025",
    description:
      "Expanding my skillset with microservices architecture, containerization using Docker, and CI/CD pipelines via GitHub Actions and Jenkins. Currently exploring AWS Cloud services for scalable deployments and enhancing full-stack capabilities with React and Next.js.",
    technologies: ["Docker", "CI/CD", "AWS", "React", "Next.js"],
  },
];

const defaultSummary = [
  {
    title: "Foundations Over Frameworks",
    description:
      "I architect systems to outlast technology trends. While proficient with modern tools like FastAPI, React, and AWS, I prioritize clean abstractions and SOLID principles that enable painless technology migration. Every line of code is written with future maintainers in mind.",
  },
  {
    title: "Security as Default State",
    description:
      "From parameterized queries to automated vulnerability scanning, I bake security into the SDLC—never treat it as an afterthought. My implementations enforce least-privilege access, encrypted data flows, and zero-trust architectures, even in rapid development cycles.",
  },
  {
    title: "Performance with Purpose",
    description:
      "I optimize judiciously—70% of speed gains typically come from algorithmic improvements, not language nuances. My approach combines Big O analysis during design, strategic indexing for databases, and load testing against real-world scenarios rather than synthetic benchmarks.",
  },
  {
    title: "APIs as Collaboration Contracts",
    description:
      "Whether building microservices or REST endpoints, I design interfaces as collaborative agreements between systems. Versioning, comprehensive documentation (OpenAPI/Swagger), and backward compatibility are non-negotiable for sustainable integration.",
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
