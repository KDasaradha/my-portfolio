"use client";

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
  FaBlog, 
  FaCalendarAlt, 
  FaClock, 
  FaArrowRight, 
  FaTag,
  FaCode,
  FaDatabase,
  FaDocker,
  FaServer,
  FaRocket,
  FaChartLine
} from "react-icons/fa";
import { SiFastapi, SiPostgresql, SiJenkins } from "react-icons/si";

const blogPosts = [
  {
    title: "Why I Chose FastAPI for Scalable API Development",
    description:
      "Exploring the benefits of FastAPI and how it improved our development process with async capabilities and automatic documentation.",
    date: "2023-05-15",
    readTime: "5 min read",
    link: "#",
    tags: ["FastAPI", "API", "Development"],
    category: "Backend Development",
    icon: SiFastapi,
    color: "from-green-500 to-emerald-500",
    featured: true,
  },
  {
    title: "Optimizing PostgreSQL Queries for High-Performance APIs",
    description:
      "Tips and tricks to boost your PostgreSQL query performance in API applications with indexing strategies and query optimization.",
    date: "2023-06-22",
    readTime: "8 min read",
    link: "#",
    tags: ["PostgreSQL", "Performance", "API"],
    category: "Database",
    icon: SiPostgresql,
    color: "from-blue-500 to-cyan-500",
    featured: false,
  },
  {
    title: "A Step-by-Step Guide to Implementing CI/CD Pipelines with Jenkins & Docker",
    description:
      "Learn how to set up a robust CI/CD pipeline using Jenkins and Docker for automated testing and deployment workflows.",
    date: "2023-07-30",
    readTime: "10 min read",
    link: "#",
    tags: ["CI/CD", "Jenkins", "Docker"],
    category: "DevOps",
    icon: SiJenkins,
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    title: "Building Microservices with Python and FastAPI",
    description:
      "A comprehensive guide to designing and implementing microservices architecture using Python and FastAPI framework.",
    date: "2023-08-15",
    readTime: "12 min read",
    link: "#",
    tags: ["Microservices", "Python", "Architecture"],
    category: "Architecture",
    icon: FaServer,
    color: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "Advanced SQLAlchemy Patterns for Complex Applications",
    description:
      "Deep dive into advanced SQLAlchemy patterns, relationships, and performance optimization techniques for enterprise applications.",
    date: "2023-09-10",
    readTime: "15 min read",
    link: "#",
    tags: ["SQLAlchemy", "ORM", "Python"],
    category: "Database",
    icon: FaDatabase,
    color: "from-indigo-500 to-purple-500",
    featured: false,
  },
  {
    title: "Monitoring and Observability in Modern APIs",
    description:
      "Implementing comprehensive monitoring, logging, and observability solutions for production-ready API applications.",
    date: "2023-10-05",
    readTime: "7 min read",
    link: "#",
    tags: ["Monitoring", "Observability", "APIs"],
    category: "Operations",
    icon: FaChartLine,
    color: "from-teal-500 to-cyan-500",
    featured: true,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="relative py-24 overflow-hidden bg-secondary/5">
      {/* Enhanced background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-red-50/30 to-pink-50/20 dark:from-orange-950/20 dark:via-red-950/10 dark:to-pink-950/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 dark:bg-orange-800/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/20 dark:bg-pink-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-200/15 dark:bg-red-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative container mx-auto px-4">
        {/* Enhanced header section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg">
              <FaBlog className="text-3xl" />
            </div>
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Latest from the Blog
              </h2>
              <p className="text-sm text-muted-foreground font-medium">
                Insights & Tutorials
              </p>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-foreground/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover in-depth articles about modern web development, API design, and best practices
          </motion.p>
        </motion.div>

        {/* Featured Posts Section */}
        {featuredPosts.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-8">
              <FaRocket className="text-orange-500" />
              <h3 className="text-2xl font-bold text-foreground">Featured Articles</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const Icon = post.icon;
                return (
                  <motion.div
                    key={post.title}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="blog-card-featured relative overflow-hidden h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                      {/* Gradient background overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      {/* Featured badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg">
                          Featured
                        </Badge>
                      </div>

                      <CardHeader className="relative z-10 pb-4">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${post.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="text-xl" />
                          </div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2 text-xs">
                              {post.category}
                            </Badge>
                            <CardTitle className="text-xl font-bold text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-4 mt-2 text-sm">
                              <span className="flex items-center gap-1">
                                <FaCalendarAlt className="text-xs" />
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                              <span className="flex items-center gap-1">
                                <FaClock className="text-xs" />
                                {post.readTime}
                              </span>
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="relative z-10 flex-grow">
                        <p className="text-foreground/80 leading-relaxed mb-4">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                            >
                              <FaTag className="w-2 h-2 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="relative z-10 pt-4">
                        <Button 
                          asChild 
                          className={`w-full bg-gradient-to-r ${post.color} hover:shadow-lg transition-all duration-300 group/btn`}
                        >
                          <a
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Read more about ${post.title}`}
                            className="flex items-center justify-center gap-2"
                          >
                            <span>Read Full Article</span>
                            <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <FaCode className="text-blue-500" />
            <h3 className="text-2xl font-bold text-foreground">More Articles</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <motion.div
                  key={post.title}
                  variants={cardVariants}
                  className="group"
                >
                  <Card className="blog-card relative overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    {/* Gradient background overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

                    <CardHeader className="relative z-10 pb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${post.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-sm" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-3 text-xs">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-xs" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-xs" />
                          {post.readTime}
                        </span>
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10 flex-grow">
                      <p className="text-sm text-foreground/80 leading-relaxed mb-3 line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {post.tags.length > 2 && (
                          <Badge variant="outline" className="text-xs bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                            +{post.tags.length - 2}
                          </Badge>
                        )}
                      </div>
                    </CardContent>

                    <CardFooter className="relative z-10 pt-3">
                      <Button 
                        asChild 
                        variant="outline"
                        size="sm"
                        className="w-full group/btn hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
                      >
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Read more about ${post.title}`}
                          className="flex items-center justify-center gap-2"
                        >
                          <span>Read More</span>
                          <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Want to stay updated with my latest articles and insights?
          </p>
          <motion.button
            className="btn-primary-enhanced"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
