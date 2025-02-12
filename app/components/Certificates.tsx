"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Introduction to Java",
    issuer: "Newton School",
    date: "November 2022",
    link: "https://my.newtonschool.co/course/7l4noyx7aa/certificate/a7h6t77z3xdw/verify",
  },
  {
    title: "Crash Course to Learn Python Coding",
    issuer: "Udemy",
    date: "October 2021",
    link: "https://www.udemy.com/certificate/UC-bc172b11-e946-46eb-bba6-cb18f317c773/",
  },
  {
    title: "Learning SQL Programming",
    issuer: "LinkedIn Learning",
    date: "January 2023",
    link: "https://www.linkedin.com/learning/certificates/2bec5c2b498a769ec38fa6815e385f9db919526f2c8ca66c42d7f8fb23bfe429?u=126637874",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {cert.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {cert.date}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <FaExternalLinkAlt className="text-blue-500" />
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      View Certificate
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
