import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bell,
  ChartLine,
  CircleCheck,
  Heart,
  Mail,
  MapPin,
  Package,
  Rocket,
  Send,
  Timer,
  TrendingUp,
} from 'lucide-react'
import type { ReactElement, SVGProps } from 'react'
import './App.css'
import {
  education,
  experiences,
  impacts,
  languages,
  navigationItems,
  skills,
  type ImpactItem,
  type SkillLogo,
} from './content'

type LogoProps = Readonly<SVGProps<SVGSVGElement>>

function GitHubLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="GitHub" fill="currentColor" {...props}>
      <path d="M12 1.7a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.5l-.01-1.95c-2.92.63-3.54-1.24-3.54-1.24-.48-1.21-1.17-1.54-1.17-1.54-.95-.65.07-.63.07-.63 1.06.07 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.06.87.1-.68.37-1.14.66-1.4-2.33-.27-4.79-1.17-4.79-5.2 0-1.14.41-2.08 1.08-2.81-.11-.27-.47-1.34.1-2.78 0 0 .88-.28 2.89 1.07a10 10 0 0 1 5.26 0c2-1.35 2.88-1.07 2.88-1.07.58 1.44.22 2.51.11 2.78.67.73 1.08 1.67 1.08 2.81 0 4.04-2.46 4.92-4.81 5.18.38.33.72.97.72 1.96l-.01 2.91c0 .28.19.61.73.5A10.5 10.5 0 0 0 12 1.7Z" />
    </svg>
  )
}

function LinkedInLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label="LinkedIn" fill="currentColor" {...props}>
      <path d="M4.5 3.2a1.95 1.95 0 1 1 0 3.9 1.95 1.95 0 0 1 0-3.9ZM2.9 8.6h3.2V21H2.9V8.6Zm5.4 0h3.07v1.7h.05c.43-.81 1.47-1.66 3.03-1.66 3.24 0 3.84 2.13 3.84 4.9V21h-3.2v-6.6c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V21H8.3V8.6Z" />
    </svg>
  )
}

function TelecentroLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Telecentro" {...props}>
      <path
        d="M32 9c13 0 22 8 22 20 0 15-14 24-22 28-8-4-22-13-22-28C10 17 19 9 32 9Z"
        fill="#5279e9"
      />
      <path d="M20 23h24v7h-8v19h-8V30h-8v-7Z" fill="#fcfcfc" />
      <path d="M17 33c10 8 20 8 30 0" fill="none" stroke="#fcfcfc" strokeLinecap="round" strokeWidth="4" />
    </svg>
  )
}

function WarnerLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="Warner Bros. Discovery" {...props}>
      <path
        d="M12 7h40l-4 37c-1 8.8-7.5 13.2-16 15-8.5-1.8-15-6.2-16-15L12 7Z"
        fill="#ffd84d"
        stroke="#233c87"
        strokeLinejoin="round"
        strokeWidth="3.4"
      />
      <path d="M20 20h6l2 17 4-17h6l3 17 2-17h6l-5 27h-7l-3-15-4 15h-7l-3-27Z" fill="#233c87" />
      <path d="M36 21h8c4.6 0 7.2 4.6 4.1 8 4.1 3.5 1.4 9.8-3.9 9.8H36V21Zm6 6.6c2 0 2.4-3.1.1-3.1h-1.6v3.1H42Zm.4 7.7c2.5 0 2.7-3.7 0-3.7h-1.9v3.7h1.9Z" fill="#233c87" />
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

function UtnLogo(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 64 64" role="img" aria-label="UTN" {...props}>
      <g fill="none" stroke="#4b4d5f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
        <path d="M32 10v44M10 32h44M17 17l30 30M47 17 17 47" />
        <circle cx="32" cy="32" r="11" />
      </g>
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
          <GitHubLogo width={19} height={19} />
        </a>
        <a href="https://linkedin.com/in/bruno-barlari" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInLogo width={19} height={19} />
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
          observable and evolvable systems with clean code and empathy.
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
        {experiences.map((item) => (
          <article
            className="experience-item"
            key={item.company}
          >
            <span>{item.period}</span>
            <h3>{item.company}</h3>
            <strong>{item.role}</strong>
            <p>{item.summary}</p>
            <div className="experience-token">
              <CompanyLogo company={item.company} />
            </div>
          </article>
        ))}
        <article className="experience-item future">
          <span>Next</span>
          <h3>What&apos;s next?</h3>
          <strong>Open to meaningful projects</strong>
          <p>Always learning and building. Open to new challenges and meaningful projects.</p>
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

function MountainsSketch(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 240 120" role="presentation" {...props}>
      <g fill="none" stroke="#39466b" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="2.4">
        <path d="M18 104 76 34l34 42 22-26 50 54" fill="rgba(255,255,255,0.5)" />
        <path d="M150 104l36-44 36 44" fill="rgba(255,255,255,0.35)" />
        <path d="M64 49h17l-3 9h-14" fill="#8fc7ae" stroke="none" />
        <path d="M64 34v26" />
        <path d="M10 104h220" strokeDasharray="2 8" />
      </g>
    </svg>
  )
}

