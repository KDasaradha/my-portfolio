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

const blogPosts = [
  {
    title: "Why I Chose FastAPI for Scalable API Development",
    description:
      "Exploring the benefits of FastAPI and how it improved our development process.",
    date: "2023-05-15",
    readTime: "5 min read",
    link: "#",
    tags: ["FastAPI", "API", "Development"],
  },
  {
    title: "Optimizing PostgreSQL Queries for High-Performance APIs",
    description:
      "Tips and tricks to boost your PostgreSQL query performance in API applications.",
    date: "2023-06-22",
    readTime: "8 min read",
    link: "#",
    tags: ["PostgreSQL", "Performance", "API"],
  },
  {
    title:
      "A Step-by-Step Guide to Implementing CI/CD Pipelines with Jenkins & Docker",
    description:
      "Learn how to set up a robust CI/CD pipeline using Jenkins and Docker.",
    date: "2023-07-30",
    readTime: "10 min read",
    link: "#",
    tags: ["CI/CD", "Jenkins", "Docker"],
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="gradient-text">Latest from the Blog</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.date} • {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{post.description}</p>
                  <div className="mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-primary/10 text-primary px-2 py-1 rounded-full text-sm mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
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
