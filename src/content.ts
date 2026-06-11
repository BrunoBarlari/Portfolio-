import type { LucideIcon } from 'lucide-react'
import {
  Languages,
  Network,
  School,
  Sparkles,
} from 'lucide-react'

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
}

export type EducationItem = {
  readonly title: string
  readonly body: string
  readonly Icon: LucideIcon
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const experiences: readonly ExperienceItem[] = [
  {
    company: 'Telecentro',
    role: 'Desarrollador Backend',
    location: 'Buenos Aires, Argentina',
    period: '2026',
    summary:
      'Microservicios de mision critica para telecomunicaciones, integraciones externas y observabilidad en sistemas 24/7.',
    highlights: [
      'APIs REST y microservicios escalables en Go y Python.',
      'Pipelines de eventos con Apache Kafka para mejorar throughput y resiliencia.',
      'Conectores robustos para plataformas externas como Starlink y Universal.',
    ],
  },
  {
    company: 'Warner Bros. Discovery',
    role: 'Desarrollador Backend',
    location: 'Buenos Aires, Argentina',
    period: '2024 - 2026',
    summary:
      'Servicios backend para productos globales, despliegue continuo y colaboracion con equipos internacionales.',
    highlights: [
      'Microservicios Java y Spring Boot con pruebas automatizadas.',
      'APIs event-driven con AWS Lambda y Python.',
      'Participacion en lanzamientos de HBO Max en Asia y Europa.',
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
    title: 'Interoperabilidad real',
    body:
      'Capa de mediacion para conectar sistemas legados y modernos sin perder estabilidad operativa.',
    accent: 'mint',
  },
  {
    title: 'Producto global',
    body:
      'Experiencia construyendo servicios para lanzamientos regionales con stakeholders de Europa y Asia.',
    accent: 'lavender',
  },
  {
    title: 'Backend observable',
    body:
      'Servicios pensados para monitoreo, trazabilidad y respuesta rapida ante incidentes de produccion.',
    accent: 'peach',
  },
]

export const educationItems: readonly EducationItem[] = [
  {
    title: 'Ingenieria en Sistemas',
    body: 'Universidad Tecnologica Nacional - UTN FRBA, en curso.',
    Icon: School,
  },
  {
    title: 'Idiomas',
    body: 'Ingles avanzado C1 y Portugues intermedio B1.',
    Icon: Languages,
  },
  {
    title: 'Foco actual',
    body: 'Microservicios, integraciones externas, eventos y confiabilidad.',
    Icon: Network,
  },
  {
    title: 'Modo de trabajo',
    body: 'Curiosidad tecnica, claridad y aprendizaje continuo.',
    Icon: Sparkles,
  },
]
