"use client";

import { LanguageProvider } from "@/lib/i18n";
import Navigation from "@/components/navigation";
import PageLoader from "@/components/portfolio/page-loader";
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  SiteFooter,
  SkillsSection,
} from "@/components/portfolio/sections";

export default function Home() {
  return (
    <LanguageProvider>
      {/* Loader d'ouverture & de latence avec WanderingEyes en vert */}
      <PageLoader />

      {/* Barre de navigation multilingue */}
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
    </LanguageProvider>
  );
}