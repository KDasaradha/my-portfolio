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
      "Currently contributing to the development of secure, scalable, and high-performance backend solutions for enterprise-grade applications.",
    achievements: [
      "Designed and implemented RESTful APIs using FastAPI, SQLAlchemy ORM, and PostgreSQL, ensuring robustness and scalability.",
      "Optimized database queries, leveraged asynchronous programming, and implemented event triggers to reduce API response times by 40%.",
      "Architected a microservices-based system by designing scalable project structures and decomposing monolithic applications, deploying containerized solutions with Docker and Nginx for modularity and resilience.",
      "Enhanced security by integrating JWT (RS256), OAuth 2.0, Pydantic data validation, and asynchronous API routes, mitigating risks like SQL injection, XSS, and CSRF.",
      "Developed and streamlined CI/CD pipelines using GitHub Actions and Jenkins, shortening deployment cycles by 25% and boosting team efficiency.",
      "Utilized Fabric.js to create dynamic Canva-style templates, integrating Python imaging libraries (Pillow, OpenCV) for backend rendering.",
      "Led database schema design and implemented Alembic migrations for seamless schema evolution and efficient tracking of changes.",
      "Adopted MkDocs and Swagger for comprehensive API documentation, streamlining developer onboarding and maintainability.",
      "Streamlined development workflows through mastery of Git, comprehensive repository management, and effective documentation practices.",
      "Integrated robust security measures including proper database pooling and asynchronous context management for optimized performance.",
      "Gained proficiency in Docker, Nginx, GitHub Actions, and Jenkins to establish CI/CD pipelines tailored for development environments.",
      "Currently exploring AWS cloud services (EC2, S3, VPC, subnets) to deploy Dockerized applications and establish cloud-based CI/CD workflows, while pursuing full-stack development with JavaScript, React, and Next.js.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "KaryaHub Solutions | Hyderabad, Telangana, India",
    period: "Aug 2023 - Nov 2023 · 3 mos",
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
    period: "Jul 2022 - Dec 2022 · 6 mos",
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
    period: "Jul 2021 - Jul 2022 · 1 yr",
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
  "Reduced API response times by 40% through query optimization, async programming, and efficient database design.",
  "Designed and implemented a microservices architecture for scalable applications, transitioning from monolithic systems using Docker and Nginx.",
  "Automated CI/CD pipelines with Jenkins, GitHub Actions, and Docker, reducing deployment times by 25% and streamlining workflows.",
  "Enhanced application security with JWT (RS256), OAuth 2.0, Pydantic validation, and API gateway measures, mitigating SQL injection, XSS, and CSRF vulnerabilities.",
  "Developed dynamic Canva-style templates using Fabric.js and Python imaging libraries (Pillow, OpenCV) for seamless frontend-backend integration.",
  "Mastered database schema design with Alembic migrations, async query optimization, and event triggers for efficient CRUD operations.",
  "Built end-to-end web applications using API-driven architectures and third-party API integrations.",
  "Designed robust database schemas with effective data validation, security best practices, and optimized connection pooling.",
  "Leveraged tools like Swagger, MkDocs, SonarQube, and Snyk to enhance API documentation and code quality.",
  "Streamlined development processes through Git proficiency, comprehensive repository management, and advanced FastAPI project structuring.",
  "Currently expanding expertise in AWS (EC2, S3, VPC) and full-stack development with JavaScript, React, and Next.js.",
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

