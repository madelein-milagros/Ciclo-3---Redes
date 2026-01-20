
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
  const message = `¡Sigo avanzando! 🚀 Acabo de completar el curso de "${courseTitle}" correspondiente al Ciclo ${ciclo} de la carrera de Redes y Comunicaciones en Tecsup. #Administración de Redes y Comunicaciones`;
  return LI_BASE + encodeURIComponent(message);
};

export const COURSES: Course[] = [
  // CICLO 1
  {
    id: 1, ciclo: 1,
    title: "Soporte de Hardware y Software",
    officialName: "Conceptos Básico de Hardware de Computadora",
    links: [{ label: "NetAcad - Hardware Basics", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL" }],
    description: "Fundamentos esenciales sobre los componentes físicos de una computadora y soporte técnico inicial.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "hardware",
    linkedinUrl: createLinkedInUrl("Soporte de Hardware y Software", 1)
  },
  // CICLO 2
  {
    id: 2, ciclo: 2,
    title: "Informática Aplicada (Redes)",
    officialName: "Introduccion a la Ciberseguridad",
    links: [{ label: "NetAcad - Ciberseguridad", url: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL&instance_id=0d50742d-45ba-4a91-87b7-3a10282bcd2c" }],
    description: "Primeros pasos en la protección del mundo digital y conceptos de seguridad en red.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "cybersecurity",
    linkedinUrl: createLinkedInUrl("Informática Aplicada (Redes)", 2)
  },
  {
    id: 3, ciclo: 2,
    title: "Programación básica para redes",
    officialName: "Fundamentos de Python 1",
    links: [{ label: "NetAcad - Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=es-XL&instance_id=8e897e8c-3cc4-43be-8440-485e0e356a51" }],
    description: "Lógica de programación orientada a la automatización de tareas en infraestructura de red.",
    certification: "PCEP - Python Institute",
    youtubeUrl: YT_BASE + "python+redes",
    linkedinUrl: createLinkedInUrl("Programación básica para redes", 2)
  },
  {
    id: 4, ciclo: 2,
    title: "Implementación de Redes",
    officialName: "Networking Basics & Packet Tracer",
    links: [
      { label: "Conceptos Básicos", url: "https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL" },
      { label: "Packet Tracer", url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=es-XL" },
      { label: "Explorando Redes", url: "https://www.netacad.com/courses/networking-basics?courseLang=es-XL" }
    ],
    description: "Configuración inicial de dispositivos y simulación avanzada en el entorno de Cisco.",
    certification: "Cisco Packet Tracer Badge",
    youtubeUrl: YT_BASE + "packet+tracer",
    linkedinUrl: createLinkedInUrl("Implementación de Redes", 2)
  },
  // CICLO 3
  {
    id: 5, ciclo: 3,
    title: "Programación Movil para Redes",
    officialName: "Python Essentials 2",
    links: [{ label: "NetAcad - Python 2", url: "https://www.netacad.com/courses/python-essentials-2?courseLang=es-XL" }],
    description: "Dominio avanzado de Python para el desarrollo de scripts y aplicaciones móviles de red.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "python+advanced",
    linkedinUrl: createLinkedInUrl("Programación Movil para Redes", 3)
  },
  {
    id: 6, ciclo: 3,
    title: "Sistemas Operativos de Código Abierto",
    officialName: "Fundamentos de Linux",
    links: [
      { label: "NetAcad Linux", url: "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL" },
      { label: "Linux Essentials", url: "https://www.netdevgroup.com/online/courses/open-source/linux-essentials" },
      { label: "LPI Certification", url: "https://www.lpi.org/our-certifications/linux-essentials-overview" }
    ],
    description: "Administración profesional de sistemas operativos basados en el kernel Linux.",
    certification: "LPI Linux Essentials",
    youtubeUrl: YT_BASE + "linux+essentials",
    linkedinUrl: createLinkedInUrl("Sistemas Operativos de Código Abierto", 3)
  },
  {
    id: 7, ciclo: 3,
    title: "Protocolos de Enrutamiento",
    officialName: "Networking Essentials",
    links: [{ label: "Networking Essentials", url: "https://www.netacad.com/courses/networking-essentials?courseLang=es-XL" }],
    description: "Configuración y gestión de protocolos como OSPF y RIP en redes empresariales.",
    certification: "Cisco Networking Academy",
    youtubeUrl: YT_BASE + "routing+protocols",
    linkedinUrl: createLinkedInUrl("Protocolos de Enrutamiento", 3)
  },
  {
    id: 8, ciclo: 3,
    title: "Matemáticas para Redes",
    officialName: "Introduction to Data Science",
    links: [{ label: "Data Science Intro", url: "https://www.netacad.com/courses/introduction-data-science?courseLang=es-XL" }],
    description: "Aplicación de estadística y análisis de datos para optimizar el tráfico de red.",
    certification: "Cisco Data Science",
    youtubeUrl: YT_BASE + "data+science",
    linkedinUrl: createLinkedInUrl("Matemáticas para Redes", 3)
  },
  // CICLO 4
  {
    id: 9, ciclo: 4,
    title: "Cableado y Fibra Óptica",
    officialName: "Residential/MDU Cabling Solutions",
    links: [{ label: "CommScope Training", url: "https://www.commscopetraining.com/courses/cabling/wr9100/residentialmdu-cabling-solutions" }],
    description: "Diseño e implementación física de infraestructuras de cableado estructurado.",
    certification: "CommScope WR9100",
    youtubeUrl: YT_BASE + "fiber+optic",
    linkedinUrl: createLinkedInUrl("Cableado y Fibra Óptica", 4)
  },
  {
    id: 10, ciclo: 4,
    title: "Arquitectura de Servidores",
    officialName: "Fundamentos de Scrum",
    links: [{ label: "ScrumStudy Certification", url: "https://www.scrumstudy.com/certification/certification-hierarchy" }],
    description: "Gestión de proyectos ágiles aplicada a la implementación de centros de datos.",
    certification: "Scrum Fundamentals Certified",
    youtubeUrl: YT_BASE + "server+architecture",
    linkedinUrl: createLinkedInUrl("Arquitectura de Servidores", 4)
  },
  {
    id: 11, ciclo: 4,
    title: "Ethical Hacking",
    officialName: "Hacker Ético",
    links: [{ label: "NetAcad Ethical Hacker", url: "https://www.netacad.com/courses/ethical-hacker?courseLang=es-XL" }],
    description: "Identificación de vulnerabilidades y defensa proactiva contra ciberataques.",
    certification: "Cisco Cybersecurity",
    youtubeUrl: YT_BASE + "ethical+hacking",
    linkedinUrl: createLinkedInUrl("Ethical Hacking", 4)
  },
  {
    id: 12, ciclo: 4,
    title: "Servicios de Red",
    officialName: "ICANN DNS Fundamentals",
    links: [{ label: "ICANN DNS Course", url: "https://www.icann.org/en/beginners/courses-and-learning" }],
    description: "Administración de servicios DNS y gobernanza de identificadores en internet.",
    certification: "ICANN Certified",
    youtubeUrl: YT_BASE + "dns+services",
    linkedinUrl: createLinkedInUrl("Servicios de Red", 4)
  },
  // CICLO 5
  {
    id: 13, ciclo: 5,
    title: "Programación IoT",
    officialName: "Exploración de IoT con Packet Tracer",
    links: [
      { label: "IoT Intro", url: "https://www.netacad.com/courses/introduction-iot?courseLang=es-XL" },
      { label: "IoT Exploring", url: "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=es-XL" },
      { label: "Cisco IoT Portal", url: "https://www.cisco.com/c/es_mx/solutions/internet-of-things/overview.html" }
    ],
    description: "Conectividad de objetos y transformación digital mediante sensores y automatización.",
    certification: "Cisco IoT Professional",
    youtubeUrl: YT_BASE + "iot+packet+tracer",
    linkedinUrl: createLinkedInUrl("Programación IoT", 5)
  },
  {
    id: 14, ciclo: 5,
    title: "Seguridad Perimetral",
    officialName: "Fortinet Security Journey",
    links: [
      { label: "Threat Landscape", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape" },
      { label: "Technical Intro", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_technical-introduction-to-the-threat-landscape" },
      { label: "FortiTraining Portal", url: "https://training.fortinet.com/" }
    ],
    description: "Configuración de firewalls de próxima generación y defensa de bordes corporativos.",
    certification: "Fortinet NSE 1 & 2",
    youtubeUrl: YT_BASE + "fortinet+security",
    linkedinUrl: createLinkedInUrl("Seguridad Perimetral", 5)
  },
  {
    id: 15, ciclo: 5,
    title: "Redes Convergentes",
    officialName: "PBXact Essentials",
    links: [{ label: "Sangoma PBXact", url: "https://training.sangoma.com/course/view.php?id=2" }],
    description: "Implementación de telefonía IP y comunicaciones unificadas corporativas.",
    certification: "Sangoma Certified Associate",
    youtubeUrl: YT_BASE + "converged+networks",
    linkedinUrl: createLinkedInUrl("Redes Convergentes", 5)
  },
  // CICLO 6
  {
    id: 16, ciclo: 6,
    title: "Virtualización y Cloud",
    officialName: "Cloud and Virtualization Concepts",
    links: [{ label: "NDG Cloud Course", url: "https://www.netdevgroup.com/online/courses/virtualization/cloud-and-virtualization-concepts" }],
    description: "Conceptos de nube híbrida, hipervisores y gestión de infraestructura virtual.",
    certification: "NDG Cloud Certification",
    youtubeUrl: YT_BASE + "virtualization",
    linkedinUrl: createLinkedInUrl("Virtualización y Cloud", 6)
  },
  {
    id: 17, ciclo: 6,
    title: "Comunicaciones Inalámbricas",
    officialName: "Wireless Technologies",
    links: [{ label: "Wireless Fundamentals", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL" }],
    description: "Estándares WiFi, radiofrecuencia y despliegue de redes WLAN empresariales.",
    certification: "Cisco Wireless Mastery",
    youtubeUrl: YT_BASE + "wireless+networks",
    linkedinUrl: createLinkedInUrl("Comunicaciones Inalámbricas", 6)
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Misión Final: Graduación",
  content: "Convertirse en un Profesional Certificado en Administración de Redes y Comunicaciones, liderando la transformación digital."
};
