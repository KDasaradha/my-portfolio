// Experience.tsx

"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Timeline, TimelineItem } from "@/app/components/ui/timeline";

const experiences = [
  {
    title: "Junior Software Developer",
    company: "KaryaHub Solutions | Hyderabad, Telangana, India",
    period: "Nov 2023 - Present · 1 yr 4 mos",
    description:
      "In my current role, I build secure, scalable, and high-performance backend solutions for high-traffic applications.",
    achievements: [
      "Designed and developed secure, high-performance RESTful APIs using FastAPI, SQLAlchemy ORM, and PostgreSQL.",
      "Reduced API response times by 40% through optimized database queries and asynchronous programming.",
      "Implemented a microservices architecture and containerized deployments using Docker to ensure scalability and modularity.",
      "Enhanced API security by integrating JWT authentication (RS256), OAuth 2.0, and Pydantic input validation to mitigate SQL injection, XSS, and CSRF risks.",
      "Automated CI/CD pipelines with Jenkins, reducing deployment cycles by 25% and improving overall development efficiency.",
      "Conducted static code analysis using SonarQube, identifying and resolving critical code quality issues.",
      "Collaborated in Agile teams—participating in sprint planning, daily stand-ups, and peer code reviews—to deliver high-quality solutions on time.",
      "Implemented comprehensive unit and integration tests to ensure code reliability and maintainability.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "KaryaHub Solutions | Hyderabad, Telangana, India",
    period: "Aug 2023 - Nov 2023 · 3 mos",
    description:
      "During my internship, I gained hands-on experience in research, requirement analysis, and early-stage development to lay the foundation for robust API systems.",
    achievements: [
      "Conducted research on API usage and image retrieval methods from platforms like Pixabay and Unsplash.",
      "Gathered requirements and performed use-case analysis for API functionalities and image processing workflows.",
      "Developed web scraping scripts using BeautifulSoup to automate data collection for internal analytics.",
      "Utilized Python imaging libraries (Pillow and OpenCV) to process images, draw shapes, and create Canva-style templates.",
      "Assisted in building initial FastAPI applications and integrating SQLAlchemy ORM for backend development.",
      "Collaborated with senior developers to implement API security best practices and improve code quality.",
      "Participated in code reviews and Agile ceremonies, deepening my practical understanding of software development processes.",
    ],
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Docker Certified Associate",
  "PostgreSQL Performance Tuning",
];

const keyAchievements = [
  "Reduced API response times by 40% through optimized database queries and async programming.",
  "Enhanced security across all projects, mitigating SQL Injection, XSS, and CSRF vulnerabilities using best practices.",
  "Designed a microservices architecture for SHOU and School Management System, ensuring scalability and maintainability.",
  "Automated CI/CD pipelines, reducing deployment cycles by 25% and improving team productivity.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text text-3xl font-bold mb-12 text-center">
            Professional Experience & Achievements
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Work Experience Timeline */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>
                  My journey and growth as a software developer at KaryaHub
                  Solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {experiences.map((exp, index) => (
                    <TimelineItem
                      key={index}
                      title={exp.title}
                      date={exp.period}
                    >
                      <p className="font-semibold text-lg">{exp.company}</p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                      <ul className="list-disc list-inside mt-4 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </TimelineItem>
                  ))}
                </Timeline>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        {/* Key Achievements Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Key Achievements</CardTitle>
              <CardDescription>
                Highlights of my major accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {keyAchievements.map((achievement, index) => (
                  <li key={index} className="text-sm">
                    {achievement}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
