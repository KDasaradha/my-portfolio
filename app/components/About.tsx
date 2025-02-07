// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { Timeline, TimelineItem } from "@/app/components/ui/timeline"

// export default function About() {
//   return (
//     <section id="about" className="py-20 bg-secondary/10">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-12 text-center">
//           <span className="gradient-text">About Me</span>
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//             <Card>
//               <CardHeader>
//                 <CardTitle>My Journey</CardTitle>
//                 <CardDescription>From Python enthusiast to backend specialist</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <Timeline>
//                   <TimelineItem title="Started with Python" date="2021">
//                     Fell in love with Python's simplicity and power
//                   </TimelineItem>
//                   <TimelineItem title="Built First API" date="2022">
//                     Discovered FastAPI and the world of efficient API development
//                   </TimelineItem>
//                   <TimelineItem title="Microservices & DevOps" date="2023">
//                     Delved into microservices architecture and CI/CD with Docker & Jenkins
//                   </TimelineItem>
//                   <TimelineItem title="Cloud & Frontend" date="2024">
//                     Currently expanding skills in AWS and React.js
//                   </TimelineItem>
//                 </Timeline>
//               </CardContent>
//             </Card>
//           </motion.div>
//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//             <Card className="mb-8">
//               <CardHeader>
//                 <CardTitle>My Development Philosophy</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   I believe in writing clean, efficient, and scalable code with a focus on performance-driven
//                   optimizations. My goal is to create robust systems that not only work flawlessly but are also
//                   maintainable and adaptable to future needs.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardHeader>
//                 <CardTitle>What I'm Currently Learning</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="list-disc list-inside space-y-2 text-muted-foreground">
//                   <li>AWS Cloud services for scalable backend deployments</li>
//                   <li>Advanced React patterns for building interactive UIs</li>
//                   <li>Next.js for server-side rendering and static site generation</li>
//                   <li>Deepening my understanding of system design principles</li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }




"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Timeline, TimelineItem } from "@/app/components/ui/timeline"

const timelineEvents = [
  { title: "Started with Python", date: "2021", description: "Fell in love with Python's simplicity and power." },
  { title: "Built First API", date: "2022", description: "Discovered FastAPI and the world of efficient API development." },
  { title: "Microservices & DevOps", date: "2023", description: "Explored microservices architecture, CI/CD with Docker & Jenkins." },
  { title: "Cloud & Frontend", date: "2024", description: "Currently expanding skills in AWS and React.js." },
]

const learningTopics = [
  "AWS Cloud services for scalable backend deployments",
  "Advanced React patterns for building interactive UIs",
  "Next.js for server-side rendering and static site generation",
  "Deepening my understanding of system design principles",
]

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
          {/* Left: Journey Timeline */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>My Journey</CardTitle>
                <CardDescription>From Python enthusiast to backend specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <Timeline>
                  {timelineEvents.map((event, index) => (
                    <TimelineItem key={index} title={event.title} date={event.date}>
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
                  I strive to write <strong>clean, efficient, and scalable code</strong>, ensuring optimal performance
                  and long-term maintainability. My focus is on designing robust backend systems that can adapt to 
                  changing business needs while remaining secure and efficient.
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
        </div>
      </div>
    </section>
  )
}
