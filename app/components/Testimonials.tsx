// Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const testimonials = [
  {
    name: "John Doe",
    position: "Senior Developer, ABC Tech",
    content:
      "Working with Kesari has been a game changer. His deep expertise in FastAPI and SQLAlchemy ORM ensures that our APIs are not only secure with JWT but also deliver outstanding performance. His relentless curiosity and hands-on experimentation with new technologies have truly elevated our technical standards.",
  },
  {
    name: "Alice Johnson",
    position: "CTO, Innovative Solutions",
    content:
      "Kesari’s innovative mindset and mastery of Python have revolutionized our backend systems. His ability to design robust, scalable APIs—fortified with JWT security—and his constant drive to learn and experiment with emerging technologies is nothing short of inspiring.",
  },
  {
    name: "Bob Martin",
    position: "Project Manager, NextGen Software",
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
    <section id="testimonials" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">What People Say</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="transition-transform duration-300"
            >
              <Card className="h-full shadow-lg dark:shadow-gray-800">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="italic text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
