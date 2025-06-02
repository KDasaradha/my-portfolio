"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Typed from "typed.js";
import Skills from "@/app/components/Skills";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

export default function Hero() {
  const el = useRef(null);
  const { theme } = useTheme();

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  const particlesLoaded = async (container: Container | undefined) => {
    console.log(container);
  };

  const particlesOptions = {
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: theme === "dark" ? "#ffffff" : "#5ba8eb" },
      links: {
        color: theme === "dark" ? "#ffffff" : "#5ba8eb",
        distance: 150,
        enable: true,
        opacity: 0.3, // Lower opacity to avoid distraction
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: { default: "bounce" as const },
        speed: 1,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 }, // Reduce opacity for better readability
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Building Scalable Microservices",
        "Optimizing API Performance",
        "Implementing CI/CD Pipelines",
        "Securing Backend Systems",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesOptions}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Kesari Dasaradh
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-primary min-h-[3rem]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span ref={el}></span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Results-driven Backend Developer with 2 years of hands-on experience 
              designing and deploying scalable RESTful APIs using Python and FastAPI. 
              Proficient in asynchronous programming, SQLAlchemy ORM, and microservices 
              architecture. Expert in implementing API security standards (JWT, OAuth 2.0), 
              containerizing services with Docker, and automating CI/CD pipelines.
            </motion.p>
            
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">🚀 Microservices</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">🔒 API Security</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">⚡ Performance Optimization</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">🔄 CI/CD</span>
              </div>
              <p className="text-sm text-muted-foreground">
                📍 Prakasam, Andhra Pradesh, India | 📧 kdasaradha525@gmail.com | 📱 +91 9032414439
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-primary-enhanced group"
              >
                <a href="#projects" className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="/Dasaradha_Kesari_Developer_Resume.pdf" download className="flex items-center space-x-2">
                  <span>Download Resume</span>
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ⬇
                  </motion.span>
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <Image
                src="./images/captivating-cartoon.png"
                alt="Kesari Dasaradh"
                width={400}
                height={400}
                className="relative rounded-full border-4 border-primary shadow-2xl animate-float"
                priority
              />
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">🐍</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 bg-primary/10 backdrop-blur-sm rounded-full p-3 border border-primary/20"
                animate={{ 
                  x: [0, -5, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <span className="text-2xl">🔧</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
