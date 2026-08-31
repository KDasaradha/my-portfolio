"use client";

import { motion } from "framer-motion";
import { PhoneCall, Heart, Code, Coffee } from "lucide-react";
import { SiGithub, SiLinkedin, SiWhatsapp, SiGmail } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/KDasaradha",
    icon: SiGithub,
    label: "GitHub",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  {
    href: "https://www.linkedin.com/in/dasaradha-rami-reddy-kesari-b8471417b",
    icon: SiLinkedin,
    label: "LinkedIn",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
  },
  {
    href: "https://wa.me/919032414439",
    icon: SiWhatsapp,
    label: "WhatsApp",
    color: "hover:text-green-600",
    bgColor: "hover:bg-green-50 dark:hover:bg-green-900/20"
  },
  {
    href: "tel:+919032414439",
    icon: PhoneCall,
    label: "Phone",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
  },
  {
    href: "mailto:kdasaradha525@gmail.com",
    icon: SiGmail,
    label: "Email",
    color: "hover:text-red-600",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
  }
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold gradient-text">Kesari Dasaradh</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Backend Developer passionate about building scalable, secure, and high-performance 
              applications. Specialized in Python, FastAPI, and microservices architecture.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <Coffee className="w-4 h-4 text-amber-600" />
              <span>in India</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {["About", "Projects", "Experience", "Skills", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div>📍 Prakasam, Andhra Pradesh, India</div>
              <div>📧 kdasaradha525@gmail.com</div>
              <div>📱 +91 9032414439</div>
              <div className="flex items-center space-x-1">
                <Code className="w-4 h-4" />
                <span>Open for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center space-x-4 mb-8"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`p-3 rounded-full transition-all duration-300 ${social.color} ${social.bgColor}`}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-border text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kesari Dasaradh. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
