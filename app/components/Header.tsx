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
  ExternalLink
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Optimized scroll handler with throttling
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle active section detection with improved logic
    const handleActiveSection = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = ["home", "about", "education", "projects", "experience", "skills", "certificates", "contact"];
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
          ticking = false;
        });
        ticking = true;
      }
    };

    // Handle keyboard navigation for mobile menu
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    // Combined scroll handler for better performance
    const combinedScrollHandler = () => {
      handleScroll();
      handleActiveSection();
    };

    window.addEventListener("scroll", combinedScrollHandler, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    
    // Initial call to set active section
    handleActiveSection();
    
    return () => {
      window.removeEventListener("scroll", combinedScrollHandler);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll while the mobile menu is open so the page cannot
  // scroll behind the overlay.
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isMenuOpen]);

  // Primary navigation shown in the desktop header — intentionally short so the
  // bar never feels crowded. Home is reachable via the logo; Education and
  // Certificates remain available in the mobile menu and by scrolling.
  const primaryNavItems = useMemo(
    () => [
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#experience" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
    []
  );

  // Full navigation used by the mobile menu, where vertical space is not an issue.
  const navItems = useMemo(
    () => [
      { name: "Home", href: "#home", icon: "🏠" },
      { name: "About", href: "#about", icon: "👨‍💻" },
      { name: "Education", href: "#education", icon: "🎓" },
      { name: "Projects", href: "#projects", icon: "🚀" },
      { name: "Experience", href: "#experience", icon: "💼" },
      { name: "Skills", href: "#skills", icon: "⚡" },
      { name: "Certificates", href: "#certificates", icon: "🏆" },
      { name: "Contact", href: "#contact", icon: "📧" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      {
        name: "GitHub",
        href: "https://github.com/kdasaradha",
        icon: Github,
        color: "hover:text-gray-900 dark:hover:text-white",
        bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kdasaradha525",
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
    try {
      const target = document.querySelector(href);
      if (target) {
        // Update active section immediately for better UX
        const sectionId = href.slice(1);
        setActiveSection(sectionId);
        
        target.scrollIntoView({ 
          behavior: "smooth", 
          block: "start",
          inline: "nearest"
        });
      }
    } catch (error) {
      console.warn(`Failed to navigate to ${href}:`, error);
    }
  };

  const handleMobileNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Use a shorter timeout for better UX
    setTimeout(() => {
      try {
        const target = document.querySelector(href);
        if (target) {
          // Update active section immediately for better UX
          const sectionId = href.slice(1);
          setActiveSection(sectionId);
          
          target.scrollIntoView({ 
            behavior: "smooth", 
            block: "start",
            inline: "nearest"
          });
        }
      } catch (error) {
        console.warn(`Failed to navigate to ${href}:`, error);
      }
    }, 200);
  };

  const headerVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number]
      }
    }
  };

  const logoVariants: Variants = {
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

  const navItemVariants: Variants = {
    hover: { 
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants: Variants = {
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
        ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number]
      }
    }
  };

  const mobileItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.04, 0.62, 0.23, 0.98] as [number, number, number, number]
      }
    })
  };

  // Show loading state on server-side rendering to prevent hydration issues
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Kesari Dasaradha</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Backend Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary/10 animate-pulse"></div>
            <div className="w-10 h-10 rounded-full bg-primary/10 lg:hidden animate-pulse"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
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
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Kesari Dasaradha
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Backend Developer
              </p>
            </div>
          </motion.div>
          
          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center space-x-1">
              {primaryNavItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                >
                  <Link
                    href={item.href}
                    aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
                    className={`group relative px-4 py-2 rounded-xl transition-all duration-300 ${
                      activeSection === item.href.slice(1)
                        ? 'text-primary bg-primary/10 shadow-md'
                        : 'hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={handleNavClick(item.href)}
                  >
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
                <a href="/KESARI_DASARADHA_PYTHON_BACKEND_DEVELOPER_RESUME.pdf" download>
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
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
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
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
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
              id="mobile-menu"
              className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border/50"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              role="navigation"
              aria-label="Mobile navigation menu"
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
                        aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
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
                    <a href="/KESARI_DASARADHA_PYTHON_BACKEND_DEVELOPER_RESUME.pdf" download>
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
