

// "use client"

// import { motion } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
// import { Radar } from "react-chartjs-2"
// import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Text } from "@react-three/drei"
// import { useRef, useMemo } from "react"

// ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

// const skills = [
//   { name: "Python", proficiency: 90 },
//   { name: "FastAPI", proficiency: 85 },
//   { name: "PostgreSQL", proficiency: 80 },
//   { name: "Docker", proficiency: 75 },
//   { name: "Jenkins", proficiency: 70 },
//   { name: "AWS", proficiency: 60 },
//   { name: "React", proficiency: 65 },
// ]

// const radarData = {
//   labels: ["Backend", "DevOps", "Database", "Frontend", "Cloud"],
//   datasets: [
//     {
//       label: "Skill Level",
//       data: [90, 75, 80, 65, 60],
//       backgroundColor: "rgba(75, 192, 192, 0.2)",
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 1,
//     },
//   ],
// }

// // Generate random 3D positions for a dynamic effect
// const generateRandomPositions = () =>
//   skills.map(() => [
//     (Math.random() - 0.5) * 5,
//     (Math.random() - 0.5) * 5,
//     (Math.random() - 0.5) * 5,
//   ])

// function Skill({ name, position }) {
//   const textRef = useRef()
//   return (
//     <group position={position}>
//       <Text ref={textRef} fontSize={0.5} color="white">
//         {name}
//       </Text>
//     </group>
//   )
// }

// function SkillsSphere() {
//   const positions = useMemo(() => generateRandomPositions(), []) // Memoize for efficiency

//   return (
//     <Canvas camera={{ position: [0, 0, 10] }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       {skills.map((skill, index) => (
//         <Skill key={skill.name} name={skill.name} position={positions[index]} />
//       ))}
//       <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
//     </Canvas>
//   )
// }

// export default function Skills() {
//   return (
//     <section id="skills" className="py-20 bg-secondary/10">
//       <div className="container mx-auto px-6 lg:px-12">
//         <motion.h2
//           className="text-4xl font-bold mb-12 text-center gradient-text"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Skills & Expertise
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Skill Proficiency Bars */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Skill Proficiency</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {skills.map((skill, index) => (
//                   <motion.div
//                     key={skill.name}
//                     className="mb-4"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="flex justify-between mb-1">
//                       <span className="text-sm font-medium">{skill.name}</span>
//                       <span className="text-sm font-medium">{skill.proficiency}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                       <motion.div
//                         className="bg-blue-600 h-2.5 rounded-full"
//                         style={{ width: `${skill.proficiency}%` }}
//                         initial={{ width: "0%" }}
//                         animate={{ width: `${skill.proficiency}%` }}
//                         transition={{ duration: 1, delay: index * 0.2 }}
//                       />
//                     </div>
//                   </motion.div>
//                 ))}
//               </CardContent>
//             </Card>
//           </motion.div>

//           {/* 3D Skill Sphere */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle>Skills Overview</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-64">
//                   <SkillsSphere />
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle className="text-3xl text-center">Skills Overview</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="h-64 flex flex-col items-center justify-center space-y-4">
//                   <SkillsSphere />
//                   <p className="text-lg text-gray-700 dark:text-gray-300 text-center mt-4">
//                     Explore my expertise in Backend, Databases, DevOps, and more!
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>

//         {/* Radar Chart */}
//         <motion.div
//           className="mt-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle>Expertise Radar</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Radar
//                 data={radarData}
//                 options={{
//                   responsive: true,
//                   plugins: {
//                     legend: { display: false },
//                   },
//                   scales: {
//                     r: {
//                       suggestedMin: 0,
//                       suggestedMax: 100,
//                       angleLines: { display: true },
//                       ticks: { stepSize: 20 },
//                     },
//                   },
//                 }}
//               />
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   )
// }




// SkillCategories.tsx
"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    category: "Backend Development",
    items: ["Python", "FastAPI", "SQLAlchemy ORM"],
  },
  { category: "Databases", items: ["PostgreSQL", "MySQL"] },
  {
    category: "API Development",
    items: ["RESTful API Design", "JWT", "OAuth"],
  },
  { category: "DevOps", items: ["Docker", "Jenkins", "CI/CD Pipelines"] },
  { category: "Tools", items: ["Git", "GitHub", "SonarQube"] },
  { category: "Web Technologies", items: ["HTML", "CSS"] },
]

interface SkillCategoryCardProps {
  category: string
  items: string[]
}

function SkillCategoryCard({ category, items }: SkillCategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
    >
      <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {category}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SkillCategoriesGrid() {
  return (
    <section id="skills" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skill Categories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <SkillCategoryCard key={index} category={cat.category} items={cat.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
