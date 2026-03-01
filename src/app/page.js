import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      
      {/* Hero Section */}
      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <EducationSection />

      <ContactSection />

    </div>
  );
}