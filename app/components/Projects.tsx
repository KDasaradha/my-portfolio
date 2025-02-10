// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { Button } from "@/app/components/ui/button"
// import { Badge } from "@/app/components/ui/badge"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/app/components/ui/dialog"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"

// const projects = [
//   {
//     title: "InstaDe (Instant Poster Generator)",
//     description: "Built robust FastAPIs and an algorithm to generate templates using a coordinate & cube block system.",
//     image: "/instade-screenshot.jpg",
//     techStack: ["Python", "FastAPI", "Pillow", "PostgreSQL", "React.js"],
//     github: "https://github.com/johndoe/instade",
//     demo: "https://instade-demo.vercel.app",
//     challenge: "Generating dynamic templates efficiently while handling high concurrent requests.",
//     solution: "Developed a caching mechanism and implemented a queue system for handling requests during peak times.",
//     impact: "Improved poster generation speed by 50% and increased system capacity by 300%.",
//     beforeMetrics: "5 seconds average generation time, 100 requests/minute capacity",
//     afterMetrics: "2.5 seconds average generation time, 400 requests/minute capacity",
//   },
//   {
//     title: "School Management System (Advanced ERP)",
//     description:
//       "Developed efficient, async FastAPI services with optimized database queries. Implemented microservices architecture and performance optimization.",
//     image: "/school-erp-screenshot.jpg",
//     techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "Nginx"],
//     github: "https://github.com/johndoe/school-erp",
//     demo: "https://school-erp-demo.vercel.app",
//     challenge: "Scaling the system to handle data for multiple schools while ensuring data isolation and quick access.",
//     solution: "Implemented a multi-tenant architecture with database sharding and caching layers.",
//     impact: "Reduced API response time by 40% and enabled the system to handle 10x more schools.",
//     beforeMetrics: "500ms average API response time, supporting 10 schools",
//     afterMetrics: "300ms average API response time, supporting 100+ schools",
//   },
//   {
//     title: "SHOU (HRMS + Payroll + Animation Production Pipeline)",
//     description:
//       "Developed APIs for Payroll Management & Animation Pipeline. Implemented Microservices & CI/CD with Jenkins Pipeline.",
//     image: "/shou-screenshot.jpg",
//     techStack: ["FastAPI", "PostgreSQL", "Jenkins", "Docker", "Nginx"],
//     github: "https://github.com/johndoe/shou",
//     demo: "https://shou-demo.vercel.app",
//     challenge:
//       "Integrating diverse systems (HRMS, Payroll, Animation Pipeline) into a cohesive platform with real-time updates.",
//     solution:
//       "Designed a modular architecture with clear interfaces between systems and implemented an event-driven architecture for real-time updates.",
//     impact: "Reduced payroll processing time from 5 minutes to 1 minute and improved overall system efficiency by 60%.",
//     beforeMetrics: "5 minutes payroll processing, 30 minutes render farm job assignment",
//     afterMetrics: "1 minute payroll processing, 5 minutes render farm job assignment",
//   },
// ]

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null)

