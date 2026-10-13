
import Navigation from "../components/navigation";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  SkillsSection,
} from "../components/portfolio/sections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navigation />
      <main className="data-folio" id="contenu">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
