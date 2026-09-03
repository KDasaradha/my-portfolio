"use client";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Typed from "typed.js";
import Skills from "@/app/components/Skills";
import dynamic from "next/dynamic";
import type { Container, Engine } from "tsparticles-engine";
import ClientOnly from "./ClientOnly";

// Lazy load Particles component for better performance
const Particles = dynamic(() => import("react-tsparticles").catch(() => ({
  default: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
})), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
});

const Hero = memo(function Hero() {
  const el = useRef<HTMLSpanElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Memoized particles initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    const { loadSlim } = await import("tsparticles-slim");
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      setParticlesReady(true);
    }
  }, []);

  // Memoized particles options for performance
  const particlesOptions = useCallback(() => ({
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: shouldReduceMotion ? 30 : 60, // Reduce FPS for better performance and accessibility
    interactivity: {
      events: {
        onClick: { enable: !shouldReduceMotion, mode: "push" },
        onHover: { enable: !shouldReduceMotion, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 2 },
        repulse: { distance: 100, duration: 0.2 },
      },
    },
    particles: {
      color: { value: theme === "dark" ? "#ffffff" : "#5ba8eb" },
      links: {
        color: theme === "dark" ? "#ffffff" : "#5ba8eb",
        distance: 120,
        enable: !shouldReduceMotion,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: !shouldReduceMotion,
        outModes: { default: "bounce" as const },
        speed: shouldReduceMotion ? 0.5 : 1,
      },
      number: { 
        density: { enable: true, area: 1000 }, 
        value: shouldReduceMotion ? 30 : 60 // Reduce particles for better performance
      },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), [theme, shouldReduceMotion]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        "Building Scalable Microservices",
        "Optimizing API Performance", 
        "Implementing CI/CD Pipelines",
        "Securing Backend Systems",
        "Designing RESTful APIs",
        "Managing Cloud Infrastructure"
      ],
      typeSpeed: shouldReduceMotion ? 10 : 50,
      backSpeed: shouldReduceMotion ? 10 : 50,
      loop: true,
      backDelay: 2000,
      startDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, [mounted, shouldReduceMotion]);

  // Animation variants for better performance
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.3 : 0.6,
        ease: "easeOut"
      }
    }
  };

  if (!mounted) {
    return (
      <section id="home" className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">Kesari Dasaradh</h1>
              <div className="text-2xl md:text-3xl text-primary min-h-[3rem]">
                <span>Backend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="relative py-20 md:py-32 overflow-hidden bg-background"
      aria-label="Hero section with introduction"
    >
      {/* Particles Background */}
      {!shouldReduceMotion && (
        <div className="absolute top-0 left-0 w-full h-full -z-10" aria-hidden="true">
          <ClientOnly fallback={<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />}>
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={particlesOptions()}
            />
          </ClientOnly>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="md:w-1/2 space-y-6"
            variants={itemVariants}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              <span className="sr-only">Kesari Dasaradha Rami Reddy - </span>
              <span aria-hidden="true" className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                Kesari Dasaradha
              </span>
              <br />
              <span aria-hidden="true" className="text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rami Reddy
              </span>
            </motion.h1>
            
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide">
                Full-Stack Developer | Backend Specialist
              </span>
            </motion.div>
            
            <motion.div
              className="text-2xl md:text-3xl min-h-[3rem] font-bold"
              variants={itemVariants}
              role="status"
              aria-live="polite"
              aria-label="Current focus area"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent" ref={el} aria-hidden="true"></span>
            </motion.div>
            
            <motion.p 
              className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Backend-focused Python Engineer with nearly 3 years of experience designing scalable, high-performance API systems using <span className="font-semibold text-foreground/80">FastAPI</span>, <span className="font-semibold text-foreground/80">SQLAlchemy</span>, and <span className="font-semibold text-foreground/80">PostgreSQL</span>. I specialize in asynchronous REST API development, modular backend architecture, and secure authentication (OAuth2, JWT, RBAC).
            </motion.p>
            
            <motion.div 
              className="space-y-3"
              variants={itemVariants}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Microservices", icon: "🚀", gradient: "from-blue-500/10 to-cyan-500/10 border-blue-400/30 hover:border-blue-400/60" },
                  { label: "API Security", icon: "🔒", gradient: "from-purple-500/10 to-pink-500/10 border-purple-400/30 hover:border-purple-400/60" },
                  { label: "Performance", icon: "⚡", gradient: "from-yellow-500/10 to-orange-500/10 border-yellow-400/30 hover:border-yellow-400/60" },
                  { label: "CI/CD", icon: "🔄", gradient: "from-green-500/10 to-emerald-500/10 border-green-400/30 hover:border-green-400/60" },
                ].map((tag) => (
                  <motion.span
                    key={tag.label}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r ${tag.gradient} border rounded-full text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all duration-300 cursor-default`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span aria-hidden="true">{tag.icon}</span>
                    {tag.label}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span aria-hidden="true">📍</span>
                  <span>Prakasam, India</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span aria-hidden="true">📧</span>
                  <a href="mailto:kdasaradha525@gmail.com" className="hover:text-primary transition-colors duration-200 underline-offset-2 hover:underline">
                    kdasaradha525@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-primary-enhanced group relative overflow-hidden"
                aria-label="View my projects and work"
              >
                <a 
                  href="#projects" 
                  className="flex items-center space-x-2"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  <span>View My Work</span>
                  <motion.span
                    className="inline-block"
                    animate={shouldReduceMotion ? {} : { x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300"
                aria-label="Download my resume PDF"
              >
                <a 
                  href="/KESARI_DASARADHA_PYTHON_BACKEND_DEVELOPER_RESUME.pdf" 
                  download="Kesari_Dasaradh_Resume.pdf"
                  className="flex items-center space-x-2"
                >
                  <motion.span
                    animate={shouldReduceMotion ? {} : { y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    aria-hidden="true"
                  >
                    ⬇
                  </motion.span>
                  <span>Download Resume</span>
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-2 sm:gap-4 pt-8"
              variants={itemVariants}
              role="region"
              aria-label="Professional statistics"
            >
              {[
                { value: "~3", label: "Years Experience", gradient: "from-blue-500 to-cyan-500" },
                { value: "3+", label: "Projects Shipped", gradient: "from-purple-500 to-pink-500" },
                { value: "40%", label: "Perf Boost Delivered", gradient: "from-green-500 to-emerald-500" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 rounded-2xl glass-card group cursor-default"
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Animated gradient border ring */}
              {!shouldReduceMotion && (
                <div
                  className="absolute -inset-2 rounded-full animated-border opacity-60 blur-sm"
                  aria-hidden="true"
                />
              )}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-15 blur-xl"
                  animate={{ 
                    scale: [1, 1.08, 1],
                    opacity: [0.15, 0.25, 0.15]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                />
              )}
              <div className="relative rounded-full p-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Image
                  src="./images/captivating-cartoon.png"
                  alt="Professional portrait of Kesari Dasaradh, Backend Developer"
                  width={400}
                  height={400}
                  className={`relative rounded-full border-4 border-background shadow-2xl ${!shouldReduceMotion ? 'animate-float' : ''}`}
                  priority
                  onLoad={() => setImageLoaded(true)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
                />
              </div>
              
              {/* Floating Tech Icons */}
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-full p-3 border border-blue-400/30 shadow-lg"
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 8, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                >
                  <span className="text-2xl" role="img" aria-label="Python programming">🐍</span>
                </motion.div>
              )}
              
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-full p-3 border border-purple-400/30 shadow-lg"
                  animate={{ 
                    y: [0, 12, 0],
                    rotate: [0, -8, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  aria-hidden="true"
                >
                  <span className="text-2xl" role="img" aria-label="Fast performance">⚡</span>
                </motion.div>
              )}
              
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute top-1/2 -left-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-full p-3 border border-green-400/30 shadow-lg"
                  animate={{ 
                    x: [0, -6, 0],
                    rotate: [0, 12, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  aria-hidden="true"
                >
                  <span className="text-2xl" role="img" aria-label="Development tools">🔧</span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
        <Skills />
      </div>
    </section>
  );
});

export default Hero;
