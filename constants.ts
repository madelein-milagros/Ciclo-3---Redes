
import { Course, Checkpoint } from './types';

export const COLORS = {
  COURSE_START: '#a81d3a',
  COURSE_END: '#830c24',
  CHECKPOINT_START: '#c41e45',
  CHECKPOINT_END: '#9a132f',
  ACCENT: '#d62d51',
  TEXT_LIGHT: '#ffffff',
};

const LI_BASE = "https://www.linkedin.com/feed/?shareActive=true&text=";

const createLinkedInUrl = (courseTitle: string, ciclo: number) => {
  const message = `¡Sigo avanzando! 🚀 Acabo de completar el curso de "${courseTitle}" del Ciclo ${ciclo} en Tecsup. Especializándome en Redes y Comunicaciones. #Tecsup2026 #Networking #Tecsup`;
  return LI_BASE + encodeURIComponent(message);
};

export const COURSES: Course[] = [
  // --- CICLO 1 ---
  {
    id: 1, ciclo: 1,
    title: "Soporte de Hardware y Software",
    officialName: "Conceptos Básico de Hardware de Computadora",
    category: "Infraestructura",
    links: [{ label: "Hardware Basics", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL&instance_id=bccb74b2-494d-4ded-9c09-259ae2429c18" }],
    description: "Fundamentos esenciales de arquitectura de computadoras y soporte técnico inicial.",
    certification: "Cisco IT Essentials",
    prepNote: "⚠️ NIVELACIÓN: Llevar este curso antes de iniciar el PRIMER CICLO para conocer los componentes físicos.",
    linkedinUrl: createLinkedInUrl("Soporte de Hardware", 1)
  },

  // --- CICLO 2 ---
  {
    id: 2, ciclo: 2,
    title: "Informática Aplicada (Redes)",
    officialName: "Introducción a la Ciberseguridad",
    category: "Programación",
    links: [{ label: "Ciberseguridad Intro", url: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL&instance_id=0d50742d-45ba-4a91-87b7-3a10282bcd2c" }],
    description: "Conceptos básicos de seguridad digital y protección de redes.",
    certification: "Cisco Intro Cert",
    prepNote: "💡 PREPARACIÓN: Completar este curso antes de iniciar el SEGUNDO CICLO para entender la protección de datos.",
    linkedinUrl: createLinkedInUrl("Informática Aplicada", 2)
  },
  {
    id: 3, ciclo: 2,
    title: "Programación básica para redes",
    officialName: "Fundamentos de Python 1",
    category: "Programación",
    links: [{ label: "Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=es-XL&instance_id=8e897e8c-3cc4-43be-8440-485e0e356a51" }],
    description: "Lógica de programación esencial para automatización de redes.",
    certification: "PCEP Python Institute",
    linkedinUrl: createLinkedInUrl("Programación Básica", 2)
  },
  {
    id: 4, ciclo: 2,
    title: "Electrónica y Hardware",
    officialName: "Conceptos Básicos de Hardware de Computadora",
    category: "Infraestructura",
    links: [{ label: "Hardware Avanzado", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL&instance_id=bccb74b2-494d-4ded-9c09-259ae2429c18" }],
    description: "Análisis profundo de componentes electrónicos y mantenimiento avanzado.",
    certification: "Hardware Advanced Badge",
    linkedinUrl: createLinkedInUrl("Electrónica y Hardware", 2)
  },
  {
    id: 5, ciclo: 2,
    title: "Implementación de Redes",
    officialName: "Conceptos básicos de redes",
    category: "Infraestructura",
    links: [
      { label: "Networking Basics", url: "https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL&instance_id=33f06ed4-d7e7-427c-91f1-f8d5ff8d15cb" },
      { label: "Packet Tracer Intro", url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=es-XL&instance_id=4b05e405-c08a-4482-a8c7-cda3d7ca39c2" },
      { label: "Exploring Networking", url: "https://www.netacad.com/courses/exploring-networking-cisco-packet-tracer?courseLang=es-XL&instance_id=bf3707f4-799a-4c80-b448-30917c4b9d5a" }
    ],
    description: "Configuración inicial y simulación de entornos de red profesional.",
    certification: "Packet Tracer Expert",
    linkedinUrl: createLinkedInUrl("Implementación de Redes", 2)
  },

  // --- CICLO 3 ---
  {
    id: 6, ciclo: 3,
    title: "Programación Movil para Redes",
    officialName: "Fundamentos de Python 2",
    category: "Programación",
    links: [{ label: "Python Essentials 2", url: "https://www.netacad.com/courses/python-essentials-2?courseLang=es-XL&instance_id=e679ad5b-1a5e-4b29-860b-39fa2807240f" }],
    description: "Desarrollo de scripts avanzados para gestión de dispositivos.",
    certification: "PCAP Python Institute",
    prepNote: "🚀 RECOMENDACIÓN: Finalizar Python 2 antes de iniciar el TERCER CICLO para dominar la automatización avanzada.",
    linkedinUrl: createLinkedInUrl("Programación Móvil", 3)
  },
  {
    id: 7, ciclo: 3,
    title: "Sistemas Operativos Open Source",
    officialName: "Fundamentos de Linux",
    category: "Virtualización",
    links: [{ label: "Netacad Linux", url: "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL&instance_id=2924e557-a2f0-4a87-826e-cda20c0e5e6e" }],
    description: "Dominio de la terminal de Linux y administración de servidores.",
    certification: "LPI Linux Essentials",
    linkedinUrl: createLinkedInUrl("Linux Fundamentals", 3)
  },
  {
    id: 8, ciclo: 3,
    title: "Administración de SS.OO.",
    officialName: "Operating Systems Basics",
    category: "Virtualización",
    links: [{ label: "OS Basics (EN)", url: "https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US&instance_id=7c97b63e-e290-41f5-abb3-600ec1168b07" }],
    description: "Gestión avanzada de sistemas operativos servidor y cliente.",
    certification: "OS Administrator Badge",
    linkedinUrl: createLinkedInUrl("Admin SS.OO.", 3)
  },
  {
    id: 9, ciclo: 3,
    title: "Protocolos de Enrutamiento",
    officialName: "Networking Essentials",
    category: "Infraestructura",
    links: [{ label: "Fundamentos de Redes", url: "https://www.netacad.com/courses/networking-essentials?courseLang=es-XL&instance_id=999ba940-73d6-4ee2-befe-ffebe1ac77ab" }],
    description: "Estudio profundo de protocolos capa 2 y 3.",
    certification: "CCNA Prep",
    linkedinUrl: createLinkedInUrl("Enrutamiento", 3)
  },
  {
    id: 10, ciclo: 3,
    title: "Matemáticas para Redes",
    officialName: "Introducción a la Ciencia de Datos",
    category: "Programación",
    links: [{ label: "Intro Data Science", url: "https://www.netacad.com/courses/introduction-data-science?courseLang=es-XL&instance_id=9d70f027-e07b-4357-a85e-b66d409a23fc" }],
    description: "Análisis cuantitativo aplicado a la optimización de flujos de datos.",
    certification: "Data Science Cert",
    linkedinUrl: createLinkedInUrl("Matemáticas Redes", 3)
  },
  {
    id: 11, ciclo: 3,
    title: "Inteligencia Artificial",
    officialName: "Introducción a la IA moderna",
    category: "Programación",
    links: [{ label: "Curso IA Moderna", url: "https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=es-XL&instance_id=65a23695-9c1b-4295-a2c9-64060f372e8e" }],
    description: "Fundamentos de IA y su impacto en la infraestructura de redes.",
    certification: "AI Fundamentals",
    linkedinUrl: createLinkedInUrl("Inteligencia Artificial", 3)
  },

  // --- CICLO 4 ---
  {
    id: 12, ciclo: 4,
    title: "Cableado y Fibra Óptica",
    officialName: "Cabling Residential MDU",
    category: "Infraestructura",
    links: [{ label: "CommScope WR9100", url: "https://www.commscopetraining.com/courses/cabling/wr9100/residentialmdu-cabling-solutions" }],
    description: "Implementación de redes físicas y soluciones CommScope.",
    certification: "CommScope Specialist",
    prepNote: "🏗️ PRE-REQUISITO: Realizar la formación técnica de CommScope antes de iniciar el CUARTO CICLO.",
    linkedinUrl: createLinkedInUrl("Cableado Estructurado", 4)
  },
  {
    id: 13, ciclo: 4,
    title: "Arquitectura de Servidores",
    officialName: "Scrum Fundamentals Certified",
    category: "Infraestructura",
    links: [{ label: "Scrum Cert", url: "https://www.scrumstudy.com/certification/scrum-fundamentals-certified" }],
    description: "Gestión ágil de proyectos de infraestructura tecnológica.",
    certification: "Scrum Certified",
    linkedinUrl: createLinkedInUrl("Arquitectura Servidores", 4)
  },
  {
    id: 14, ciclo: 4,
    title: "Ethical Hacking y Forense",
    officialName: "Hacker ético",
    category: "Seguridad",
    links: [{ label: "Curso Ethical Hacker", url: "https://www.netacad.com/courses/ethical-hacker?courseLang=es-XL&instance_id=9486cff1-0591-4e8a-8da7-d64e66d21481" }],
    description: "Técnicas de pentesting y análisis forense digital.",
    certification: "Ethical Hacker Badge",
    linkedinUrl: createLinkedInUrl("Ethical Hacking", 4)
  },
  {
    id: 15, ciclo: 4,
    title: "Servicios de Red",
    officialName: "ICANN DNS FUNDAMENTALS",
    category: "Infraestructura",
    links: [{ label: "DNS Learning", url: "https://www.icann.org/en/beginners/courses-and-learning" }],
    description: "Configuración y gestión de servicios DNS críticos.",
    certification: "DNS Specialist",
    linkedinUrl: createLinkedInUrl("Servicios de Red", 4)
  },

  // --- CICLO 5 ---
  {
    id: 16, ciclo: 5,
    title: "Programación para IoT",
    officialName: "Exploración de IoT con Packet Tracer",
    category: "Programación",
    links: [
      { label: "IoT Exploración PT", url: "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=es-XL&instance_id=7f399b76-2a0c-4e1c-bea7-7010a0a36e84" },
      { label: "Intro a IoT", url: "https://www.netacad.com/courses/introduction-iot?courseLang=es-XL&instance_id=59af6dee-7e65-4ae0-8fce-e2ae5e0a53eb" }
    ],
    description: "Conectividad de sensores y automatización de procesos industriales.",
    certification: "Cisco IoT Cert",
    prepNote: "🤖 PREPARACIÓN: Completar los módulos de IoT antes de iniciar el QUINTO CICLO para proyectos de domótica.",
    linkedinUrl: createLinkedInUrl("IoT Programación", 5)
  },
  {
    id: 17, ciclo: 5,
    title: "Tecnología de acceso",
    officialName: "Fundamentos de Ciberseguridad",
    category: "Seguridad",
    links: [{ label: "Cyber Essentials", url: "https://www.netacad.com/es/courses/cybersecurity-essentials?courseLang=es-XL&instance_id=46ebc9aa-bbd9-4867-b27d-5cfaa18f9bfa" }],
    description: "Protección de perímetros y control de acceso seguro.",
    certification: "Cybersecurity Essentials",
    linkedinUrl: createLinkedInUrl("Tecnología de Acceso", 5)
  },
  {
    id: 18, ciclo: 5,
    title: "Seguridad Perimetral",
    officialName: "Threat Landscape Fortinet",
    category: "Seguridad",
    links: [{ label: "Fortinet Library", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape" }],
    description: "Administración de firewalls y prevención de amenazas Fortinet.",
    certification: "NSE 1 Cert",
    linkedinUrl: createLinkedInUrl("Seguridad Perimetral", 5)
  },
  {
    id: 19, ciclo: 5,
    title: "Redes Convergentes",
    officialName: "PBXact Essentials",
    category: "Infraestructura",
    links: [{ label: "Sangoma Training", url: "https://training.sangoma.com/course/view.php?id=2" }],
    description: "Integración de voz, video y datos en plataformas unificadas.",
    certification: "Sangoma Certified",
    linkedinUrl: createLinkedInUrl("Redes Convergentes", 5)
  },

  // --- CICLO 6 ---
  {
    id: 20, ciclo: 6,
    title: "Virtualización y Cloud Computing",
    officialName: "Cloud and Virtualization Concepts",
    category: "Virtualización",
    links: [
      { label: "NDG Cloud Concepts", url: "https://www.netdevgroup.com/online/courses/virtualization/cloud-and-virtualization-concepts" },
      { label: "AWS Academy Cloud", url: "https://awsacademy.instructure.com/courses/156023" }
    ],
    description: "Implementación de nubes privadas e híbridas con AWS.",
    certification: "AWS Cloud Practitioner",
    prepNote: "☁️ RECOMENDACIÓN: Llevar estos cursos Cloud antes de iniciar el SEXTO CICLO para el despliegue de infraestructuras.",
    linkedinUrl: createLinkedInUrl("Virtualización y Cloud", 6)
  },
  {
    id: 21, ciclo: 6,
    title: "Interoperatividad Redes Industriales",
    officialName: "Industrial Networking Essentials",
    category: "Infraestructura",
    links: [{ label: "Netacad Industrial", url: "https://www.netacad.com/courses/industrial-networking-essentials?courseLang=en-US&instance_id=5778eeea-95b0-47a8-a69e-d9b5e0a10474" }],
    description: "Conexión de sistemas OT con infraestructuras IT en entornos industriales.",
    certification: "Industrial Specialist",
    linkedinUrl: createLinkedInUrl("Redes Industriales", 6)
  },
  {
    id: 22, ciclo: 6,
    title: "Comunicaciones Inalámbricas",
    officialName: "Wi-Fi Fundamentals",
    category: "Infraestructura",
    links: [{ label: "Wi-Fi Fundamentals", url: "https://learning.cambiumnetworks.com/learn/courses/1270/enterprise-wi-fi-fundamentals-elearning?generated_by=67770&hash=1ac6be5f71ac2552b8eb56da58d422a5fc82dc7c" }],
    description: "Diseño y optimización de redes inalámbricas corporativas con Cambium Networks.",
    certification: "Cambium Certified",
    linkedinUrl: createLinkedInUrl("Wi-Fi Inalámbrico", 6)
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Arquitecto de Redes 2026",
  content: "¡Misión Cumplida! Has completado el Roadmap Profesional de Redes y Comunicaciones de Tecsup. El éxito te pertenece."
};
