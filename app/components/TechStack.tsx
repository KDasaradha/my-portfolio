// "use client"

// import { motion } from "framer-motion"
// import { SiPython, SiFastapi, SiPostgresql, SiDocker, SiJenkins, SiReact } from "react-icons/si"
// import { FaAws } from "react-icons/fa"

// const technologies = [
//   { name: "Python", icon: SiPython },
//   { name: "FastAPI", icon: SiFastapi },
//   { name: "PostgreSQL", icon: SiPostgresql },
//   { name: "Docker", icon: SiDocker },
//   { name: "Jenkins", icon: SiJenkins },
//   { name: "AWS", icon: FaAws },
//   { name: "React", icon: SiReact },
// ]

// export default function TechStack() {
//   return (
//     <div className="mt-16">
//       <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack I'm Using</h3>
//       <div className="flex flex-wrap justify-center gap-8">
//         {technologies.map((tech, index) => (
//           <motion.div
//             key={tech.name}
//             className="flex flex-col items-center"
//             whileHover={{ scale: 1.1 }}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <tech.icon className="text-4xl mb-2 text-primary" />
//             <span className="text-sm">{tech.name}</span>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { SiPython, SiFastapi, SiPostgresql, SiDocker, SiJenkins, SiReact } from "react-icons/si"
import { FaAws } from "react-icons/fa"
import { useMemo } from "react"

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Jenkins", icon: SiJenkins },
  { name: "AWS", icon: FaAws },
  { name: "React", icon: SiReact },
]

const animationProps = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  whileHover: { scale: 1.1 },
  transition: (index: number) => ({ duration: 0.3, delay: index * 0.1 }),
}

export default function TechStack() {
  const techList = useMemo(
    () =>
      technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center p-4 rounded-lg shadow-md dark:bg-gray-800 bg-gray-100"
          {...animationProps}
          transition={animationProps.transition(index)}
        >
          <tech.icon className="text-4xl mb-2 text-primary" aria-label={tech.name} title={tech.name} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
        </motion.div>
      )),
    []
  )

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-200">
        Tech Stack I'm Using
      </h3>
      <div className="flex flex-wrap justify-center gap-6">{techList}</div>
    </div>
  )
}
