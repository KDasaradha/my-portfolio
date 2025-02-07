"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Button } from "@/app/components/ui/button"
import { Badge } from "@/app/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

const projects = [
  {
    title: "InstaDe (Instant Poster Generator)",
    description: "Built robust FastAPIs and an algorithm to generate templates using a coordinate & cube block system.",
    image: "/instade-screenshot.jpg",
    techStack: ["Python", "FastAPI", "Pillow", "PostgreSQL", "React.js"],
    github: "https://github.com/johndoe/instade",
    demo: "https://instade-demo.vercel.app",
    challenge: "Generating dynamic templates efficiently while handling high concurrent requests.",
    solution: "Developed a caching mechanism and implemented a queue system for handling requests during peak times.",
    impact: "Improved poster generation speed by 50% and increased system capacity by 300%.",
    beforeMetrics: "5 seconds average generation time, 100 requests/minute capacity",
    afterMetrics: "2.5 seconds average generation time, 400 requests/minute capacity",
  },
  {
    title: "School Management System (Advanced ERP)",
    description:
      "Developed efficient, async FastAPI services with optimized database queries. Implemented microservices architecture and performance optimization.",
    image: "/school-erp-screenshot.jpg",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
    github: "https://github.com/johndoe/school-erp",
    demo: "https://school-erp-demo.vercel.app",
    challenge: "Scaling the system to handle data for multiple schools while ensuring data isolation and quick access.",
    solution: "Implemented a multi-tenant architecture with database sharding and caching layers.",
    impact: "Reduced API response time by 40% and enabled the system to handle 10x more schools.",
    beforeMetrics: "500ms average API response time, supporting 10 schools",
    afterMetrics: "300ms average API response time, supporting 100+ schools",
  },
  {
    title: "SHOU (HRMS + Payroll + Animation Production Pipeline)",
    description:
      "Developed APIs for Payroll Management & Animation Pipeline. Implemented Microservices & CI/CD with Jenkins Pipeline.",
    image: "/shou-screenshot.jpg",
    techStack: ["FastAPI", "PostgreSQL", "Jenkins", "Docker", "Nginx"],
    github: "https://github.com/johndoe/shou",
    demo: "https://shou-demo.vercel.app",
    challenge:
      "Integrating diverse systems (HRMS, Payroll, Animation Pipeline) into a cohesive platform with real-time updates.",
    solution:
      "Designed a modular architecture with clear interfaces between systems and implemented an event-driven architecture for real-time updates.",
    impact: "Reduced payroll processing time from 5 minutes to 1 minute and improved overall system efficiency by 60%.",
    beforeMetrics: "5 minutes payroll processing, 30 minutes render farm job assignment",
    afterMetrics: "1 minute payroll processing, 5 minutes render farm job assignment",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Key Achievement:</strong> {project.impact}
                  </p>
                </CardContent>
                <CardFooter className="space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" onClick={() => setSelectedProject(project)}>
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                        <DialogDescription>{selectedProject?.description}</DialogDescription>
                      </DialogHeader>
                      <Tabs defaultValue="challenge" className="mt-4">
                        <TabsList>
                          <TabsTrigger value="challenge">Challenge & Solution</TabsTrigger>
                          <TabsTrigger value="impact">Impact & Metrics</TabsTrigger>
                        </TabsList>
                        <TabsContent value="challenge">
                          <h4 className="font-semibold mb-2">Challenge:</h4>
                          <p className="mb-4">{selectedProject?.challenge}</p>
                          <h4 className="font-semibold mb-2">Solution:</h4>
                          <p>{selectedProject?.solution}</p>
                        </TabsContent>
                        <TabsContent value="impact">
                          <h4 className="font-semibold mb-2">Impact:</h4>
                          <p className="mb-4">{selectedProject?.impact}</p>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-semibold mb-1">Before:</h5>
                              <p>{selectedProject?.beforeMetrics}</p>
                            </div>
                            <div>
                              <h5 className="font-semibold mb-1">After:</h5>
                              <p>{selectedProject?.afterMetrics}</p>
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

