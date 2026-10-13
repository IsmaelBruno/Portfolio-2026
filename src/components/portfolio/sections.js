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
  Workflow,
  Trophy
} from "lucide-react";
import {
  siApachenifi,
  siDocker,
  siPostgresql,
  siPython,
  siMongodb,
  siMysql,
  siNodedotjs,
  siNestjs,
  siGraphql,
  siReact,
  siJavascript,
  siPhp,
  siHtml5,
  siJquery,
  siTalend,
  siApacheairflow,
  siN8n,
  siGithub,
  siGit,
} from "simple-icons";
import DataFlow from "./data-flow";
import { contact, education, experiences, projects, services, skills } from "./data";
import ProjectGallery from "./project-gallery";
import ProfileCard from "./profile-card";
import Reveal from "./reveal";

const serviceIcons = {
  chart: BarChart3,
  database: Database,
  brain: BrainCircuit,
  workflow: Workflow,
};

const technologyLogos = {
  Python: siPython,
  "Apache NiFi": siApachenifi,
  PostgreSQL: siPostgresql,
  Docker: siDocker,
  MySQL: siMysql,
  MongoDB: siMongodb,
  NodeJS: siNodedotjs,
  NestJS: siNestjs,
  GraphQL: siGraphql,
  ReactJS: siReact,
  JavaScript: siJavascript,
  PHP: siPhp,
  HTML: siHtml5,
  JQuery: siJquery,
  Talend: siTalend,
  Airflow: siApacheairflow,
  n8n: siN8n,
  Git: siGit,
  GitHub: siGithub,
};;

function TechnologyLogos({ names }) {
  return (
    <div className="experience-brand-logos" aria-label="Logos de technologies utilisées">
      {names.map((name) => {
        const icon = technologyLogos[name];

        return (
          <span className="experience-brand" key={name}>
            {icon && icon.hex && icon.path ? (
              <svg aria-hidden="true" viewBox="0 0 24 24" style={{ color: `#${icon.hex}` }}>
                <path d={icon.path} />
              </svg>
            ) : null}
            {name}
          </span>
        );
      })}
    </div>
  );
}

