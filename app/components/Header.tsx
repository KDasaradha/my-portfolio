"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { 
  Moon, 
  Sun, 
  Menu, 
  X, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  ChevronDown,
  ExternalLink
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Handle scroll effect and progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setIsScrolled(scrollTop > 50);
      setScrollProgress(progress);
    };

    // Handle active section detection with improved logic
    const handleActiveSection = () => {
      const sections = ["home", "about", "education", "projects", "experience", "skills", "certificates", "blog", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home", icon: "🏠" },
      { name: "About", href: "#about", icon: "👨‍💻" },
      { name: "Education", href: "#education", icon: "🎓" },
      { name: "Projects", href: "#projects", icon: "🚀" },
      { name: "Experience", href: "#experience", icon: "💼" },
      { name: "Skills", href: "#skills", icon: "⚡" },
      { name: "Contact", href: "#contact", icon: "📧" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        href: "https://github.com/kdasaradh",
        icon: Github,
        color: "hover:text-gray-900 dark:hover:text-white",
        bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/dasaradharami-reddy-kesari-b8471417b",
        icon: Linkedin,
        color: "hover:text-blue-600",
        bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
      },
      {
        name: "Email",
        href: "mailto:kdasaradha525@gmail.com",
        icon: Mail,
        color: "hover:text-red-600",
        bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
      }
    ],
    []
  );

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMobileNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const logoVariants = {
    hover: { 
      scale: 1.05,
      rotate: [0, -1, 1, 0],
      transition: { 
        duration: 0.3,
        rotate: {
          duration: 0.5,
          ease: "easeInOut"
        }
      }
    },
    tap: { scale: 0.95 }
  };

  const navItemVariants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    })
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[60] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      <motion.header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5' 
            : 'bg-background/80 backdrop-blur-md border-b border-border/30'
        }`}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Enhanced Logo */}
          <motion.div
            className="flex items-center space-x-2"
            variants={logoVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={handleNavClick("#home")}
          >
            <div className="relative">
              <motion.div
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg"
                whileHover={{ 
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
                  scale: 1.05
                }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-background"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="cursor-pointer">
              <h1 className="text-xl font-bold gradient-text">
                Kesari Dasaradh
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Full Stack Developer
              </p>
            </div>
          </motion.div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className={`group relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10 shadow-md'
                        : 'hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={handleNavClick(item.href)}
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{ x: "-50%" }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          
          {/* Enhanced Action Buttons */}
          <div className="flex items-center space-x-2">
            {/* Social Links - Desktop */}
            <div className="hidden xl:flex items-center space-x-1">
              {socialLinks.map((social) => (
                <motion.div key={social.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`rounded-full transition-all duration-300 ${social.color} ${social.bgColor}`}
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"} 
                      aria-label={social.name}
                    >
                      <social.icon size={18} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Resume Download */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 shadow-sm hover:shadow-md"
                asChild
              >
                <a href="/Dasaradha_Kesari_Developer_Resume.pdf" download>
                  <Download size={16} />
                  <span>Resume</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
              </Button>
            </motion.div>

            {/* Enhanced Theme Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full hover:bg-primary/10 transition-all duration-300"
                aria-label="Toggle theme"
              >
                <motion.div
                  initial={false}
                  animate={{ 
                    rotate: theme === "dark" ? 180 : 0,
                    scale: theme === "dark" ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                >
                  {theme === "dark" ? (
                    <Sun size={20} className="text-yellow-500" />
                  ) : (
                    <Moon size={20} className="text-blue-600" />
                  )}
                </motion.div>
              </Button>
            </motion.div>

            {/* Enhanced Mobile Menu Toggle */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full hover:bg-primary/10 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav 
              className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border/50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="navigation"
            >
              <div className="p-6 space-y-4">
                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      variants={mobileItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                          activeSection === item.href.slice(1)
                            ? 'text-primary bg-primary/10 shadow-md'
                            : 'hover:text-primary hover:bg-primary/5'
                        }`}
                        onClick={handleMobileNavClick(item.href)}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="font-medium">{item.name}</span>
                        {activeSection === item.href.slice(1) && (
                          <motion.div
                            className="ml-auto w-2 h-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Mobile Actions */}
                <motion.div 
                  className="pt-4 border-t border-border/50 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* Mobile Resume Download */}
                  <Button
                    variant="outline"
                    className="w-full justify-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800"
                    asChild
                  >
                    <a href="/Dasaradha_Kesari_Developer_Resume.pdf" download>
                      <Download size={18} />
                      <span>Download Resume</span>
                      <ExternalLink size={14} className="opacity-60" />
                    </a>
                  </Button>

                  {/* Mobile Social Links */}
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className={`rounded-full transition-all duration-300 ${social.color} ${social.bgColor}`}
                          asChild
                        >
                          <a 
                            href={social.href} 
                            target={social.href.startsWith('mailto:') ? undefined : "_blank"} 
                            rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                            aria-label={social.name}
                          >
                            <social.icon size={20} />
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
