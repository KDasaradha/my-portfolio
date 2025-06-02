"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Mail, PhoneCall } from "lucide-react";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect!
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4">
                    <PhoneCall className="text-primary" size={28} />
                    <a
                      href="tel:+919032414439"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      +91 9032414439
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <SiWhatsapp className="text-green-500" size={28} />
                    <a
                      href="https://wa.me/919032414439"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <Mail className="text-red-500" size={28} />
                    <a
                      href="mailto:kdasaradha525@gmail.com"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      kdasaradha525@gmail.com
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Social Links & Resume
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-5">
                  <li className="flex items-center space-x-4">
                    <SiLinkedin className="text-blue-600" size={28} />
                    <a
                      href="https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <SiGithub className="text-gray-700" size={28} />
                    <a
                      href="https://github.com/KDasaradha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      GitHub
                    </a>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaTwitter className="text-blue-400" size={28} />
                    <a
                      href="https://twitter.com/k_dasaradh66626"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium hover:text-primary transition"
                    >
                      Twitter/X
                    </a>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 mt-6">
                  <a
                    href="/Dasaradha_Kesari_Developer_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md hover:opacity-90">
                      View Resume
                    </Button>
                  </a>
                  <a
                    href="/Dasaradha_Kesari_Developer_Resume.pdf"
                    download
                  >
                    <Button className="bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md hover:opacity-90">
                      Download Resume
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
