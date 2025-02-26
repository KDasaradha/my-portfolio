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
        "Building Scalable APIs",
        "Optimizing Backend Systems",
        "Learning Cloud & DevOps",
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
            <h1 className="text-4xl md:text-6xl font-bold">Kesari Dasaradh</h1>
            <p className="text-2xl md:text-3xl text-primary">
              <span ref={el}></span>
            </p>
            <p className="text-lg text-muted-foreground">
              Junior Backend Developer with 1.7+ years of experience in
              designing and deploying high-performance RESTful APIs using
              Python, FastAPI, and PostgreSQL. Passionate about microservices
              architecture, API security, and optimizing database performance. I
              thrive on solving complex problems and delivering robust, scalable
              solutions.
            </p>
            <p className="text-sm text-primary">
              🌟 Currently Learning: AWS Cloud, React, Next.js
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Kesari Dasaradha Rami Reddy Resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center mt-12 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="./images/captivating-cartoon.png"
              alt="Kesari Dasaradh"
              width={400}
              height={400}
              className="rounded-full border-4 border-primary shadow-lg"
            />
          </motion.div>
        </div>
        <Skills />
      </div>
    </section>
  );
}
