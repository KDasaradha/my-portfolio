"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { 
  ExternalLink, 
  Calendar, 
  Award, 
  Star, 
  Filter,
  CheckCircle,
  Building,
  Code,
  Database,
  Cloud,
  Coffee
} from "lucide-react";

// Certificate type definition
type Certificate = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  skills: string[];
  category: 'python' | 'database' | 'java' | 'cloud' | 'web';
  level: 'basic' | 'intermediate' | 'advanced';
  featured?: boolean;
  description?: string;
  credentialId?: string;
};

const certificates: Certificate[] = [
  // Python Certifications
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/5b2857f5a0a4",
    skills: ["Python", "Programming Basics", "Problem Solving"],
    category: "python",
    level: "basic",
    featured: true,
    description: "Fundamental Python programming concepts and problem-solving techniques",
    credentialId: "5b2857f5a0a4"
  },
  {
    title: "Crash Course to Learn Python Coding from Basic Beginning",
    issuer: "Udemy",
    date: "October 2021",
    link: "https://ude.my/UC-bc172b11-e946-46eb-bba6-cb18f317c773",
    skills: ["Python", "Programming Fundamentals"],
    category: "python",
    level: "basic",
    description: "Comprehensive introduction to Python programming from scratch",
    credentialId: "UC-bc172b11-e946-46eb-bba6-cb18f317c773"
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "May 2020",
    link: "https://coursera.org/share/cb19234877351e3316157925162aca12",
    skills: ["Python", "Programming", "Problem Solving"],
    category: "python",
    level: "basic",
    featured: true,
    description: "Introduction to programming using Python from University of Michigan",
    credentialId: "cb19234877351e3316157925162aca12"
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "May 2020",
    link: "https://coursera.org/share/368d0b95987e88c1c56d1d181c450ba6",
    skills: ["Python", "Data Structures"],
    category: "python",
    level: "intermediate",
    description: "Advanced Python data structures and algorithms",
    credentialId: "368d0b95987e88c1c56d1d181c450ba6"
  },

  // SQL Certifications
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/4f7e1ec2dab5",
    skills: ["SQL", "Database Management"],
    category: "database",
    level: "basic",
    description: "Fundamental SQL queries and database operations",
    credentialId: "4f7e1ec2dab5"
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/f31e2b6aecf7",
    skills: ["SQL", "Database Optimization"],
    category: "database",
    level: "intermediate",
    featured: true,
    description: "Advanced SQL queries, joins, and database optimization techniques",
    credentialId: "f31e2b6aecf7"
  },
  {
    title: "MySQL Basics",
    issuer: "Great Learning",
    date: "December 2022",
    link: "https://verify.mygreatlearning.com/FPYFCNMF",
    skills: ["MySQL", "Database Management"],
    category: "database",
    level: "basic",
    description: "MySQL database fundamentals and administration",
    credentialId: "FPYFCNMF"
  },

  // Java Certifications
  {
    title: "Introduction to Java",
    issuer: "Newton School",
    date: "November 2022",
    link: "https://my.newtonschool.co/course/7l4noyx7aa/certificate/a7h6t77z3xdw/verify/",
    skills: ["Java", "OOP", "Data Structures"],
    category: "java",
    level: "basic",
    description: "Object-oriented programming with Java and data structures",
    credentialId: "a7h6t77z3xdw"
  },
  {
    title: "Learning Java",
    issuer: "LinkedIn",
    date: "October 2022",
    link: "https://www.linkedin.com/learning/certificates/cf883f76c4c10c66da06423c36432495450ee040776aad094e5206e80419a8e6",
    skills: ["Java", "Object-Oriented Programming"],
    category: "java",
    level: "intermediate",
    description: "Advanced Java programming and object-oriented design patterns",
    credentialId: "cf883f76c4c10c66da06423c36432495450ee040776aad094e5206e80419a8e6"
  },

  // AWS Certification
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2021",
    link: "https://www.credly.com/badges/dc967ed5-8f3d-403e-a09f-b8e6cbf2b857?source=linked_in_profile",
    skills: ["Cloud Computing", "AWS Services"],
    category: "cloud",
    level: "basic",
    featured: true,
    description: "Comprehensive introduction to AWS cloud services and architecture",
    credentialId: "dc967ed5-8f3d-403e-a09f-b8e6cbf2b857"
  },
];

// Category configurations
const categoryConfig = {
  python: { 
    icon: Code, 
    color: "from-blue-500 to-cyan-500", 
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
    textColor: "text-blue-700 dark:text-blue-300"
  },
  database: { 
    icon: Database, 
    color: "from-green-500 to-emerald-500", 
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-300"
  },
  java: { 
    icon: Coffee, 
    color: "from-orange-500 to-red-500", 
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
    textColor: "text-orange-700 dark:text-orange-300"
  },
  cloud: { 
    icon: Cloud, 
    color: "from-purple-500 to-pink-500", 
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800",
    textColor: "text-purple-700 dark:text-purple-300"
  },
  web: { 
    icon: Building, 
    color: "from-indigo-500 to-blue-500", 
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    textColor: "text-indigo-700 dark:text-indigo-300"
  }
};

// Helper functions
const getLevelColor = (level: Certificate['level']) => {
  switch (level) {
    case 'basic': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
    case 'intermediate': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
    case 'advanced': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300';
    default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
  }
};

