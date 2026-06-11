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
import type { ReactElement, SVGProps } from 'react'
import './App.css'
import { educationItems, experiences, impacts, navigationItems, skills, type SkillLogo } from './content'

const projectTags: readonly string[][] = [
  ['Go', 'Kafka', 'MongoDB', 'Grafana'],
  ['Java', 'Spring Boot', 'AWS Lambda', 'Docker'],
  ['Grafana', 'Docker', 'AWS', 'MongoDB'],
]

type LogoProps = Readonly<SVGProps<SVGSVGElement>>

function TelecentroLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Telecentro" {...props}>
      <circle cx="32" cy="32" r="25" fill="#4d78e6" opacity="0.18" />
      <path d="M14 22 32 12l18 10-18 10-18-10Z" fill="#4d78e6" />
      <path d="M20 27h24v7h-8v18h-8V34h-8v-7Z" fill="#4d78e6" />
      <path d="M19 23 32 16l13 7-13 7-13-7Z" fill="#fcfcfc" opacity="0.86" />
    </svg>
  )
}

function WarnerLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Warner Bros. Discovery" {...props}>
      <path
        d="M14 8h36l-4 36c-.9 8.1-6.6 12.2-14 14-7.4-1.8-13.1-5.9-14-14L14 8Z"
        fill="#f5cb45"
        stroke="#274487"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <text x="32" y="39" fill="#274487" fontFamily="Nunito, sans-serif" fontSize="17" fontWeight="900" textAnchor="middle">
        WB
      </text>
    </svg>
  )
}

function GoLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Go" {...props}>
      <path d="M8 27h17M5 35h20M12 43h15" stroke="#5cc8df" strokeLinecap="round" strokeWidth="4" />
      <text x="29" y="40" fill="#2aa4bd" fontFamily="Nunito, sans-serif" fontSize="18" fontWeight="800">
        GO
      </text>
    </svg>
  )
}

function PythonLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Python" {...props}>
      <path
        d="M31 9c-9 0-12 3-12 9v7h18c4 0 7 3 7 7v5H24c-8 0-13-5-13-13s6-13 14-13h6Z"
        fill="#3677b8"
      />
      <path
        d="M33 55c9 0 12-3 12-9v-7H27c-4 0-7-3-7-7v-5h20c8 0 13 5 13 13s-6 13-14 13h-6Z"
        fill="#ffd24a"
      />
      <circle cx="27" cy="18" r="2" fill="#fcfcfc" />
      <circle cx="37" cy="46" r="2" fill="#fcfcfc" />
    </svg>
  )
}

function JavaLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Java" {...props}>
      <path d="M34 10c-8 6 9 9-1 16" fill="none" stroke="#e9572b" strokeLinecap="round" strokeWidth="3" />
      <path d="M27 14c-7 5 7 8 0 14" fill="none" stroke="#e9572b" strokeLinecap="round" strokeWidth="2.5" />
      <path d="M20 34c8 3 20 3 28-1M18 41c10 4 24 4 34-1M23 48c7 3 18 3 26 0" fill="none" stroke="#4083bf" strokeLinecap="round" strokeWidth="3" />
    </svg>
  )
}

function SpringLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Spring Boot" {...props}>
      <path
        d="M50 17c-13-5-29 0-35 13-5 11 1 24 13 26 13 2 24-7 26-20-7 7-18 10-27 5 8 1 18-4 23-24Z"
        fill="#6fbf4a"
      />
      <path d="M25 41c6 5 16 3 21-5" fill="none" stroke="#fcfcfc" strokeLinecap="round" strokeWidth="3" />
    </svg>
  )
}

function KafkaLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Kafka" {...props}>
      <g fill="none" stroke="#6b42c7" strokeLinecap="round" strokeWidth="4">
        <path d="M32 15v34M32 25l13-7M32 39l13 7M32 25l-13-7M32 39l-13 7" />
      </g>
      <g fill="#fcfcfc" stroke="#6b42c7" strokeWidth="4">
        <circle cx="32" cy="15" r="5" />
        <circle cx="32" cy="32" r="5" />
        <circle cx="32" cy="49" r="5" />
        <circle cx="47" cy="15" r="5" />
        <circle cx="47" cy="49" r="5" />
        <circle cx="17" cy="15" r="5" />
        <circle cx="17" cy="49" r="5" />
      </g>
    </svg>
  )
}

function LambdaLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="AWS Lambda" {...props}>
      <path d="M24 12h9l16 40h-9l-4-11H25l-5 11h-9l17-40Z" fill="#f08a31" />
      <path d="M29 34h5l-3-9-2 9Z" fill="#fcfcfc" />
    </svg>
  )
}

function MongoLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="MongoDB" {...props}>
      <path d="M32 6c12 13 13 30 0 52C19 36 20 19 32 6Z" fill="#49a54b" />
      <path d="M32 17v32" stroke="#2f6f35" strokeLinecap="round" strokeWidth="3" />
    </svg>
  )
}

function DockerLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Docker" {...props}>
      <g fill="#2496cc">
        <rect x="15" y="28" width="8" height="7" rx="1" />
        <rect x="25" y="28" width="8" height="7" rx="1" />
        <rect x="35" y="28" width="8" height="7" rx="1" />
        <rect x="25" y="19" width="8" height="7" rx="1" />
        <rect x="35" y="19" width="8" height="7" rx="1" />
        <path d="M10 38h42c-3 9-10 14-22 14-10 0-17-5-20-14Z" />
      </g>
      <path d="M48 35c3-4 7-4 9-1-2 2-5 3-9 1Z" fill="#2496cc" />
    </svg>
  )
}

function GrafanaLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Grafana" {...props}>
      <path
        d="M50 31c0-10-8-18-18-18-12 0-21 10-19 22 1 9 9 16 18 16 8 0 14-5 14-12 0-6-5-11-11-11-5 0-9 4-9 9 0 4 3 7 7 7 3 0 5-2 5-5"
        fill="none"
        stroke="#f47b20"
        strokeLinecap="round"
        strokeWidth="6"
      />
    </svg>
  )
}

const skillLogos: Record<SkillLogo, (props: LogoProps) => ReactElement> = {
  go: GoLogo,
  python: PythonLogo,
  java: JavaLogo,
  spring: SpringLogo,
  kafka: KafkaLogo,
  lambda: LambdaLogo,
  mongodb: MongoLogo,
  docker: DockerLogo,
  grafana: GrafanaLogo,
}

function CompanyLogo(props: { readonly company: string }): ReactElement {
  if (props.company === 'Telecentro') {
    return <TelecentroLogo />
  }

  return <WarnerLogo />
}

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
        <h1>Software Engineer</h1>
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
            <div className="experience-token">
              <CompanyLogo company={item.company} />
            </div>
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
          const Logo = skillLogos[skill.logo]

          return (
            <article
              className="skill-node"
              key={skill.name}
            >
              <span>
                <Logo aria-hidden="true" />
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
      <SectionTitle id="projects" title="Projects">
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
      <div className="about-plant" aria-hidden="true" />
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
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
