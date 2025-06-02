import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Experience from "@/app/components/Experience";
import Blog from "@/app/components/Blog";
import Contact from "@/app/components/Contact";
import GitHubStats from "@/app/components/GitHubStats";
import Education from "@/app/components/Education";
import Certificates from "@/app/components/Certificates";
import Testimonials from "@/app/components/Testimonials";
import TechStack from "@/app/components/TechStack";
import MkDocsLink from "@/app/components/MkDocsLink";
import PerformanceMetrics from "@/app/components/PerformanceMetrics";
import ScrollProgress from "@/app/components/ScrollProgress";
import BackToTop from "@/app/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <About />
      <PerformanceMetrics />
      <Education />
      <Projects />
      <Experience />
      <TechStack />
      <Testimonials />
      <Certificates />
      <Blog />
      <GitHubStats />
      <MkDocsLink />
      <Contact />
      <BackToTop />
    </>
  );
}
