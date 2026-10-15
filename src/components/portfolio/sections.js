"use client";

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CodeXml,
  Database,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Trophy,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import DataFlow from "./data-flow";
import { contact, skills } from "./data";
import ProjectGallery from "./project-gallery";
import ProfileCard from "./profile-card";
import Reveal from "./reveal";
import { TechBadge } from "./tech-badge";

const serviceIcons = {
  "01": BarChart3,
  "02": Database,
  "03": BrainCircuit,
  "04": Workflow,
};

function SectionIntro({ index, eyebrow, title, accent, description, light = false }) {
  return (
    <Reveal className={`section-intro-block${light ? " section-intro-block--light" : ""}`} y={30}>
      <div className="section-intro-index">{index} <span /> BR / PORTFOLIO DATA</div>
      <div className="section-intro-main">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}<br /><em>{accent}</em></h2>
        <p className="section-deck">{description}</p>
      </div>
    </Reveal>
  );
}

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-hero" id="accueil">
      <div className="folio-container folio-hero-grid">
        <div className="folio-hero-copy">
          <Reveal delay={0.05} y={20}>
            <p className="eyebrow hero-eyebrow">
              <span className="status-live" /> {t.hero.eyebrow}
            </p>
          </Reveal>

          {/* Interactive Tech Headline with authentic Safira March typography */}
          <Reveal delay={0.12} y={25}>
            <h1>
              {t.hero.title1} <em>{t.hero.title2}</em>
            </h1>
          </Reveal>

          <Reveal delay={0.18} y={25}>
            <p className="hero-summary">{t.hero.summary}</p>
          </Reveal>

          <Reveal delay={0.24} y={25}>
            <div className="hero-cta-row">
              <a className="folio-button folio-button--dark" href="#projets">
                {t.hero.ctaPrimary} <ArrowRight aria-hidden="true" size={16} />
              </a>
              <a className="text-link" href={`mailto:${contact.email}`}>
                {t.hero.ctaSecondary} <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={35}>
          <DataFlow />
        </Reveal>
      </div>

      <Reveal delay={0.25} y={15}>
        <div className="folio-container hero-foot">
          <span>{t.hero.footLocation}</span>
          <span>{t.hero.footPipeline}</span>
          <a href="#parcours" aria-label={t.hero.footScroll}>
            {t.hero.footScroll} <ArrowDownRight aria-hidden="true" size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-section services-section" id="services">
      <div className="folio-container">
        <SectionIntro
          index={t.services.intro.index}
          eyebrow={t.services.intro.eyebrow}
          title={t.services.intro.title}
          accent={t.services.intro.accent}
          description={t.services.intro.description}
        />
        <div className="service-ledger">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[service.number] || BarChart3;
            const toolsList = service.tools ? service.tools.split("·").map((s) => s.trim()) : [];
            return (
              <Reveal className="service-row" key={service.number} delay={index * 0.08} y={30}>
                <span className="service-number">{service.number}</span>
                <Icon className="service-icon" aria-hidden="true" size={22} strokeWidth={1.5} />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-tools-tags">
                    {toolsList.map((tool) => (
                      <span className="service-tool-pill" key={tool}>
                        <TechBadge name={tool} />
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="service-arrow" aria-hidden="true" size={20} strokeWidth={1.4} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-section case-section" id="projets">
      <div className="folio-container">
        <SectionIntro
          index={t.projects.intro.index}
          eyebrow={t.projects.intro.eyebrow}
          title={t.projects.intro.title}
          accent={t.projects.intro.accent}
          description={t.projects.intro.description}
          light
        />
        <Reveal delay={0.1} y={35}>
          <ProjectGallery />
        </Reveal>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const { t, lang } = useLanguage();

  // Translated level titles
  const levelTitles = {
    en: [
      "Practiced in production & enterprise missions",
      "Currently exploring & mastering",
      "Documented in academic & full-stack projects",
    ],
    mg: [
      "Fampiasa matetika amin'ny asa sy orinasa",
      "Eo am-pandalinana sy fianarana lalina",
      "Voarakitra an-tsoratra tamin'ny tetikasa",
    ],
    fr: [
      "Pratiqué en mission & projet d’entreprise",
      "En cours d’apprentissage & veille active",
      "Selon les projets documentés",
    ],
  };

  const activeLevelTitles = levelTitles[lang] || levelTitles.en;

  return (
    <section className="folio-section skill-section" id="competences">
      <div className="folio-container">
        <SectionIntro
          index={t.skills.intro.index}
          eyebrow={t.skills.intro.eyebrow}
          title={t.skills.intro.title}
          accent={t.skills.intro.accent}
          description={t.skills.intro.description}
        />
        <div className="skill-ledger">
          {skills.map((group, index) => (
            <Reveal className="skill-line" key={index} delay={index * 0.08} y={30}>
              <span className={`skill-marker skill-marker--${group.tone}`} />
              <h3>{activeLevelTitles[index] || group.level}</h3>
              <div className="skill-tags">
                {group.tools.map((tool) => (
                  <span key={tool}>
                    <TechBadge name={tool} />
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2} y={15}>
          <p className="skill-note">{t.skills.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-section experience-section" id="parcours">
      <div className="folio-container experience-grid">
        <div className="experience-heading">
          <SectionIntro
            index={t.experience.intro.index}
            eyebrow={t.experience.intro.eyebrow}
            title={t.experience.intro.title}
            accent={t.experience.intro.accent}
            description={t.experience.intro.description}
          />
          <Reveal className="award-note" delay={0.15} y={30}>
            <span><Trophy aria-hidden="true" size={22} /></span>
            <div>
              {t.experience.hackathons.map((hackathon) => (
                <p key={hackathon.title}>
                  <strong>{hackathon.title}</strong><br />
                  {hackathon.detail}<br />
                  <small>{hackathon.date}</small>
                </p>
              ))}
              <img
                src="/coding.gif"
                alt="Illustration coding / hackathon"
                className="award-gif"
                loading="lazy"
                decoding="async"
              />
            </div>
          </Reveal>
        </div>
        <div className="experience-list">
          {t.experience.items.map((experience, index) => (
            <Reveal className="experience-row" key={experience.organization} delay={index * 0.06} y={30}>
              <span className="experience-date">{experience.date}</span>
              <div>
                <h3>{experience.role}</h3>
                <p className="experience-org">{experience.organization}</p>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-tools-pills">
                  {experience.tools
                    ? experience.tools.split("·").map((tool) => (
                        <span className="exp-tool-pill" key={tool}>
                          <TechBadge name={tool.trim()} />
                        </span>
                      ))
                    : null}
                </div>
                {experience.brandLogos && (
                  <div className="experience-brand-logos" aria-label="Logos of tools used">
                    {experience.brandLogos.map((name) => (
                      <TechBadge key={name} name={name} className="experience-brand" />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-section about-section" id="a-propos">
      <div className="folio-container about-grid">
        <Reveal delay={0.08} y={35}>
          <ProfileCard email={contact.email} />
        </Reveal>
        <div className="about-content">
          <SectionIntro
            index={t.about.intro.index}
            eyebrow={t.about.intro.eyebrow}
            title={t.about.intro.title}
            accent={t.about.intro.accent}
            description={t.about.intro.description}
          />
          <Reveal className="about-lower" delay={0.15} y={30}>
            <div className="education-list">
              <h3><GraduationCap aria-hidden="true" size={17} /> {t.about.educationTitle}</h3>
              {t.about.education.map((item) => (
                <div className="education-row" key={item.date}>
                  <span>{item.date}</span><p><strong>{item.title}</strong><small>{item.place}</small></p>
                </div>
              ))}
            </div>
            <div className="language-note">
              <h3>{t.about.languagesTitle}</h3>
              {t.about.languages.map((l) => (
                <p key={l.name}>
                  {l.name} <span>{l.level}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="folio-contact" id="contact">
      <div className="folio-container contact-grid">
        <Reveal className="contact-heading" delay={0.08} y={30}>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title1}<br /><em>{t.contact.title2}</em></h2>
          <p>{t.contact.subtitle}</p>
        </Reveal>
        <Reveal className="contact-links" delay={0.16} y={35}>
          <a href={`mailto:${contact.email}`}>
            <Mail aria-hidden="true" size={18} />
            <span><small>{t.contact.actions.write}</small>{contact.email}</span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a href={`tel:${contact.phone}`}>
            <Phone aria-hidden="true" size={18} />
            <span><small>{t.contact.actions.call}</small>{contact.phoneLabel}</span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer">
            <CodeXml aria-hidden="true" size={18} />
            <span><small>{t.contact.actions.code}</small>github.com/IsmaelBruno</span>
            <ArrowUpRight aria-hidden="true" size={17} />
          </a>
          <div className="contact-location">
            <MapPin aria-hidden="true" size={17} />
            <span>{contact.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="folio-footer">
      <Reveal delay={0.1} y={20}>
        <div className="folio-container footer-inner">
          <a className="footer-mark" href="#accueil">BR<span> / {t.footer.markSub}</span></a>
          <p>{t.footer.copy}<br /><span>{t.footer.location}</span></p>
          <a className="footer-top" href="#accueil">{t.footer.backToTop} <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
      </Reveal>
    </footer>
  );
}