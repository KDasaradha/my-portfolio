

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




// // SkillCategories.tsx
// "use client"

// import { motion } from "framer-motion"

// const skillCategories = [
//   {
//     category: "Backend Development",
//     items: ["Python", "FastAPI", "SQLAlchemy ORM"],
//   },
//   { category: "Databases", items: ["PostgreSQL", "MySQL"] },
//   {
//     category: "API Development",
//     items: ["RESTful API Design", "JWT", "OAuth"],
//   },
//   { category: "DevOps", items: ["Docker", "Jenkins", "CI/CD Pipelines"] },
//   { category: "Tools", items: ["Git", "GitHub", "SonarQube"] },
//   { category: "Web Technologies", items: ["HTML", "CSS"] },
// ]

// interface SkillCategoryCardProps {
//   category: string
//   items: string[]
// }

// function SkillCategoryCard({ category, items }: SkillCategoryCardProps) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       transition={{ duration: 0.3 }}
//       className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
//     >
//       <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
//         {category}
//       </h4>
//       <div className="flex flex-wrap gap-2">
//         {items.map((item, index) => (
//           <span
//             key={index}
//             className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default function SkillCategoriesGrid() {
//   return (
//     <section id="skills" className="py-20 bg-secondary/10">
//       <div className="container mx-auto px-6 lg:px-12">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 gradient-text"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           Skill Categories
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {skillCategories.map((cat, index) => (
//             <SkillCategoryCard key={index} category={cat.category} items={cat.items} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion";
import { Code2, Database, Server, GitBranch, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    category: "Backend Development",
    items: ["Python", "FastAPI", "SQLAlchemy ORM"],
    icon: Server,
    gradient: "from-blue-500 to-cyan-500",
  },
  { 
    category: "Databases", 
    items: ["PostgreSQL", "MySQL"],
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    category: "API Development",
    items: ["RESTful API Design", "JWT", "OAuth"],
    icon: Code2,
    gradient: "from-purple-500 to-pink-500",
  },
  { 
    category: "DevOps", 
    items: ["Docker", "Jenkins", "CI/CD Pipelines"],
    icon: GitBranch,
    gradient: "from-orange-500 to-red-500",
  },
  { 
    category: "Tools", 
    items: ["Git", "GitHub", "SonarQube"],
    icon: Wrench,
    gradient: "from-yellow-500 to-orange-500",
  },
  { 
    category: "Web Technologies", 
    items: ["HTML", "CSS"],
    icon: Layout,
    gradient: "from-indigo-500 to-purple-500",
  },
];

interface SkillCategoryCardProps {
  category: string;
  items: string[];
  icon: React.ElementType;
  gradient: string;
  index: number;
}

function SkillCategoryCard({ category, items, icon: Icon, gradient, index }: SkillCategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)",
      }}
      className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className={`absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-gradient-to-br ${gradient} opacity-10 rounded-full`} />
      
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10`}>
          <Icon className={`w-6 h-6 bg-gradient-to-br ${gradient} [&>path]:fill-transparent`} />
        </div>
        <h4 className="text-xl font-bold ml-4 text-gray-900 dark:text-gray-100">
          {category}
        </h4>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <motion.span
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-r ${gradient} bg-opacity-10 text-gray-800 dark:text-gray-200 
              px-4 py-1.5 rounded-full text-sm font-medium border border-transparent
              hover:border-current transition-colors duration-200`}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillCategoriesGrid() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skill Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my diverse range of technical skills and expertise across different domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, index) => (
            <SkillCategoryCard 
              key={index}
              index={index}
              category={cat.category}
              items={cat.items}
              icon={cat.icon}
              gradient={cat.gradient}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client"

// import { useState, useMemo, useRef } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Search, Moon, Sun, Download } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { useTheme } from "next-themes"
// import { useVirtual } from "react-virtual"
// import { useTranslation } from "next-i18next"

// const skillCategories = [
//   {
//     category: "Backend Development",
//     items: [
//       { name: "Python", level: 90 },
//       { name: "FastAPI", level: 85 },
//       { name: "SQLAlchemy ORM", level: 80 },
//     ],
//   },
//   {
//     category: "Databases",
//     items: [
//       { name: "PostgreSQL", level: 85 },
//       { name: "MySQL", level: 80 },
//     ],
//   },
//   {
//     category: "API Development",
//     items: [
//       { name: "RESTful API Design", level: 90 },
//       { name: "JWT", level: 85 },
//       { name: "OAuth", level: 80 },
//     ],
//   },
//   {
//     category: "DevOps",
//     items: [
//       { name: "Docker", level: 85 },
//       { name: "Jenkins", level: 80 },
//       { name: "CI/CD Pipelines", level: 85 },
//     ],
//   },
//   {
//     category: "Tools",
//     items: [
//       { name: "Git", level: 90 },
//       { name: "GitHub", level: 90 },
//       { name: "SonarQube", level: 80 },
//     ],
//   },
//   {
//     category: "Web Technologies",
//     items: [
//       { name: "HTML", level: 95 },
//       { name: "CSS", level: 90 },
//     ],
//   },
// ]

// interface SkillItemProps {
//   name: string
//   level: number
// }

// function SkillItem({ name, level }: SkillItemProps) {
//   const { t } = useTranslation()

//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="bg-primary/10 rounded-full px-3 py-1 text-sm font-medium text-primary"
//     >
//       <div className="flex items-center justify-between">
//         <span>{t(name)}</span>
//         <div className="w-16 h-1 bg-primary/20 rounded-full ml-2">
//           <motion.div
//             className="h-full bg-primary rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: `${level}%` }}
//             transition={{ duration: 1, ease: "easeInOut" }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// interface SkillCategoryCardProps {
//   category: string
//   items: SkillItemProps[]
// }

// function SkillCategoryCard({ category, items }: SkillCategoryCardProps) {
//   const { t } = useTranslation()

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       transition={{ duration: 0.3 }}
//       className="bg-card text-card-foreground rounded-lg shadow-lg p-6"
//     >
//       <h4 className="text-xl font-bold mb-4">{t(category)}</h4>
//       <div className="flex flex-wrap gap-2">
//         {items.map((item, index) => (
//           <SkillItem key={index} name={item.name} level={item.level} />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// function SkillLegend() {
//   const { t } = useTranslation()
//   return (
//     <div className="flex justify-center items-center space-x-4 mb-4">
//       <span className="text-sm">{t("Beginner")}</span>
//       <div className="w-32 h-2 bg-primary/20 rounded-full">
//         <div className="w-1/4 h-full bg-primary rounded-full" />
//       </div>
//       <div className="w-32 h-2 bg-primary/20 rounded-full">
//         <div className="w-1/2 h-full bg-primary rounded-full" />
//       </div>
//       <div className="w-32 h-2 bg-primary/20 rounded-full">
//         <div className="w-3/4 h-full bg-primary rounded-full" />
//       </div>
//       <div className="w-32 h-2 bg-primary/20 rounded-full">
//         <div className="w-full h-full bg-primary rounded-full" />
//       </div>
//       <span className="text-sm">{t("Expert")}</span>
//     </div>
//   )
// }

// export default function SkillCategoriesGrid() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [activeTab, setActiveTab] = useState("all")
//   const { theme, setTheme } = useTheme()
//   const { t } = useTranslation()

//   const filteredCategories = useMemo(() => {
//     return skillCategories
//       .map((category) => ({
//         ...category,
//         items: category.items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
//       }))
//       .filter((category) => activeTab === "all" || category.category.toLowerCase() === activeTab.toLowerCase())
//   }, [searchTerm, activeTab])

//   const parentRef = useRef()
//   const rowVirtualizer = useVirtual({
//     size: filteredCategories.length,
//     parentRef,
//     estimateSize: React.useCallback(() => 250, []),
//     overscan: 5,
//   })

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "ArrowRight") {
//       const currentIndex = skillCategories.findIndex((cat) => cat.category.toLowerCase() === activeTab)
//       const nextIndex = (currentIndex + 1) % skillCategories.length
//       setActiveTab(skillCategories[nextIndex].category.toLowerCase())
//     } else if (e.key === "ArrowLeft") {
//       const currentIndex = skillCategories.findIndex((cat) => cat.category.toLowerCase() === activeTab)
//       const prevIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length
//       setActiveTab(skillCategories[prevIndex].category.toLowerCase())
//     }
//   }

//   const handleDownloadResume = () => {
//     // Implement resume download logic here
//     console.log("Downloading resume...")
//   }

//   return (
//     <section id="skills" className="py-20 bg-secondary/10">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {t("Skill Categories")}
//         </motion.h2>
//         <div className="flex justify-between items-center mb-8">
//           <div className="relative max-w-md">
//             <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
//             <Input
//               type="text"
//               placeholder={t("Search skills...")}
//               className="pl-10"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//           <div className="flex space-x-4">
//             <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//               {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
//             </Button>
//             <Button onClick={handleDownloadResume}>
//               <Download className="h-4 w-4 mr-2" />
//               {t("Download Resume")}
//             </Button>
//           </div>
//         </div>
//         <SkillLegend />
//         <Tabs defaultValue="all" className="mb-8" onKeyDown={handleKeyDown}>
//           <TabsList>
//             <TabsTrigger value="all">{t("All")}</TabsTrigger>
//             {skillCategories.map((cat, index) => (
//               <TabsTrigger key={index} value={cat.category.toLowerCase()}>
//                 {t(cat.category)}
//               </TabsTrigger>
//             ))}
//           </TabsList>
//           <TabsContent value="all">
//             <div ref={parentRef} style={{ height: `600px`, overflow: "auto" }}>
//               <div
//                 style={{
//                   height: `${rowVirtualizer.totalSize}px`,
//                   width: "100%",
//                   position: "relative",
//                 }}
//               >
//                 {rowVirtualizer.virtualItems.map((virtualRow) => (
//                   <div
//                     key={virtualRow.index}
//                     style={{
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       width: "100%",
//                       height: `${virtualRow.size}px`,
//                       transform: `translateY(${virtualRow.start}px)`,
//                     }}
//                   >
//                     <AnimatePresence>
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.2 }}
//                       >
//                         <SkillCategoryCard
//                           category={filteredCategories[virtualRow.index].category}
//                           items={filteredCategories[virtualRow.index].items}
//                         />
//                       </motion.div>
//                     </AnimatePresence>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </TabsContent>
//           {skillCategories.map((cat, index) => (
//             <TabsContent key={index} value={cat.category.toLowerCase()}>
//               <SkillCategoryCard category={cat.category} items={cat.items} />
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>
//     </section>
//   )
// }

