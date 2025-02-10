// "use client"

// import { motion } from "framer-motion"
// import { SiPython, SiFastapi, SiPostgresql, SiDocker, SiJenkins, SiReact } from "react-icons/si"
// import { FaAws } from "react-icons/fa"
// import { useMemo } from "react"

// const technologies = [
//   { name: "Python", icon: SiPython },
//   { name: "FastAPI", icon: SiFastapi },
//   { name: "PostgreSQL", icon: SiPostgresql },
//   { name: "Docker", icon: SiDocker },
//   { name: "Jenkins", icon: SiJenkins },
//   { name: "AWS", icon: FaAws },
//   { name: "React", icon: SiReact },
// ]

// const animationProps = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   whileHover: { scale: 1.1 },
//   transition: (index: number) => ({ duration: 0.3, delay: index * 0.1 }),
// }

// export default function TechStack() {
//   const techList = useMemo(
//     () =>
//       technologies.map((tech, index) => (
//         <motion.div
//           key={tech.name}
//           className="flex flex-col items-center p-4 rounded-lg shadow-md dark:bg-gray-800 bg-gray-100"
//           {...animationProps}
//           transition={animationProps.transition(index)}
//         >
//           <tech.icon className="text-4xl mb-2 text-primary" aria-label={tech.name} title={tech.name} />
//           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
//         </motion.div>
//       )),
//     []
//   )

//   return (
//     <div className="mt-16">
//       <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
//         Tech Stack I'm Using
//       </h3>
//       <div className="flex flex-wrap justify-center gap-6">{techList}</div>
//     </div>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"
import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiDocker,
  SiJenkins,
  SiReact,
  SiNextdotjs,
  SiRapid,
  SiMailgun,
  SiOpencv,
} from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { DiDatabase } from "react-icons/di"      // For SQLAlchemy
import { TbLetterP } from "react-icons/tb"         // For Pydantic
import { IoLogoBuffer } from "react-icons/io5"     // For Pillow
import { MdCode } from "react-icons/md"            // For Fabric JSON

// Extended technology array
const technologies = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "SQLAlchemy", icon: DiDatabase },
  { name: "Pydantic", icon: TbLetterP },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Pillow", icon: IoLogoBuffer },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Third-Party APIs", icon: SiRapid },
  { name: "Mailgun", icon: SiMailgun },
  { name: "Fabric JSON", icon: MdCode },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Jenkins", icon: SiJenkins },
  { name: "AWS", icon: FaAws },
  { name: "React", icon: SiReact },
]

// Animation properties
const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.1 },
  // Function to provide a staggered delay for each card
  transition: (index: number) => ({ duration: 0.3, delay: index * 0.1 }),
}

export default function TechStack() {
  const techList = useMemo(
    () =>
      technologies.map((tech, index) => {
        // Destructure the icon component
        const Icon = tech.icon
        return (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center p-4 rounded-lg shadow-md dark:bg-gray-800 bg-gray-100 cursor-pointer"
            initial={animationProps.initial}
            animate={animationProps.animate}
            whileHover={animationProps.whileHover}
            transition={animationProps.transition(index)}
            title={tech.name}
            aria-label={tech.name}
          >
            <Icon className="text-4xl mb-2 text-primary" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech.name}
            </span>
          </motion.div>
        )
      }),
    []
  )

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
        Tech Stack I'm Using
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-5 justify-items-center">
        {techList}
      </div>
    </div>
  )
}
