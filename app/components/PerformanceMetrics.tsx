"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { TrendingUp, Clock, Shield, Zap, Users, Code } from "lucide-react";

interface Metric {
  id: string;
  title: string;
  value: number;
  suffix: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
}

const metrics: Metric[] = [
  {
    id: "performance",
    title: "API Performance Boost",
    value: 40,
    suffix: "%",
    description: "Reduced response times through async programming and optimization",
    icon: TrendingUp,
    color: "text-green-600",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: "deployment",
    title: "Faster Deployments",
    value: 25,
    suffix: "%",
    description: "Shortened release cycles with automated CI/CD pipelines",
    icon: Clock,
    color: "text-blue-600",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "security",
    title: "Security Improvements",
    value: 30,
    suffix: "%",
    description: "Reduced vulnerabilities with SonarQube and Snyk integration",
    icon: Shield,
    color: "text-purple-600",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "onboarding",
    title: "Faster Onboarding",
    value: 35,
    suffix: "%",
    description: "Reduced developer onboarding time with better documentation",
    icon: Users,
    color: "text-orange-600",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "experience",
    title: "Years Experience",
    value: 2,
    suffix: "+",
    description: "Professional backend development experience",
    icon: Code,
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: "projects",
    title: "Projects Delivered",
    value: 3,
    suffix: "+",
    description: "Successfully completed enterprise-grade projects",
    icon: Zap,
    color: "text-yellow-600",
    gradient: "from-yellow-500 to-orange-500"
  }
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setInterval(() => {
        setCount((prev) => {
          if (prev < value) {
            return Math.min(prev + Math.ceil(value / 50), value);
          }
          clearInterval(timer);
          return value;
        });
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold">
      {count}{suffix}
    </span>
  );
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const Icon = metric.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-primary">
        {/* Animated Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />
        
        {/* Floating Icon Background */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${metric.gradient} opacity-10 rounded-full -mr-10 -mt-10`}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <CardHeader className="relative z-10">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
              {metric.title}
            </CardTitle>
            <motion.div
              className={`p-2 rounded-lg bg-gradient-to-br ${metric.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`w-5 h-5 ${metric.color} group-hover:scale-110 transition-transform duration-300`} />
            </motion.div>
          </div>
        </CardHeader>

        <CardContent className="relative z-10">
          <div className="space-y-2">
            <div className={metric.color}>
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              {metric.description}
            </p>
          </div>
        </CardContent>

        {/* Hover Effect Border */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      </Card>
    </motion.div>
  );
}

export default function PerformanceMetrics() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Performance & Impact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Measurable results and achievements that demonstrate my commitment to excellence and continuous improvement in backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.id} metric={metric} index={index} />
          ))}
        </div>

        {/* Additional Achievement Highlights */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Microservices</div>
              <div className="text-sm text-muted-foreground">Successfully migrated monolithic to microservices architecture</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Enterprise-Grade</div>
              <div className="text-sm text-muted-foreground">Built production-ready systems with comprehensive security</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">Mentorship</div>
              <div className="text-sm text-muted-foreground">Actively mentoring junior developers and interns</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}