export default function Certificates() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<'all' | 'python' | 'database' | 'java' | 'cloud' | 'featured'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredCertificates = certificates.filter(cert => {
    if (filter === 'all') return true;
    if (filter === 'featured') return cert.featured;
    return cert.category === filter;
  });

  const stats = {
    total: certificates.length,
    featured: certificates.filter(c => c.featured).length,
    categories: Object.keys(categoryConfig).length,
    latest: certificates.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]
  };

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Enhanced Header */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-16"
          initial={isClient ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={isClient && isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6"
            initial={isClient ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
            animate={isClient && isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Professional Certifications</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={isClient ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
            animate={isClient && isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="gradient-text">Certifications & Achievements</span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8"
            initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Continuous learning through industry-recognized certifications in programming, 
            databases, and cloud technologies.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8"
            initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Total Certificates</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-amber-500">{stats.featured}</div>
              <div className="text-xs text-muted-foreground">Featured</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-500">{stats.categories}</div>
              <div className="text-xs text-muted-foreground">Categories</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-500">2023</div>
              <div className="text-xs text-muted-foreground">Latest Year</div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            animate={isClient && isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {[
              { key: 'all', label: 'All Certificates', count: certificates.length },
              { key: 'featured', label: 'Featured', count: certificates.filter(c => c.featured).length },
              { key: 'python', label: 'Python', count: certificates.filter(c => c.category === 'python').length },
              { key: 'database', label: 'Database', count: certificates.filter(c => c.category === 'database').length },
              { key: 'java', label: 'Java', count: certificates.filter(c => c.category === 'java').length },
              { key: 'cloud', label: 'Cloud', count: certificates.filter(c => c.category === 'cloud').length },
            ].map((filterOption) => {
              const config = filterOption.key !== 'all' && filterOption.key !== 'featured' 
                ? categoryConfig[filterOption.key as keyof typeof categoryConfig] 
                : null;
              
              return (
                <Button
                  key={filterOption.key}
                  variant={filter === filterOption.key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(filterOption.key as any)}
                  className={`transition-all duration-300 ${
                    filter === filterOption.key 
                      ? config 
                        ? `bg-gradient-to-r ${config.color} text-white border-0` 
                        : 'bg-primary text-primary-foreground'
                      : 'hover:scale-105'
                  }`}
                >
                  {config && <config.icon className="w-4 h-4 mr-2" />}
                  {filterOption.label} ({filterOption.count})
                </Button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredCertificates.map((cert, index) => {
              const config = categoryConfig[cert.category];
              const IconComponent = config.icon;
              
              return (
                <motion.div
                  key={cert.title}
                  layout
                  initial={isClient ? { opacity: 0, y: 20, scale: 0.9 } : { opacity: 1, y: 0, scale: 1 }}
                  animate={isClient ? { opacity: 1, y: 0, scale: 1 } : {}}
                  exit={isClient ? { opacity: 0, y: -20, scale: 0.9 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: isClient ? index * 0.1 : 0,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={isClient ? { 
                    y: -8,
                    transition: { duration: 0.2 }
                  } : {}}
                  onHoverStart={() => setHoveredCard(cert.title)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group"
                >
                  <Card className={`h-full transition-all duration-500 border-0 overflow-hidden bg-card/95 backdrop-blur-sm relative shadow-lg hover:shadow-2xl ${config.borderColor} border-l-4`}>
                    {/* Featured Badge */}
                    {cert.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <motion.div
                          className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                          animate={isClient ? { scale: [1, 1.05, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Star className="w-3 h-3 fill-current" />
                          <span>Featured</span>
                        </motion.div>
                      </div>
                    )}

                    {/* Category Icon Background */}
                    <div className={`absolute top-4 left-4 w-12 h-12 ${config.bgColor} rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${config.textColor}`} />
                    </div>

                    <CardHeader className="pt-20 pb-4">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 mb-2">
                              {cert.title}
                            </CardTitle>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge className={`text-xs ${getLevelColor(cert.level)}`}>
                                {cert.level.toUpperCase()}
                              </Badge>
                              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                                <Calendar className="w-3 h-3" />
                                <span>{cert.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>

                        {cert.description && (
                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 pb-6">
                      {/* Skills */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground/90 flex items-center space-x-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>Skills Covered</span>
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className={`text-xs ${config.bgColor} ${config.textColor} border-0 hover:scale-105 transition-transform duration-200`}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Credential ID */}
                      {cert.credentialId && (
                        <div className="text-xs text-muted-foreground">
                          <span className="font-medium">ID:</span> {cert.credentialId.slice(0, 12)}...
                        </div>
                      )}

                      {/* View Certificate Button */}
                      <Button
                        asChild
                        className={`w-full bg-gradient-to-r ${config.color} hover:opacity-90 text-white border-0 transition-all duration-300 group/btn`}
                      >
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          <span>View Certificate</span>
                        </a>
                      </Button>
                    </CardContent>

                    {/* Hover Effect Overlay */}
                    {isClient && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-lg`}
                        initial={false}
                      />
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={isClient ? { opacity: 0 } : { opacity: 1 }}
            animate={isClient ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="text-muted-foreground">
              No certificates found for the selected filter.
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={isClient ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            Continuously expanding my knowledge through professional development and certification programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary-enhanced">
              <a href="#contact">Discuss My Qualifications</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#experience">View Experience</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
