"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const educationDetails = [
  {
    degree: "B-Tech",
    institution: "Vasireddy Venkatadri Institute of Technology, Nambur",
    course: "Electrical & Electronics Engineering",
    duration: "07/2018 – 06/2022",
    location: "Guntur, India",
    grade: "7.64 CGPA",
    skills: ["Arduino", "C (Programming Language)"],
    mapsLink: "https://maps.app.goo.gl/tA39JWeQtCL7JBUcA",
    website: "https://www.vvitguntur.com/",
  },
  {
    degree: "Intermediate",
    institution: "Andhra Pradesh Residential Junior College, Nagarjuna Sagar",
    course: "Mathematics, Physics, Chemistry",
    duration: "06/2016 – 03/2018",
    location: "Nagarjuna Sagar, India",
    grade: "95.6%",
    mapsLink: "https://maps.app.goo.gl/KPwcbNmKLf324aqM9",
    website: "https://www.facebook.com/p/APRJC-Nagarjunasagar-100080494907748/",
  },
  {
    degree: "SSC",
    institution: "PMKR Gowthami High School, Darsi",
    course: "10th Standard",
    duration: "06/2015 – 04/2016",
    location: "Darsi, India",
    grade: "9.7 CGPA",
    mapsLink: "https://maps.app.goo.gl/aNJHCXng8m35XL3F6",
    website: "https://www.facebook.com/gowthamigrammarschool/",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Page Title with Animation */}
        <motion.h2
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={`${edu.degree}-${edu.institution}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                {/* Card Header */}
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
                  <CardTitle className="text-white text-xl font-semibold">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-gray-200 text-sm">{edu.institution}</p>
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-6">
                  {/* Course Name */}
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {edu.course}
                  </p>

                  {/* Duration */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {edu.duration}
                  </p>

                  {/* Grade */}
                  <p className="text-sm font-medium mt-2">
                    <strong>Grade:</strong> {edu.grade}
                  </p>

                  {/* Skills */}
                  {edu.skills && (
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      <strong>Skills:</strong> {edu.skills.join(" · ")}
                    </p>
                  )}

                  {/* Location with Map Link */}
                  <div className="flex items-center gap-2 mt-4">
                    <FaMapMarkerAlt className="text-red-500" />
                    <a
                      href={edu.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      {edu.location}
                    </a>
                  </div>

                  {/* Website Link */}
                  <div className="flex items-center gap-2 mt-2">
                    <FaExternalLinkAlt className="text-green-500" />
                    <a
                      href={edu.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Visit Website
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
