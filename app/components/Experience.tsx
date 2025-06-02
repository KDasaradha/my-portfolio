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
    title: "Backend Developer",
    company: "KaryaHub Solutions | Hyderabad, India",
    period: "July 2023 – Present",
    description:
      "Leading backend development initiatives for enterprise-grade applications, specializing in scalable API design, microservices architecture, and DevOps automation.",
    achievements: [
      "🚀 API Development & Performance: Designed and implemented scalable RESTful APIs using FastAPI, SQLAlchemy, and PostgreSQL. Reduced API response times by 40% through asynchronous endpoints and SQL query optimization.",
      "🔧 Microservices & Containerization: Migrated a monolithic FastAPI application into microservices behind an NGINX reverse proxy. Containerized backend services with Docker and optimized Docker Compose configurations.",
      "🔒 Security & Validation: Implemented JWT (RS256) and OAuth 2.0 authentication flows. Used Pydantic for strict input validation to guard against SQL injection and XSS attacks.",
      "⚡ CI/CD & Infrastructure: Automated deployments with GitHub Actions and Jenkins, shortening release cycles by 25%. Configured Jenkins pipelines with Pytest, SonarQube, and Snyk integration.",
      "📊 Performance Optimization: Integrated Redis caching for frequently accessed data, improving throughput under load. Managed shared code across services using Docker volumes.",
      "🛡️ Security Integration: Integrated SonarQube and Snyk into CI pipelines, reducing high-severity issues by 30%. Stored secrets securely via HashiCorp Vault.",
      "📚 Documentation & Mentorship: Enhanced API documentation using Swagger UI and MkDocs, decreasing developer onboarding time by 35%. Mentored interns on REST API design and Git workflows.",
      "🎨 Full-Stack Integration: Developed design engine using OpenCV/Pillow, then migrated to Fabric.js for frontend canvas rendering. Modified React components and Next.js pages with Tailwind CSS.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "KaryaHub Solutions | Hyderabad, Telangana, India",
    period: "July 2023 - Nov 2023",
    description:
      "Gained practical experience in API development, web scraping, and image processing, laying the groundwork for scalable backend systems.",
    achievements: [
      "Developed web scraping scripts using BeautifulSoup to fetch images from Pixabay and Unsplash APIs for internal use.",
      "Built initial FastAPI applications with user and project management modules, integrating SQLAlchemy ORM.",
      "Explored third-party API integrations, mastering their usage and implementation in real-world scenarios.",
      "Collaborated with senior engineers to implement security best practices and enhance code quality through peer reviews.",
      "Experimented with Python imaging libraries (Pillow, OpenCV) to generate Canva-style templates with static data.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Wipro | Remote",
    period: "March 2022 - July 2022",
    description:
      "Initiated my professional journey by mastering foundational programming concepts and applying them in a corporate environment.",
    achievements: [
      "Learned Java and Object-Oriented Programming (OOP) principles, applying them to small-scale internal tools.",
      "Explored Python OOP, data structures, and web technologies (HTML, CSS) to broaden technical expertise.",
      "Collaborated with team members to understand requirement analysis and software development workflows.",
    ],
  },
  {
    title: "Self-Taught Developer & B.Tech Student",
    company: "Self-Learning",
    period: "Jul 2022 - Jul 2023 · 1 yr",
    description:
      "Began my programming journey during my B.Tech, focusing on self-learning and foundational skills.",
    achievements: [
      "Started with Python basics in 2021, progressing to OOP, data structures, and foundational web development (HTML, CSS).",
      "Created sample Python projects and basic Flask applications to solidify programming knowledge.",
      "Graduated with a B.Tech in July 2022, equipped with a strong academic and self-taught foundation.",
    ],
  },
];

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Docker Certified Associate",
  "PostgreSQL Performance Tuning",
];

const keyAchievements = [
  "🎯 Performance Excellence: Reduced API response times by 40% through asynchronous programming, SQL query optimization, and Redis caching implementation.",
  "🏗️ Architecture Leadership: Successfully migrated monolithic applications to microservices architecture using Docker, NGINX reverse proxy, and shared-volume code reuse strategies.",
  "🔄 DevOps Automation: Automated CI/CD pipelines with GitHub Actions and Jenkins, reducing deployment cycles by 25% while integrating quality gates (SonarQube, Snyk, Dependabot).",
  "🛡️ Security Implementation: Enhanced application security by 30% through JWT (RS256), OAuth 2.0, Pydantic validation, and automated vulnerability scanning with SonarQube/Snyk.",
  "🎨 Innovation in Design: Developed dynamic design generation system using OpenCV/Pillow, then optimized with Fabric.js for real-time canvas manipulation and template generation.",
  "📊 Database Mastery: Designed efficient database schemas with SQLAlchemy ORM, implemented Alembic migrations, and optimized async query performance for high-throughput applications.",
  "🔗 Integration Expertise: Built comprehensive API integrations with third-party services (Brevo, 2factor.io) and implemented multi-tenant architectures for scalable SaaS solutions.",
  "📚 Knowledge Sharing: Decreased developer onboarding time by 35% through comprehensive API documentation (Swagger UI, MkDocs) and mentoring junior developers.",
  "☁️ Cloud & Full-Stack Growth: Actively expanding expertise in AWS services (EC2, S3, VPC), React/Next.js development, and modern frontend frameworks for complete full-stack capabilities.",
  "🔧 Tool Mastery: Proficient in HashiCorp Vault for secrets management, Caddy for local development, and advanced Git workflows for enterprise-level collaboration.",
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
                  A timeline of my growth from a self-taught enthusiast to a professional software developer.
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
                Highlights of my technical contributions and milestones.
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
        {/* Certifications Section */}
        {/* <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
              <CardDescription>
                Industry-recognized credentials validating my technical expertise.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-sm">
                    {cert}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div> */}
      </div>
    </section>
  );
}