function SectionIntro({ index, eyebrow, title, accent, description, light = false }) {
  return (
    <Reveal className={`section-intro-block${light ? " section-intro-block--light" : ""}`}>
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
  return (
    <section className="folio-hero" id="accueil">
      <div className="folio-container folio-hero-grid">
        <div className="folio-hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="status-live" /> DATA ANALYST · DATA ENGINEER · DATA SCIENCE</p>
          <h1>Je rends la donnée <em>utile.</em></h1>
          <p className="hero-summary">
            Des flux bruts aux décisions éclairées : j’intègre, fiabilise et analyse les données pour construire des outils compréhensibles et utiles au métier.
          </p>
          <div className="hero-cta-row">
            <a className="folio-button folio-button--dark" href="#projets">Explorer les études de cas <ArrowRight aria-hidden="true" size={16} /></a>
            <a className="text-link" href={`mailto:${contact.email}`}>Me contacter <ArrowUpRight aria-hidden="true" size={15} /></a>
          </div>
        </div>
        <DataFlow />
      </div>
      <div className="folio-container hero-foot">
        <span>ANTANANARIVO, MADAGASCAR</span>
        <span>COLLECTER <i>→</i> TRANSFORMER <i>→</i> COMPRENDRE <i>→</i> DÉCIDER</span>
        <a href="#parcours" aria-label="Défiler vers le parcours">DÉFILER <ArrowDownRight aria-hidden="true" size={15} /></a>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="folio-section services-section" id="services">
      <div className="folio-container">
        <SectionIntro
          index="01"
          eyebrow="DOMAINES D’INTERVENTION"
          title="Du premier import"
          accent="au bon indicateur."
          description="Une approche orientée usage, au croisement de l’analyse, de l’intégration et de la compréhension métier."
        />
        <div className="service-ledger">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <Icon className="service-icon" aria-hidden="true" size={22} strokeWidth={1.5} />
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span>{service.tools}</span>
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
  return (
    <section className="folio-section case-section" id="projets">
      <div className="folio-container">
        <SectionIntro
          index="02"
          eyebrow="SÉLECTION DE PROJETS"
          title="Le contexte d’abord."
          accent="La méthode ensuite."
          description="Des réalisations issues de missions et de projets documentés. Les livrables sont décrits sans ajouter de résultats qui n’ont pas été mesurés."
          light
        />
        <ProjectGallery projects={projects} />
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="folio-section skill-section" id="competences">
      <div className="folio-container">
        <SectionIntro
          index="03"
          eyebrow="OUTILS & PRATIQUES"
          title="La stack suit"
          accent="le besoin."
          description="Niveaux présentés selon les missions, les projets et les formations mentionnées dans mon parcours."
        />
        <div className="skill-ledger">
          {skills.map((group, index) => (
            <Reveal className="skill-line" key={group.level} delay={index * 0.06}>
              <span className={`skill-marker skill-marker--${group.tone}`} />
              <h3>{group.level}</h3>
              <div className="skill-tags">
                {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <p className="skill-note">JavaScript, React, Node.js, NestJS et GraphQL pratiqués dans des projets de développement applicatif.</p>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="folio-section experience-section" id="parcours">
      <div className="folio-container experience-grid">
        <div className="experience-heading">
          <SectionIntro
            index="04"
            eyebrow="EXPÉRIENCE PROFESSIONNELLE"
            title="Apprendre en"
            accent="produisant."
            description="Missions et stages, de la donnée d’entreprise à l’intelligence artificielle appliquée."
          />
          <Reveal className="award-note">
            <span><Trophy aria-hidden="true" size={22} />3<sup>e</sup></span>
              <div>
                <p><strong>3ᵉ place — Hackathon DevHub</strong><br />
                  Accès Banque · Team Zenith<br />
                  <small>Juin 2025</small>
                </p>
                <p><strong>Participant — Hackathon DevFest 2025</strong><br />
                  Team API Leka<br />
                  <small>6–7 décembre 2025</small>
                </p>
                <p><strong>Participant — EMIHack 3.0</strong><br />
                  Hackathon interne EMIT · Team API Leka<br />
                  <small>Mai 2025</small>
                </p>
            </div>
          </Reveal>
        </div>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal className="experience-row" key={experience.organization} delay={index * 0.04}>
              <span className="experience-date">{experience.date}</span>
              <div>
                <h3>{experience.role}</h3>
                <p className="experience-org">{experience.organization}</p>
                <p className="experience-description">{experience.description}</p>
                <span className="experience-tools">{experience.tools}</span>
                {experience.brandLogos && <TechnologyLogos names={experience.brandLogos} />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="folio-section about-section" id="a-propos">
      <div className="folio-container about-grid">
        <ProfileCard email={contact.email} />
        <div className="about-content">
          <SectionIntro
            index="05"
            eyebrow="BRUNO ISMAËL RAZAFINDRATSIMBA"
            title="La technique au service"
            accent="des bonnes questions."
            description="Data Analyst et Data Engineer orienté pipelines, je poursuis un Master II en Sciences des Données et Intelligence Artificielle à l’EMIT, Université de Fianarantsoa."
          />
          <div className="about-lower">
            <div className="education-list">
              <h3><GraduationCap aria-hidden="true" size={17} /> FORMATION</h3>
              {education.map((item) => (
                <div className="education-row" key={item.date}>
                  <span>{item.date}</span><p><strong>{item.title}</strong><small>{item.place}</small></p>
                </div>
              ))}
            </div>
            <div className="language-note">
              <h3>LANGUES</h3>
              <p>Malagasy <span>Maternel</span></p>
              <p>Français <span>Intermédiaire</span></p>
              <p>Anglais <span>Débutant · lecture de documentation technique</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="folio-contact" id="contact">
      <div className="folio-container contact-grid">
        <Reveal className="contact-heading">
          <p className="eyebrow">UNE QUESTION DATA ?</p>
          <h2>Parlons de<br /><em>votre prochain flux.</em></h2>
          <p>Un pipeline à fiabiliser, un dashboard à construire ou un prototype à explorer ?</p>
        </Reveal>
        <div className="contact-links">
          <a href={`mailto:${contact.email}`}><Mail aria-hidden="true" size={18} /><span><small>ÉCRIRE</small>{contact.email}</span><ArrowUpRight aria-hidden="true" size={17} /></a>
          <a href={`tel:${contact.phone}`}><Phone aria-hidden="true" size={18} /><span><small>APPELER</small>{contact.phoneLabel}</span><ArrowUpRight aria-hidden="true" size={17} /></a>
          <a href={contact.github} target="_blank" rel="noreferrer"><CodeXml aria-hidden="true" size={18} /><span><small>CODE & PROJETS</small>github.com/IsmaelBruno</span><ArrowUpRight aria-hidden="true" size={17} /></a>
          <div className="contact-location"><MapPin aria-hidden="true" size={17} /><span>{contact.location}</span></div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="folio-footer">
      <div className="folio-container footer-inner">
        <a className="footer-mark" href="#accueil">BR<span> / DATA</span></a>
        <p>Data Analytics · Engineering · Science<br /><span>Antananarivo, Madagascar · 2026</span></p>
        <a className="footer-top" href="#accueil">Retour en haut <ArrowUpRight aria-hidden="true" size={15} /></a>
      </div>
    </footer>
  );
}