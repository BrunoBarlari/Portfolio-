export type NavigationItem = {
  readonly label: string
  readonly href: string
}

export type ExperienceItem = {
  readonly company: string
  readonly role: string
  readonly location: string
  readonly period: string
  readonly summary: string
  readonly highlights: readonly string[]
}

export type SkillItem = {
  readonly name: string
  readonly detail: string
  readonly logo: SkillLogo
}

export type SkillLogo =
  | 'go'
  | 'python'
  | 'java'
  | 'spring'
  | 'kafka'
  | 'lambda'
  | 'mongodb'
  | 'docker'
  | 'grafana'

export type ImpactItem = {
  readonly title: string
  readonly body: string
  readonly accent: 'mint' | 'lavender' | 'peach'
  readonly tags: readonly string[]
  readonly metric: string
  readonly metricKind: 'growth' | 'speed' | 'check'
  readonly sketch: 'mountains' | 'crates' | 'tower'
}

export type LanguageItem = {
  readonly name: string
  readonly level: string
  readonly dots: number
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const experiences: readonly ExperienceItem[] = [
  {
    company: 'Warner Bros. Discovery',
    role: 'Software Engineer',
    location: 'Buenos Aires, Argentina',
    period: '2024 – 2026',
    summary:
      'Built scalable backend services and event-driven platforms used globally.',
    highlights: [
      'Microservicios Java y Spring Boot con pruebas automatizadas.',
      'APIs event-driven con AWS Lambda y Python.',
      'Participacion en lanzamientos de HBO Max en Asia y Europa.',
    ],
  },
  {
    company: 'Telecentro',
    role: 'Backend Developer',
    location: 'Buenos Aires, Argentina',
    period: '2026 – Present',
    summary:
      'Mission-critical microservices, external integrations and observability for 24/7 telecom systems.',
    highlights: [
      'APIs REST y microservicios escalables en Go y Python.',
      'Pipelines de eventos con Apache Kafka para mejorar throughput y resiliencia.',
      'Conectores robustos para plataformas externas como Starlink y Universal.',
    ],
  },
]

export const skills: readonly SkillItem[] = [
  { name: 'Go', detail: 'Servicios pequenos, claros y listos para produccion.', logo: 'go' },
  { name: 'Python', detail: 'APIs y automatizaciones orientadas a eventos.', logo: 'python' },
  { name: 'Java', detail: 'Backends mantenibles con despliegue continuo.', logo: 'java' },
  { name: 'Spring Boot', detail: 'Servicios productivos con convenciones robustas.', logo: 'spring' },
  { name: 'Kafka', detail: 'Pipelines de eventos resilientes ante picos de trafico.', logo: 'kafka' },
  { name: 'AWS Lambda', detail: 'APIs orientadas a eventos y ejecucion serverless.', logo: 'lambda' },
  { name: 'MongoDB', detail: 'Modelado y consultas para respuestas rapidas.', logo: 'mongodb' },
  { name: 'Docker', detail: 'Entornos reproducibles y simples de operar.', logo: 'docker' },
  { name: 'Grafana', detail: 'Observabilidad para entender sistemas reales.', logo: 'grafana' },
]

export const impacts: readonly ImpactItem[] = [
  {
    title: 'Real-time Usage Analytics',
    body:
      'Event-driven pipeline that processes millions of events per day and powers real-time dashboards for product and ops teams.',
    accent: 'mint',
    tags: ['Go', 'Kafka', 'MongoDB', 'Grafana'],
    metric: '99.9% pipeline reliability',
    metricKind: 'growth',
    sketch: 'mountains',
  },
  {
    title: 'Partner Onboarding Platform',
    body:
      'Scalable microservice platform to onboard and manage partners with automated workflows and clear observability.',
    accent: 'peach',
    tags: ['Java', 'Spring Boot', 'AWS Lambda', 'Docker'],
    metric: '60% faster onboarding',
    metricKind: 'speed',
    sketch: 'crates',
  },
  {
    title: 'Observability & Alerting',
    body:
      'Unified monitoring and alerting solution that improved incident detection and reduced mean time to resolution.',
    accent: 'lavender',
    tags: ['Grafana', 'Prometheus', 'Docker', 'AWS'],
    metric: '40% MTTR improvement',
    metricKind: 'check',
    sketch: 'tower',
  },
]

export const education = {
  school: 'UTN – Facultad Regional Buenos Aires',
  degree: 'Systems Engineering',
  period: 'In progress',
} as const

export const languages: readonly LanguageItem[] = [
  { name: 'English', level: 'C1', dots: 4 },
  { name: 'Portuguese', level: 'B1', dots: 3 },
]
