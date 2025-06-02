// Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    position: "Senior Developer",
    company: "ABC Tech",
    avatar: "JD",
    rating: 5,
    content:
      "Working with Kesari has been a game changer. His deep expertise in FastAPI and SQLAlchemy ORM ensures that our APIs are not only secure with JWT but also deliver outstanding performance. His relentless curiosity and hands-on experimentation with new technologies have truly elevated our technical standards.",
  },
  {
    name: "Alice Johnson",
    position: "CTO",
    company: "Innovative Solutions",
    avatar: "AJ",
    rating: 5,
    content:
      "Kesari’s innovative mindset and mastery of Python have revolutionized our backend systems. His ability to design robust, scalable APIs—fortified with JWT security—and his constant drive to learn and experiment with emerging technologies is nothing short of inspiring.",
  },
  {
    name: "Bob Martin",
    position: "Project Manager",
    company: "NextGen Software",
    avatar: "BM",
    rating: 5,
    content:
      "The energy and commitment Kesari brings to every project are infectious. His proficiency in building efficient and secure APIs using FastAPI and SQLAlchemy ORM has significantly boosted our system’s performance. His proactive approach to learning and testing new ideas continuously sets him apart.",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-cyan-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-cyan-950/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 dark:bg-purple-800/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="gradient-text">What People Say</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Don't just take my word for it. Here's what colleagues and clients have to say about working with me.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03,
                rotateY: 5,
                rotateX: 5,
              }}
              className="perspective-1000"
            >
              <Card className="h-full relative overflow-hidden group border-0 shadow-2xl dark:shadow-gray-900/50 hover:shadow-3xl transition-all duration-500 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-cyan-500/20 rounded-lg blur-sm group-hover:blur-none transition-all duration-300"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote size={48} className="text-blue-500" />
                </div>
                
                <div className="relative z-10 p-6">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.avatar}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-foreground mb-1">
                          {testimonial.name}
                        </CardTitle>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    {/* Star rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="relative">
                      {/* Opening quote */}
                      <Quote size={20} className="absolute -top-2 -left-1 text-blue-500/60 transform rotate-180" />
                      
                      <p className="text-sm leading-relaxed text-foreground/90 pl-6 pr-2 italic font-medium">
                        {testimonial.content}
                      </p>
                      
                      {/* Closing quote */}
                      <Quote size={20} className="absolute -bottom-2 -right-1 text-blue-500/60" />
                    </div>
                  </CardContent>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </Card>
            </motion.div>
          ))}
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
            Ready to work together and create something amazing?
          </p>
          <motion.button
            className="btn-primary-enhanced"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
