import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectsSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100">
      <NavBar />
      {/* <div className="flex flex-wrap gap-2">
        <Badge variant="default">React</Badge>
        <Badge variant="secondary">Next.js</Badge>
        <Badge variant="outline">Tailwind CSS</Badge>
        <Badge variant="default">Firebase</Badge>
      </div> */}
      <HeroSection />
      <AboutMe />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
}
