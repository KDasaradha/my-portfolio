"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import HorizontalScrollGallery from "./HorizontalScrollGallery";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { 
  MapPin, 
  ExternalLink, 
  Calendar, 
  Award, 
  BookOpen, 
  GraduationCap,
  Star,
  Clock,
  Building,
  Sparkles,
  ChevronRight,
  Globe
} from "lucide-react";

const educationDetails = [
  {
    id: 1,
    degree: "B-Tech",
    shortDegree: "B.Tech",
    institution: "Vasireddy Venkatadri Institute of Technology, Nambur",
    shortInstitution: "VVIT Guntur",
    course: "Electrical & Electronics Engineering",
    duration: "07/2018 – 06/2022",
    startYear: "2018",
    endYear: "2022",
    location: "Guntur, India",
    grade: "7.64 CGPA",
    gradeType: "CGPA",
    maxGrade: "10.0",
    percentage: "76.4%",
    skills: ["Arduino", "C Programming", "Circuit Design", "Power Systems"],
    achievements: [
      "Completed final year project on Smart Grid Technology",
      "Active member of IEEE Student Chapter",
      "Participated in technical symposiums"
    ],
    mapsLink: "https://maps.app.goo.gl/tA39JWeQtCL7JBUcA",
    website: "https://www.vvitguntur.com/",
    type: "undergraduate",
    level: "Bachelor's",
    field: "Engineering",
    status: "Completed",
    color: "from-blue-500 to-cyan-500",
    icon: GraduationCap,
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
  },
  {
    id: 2,
    degree: "Intermediate",
    shortDegree: "12th",
    institution: "Andhra Pradesh Residential Junior College, Nagarjuna Sagar",
    shortInstitution: "APRJC Nagarjuna Sagar",
    course: "Mathematics, Physics, Chemistry",
    duration: "06/2016 – 03/2018",
    startYear: "2016",
    endYear: "2018",
    location: "Nagarjuna Sagar, India",
    grade: "95.6%",
    gradeType: "Percentage",
    maxGrade: "100%",
    percentage: "95.6%",
    skills: ["Mathematics", "Physics", "Chemistry", "Analytical Thinking"],
    achievements: [
      "Secured 95.6% in Board Examinations",
      "Top performer in Mathematics",
      "Active in science exhibitions"
    ],
    mapsLink: "https://maps.app.goo.gl/KPwcbNmKLf324aqM9",
    website: "https://www.facebook.com/p/APRJC-Nagarjunasagar-100080494907748/",
    type: "intermediate",
    level: "Higher Secondary",
    field: "Science",
    status: "Completed",
    color: "from-purple-500 to-pink-500",
    icon: BookOpen,
    bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
  },
  {
    id: 3,
    degree: "SSC",
    shortDegree: "10th",
    institution: "PMKR Gowthami High School, Darsi",
    shortInstitution: "Gowthami High School",
    course: "10th Standard",
    duration: "06/2015 – 04/2016",
    startYear: "2015",
    endYear: "2016",
    location: "Darsi, India",
    grade: "9.7 CGPA",
    gradeType: "CGPA",
    maxGrade: "10.0",
    percentage: "97%",
    skills: ["Foundation Studies", "Academic Excellence", "Leadership"],
    achievements: [
      "Achieved 9.7 CGPA in Board Examinations",
      "School topper in Science subjects",
      "Student council member"
    ],
    mapsLink: "https://maps.app.goo.gl/aNJHCXng8m35XL3F6",
    website: "https://www.facebook.com/gowthamigrammarschool/",
    type: "secondary",
    level: "Secondary",
    field: "General",
    status: "Completed",
    color: "from-green-500 to-emerald-500",
    icon: Award,
    bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
  },
];

const cardHoverVariants: Variants = {
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 5,
    rotateY: 5,
    transition: {
      duration: 0.3,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 }
  }
};

const titleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.04, 0.62, 0.23, 0.98]
    }
  }
};

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getGradeColor = (grade: string, type: string) => {
    if (type === "CGPA") {
      const numGrade = parseFloat(grade);
      if (numGrade >= 9.0) return "text-green-600 dark:text-green-400";
      if (numGrade >= 8.0) return "text-blue-600 dark:text-blue-400";
      if (numGrade >= 7.0) return "text-yellow-600 dark:text-yellow-400";
      return "text-gray-600 dark:text-gray-400";
    } else {
      const numGrade = parseFloat(grade);
      if (numGrade >= 90) return "text-green-600 dark:text-green-400";
      if (numGrade >= 80) return "text-blue-600 dark:text-blue-400";
      if (numGrade >= 70) return "text-yellow-600 dark:text-yellow-400";
      return "text-gray-600 dark:text-gray-400";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
          <Star className="w-3 h-3 mr-1" />
          Completed
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <section id="education" className="py-24 relative bg-secondary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10" ref={ref}>
        <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced Page Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </motion.div>
          
          <h2 className="section-heading mb-5">
            Education Journey
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic foundation and continuous learning path that shaped my technical expertise
          </p>
          
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>
        </motion.div>
        </div>

        {/* Sticky Horizontal Education Gallery */}
        <HorizontalScrollGallery
          ariaLabel="Education history"
          progressGradient="from-blue-500 via-purple-500 to-pink-500"
          items={educationDetails}
          renderItem={(edu) => (
            <motion.div
              className="h-full"
              variants={cardHoverVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {/* Education Card */}
              <Card className={`overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 ${edu.bgPattern}`}>
                  {/* Enhanced Card Header */}
                  <CardHeader className={`bg-gradient-to-r ${edu.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <edu.icon className="w-full h-full" />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                            <edu.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-2xl font-bold">
                              {edu.degree}
                            </CardTitle>
                            <p className="text-white/90 text-sm font-medium">
                              {edu.level} • {edu.field}
                            </p>
                          </div>
                        </div>
                        {getStatusBadge(edu.status)}
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-white/95 text-lg font-semibold line-clamp-2">
                          {edu.institution}
                        </h3>
                        <p className="text-white/80 font-medium">
                          {edu.course}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Enhanced Card Content */}
                  <CardContent className="p-6 space-y-6">
                    {/* Duration and Grade */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-background/50 border">
                        <Calendar className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Duration</p>
                          <p className="font-semibold">{edu.duration}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 rounded-xl bg-background/50 border">
                        <Award className={`w-5 h-5 ${getGradeColor(edu.grade, edu.gradeType)}`} />
                        <div>
                          <p className="text-sm text-muted-foreground">Grade</p>
                          <p className={`font-bold text-lg ${getGradeColor(edu.grade, edu.gradeType)}`}>
                            {edu.grade}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    {edu.skills && edu.skills.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Skills & Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: skillIndex * 0.1 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start space-x-2 text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                            >
                              <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Location and Links */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 justify-start"
                        asChild
                      >
                        <a
                          href={edu.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>{edu.location}</span>
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 justify-start"
                        asChild
                      >
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <Globe className="w-4 h-4 text-blue-500" />
                          <span>Visit Website</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
            </motion.div>
          )}
        />

        <div className="container mx-auto px-6 lg:px-12">
        {/* Enhanced Summary Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border border-blue-200/50 dark:border-blue-800/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Educational Foundation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My educational journey spans from foundational learning to specialized engineering education, 
              providing me with a strong technical background in electrical engineering and programming. 
              This academic foundation, combined with continuous learning, has equipped me with the 
              analytical thinking and problem-solving skills essential for modern software development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</div>
                <div className="text-sm text-muted-foreground">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</div>
                <div className="text-sm text-muted-foreground">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">10+</div>
                <div className="text-sm text-muted-foreground">Core Skills</div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
