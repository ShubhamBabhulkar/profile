import { useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Connect from "./Connect";
import Header from "./Header";
import Footer from "./Footer";
import InspiringQuotes from "./InspiringQuotes";

const Body = () => {
  const HEADER_HEIGHT = 80; // fixed header height
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const resumeRef = useRef<HTMLDivElement | null>(null);
  const connectRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (section: string) => {
    let element: HTMLDivElement | null = null;

    if (section === "About") element = aboutRef.current;
    if (section === "Skills") element = skillsRef.current;
    if (section === "Resume") element = resumeRef.current;
    if (section === "Connect") element = connectRef.current;

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <div ref={aboutRef}><About /></div>
      <div ref={skillsRef}><Skills /></div>
      <div ref={resumeRef}><Resume /></div>
      <InspiringQuotes />
      <div ref={connectRef}><Connect /></div>
      <Footer />
    </div>
  );
};

export default Body;
