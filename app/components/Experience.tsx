"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Timeline, TimelineItem } from "@/app/components/ui/timeline"
import { Badge } from "@/app/components/ui/badge"

const experiences = [
  {
    title: "Senior Backend Developer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: "Leading backend development for large-scale distributed systems.",
    achievements: [
      "Implemented microservices architecture, improving system scalability by 200%",
      "Optimized database queries, reducing average API response time by 40%",
      "Mentored junior developers, improving team productivity by 25%",
    ],
  },
  {
    title: "Backend Developer",
    company: "InnoSoft Solutions",
    period: "2022 - 2023",
    description: "Developed and maintained RESTful APIs for various client projects.",
    achievements: [
      "Built robust FastAPI services for a School Management System",
      "Implemented CI/CD pipelines using Jenkins, reducing deployment time by 50%",
      "Contributed to open-source FastAPI projects, improving documentation and features",
    ],
  },
]

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Docker Certified Associate",
  "PostgreSQL Performance Tuning",
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Experience & Achievements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>My professional journey in software development</CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {experiences.map((exp, index) => (
                    <TimelineItem key={index} title={exp.title} date={exp.period}>
                      <p className="font-semibold">{exp.company}</p>
                      <p>{exp.description}</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Certifications</CardTitle>
                <CardDescription>Professional certifications and courses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index}>
                      <Badge variant="secondary">{cert}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

