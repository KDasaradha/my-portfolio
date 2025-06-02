"use client";
import { useEffect, useRef, useState, useCallback, memo } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/app/components/ui/button";
import Typed from "typed.js";
import Skills from "@/app/components/Skills";
import dynamic from "next/dynamic";
import type { Container, Engine } from "tsparticles-engine";

// Lazy load Particles component for better performance
const Particles = dynamic(() => import("react-tsparticles"), {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
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
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions()}
          />
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
              className="text-4xl md:text-6xl font-bold"
              variants={itemVariants}
            >
              <span className="sr-only">Kesari Dasaradh - </span>
              <span aria-hidden="true">Kesari Dasaradh</span>
            </motion.h1>
            
            <motion.div
              className="text-2xl md:text-3xl text-primary min-h-[3rem]"
              variants={itemVariants}
              role="status"
              aria-live="polite"
              aria-label="Current focus area"
            >
              <span ref={el} aria-hidden="true"></span>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              variants={itemVariants}
            >
              Results-driven Backend Developer with 2 years of hands-on experience 
              designing and deploying scalable RESTful APIs using Python and FastAPI. 
              Proficient in asynchronous programming, SQLAlchemy ORM, and microservices 
              architecture. Expert in implementing API security standards (JWT, OAuth 2.0), 
              containerizing services with Docker, and automating CI/CD pipelines.
            </motion.p>
            
            <motion.div 
              className="space-y-2"
              variants={itemVariants}
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
              variants={itemVariants}
            >
              <Button 
                asChild 
                size="lg" 
                className="btn-primary-enhanced group"
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
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Download my resume PDF"
              >
                <a 
                  href="/Dasaradha_Kesari_Developer_Resume.pdf" 
                  download="Kesari_Dasaradh_Resume.pdf"
                  className="flex items-center space-x-2"
                >
                  <span>Download Resume</span>
                  <motion.span
                    animate={shouldReduceMotion ? {} : { y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    aria-hidden="true"
                  >
                    ⬇
                  </motion.span>
                </a>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50"
              variants={itemVariants}
              role="region"
              aria-label="Professional statistics"
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
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {!shouldReduceMotion && (
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
                  aria-hidden="true"
                />
              )}
              <Image
                src="./images/captivating-cartoon.png"
                alt="Professional portrait of Kesari Dasaradh, Backend Developer"
                width={400}
                height={400}
                className={`relative rounded-full border-4 border-primary shadow-2xl ${!shouldReduceMotion ? 'animate-float' : ''}`}
                priority
                onLoad={() => setImageLoaded(true)}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rw="
              />
              
              {/* Floating Tech Icons */}
              {!shouldReduceMotion && (
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
                  aria-hidden="true"
                >
                  <span className="text-2xl" role="img" aria-label="Python programming">🐍</span>
                </motion.div>
              )}
              
              {!shouldReduceMotion && (
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
                  aria-hidden="true"
                >
                  <span className="text-2xl" role="img" aria-label="Fast performance">⚡</span>
                </motion.div>
              )}
              
              {!shouldReduceMotion && (
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
