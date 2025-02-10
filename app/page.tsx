import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import Projects from "@/app/components/Projects"
import Skills from "@/app/components/Skills"
import Experience from "@/app/components/Experience"
import Blog from "@/app/components/Blog"
import Contact from "@/app/components/Contact"
import GitHubStats from "@/app/components/GitHubStats"
import Education from "@/app/components/Education"
import Certificates from "@/app/components/Certificates"
import Testimonials from "@/app/components/Testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Certificates />
      <Blog />
      <GitHubStats />
      <Contact />
    </>
  )
}