//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">
//           <span className="gradient-text">Featured Projects</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className="h-full flex flex-col">
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                   <CardDescription>{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <Image
//                     src={project.image || "/placeholder.svg"}
//                     alt={project.title}
//                     width={400}
//                     height={200}
//                     className="rounded-lg mb-4 w-full object-cover"
//                   />
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.techStack.map((tech, i) => (
//                       <Badge key={i} variant="secondary">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                   <p className="text-sm text-muted-foreground mb-2">
//                     <strong>Key Achievement:</strong> {project.impact}
//                   </p>
//                 </CardContent>
//                 <CardFooter className="space-x-2">
//                   <Dialog>
//                     <DialogTrigger asChild>
//                       <Button variant="outline" onClick={() => setSelectedProject(project)}>
//                         Learn More
//                       </Button>
//                     </DialogTrigger>
//                     <DialogContent className="max-w-3xl">
//                       <DialogHeader>
//                         <DialogTitle>{selectedProject?.title}</DialogTitle>
//                         <DialogDescription>{selectedProject?.description}</DialogDescription>
//                       </DialogHeader>
//                       <Tabs defaultValue="challenge" className="mt-4">
//                         <TabsList>
//                           <TabsTrigger value="challenge">Challenge & Solution</TabsTrigger>
//                           <TabsTrigger value="impact">Impact & Metrics</TabsTrigger>
//                         </TabsList>
//                         <TabsContent value="challenge">
//                           <h4 className="font-semibold mb-2">Challenge:</h4>
//                           <p className="mb-4">{selectedProject?.challenge}</p>
//                           <h4 className="font-semibold mb-2">Solution:</h4>
//                           <p>{selectedProject?.solution}</p>
//                         </TabsContent>
//                         <TabsContent value="impact">
//                           <h4 className="font-semibold mb-2">Impact:</h4>
//                           <p className="mb-4">{selectedProject?.impact}</p>
//                           <div className="grid grid-cols-2 gap-4">
//                             <div>
//                               <h5 className="font-semibold mb-1">Before:</h5>
//                               <p>{selectedProject?.beforeMetrics}</p>
//                             </div>
//                             <div>
//                               <h5 className="font-semibold mb-1">After:</h5>
//                               <p>{selectedProject?.afterMetrics}</p>
//                             </div>
//                           </div>
//                         </TabsContent>
//                       </Tabs>
//                     </DialogContent>
//                   </Dialog>
//                   <Button asChild>
//                     <a href={project.demo} target="_blank" rel="noopener noreferrer">
//                       Live Demo
//                     </a>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }





// Projects.tsx

"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
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

type Project = {
  title: string
  description: string
  image: string
  techStack: string[]
  github: string
  demo: string
  challenge: string
  solution: string
  impact: string
  beforeMetrics: string
  afterMetrics: string
  thoughtProcess: string
}

const projects: Project[] = [
  {
    title: "InstaDe (Instant Poster Generator)",
    description:
      "A dynamic poster generator that leverages web scraping, AI-powered content prompts, and Fabric JSON to create effective marketing posters.",
    image: "/instade-screenshot.jpg",
    techStack: ["Python", "FastAPI", "Fabric.js", "Pillow", "OpenCV", "React.js"],
    github: "https://github.com/johndoe/instade",
    demo: "https://instade-demo.vercel.app",
    challenge:
      "Initially, we used web scraping to gather marketing content and Python imaging libraries (Pillow, OpenCV) to design templates. However, the approach suffered from slow dynamic rendering and an unresponsive editor panel.",
    solution:
      "We transitioned to using Fabric JSON for dynamic template generation, which allowed for efficient, real-time rendering and a much-improved interactive editor.",
    impact:
      "Enabled instant poster creation with dynamic content, boosting design efficiency by 60% and significantly reducing manual intervention.",
    beforeMetrics: "Static templates with limited interactivity and slow rendering",
    afterMetrics: "Dynamic, real-time editing with interactive poster generation",
    thoughtProcess:
      "Our initial tests revealed bottlenecks in the rendering process. After analyzing alternative approaches, we recognized that Fabric JSON could offer the flexibility and performance required. Extensive prototyping and testing confirmed that the new approach met our performance and usability targets.",
  },
  {
    title: "School Management System (Advanced ERP)",
    description:
      "A scalable backend system supporting comprehensive school operations such as User Management, RBAC, Curriculum, Fees, Vendor Management, and Real-time Chat.",
    image: "/school-erp-screenshot.jpg",
    techStack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy ORM", "Docker"],
    github: "https://github.com/johndoe/school-erp",
    demo: "https://school-erp-demo.vercel.app",
    challenge:
      "High latency during peak usage and the need to maintain data isolation for multiple schools were major obstacles.",
    solution:
      "We implemented asynchronous FastAPI endpoints, optimized database queries, and designed a multi-tenant architecture with Dockerized deployments.",
    impact:
      "Reduced API response times by 30% and enabled the system to scale efficiently, supporting hundreds of schools.",
    beforeMetrics: "500ms average response time, limited school support",
    afterMetrics: "350ms average response time, scalable to hundreds of schools",
    thoughtProcess:
      "We began by benchmarking our existing endpoints under load and identified query inefficiencies. After exploring asynchronous solutions and multi-tenancy models, we adopted a combination of async processing and optimized query techniques, which was validated through rigorous load testing.",
  },
  {
    title: "SHOU (HRMS, Payroll & Animation Production Pipeline)",
    description:
      "An integrated platform that combines HRMS, payroll management, and an animation production pipeline to streamline operations and provide real-time updates.",
    image: "/shou-screenshot.jpg",
    techStack: ["FastAPI", "PostgreSQL", "Docker", "Jenkins", "Nginx"],
    github: "https://github.com/johndoe/shou",
    demo: "https://shou-demo.vercel.app",
    challenge:
      "Integrating disparate systems like HRMS, payroll calculations, and animation production into one platform posed significant integration and real-time update challenges.",
    solution:
      "We designed a modular microservices architecture with clear interfaces and adopted an event-driven approach for real-time updates. Jenkins was integrated for streamlined CI/CD.",
    impact:
      "Reduced payroll processing time by 80% and improved overall system efficiency by 60%.",
    beforeMetrics: "Payroll processing in 5 minutes with lengthy render job assignments",
    afterMetrics: "Payroll processing in 1 minute with efficient render job management",
    thoughtProcess:
      "Facing complex integration challenges, we broke the project into modular components and focused on establishing robust communication channels between services. Iterative testing and continuous integration helped refine our solution and ensure real-time responsiveness.",
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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
                          <TabsTrigger value="thought">Thought Process</TabsTrigger>
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
                          <h4 className="font-semibold mb-2">Thought Process:</h4>
                          <p>{selectedProject?.thoughtProcess}</p>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
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
  )
}
