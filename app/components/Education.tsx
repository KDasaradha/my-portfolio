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
    institution: "Vasireddy Venkatadri Institution Of Technology, Guntur",
    course: "Electrical & Electronics Engineering",
    duration: "07/2018 – 06/2022 | Guntur, India",
    location: "Guntur, India",
    mapsLink: "https://maps.app.goo.gl/tA39JWeQtCL7JBUcA",
    website: "https://www.vvitguntur.com/",
  },
  {
    degree: "Intermediate",
    institution: "Andhra Pradesh Residential Junior College, Nagarjuna Sagar",
    course: "Mathematics, Physics, Chemistry",
    duration: "06/2016 – 03/2018 | V.P.South, India",
    location: "Nagarjuna Sagar, India",
    mapsLink: "https://maps.app.goo.gl/KPwcbNmKLf324aqM9",
    website: "https://www.facebook.com/p/APRJC-Nagarjunasagar-100080494907748/",
  },
  {
    degree: "SSC",
    institution: "Gowthami High School, Darsi",
    course: "10th Standard",
    duration: "06/2015 – 04/2016 | Darsi, India",
    location: "Darsi, India",
    mapsLink: "https://maps.app.goo.gl/aNJHCXng8m35XL3F6",
    website: "https://www.facebook.com/gowthamigrammarschool/",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationDetails.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    {edu.institution}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {edu.course}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    {edu.duration}
                  </p>

                  {/* Location */}
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

                  {/* Website */}
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
