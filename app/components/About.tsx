"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";
import { Timeline, TimelineItem } from "@/app/components/ui/timeline";

// Define an interface for clarity and type safety (optional)
interface TimelineEvent {
  title: string;
  date: string;
  description: string;
  technologies?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    title: "Started with Python",
    date: "2021",
    description:
      "Discovered the elegance and versatility of Python, igniting a passion for coding and problem-solving.",
    technologies: ["Python"],
  },
  {
    title: "Built My First API",
    date: "2022",
    description:
      "Leveraged FastAPI to develop efficient and secure RESTful APIs, laying the foundation for my backend expertise.",
    technologies: ["FastAPI", "REST"],
  },
  {
    title: "Embraced Microservices & DevOps",
    date: "2023",
    description:
      "Explored microservices architecture and implemented CI/CD pipelines using Docker and Jenkins to streamline deployments.",
    technologies: ["Docker", "Jenkins", "Microservices"],
  },
  {
    title: "Ventured into Cloud & Frontend",
    date: "2024",
    description:
      "Expanding my toolkit by diving into AWS for scalable cloud solutions and React.js for dynamic, interactive UIs.",
    technologies: ["AWS", "React.js"],
  },
];

const professionalSummary =
  "I’m a detail-oriented Junior Backend Developer with hands-on experience in building scalable, secure RESTful APIs using Python, FastAPI, and PostgreSQL. Skilled in asynchronous programming, microservices, and API security (JWT, OAuth, SQL Injection Prevention). I’ve worked on optimizing database queries, implementing CI/CD pipelines, and ensuring code quality through static code analysis. My goal is to contribute to innovative projects and grow as a developer while delivering robust, high-performance solutions.";

const whyWorkWithMe = [
  "I focus on clean, maintainable code and scalable architectures.",
  "I’m passionate about API security and performance optimization.",
  "I thrive in Agile environments, collaborating with cross-functional teams to deliver high-quality solutions.",
];

const learningTopics = [
  "AWS Cloud services for scalable backend deployments",
  "Advanced React patterns for building interactive UIs",
  "Next.js for server-side rendering and static site generation",
  "Deepening my understanding of system design principles",
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
                <CardDescription>
                  From Python enthusiast to backend specialist
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {timelineEvents.map((event, index) => (
                    <TimelineItem
                      key={index}
                      title={event.title}
                      date={event.date}
                    >
                      {event.description}
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right: Development Philosophy & Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>My Development Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I strive to write{" "}
                  <strong>clean, efficient, and scalable code</strong>, ensuring
                  optimal performance and long-term maintainability. My focus is
                  on designing robust backend systems that can adapt to changing
                  business needs while remaining secure and efficient.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What I'm Currently Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {learningTopics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column: Professional Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Why Work With Me */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Work With Me?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {whyWorkWithMe.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