function CratesSketch(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 240 120" role="presentation" {...props}>
      <g fill="rgba(255,255,255,0.5)" stroke="#39466b" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="2.4">
        <path d="M58 56l26-12 26 12v28l-26 12-26-12V56Z" />
        <path d="M58 56l26 12 26-12M84 68v28" />
        <path d="M124 44l22-10 22 10v24l-22 10-22-10V44Z" />
        <path d="M124 44l22 10 22-10M146 54v24" />
        <path d="M150 86l18-8 18 8v18l-18 8-18-8V86Z" />
      </g>
      <path d="M16 106h208" fill="none" stroke="#39466b" strokeDasharray="2 8" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2.4" />
    </svg>
  )
}

function TowerSketch(props: LogoProps): ReactElement {
  return (
    <svg viewBox="0 0 240 120" role="presentation" {...props}>
      <g fill="rgba(255,255,255,0.5)" stroke="#39466b" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55" strokeWidth="2.4">
        <path d="M150 28h44l-6 16h-32l-6-16Z" />
        <path d="M158 44h28l-4 60h-20l-4-60Z" />
        <path d="M36 78h38v26H36zM86 72h38v32H86z" />
        <path d="M46 104v6h18M96 104v6h18" fill="none" />
        <path d="M44 86l10 8M104 80l10 10" fill="none" />
      </g>
      <path d="M14 110h212" fill="none" stroke="#39466b" strokeDasharray="2 8" strokeLinecap="round" strokeOpacity="0.55" strokeWidth="2.4" />
    </svg>
  )
}

const sketchArt: Record<ImpactItem['sketch'], (props: LogoProps) => ReactElement> = {
  mountains: MountainsSketch,
  crates: CratesSketch,
  tower: TowerSketch,
}

const badgeIcons: Record<ImpactItem['sketch'], ReactElement> = {
  mountains: <ChartLine size={22} aria-hidden="true" />,
  crates: <Package size={22} aria-hidden="true" />,
  tower: <Bell size={22} aria-hidden="true" />,
}

const metricIcons: Record<ImpactItem['metricKind'], ReactElement> = {
  growth: <TrendingUp size={18} aria-hidden="true" />,
  speed: <Timer size={18} aria-hidden="true" />,
  check: <CircleCheck size={18} aria-hidden="true" />,
}

function Projects(): ReactElement {
  return (
    <section className="projects-section page-section" aria-labelledby="projects">
      <SectionTitle id="projects" title="Selected impact">
        Projects where I helped teams move faster and users happier.
      </SectionTitle>
      <div className="project-grid">
        {impacts.map((item, index) => {
          const Sketch = sketchArt[item.sketch]

          return (
            <motion.article
              className={`project-card ${item.accent}`}
              key={item.title}
              whileHover={{ y: -8, rotate: index === 1 ? 0.4 : -0.4 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              <div className="project-sketch" aria-hidden="true">
                <Sketch />
                <span className="project-badge">{badgeIcons[item.sketch]}</span>
              </div>
              <h3>{item.title}</h3>
              <div className="tag-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{item.body}</p>
              <div className={`project-metric ${item.metricKind}`}>
                {metricIcons[item.metricKind]}
                {item.metric}
              </div>
            </motion.article>
          )
        })}
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
      <div className="about-aside">
        <a className="view-more" href="#projects">
          View more projects
          <ArrowRight size={18} aria-hidden="true" />
        </a>
        <div className="about-cards">
          <article className="about-card">
            <h3>Education</h3>
            <div className="education-entry">
              <UtnLogo aria-hidden="true" />
              <div>
                <strong>{education.school}</strong>
                <p>{education.degree}</p>
                <p>{education.period}</p>
              </div>
            </div>
          </article>
          <article className="about-card">
            <h3>Languages</h3>
            {languages.map((language) => (
              <div className="language-row" key={language.name}>
                <span className="language-name">{language.name}</span>
                <span className="language-dots" aria-label={`${language.name}: ${language.level}`}>
                  {Array.from({ length: 5 }, (_, dot) => (
                    <i className={dot < language.dots ? 'filled' : ''} key={dot} />
                  ))}
                </span>
                <span className="language-level">{language.level}</span>
              </div>
            ))}
          </article>
        </div>
      </div>
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
          <LinkedInLogo width={28} height={28} aria-hidden="true" />
          <span>
            LinkedIn
            <small>/in/bruno-barlari</small>
          </span>
        </a>
        <a href="https://github.com/brunobarlari" target="_blank" rel="noreferrer">
          <GitHubLogo width={28} height={28} aria-hidden="true" />
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
      <span className="footer-care">
        <Heart size={14} aria-hidden="true" />
        Made with care in Buenos Aires
      </span>
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
