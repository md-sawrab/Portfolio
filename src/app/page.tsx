import Contact from "./components/home/Contact";
import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Certificate from "./components/home/Certificate";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
    </>
  );
}
