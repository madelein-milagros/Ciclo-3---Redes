
import { Course, Checkpoint } from './types';

export const COLORS = {
  COURSE_START: '#a81d3a',
  COURSE_END: '#830c24',
  CHECKPOINT_START: '#c41e45',
  CHECKPOINT_END: '#9a132f',
  ACCENT: '#d62d51',
  TEXT_LIGHT: '#ffffff',
};

const YT_BASE = "https://www.youtube.com/results?search_query=tecsup+redes+";
const LI_BASE = "https://www.linkedin.com/feed/?shareActive=true&text=";

const createLinkedInUrl = (courseTitle: string, ciclo: number) => {
  const message = `¡Sigo avanzando! 🚀 Acabo de completar el curso de "${courseTitle}" del Ciclo ${ciclo} en Tecsup. Especializándome en Redes y Comunicaciones. #Tecsup2026 #Networking`;
  return LI_BASE + encodeURIComponent(message);
};

export const COURSES: Course[] = [
  // CICLO 1
  {
    id: 1, ciclo: 1,
    title: "Soporte de Hardware y Software",
    officialName: "IT Essentials",
    category: "Infraestructura",
    links: [
      { label: "NetAcad IT Essentials", url: "https://www.netacad.com" },
      { label: "Guía de Hardware", url: "https://en.wikipedia.org/wiki/Computer_hardware" }
    ],
    description: "Mantenimiento preventivo y correctivo de hardware y software base.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "hardware",
    linkedinUrl: createLinkedInUrl("Soporte de Hardware y Software", 1)
  },
  // CICLO 2
  {
    id: 2, ciclo: 2,
    title: "Informática Aplicada (Redes)",
    officialName: "Networking Basics",
    category: "Programación",
    links: [{ label: "Intro a Redes", url: "https://www.netacad.com" }],
    description: "Fundamentos de redes y lógica aplicada al flujo de datos.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "informatica+aplicada",
    linkedinUrl: createLinkedInUrl("Informática Aplicada (Redes)", 2)
  },
  {
    id: 3, ciclo: 2,
    title: "Programación básica para redes",
    officialName: "Python Essentials 1",
    category: "Programación",
    links: [
      { label: "Documentación Python", url: "https://docs.python.org/3/" },
      { label: "Examen PCEP Prep", url: "https://pythoninstitute.org/pcep" }
    ],
    description: "Desarrollo de scripts iniciales para la gestión de red.",
    certification: "PCEP - Python Institute",
    youtubeUrl: YT_BASE + "python+1",
    linkedinUrl: createLinkedInUrl("Programación básica para redes", 2)
  },
  {
    id: 4, ciclo: 2,
    title: "Electrónica y Hardware",
    officialName: "Computer Electronics",
    category: "Infraestructura",
    links: [{ label: "Simulador Tinkercad", url: "https://www.tinkercad.com/" }],
    description: "Principios de electrónica digital y componentes de hardware avanzado.",
    certification: "Tecsup Certified",
    youtubeUrl: YT_BASE + "electronica",
    linkedinUrl: createLinkedInUrl("Electrónica y Hardware", 2)
  },
  {
    id: 5, ciclo: 2,
    title: "Implementación de Redes",
    officialName: "CCNA: Introduction to Networks",
    category: "Infraestructura",
    links: [
      { label: "CCNA 1 NetAcad", url: "https://www.netacad.com" },
      { label: "Descarga Packet Tracer", url: "https://www.netacad.com/portal/resources/packet-tracer" },
      { label: "Cisco Learning Network", url: "https://learningnetwork.cisco.com" }
    ],
    description: "Configuración física y lógica de dispositivos de interconexión.",
    certification: "Cisco CCNA Badge",
    youtubeUrl: YT_BASE + "ccna+1",
    linkedinUrl: createLinkedInUrl("Implementación de Redes", 2)
  },
  // CICLO 3 (TU ENFOQUE)
  {
    id: 6, ciclo: 3,
    title: "Programación Móvil para Redes",
    officialName: "Python Essentials 2",
    category: "Programación",
    links: [
      { label: "Python 2 Advanced", url: "https://www.python.org" },
      { label: "Cisco DevNet SDK", url: "https://developer.cisco.com" },
      { label: "API Reference", url: "https://docs.python.org/3/library/index.html" }
    ],
    description: "Desarrollo avanzado de aplicaciones y lógica de automatización.",
    certification: "Cisco Certified Specialist",
    youtubeUrl: YT_BASE + "python+2",
    linkedinUrl: createLinkedInUrl("Programación Móvil para Redes", 3)
  },
  {
    id: 7, ciclo: 3,
    title: "Sistemas Operativos Libres",
    officialName: "Linux Essentials",
    category: "Virtualización",
    links: [
      { label: "NDG Linux Essentials", url: "https://www.netdevgroup.com" },
      { label: "Linux Journey (Guía)", url: "https://linuxjourney.com/" },
      { label: "Simulador de Terminal", url: "https://bellard.org/jslinux/" }
    ],
    description: "Administración básica del kernel Linux y comandos de terminal.",
    certification: "LPI Linux Essentials",
    youtubeUrl: YT_BASE + "linux",
    linkedinUrl: createLinkedInUrl("Sistemas Operativos Libres", 3)
  },
  {
    id: 8, ciclo: 3,
    title: "Administración de SS.OO.",
    officialName: "System Administration",
    category: "Virtualización",
    links: [
      { label: "SysAdmin Resource", url: "https://www.netacad.com" },
      { label: "Servidores Wiki", url: "https://en.wikipedia.org/wiki/System_administration" }
    ],
    description: "Gestión de usuarios, permisos y servicios en entornos de servidor.",
    certification: "Tecsup Professional Admin",
    youtubeUrl: YT_BASE + "sysadmin",
    linkedinUrl: createLinkedInUrl("Administración de SS.OO.", 3)
  },
  {
    id: 9, ciclo: 3,
    title: "Protocolos de Enrutamiento",
    officialName: "Routing Essentials",
    category: "Infraestructura",
    links: [
      { label: "Routing Prep Guide", url: "https://www.netacad.com" },
      { label: "RFC Editor (Protocolos)", url: "https://www.rfc-editor.org/" },
      { label: "CCNA Routing Docs", url: "https://www.cisco.com" }
    ],
    description: "Dominio de tablas de enrutamiento y convergencia de red.",
    certification: "Cisco Routing Badge",
    youtubeUrl: YT_BASE + "enrutamiento",
    linkedinUrl: createLinkedInUrl("Protocolos de Enrutamiento", 3)
  },
  {
    id: 10, ciclo: 3,
    title: "Matemáticas para Redes",
    officialName: "Data Science & Math",
    category: "Programación",
    links: [{ label: "Khan Academy Math", url: "https://www.khanacademy.org" }],
    description: "Análisis de tráfico mediante estadística y probabilidad aplicada.",
    certification: "Cisco Data Science Specialist",
    youtubeUrl: YT_BASE + "matematicas+redes",
    linkedinUrl: createLinkedInUrl("Matemáticas para Redes", 3)
  },
  // CICLO 4, 5, 6
  {
    id: 11, ciclo: 4,
    title: "Cableado y Fibra Óptica",
    officialName: "Structured Cabling Solutions",
    category: "Infraestructura",
    links: [{ label: "CommScope Training", url: "https://www.commscopetraining.com" }],
    description: "Instalación física y certificación de medios de transmisión.",
    certification: "CommScope Certified",
    youtubeUrl: YT_BASE + "cableado+fibra",
    linkedinUrl: createLinkedInUrl("Cableado y Fibra Óptica", 4)
  },
  {
    id: 13, ciclo: 4,
    title: "Ethical Hacking",
    officialName: "Cybersecurity & Pentesting",
    category: "Seguridad",
    links: [
      { label: "TryHackMe Portal", url: "https://tryhackme.com/" },
      { label: "OWASP Project", url: "https://owasp.org/" }
    ],
    description: "Identificación y defensa de vulnerabilidades en sistemas.",
    certification: "Cisco CyberOps associate",
    youtubeUrl: YT_BASE + "hacking+etico",
    linkedinUrl: createLinkedInUrl("Ethical Hacking", 4)
  },
  {
    id: 16, ciclo: 5,
    title: "Seguridad Perimetral",
    officialName: "Fortinet NSE",
    category: "Seguridad",
    links: [
      { label: "Fortinet Training", url: "https://training.fortinet.com" },
      { label: "NSE Exam Prep", url: "https://training.fortinet.com" }
    ],
    description: "Protección de bordes de red mediante firewalls avanzados.",
    certification: "Fortinet NSE Certified",
    youtubeUrl: YT_BASE + "fortinet",
    linkedinUrl: createLinkedInUrl("Seguridad Perimetral", 5)
  },
  {
    id: 18, ciclo: 6,
    title: "Virtualización y Cloud",
    officialName: "Cloud Computing Mastery",
    category: "Virtualización",
    links: [
      { label: "AWS Academy", url: "https://aws.amazon.com/" },
      { label: "Azure Learner", url: "https://portal.azure.com" },
      { label: "GCP Training", url: "https://cloud.google.com/training" }
    ],
    description: "Infraestructura como servicio y despliegue en la nube.",
    certification: "Cloud Solutions Architect",
    youtubeUrl: YT_BASE + "cloud+computing",
    linkedinUrl: createLinkedInUrl("Virtualización y Cloud", 6)
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Especialista Tecsup 2026",
  content: "Convertirse en un líder tecnológico capaz de diseñar y asegurar la infraestructura digital que mueve al mundo."
};
