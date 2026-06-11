import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  MapPin,
  Rocket,
  Send,
} from 'lucide-react'
import type { ReactElement } from 'react'
import './App.css'
import { educationItems, experiences, impacts, navigationItems, skills } from './content'

const projectTags: readonly string[][] = [
  ['Go', 'Kafka', 'MongoDB', 'Grafana'],
  ['Java', 'Spring Boot', 'AWS Lambda', 'Docker'],
  ['Grafana', 'Docker', 'AWS', 'MongoDB'],
]

function Header(): ReactElement {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#home" aria-label="Ir al inicio">
        <span aria-hidden="true">B</span>
        <strong>Bruno Barlari</strong>
      </a>
      <nav className="main-nav" aria-label="Secciones principales">
        {navigationItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="social-nav" aria-label="Links sociales">
        <a href="https://github.com/brunobarlari" target="_blank" rel="noreferrer" aria-label="GitHub">
          <CodeXml size={19} />
        </a>
        <a href="https://linkedin.com/in/bruno-barlari" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <BriefcaseBusiness size={19} />
        </a>
        <a href="mailto:bruno2004b@gmail.com" aria-label="Email">
          <Mail size={19} />
        </a>
      </div>
    </header>
  )
}

function Hero(): ReactElement {
  return (
    <section className="hero-section" id="home">
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h1>
          Backend systems that scale and <span>make sense.</span>
        </h1>
        <p>
          I&apos;m Bruno Barlari, a Backend Developer based in Buenos Aires. I build reliable,
          observable and evolvable systems with clean code and curiosity.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#projects">
            <Rocket size={18} aria-hidden="true" />
            See my work
          </a>
          <a className="secondary-action" href="mailto:bruno2004b@gmail.com">
            <Send size={18} aria-hidden="true" />
            Let&apos;s connect
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={20} aria-hidden="true" />
          Based in <strong>Buenos Aires</strong>, Argentina
        </div>
      </motion.div>
      <motion.div
        className="hero-illustration"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
      >
        <img src="/illustrations/hero-planet-bruno.png" alt="Bruno sobre un planeta ilustrado de Buenos Aires" />
      </motion.div>
      <a className="scroll-cue" href="#experience">
        Scroll to explore
        <ArrowDown size={22} aria-hidden="true" />
      </a>
    </section>
  )
}

function SectionTitle(props: { readonly id: string; readonly title: string; readonly children: string }): ReactElement {
  return (
    <div className="section-title">
      <h2 id={props.id}>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  )
}

function Experience(): ReactElement {
  return (
    <section className="experience-section page-section" aria-labelledby="experience">
      <SectionTitle id="experience" title="Experience">
        A short orbit through my professional journey.
      </SectionTitle>
      <div className="experience-orbit" aria-hidden="true" />
      <div className="experience-list">
        {experiences.map((item, index) => (
          <motion.article
            className="experience-item"
            key={item.company}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span>{item.period}</span>
            <h3>{item.company}</h3>
            <strong>{item.role}</strong>
            <p>{item.summary}</p>
            <div className="experience-token">{item.company === 'Telecentro' ? 'T' : 'WB'}</div>
          </motion.article>
        ))}
        <article className="experience-item future">
          <span>Next</span>
          <h3>What&apos;s next?</h3>
          <strong>Open to meaningful projects</strong>
          <p>Always learning, building and looking for systems that deserve strong foundations.</p>
          <div className="experience-token">?</div>
        </article>
      </div>
    </section>
  )
}

function Skills(): ReactElement {
  return (
    <section className="skills-section page-section" aria-labelledby="skills">
      <SectionTitle id="skills" title="Skills">
        Technologies I work with to build and operate systems.
      </SectionTitle>
      <div className="skills-map">
        {skills.map((skill) => {
          const Icon = skill.Icon

          return (
            <article
              className="skill-node"
              key={skill.name}
            >
              <span>
                <Icon size={30} aria-hidden="true" />
              </span>
              <h3>{skill.name}</h3>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function Projects(): ReactElement {
  return (
    <section className="projects-section page-section" aria-labelledby="projects">
      <SectionTitle id="projects" title="Selected impact">
        Projects where I helped teams move faster and systems behave better.
      </SectionTitle>
      <div className="project-grid">
        {impacts.map((item, index) => (
          <motion.article
            className={`project-card ${item.accent}`}
            key={item.title}
            whileHover={{ y: -8, rotate: index === 1 ? 0.4 : -0.4 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className="project-sketch" aria-hidden="true">
              <span />
            </div>
            <h3>{item.title}</h3>
            <div className="tag-row">
              {projectTags[index]?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p>{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function About(): ReactElement {
  return (
    <section className="about-section page-section" id="about" aria-label="About me">
      <article className="about-copy">
        <h2>About me</h2>
        <p>
          I&apos;m a backend developer who enjoys clean architecture, domain modeling and
          the satisfaction of solving real production problems.
        </p>
        <p>I love learning, mentoring and building tools that make teams more effective.</p>
      </article>
      {educationItems.slice(0, 2).map((item) => {
        const Icon = item.Icon

        return (
          <article className="about-card" key={item.title}>
            <Icon size={26} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        )
      })}
    </section>
  )
}

function Contact(): ReactElement {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Let&apos;s build something great together</h2>
      <p>I&apos;m open to new opportunities and interesting projects.</p>
      <div className="contact-grid">
        <a href="mailto:bruno2004b@gmail.com">
          <Mail size={28} aria-hidden="true" />
          <span>
            Email me
            <small>bruno2004b@gmail.com</small>
          </span>
        </a>
        <a href="https://linkedin.com/in/bruno-barlari" target="_blank" rel="noreferrer">
          <BriefcaseBusiness size={28} aria-hidden="true" />
          <span>
            LinkedIn
            <small>/in/bruno-barlari</small>
          </span>
        </a>
        <a href="https://github.com/brunobarlari" target="_blank" rel="noreferrer">
          <CodeXml size={28} aria-hidden="true" />
          <span>
            GitHub
            <small>/brunobarlari</small>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <span className="contact-location">
          <MapPin size={28} aria-hidden="true" />
          <span>
            Buenos Aires
            <small>Argentina</small>
          </span>
        </span>
      </div>
    </section>
  )
}

function Footer(): ReactElement {
  return (
    <footer className="site-footer">
      <span>© 2026 Bruno Barlari</span>
      <a href="#home">Back to top ↑</a>
    </footer>
  )
}

function App(): ReactElement {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
