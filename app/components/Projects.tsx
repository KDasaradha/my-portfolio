// Projects.tsx

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";

// Define the Project type with an array of images
type Project = {
  title: string;
  description: string;
  images: string[]; // Updated from image: string
  techStack: string[];
  github: string;
  demo: string;
  challenge: string;
  solution: string;
  impact: string;
  beforeMetrics: string;
  afterMetrics: string;
  thoughtProcess: string;
};

// Updated projects array with multiple images and new project
const projects: Project[] = [
  {
    title: "InstaDe (Instant Poster Generator)",
    description:
      "A dynamic poster generator utilizing web scraping, AI-driven content prompts, and Fabric JSON to produce effective marketing materials.",
    images: [
      "./images/instade-screenshot.png",
      "./images/instade-screenshot.png",
      "./images/instade-screenshot.png",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Fabric.js",
      "Pillow",
      "OpenCV",
      "React.js",
    ],
    github: "https://github.com/johndoe/instade",
    demo: "https://develop.instade.ai/",
    challenge:
      "Initially, we employed web scraping to collect marketing content and Python imaging libraries (Pillow, OpenCV) to create templates. However, this approach resulted in inefficient dynamic rendering and an unresponsive editor interface.",
    solution:
      "We adopted Fabric JSON for dynamic template generation, enabling efficient real-time rendering and a significantly enhanced interactive editor.",
    impact:
      "Facilitated instant poster creation with dynamic content, increasing design efficiency by 60% and substantially reducing manual effort.",
    beforeMetrics:
      "Static templates with limited interactivity and inefficient rendering.",
    afterMetrics:
      "Dynamic, real-time editing with seamless interactive poster generation.",
    thoughtProcess:
      "Initial testing exposed bottlenecks in the rendering process. After evaluating alternatives, we determined that Fabric JSON provided the necessary flexibility and performance. Rigorous prototyping and testing validated that this solution achieved our performance and usability goals.",
  },
  {
    title: "School Management System (Advanced ERP)",
    description:
      "A scalable backend system supporting comprehensive school operations, including user management, role-based access control (RBAC), curriculum management, fee processing, vendor coordination, and real-time chat.",
    images: [
      "./images/school-erp-screenshot.png",
      "./images/school-erp-screenshot.png",
      "./images/school-erp-screenshot.png",
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy ORM", "Docker"],
    github: "https://github.com/johndoe/school-erp",
    demo: "https://myschoolitaly-app.vercel.app/",
    challenge:
      "High latency during peak usage and the requirement for data isolation across multiple schools presented significant challenges.",
    solution:
      "We introduced asynchronous FastAPI endpoints, optimized database queries, and implemented a multi-tenant architecture using Dockerized deployments.",
    impact:
      "Decreased API response times by 30% and enabled efficient scaling to support hundreds of schools.",
    beforeMetrics:
      "Average response time of 500 ms with limited school capacity.",
    afterMetrics:
      "Average response time of 350 ms with scalability for hundreds of schools.",
    thoughtProcess:
      "We started by benchmarking existing endpoints under load, pinpointing query inefficiencies. After researching asynchronous solutions and multi-tenancy frameworks, we integrated async processing with optimized queries, a solution confirmed by extensive load testing.",
  },
  {
    title: "SHOU (HRMS, Payroll & Animation Production Pipeline)",
    description:
      "An integrated platform that unifies HRMS, payroll management, and an animation production pipeline to streamline operations and deliver real-time updates.",
    images: [
      "./images/shou-screenshot.png",
      "./images/shou-screenshot.png",
      "./images/shou-screenshot.png",
    ],
    techStack: ["FastAPI", "PostgreSQL", "Docker", "Jenkins", "Nginx"],
    github: "https://github.com/johndoe/shou",
    demo: "https://getshou.com/",
    challenge:
      "Integrating diverse systems—HRMS, payroll processing, and animation production—into a cohesive platform presented substantial challenges in synchronization and real-time functionality.",
    solution:
      "We developed a modular microservices architecture with well-defined interfaces, adopting an event-driven model for real-time updates and integrating Jenkins for efficient CI/CD workflows.",
    impact:
      "Reduced payroll processing time by 80% and enhanced overall system efficiency by 60%.",
    beforeMetrics:
      "Payroll processing took 5 minutes with prolonged render job scheduling.",
    afterMetrics:
      "Payroll processing completed in 1 minute with optimized render job management.",
    thoughtProcess:
      "Confronted with complex integration hurdles, we decomposed the project into modular components, prioritizing robust inter-service communication. Iterative testing and continuous integration refined the solution, ensuring real-time performance.",
  },
  {
    title: "AWS Full-Stack CI/CD Pipeline (In Progress)",
    description:
      "Developing a full-stack application using React, Next.js, and FastAPI, with deployment on AWS featuring a CI/CD pipeline.",
    images: [
      "/images/aws-project-screenshot1.png",
      "/images/aws-project-screenshot2.png",
      "/images/aws-project-screenshot3.png",
    ],
    techStack: [
      "React",
      "Next.js",
      "FastAPI",
      "AWS (EC2, S3, VPC)",
      "Docker",
      "Jenkins",
    ],
    github: "https://github.com/yourusername/aws-fullstack",
    demo: "#", // Placeholder until live
    challenge:
      "Acquiring proficiency in cloud deployment and full-stack integration despite limited prior experience.",
    solution:
      "Mastering AWS services (EC2, S3, VPC) and establishing a CI/CD pipeline using Jenkins and GitHub Actions.",
    impact:
      "Currently in progress: Building expertise in cloud infrastructure and full-stack development.",
    beforeMetrics: "Not applicable.",
    afterMetrics: "Not applicable.",
    thoughtProcess:
      "We initiated the project using the AWS Free Tier, incrementally constructed the infrastructure, and aligned development with full-stack objectives.",
  },
];

// Carousel component for auto-scrolling images
const Carousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Rotate every 3 seconds
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [images]);

  return (
    <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`Project image ${index + 1}`}
          width={400}
          height={200}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

// Main Projects component
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            >
              <Card className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300 border-t-8 border-blue-500">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Carousel images={project.images} />
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge
                        key={`${project.title}-${tech}`}
                        variant="secondary"
                      >
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
                      <Button
                        variant="outline"
                        onClick={() => setSelectedProject(project)}
                      >
                        Learn More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{selectedProject?.title}</DialogTitle>
                        <DialogDescription>
                          {selectedProject?.description}
                        </DialogDescription>
                      </DialogHeader>
                      <Tabs defaultValue="challenge" className="mt-4">
                        <TabsList>
                          <TabsTrigger value="challenge">
                            Challenge & Solution
                          </TabsTrigger>
                          <TabsTrigger value="impact">
                            Impact & Metrics
                          </TabsTrigger>
                          <TabsTrigger value="thought">
                            Thought Process
                          </TabsTrigger>
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
                        <TabsContent value="thought">
                          <h4 className="font-semibold mb-2">
                            Thought Process:
                          </h4>
                          <p>{selectedProject?.thoughtProcess}</p>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                  <Button asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
