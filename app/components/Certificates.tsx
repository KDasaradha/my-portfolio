"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { FaExternalLinkAlt, FaCalendarAlt, FaAward } from "react-icons/fa";

const certificates = [
  // Python Certifications
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/5b2857f5a0a4",
    skills: ["Python", "Programming Basics", "Problem Solving"],
  },
  {
    title: "Crash Course to Learn Python Coding from Basic Beginning",
    issuer: "Udemy",
    date: "October 2021",
    link: "https://ude.my/UC-bc172b11-e946-46eb-bba6-cb18f317c773",
    skills: ["Python", "Programming Fundamentals"],
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan",
    date: "May 2020",
    link: "https://coursera.org/share/cb19234877351e3316157925162aca12",
    skills: ["Python", "Programming", "Problem Solving"],
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    date: "May 2020",
    link: "https://coursera.org/share/368d0b95987e88c1c56d1d181c450ba6",
    skills: ["Python", "Data Structures"],
  },

  // SQL Certifications
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/4f7e1ec2dab5",
    skills: ["SQL", "Database Management"],
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "January 2023",
    link: "https://www.hackerrank.com/certificates/f31e2b6aecf7",
    skills: ["SQL", "Database Optimization"],
  },
  {
    title: "MySQL Basics",
    issuer: "Great Learning",
    date: "December 2022",
    link: "https://verify.mygreatlearning.com/FPYFCNMF",
    skills: ["MySQL", "Database Management"],
  },

  // Java Certifications
  {
    title: "Introduction to Java",
    issuer: "Newton School",
    date: "November 2022",
    link: "https://my.newtonschool.co/course/7l4noyx7aa/certificate/a7h6t77z3xdw/verify/",
    skills: ["Java", "OOP", "Data Structures"],
  },
  {
    title: "Learning Java",
    issuer: "LinkedIn",
    date: "October 2022",
    link: "https://www.linkedin.com/learning/certificates/cf883f76c4c10c66da06423c36432495450ee040776aad094e5206e80419a8e6",
    skills: ["Java", "Object-Oriented Programming"],
  },

  // AWS Certification
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2021",
    link: "https://www.credly.com/badges/dc967ed5-8f3d-403e-a09f-b8e6cbf2b857?source=linked_in_profile",
    skills: ["Cloud Computing", "AWS Services"],
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
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-8 border-blue-500">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FaAward className="text-blue-500" />
                    <CardTitle className="text-lg font-semibold">
                      {cert.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <FaCalendarAlt className="text-gray-500" />
                    <span>{cert.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2">
                    {cert.issuer}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Skills Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors text-sm group"
                  >
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
                    <span className="hover:underline">View Certificate</span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
