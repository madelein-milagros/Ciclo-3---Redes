
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
  const message = `¡Sigo avanzando! 🚀 Acabo de completar el curso de "${courseTitle}" del Ciclo ${ciclo} en Tecsup. Especializándome en Redes y Comunicaciones. #Tecsup2026 #Networking`;
  return LI_BASE + encodeURIComponent(message);
};

export const COURSES: Course[] = [
  // --- CICLO 1 ---
  {
    id: 1, ciclo: 1,
    title: "Soporte de Hardware y Software",
    officialName: "Conceptos Básico de Hardware de Computadora",
    category: "Infraestructura",
    links: [
      { label: "Curso: Hardware Basics", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL" }
    ],
    description: "Instalación, configuración y mantenimiento de componentes de hardware y sistemas operativos base.",
    certification: "Cisco IT Essentials",
    linkedinUrl: createLinkedInUrl("Soporte de Hardware y Software", 1)
  },
  {
    id: 2, ciclo: 1,
    title: "Informática Aplicada (Redes)",
    officialName: "Introducción a la Ciberseguridad",
    category: "Programación",
    links: [
      { label: "Curso: Ciberseguridad", url: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL&instance_id=0d50742d-45ba-4a91-87b7-3a10282bcd2c" }
    ],
    description: "Principios de protección de datos, identidad digital y seguridad en redes.",
    certification: "Cisco Cyber Intro",
    linkedinUrl: createLinkedInUrl("Informática Aplicada", 1)
  },
  {
    id: 3, ciclo: 1,
    title: "Programación básica para redes",
    officialName: "Fundamentos de Python 1",
    category: "Programación",
    links: [
      { label: "Curso: Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=es-XL&instance_id=8e897e8c-3cc4-43be-8440-485e0e356a51" }
    ],
    description: "Introducción a la lógica de programación y desarrollo de scripts básicos en Python.",
    certification: "Python Institute PCEP",
    linkedinUrl: createLinkedInUrl("Programación básica", 1)
  },
  {
    id: 4, ciclo: 1,
    title: "Electrónica y Hardware",
    officialName: "Conceptos Básicos de Hardware de Computadora",
    category: "Infraestructura",
    links: [
      { label: "Curso: Hardware Avanzado", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL&instance_id=bccb74b2-494d-4ded-9c09-259ae2429c18" }
    ],
    description: "Análisis de circuitos, componentes electrónicos y arquitectura de computadoras.",
    certification: "Hardware Specialist",
    linkedinUrl: createLinkedInUrl("Electrónica y Hardware", 1)
  },
  {
    id: 5, ciclo: 1,
    title: "Implementación de Redes",
    officialName: "Conceptos básicos de redes",
    category: "Infraestructura",
    links: [
      { label: "Networking Basics", url: "https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL&instance_id=33f06ed4-d7e7-427c-91f1-f8d5ff8d15cb" },
      { label: "Packet Tracer Intro", url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=es-XL&instance_id=4b05e405-c08a-4482-a8c7-cda3d7ca39c2" },
      { label: "Exploring Networking", url: "https://www.netacad.com/courses/exploring-networking-cisco-packet-tracer?courseLang=es-XL&instance_id=bf3707f4-799a-4c80-b448-30917c4b9d5a" }
    ],
    description: "Simulación de redes, configuración de routers y protocolos de comunicación iniciales.",
    certification: "Packet Tracer Expert",
    linkedinUrl: createLinkedInUrl("Implementación de Redes", 1)
  },

  // --- CICLO 2 ---
  {
    id: 6, ciclo: 2,
    title: "Programación Movil para Redes",
    officialName: "Fundamentos de Python 2",
    category: "Programación",
    links: [
      { label: "Curso: Python Essentials 2", url: "https://www.netacad.com/courses/python-essentials-2?courseLang=es-XL&instance_id=e679ad5b-1a5e-4b29-860b-39fa2807240f" }
    ],
    description: "Desarrollo avanzado en Python enfocado en automatización y scripts de gestión.",
    certification: "Python Institute PCAP",
    linkedinUrl: createLinkedInUrl("Programación Móvil", 2)
  },
  {
    id: 7, ciclo: 2,
    title: "Sistemas Operativos Código Abierto",
    officialName: "Fundamentos de Linux",
    category: "Virtualización",
    links: [
      { label: "Netacad Linux", url: "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL&instance_id=2924e557-a2f0-4a87-826e-cda20c0e5e6e" }
    ],
    description: "Dominio de la línea de comandos de Linux y administración del sistema open source.",
    certification: "LPI Linux Essentials",
    linkedinUrl: createLinkedInUrl("Linux OS", 2)
  },
  {
    id: 8, ciclo: 2,
    title: "Administración de Sistemas Operativos",
    officialName: "Conceptos básicos sobre sistemas operativos",
    category: "Virtualización",
    links: [
      { label: "OS Basics (EN)", url: "https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US&instance_id=7c97b63e-e290-41f5-abb3-600ec1168b07" }
    ],
    description: "Instalación y configuración avanzada de sistemas operativos servidor y cliente.",
    certification: "OS Admin Cert",
    linkedinUrl: createLinkedInUrl("Admin SS.OO.", 2)
  },
  {
    id: 9, ciclo: 2,
    title: "Protocolos de Enrutamiento",
    officialName: "Networking Essentials",
    category: "Infraestructura",
    links: [
      { label: "Networking Essentials", url: "https://www.netacad.com/courses/networking-essentials?courseLang=es-XL&instance_id=999ba940-73d6-4ee2-befe-ffebe1ac77ab" }
    ],
    description: "Enrutamiento estático y dinámico, VLSM, y protocolos de comunicación de capa 3.",
    certification: "CCNA Prep",
    linkedinUrl: createLinkedInUrl("Enrutamiento", 2)
  },
  {
    id: 10, ciclo: 2,
    title: "Matemáticas para Redes",
    officialName: "Introducción a la ciencia de datos",
    category: "Programación",
    links: [
      { label: "Intro a Data Science", url: "https://www.netacad.com/courses/introduction-data-science?courseLang=es-XL&instance_id=9d70f027-e07b-4357-a85e-b66d409a23fc" }
    ],
    description: "Aplicación de estadística y análisis de datos en el rendimiento de redes.",
    certification: "Data Science Badge",
    linkedinUrl: createLinkedInUrl("Matemáticas Redes", 2)
  },
  {
    id: 11, ciclo: 2,
    title: "Inteligencia Artificial",
    officialName: "Introducción a la IA moderna",
    category: "Programación",
    links: [
      { label: "Curso: IA Moderna", url: "https://www.netacad.com/courses/introduction-to-modern-ai?courseLang=es-XL&instance_id=65a23695-9c1b-4295-a2c9-64060f372e8e" }
    ],
    description: "Conceptos fundamentales de Inteligencia Artificial y su aplicación en la tecnología actual.",
    certification: "Cisco IA Fundamentals",
    linkedinUrl: createLinkedInUrl("Inteligencia Artificial", 2)
  },

  // --- CICLO 3 ---
  {
    id: 12, ciclo: 3,
    title: "Cableado y Fibra Óptica",
    officialName: "CommScope Residential MDU Cabling",
    category: "Infraestructura",
    links: [
      { label: "CommScope WR9100", url: "https://www.commscopetraining.com/courses/cabling/wr9100/residentialmdu-cabling-solutions" }
    ],
    description: "Sistemas de cableado estructurado, fibra óptica y soluciones residenciales MDU.",
    certification: "CommScope Certified",
    linkedinUrl: createLinkedInUrl("Cableado y Fibra", 3)
  },
  {
    id: 13, ciclo: 3,
    title: "Arquitectura de Servidores",
    officialName: "Scrum Fundamentals Certified",
    category: "Infraestructura",
    links: [
      { label: "ScrumStudy Cert", url: "https://www.scrumstudy.com/certification/scrum-fundamentals-certified" }
    ],
    description: "Metodologías ágiles aplicadas a la infraestructura de servidores.",
    certification: "Scrum Fundamentals",
    linkedinUrl: createLinkedInUrl("Arquitectura Servidores", 3)
  },
  {
    id: 14, ciclo: 3,
    title: "Ethical Hacking y Forense",
    officialName: "Hacker ético",
    category: "Infraestructura",
    links: [
      { label: "Curso: Hacker Ético", url: "https://www.netacad.com/courses/ethical-hacker?courseLang=es-XL&instance_id=9486cff1-0591-4e8a-8da7-d64e66d21481" }
    ],
    description: "Técnicas de pentesting, análisis de vulnerabilidades y defensa de sistemas.",
    certification: "Cisco Ethical Hacker",
    linkedinUrl: createLinkedInUrl("Ethical Hacking", 3)
  },
  {
    id: 15, ciclo: 3,
    title: "Servicios de Red",
    officialName: "DNS Fundamentals",
    category: "Infraestructura",
    links: [
      { label: "ICANN Academy", url: "https://www.icann.org/en/beginners/courses-and-learning" }
    ],
    description: "Configuración y gestión de servicios DNS y protocolos críticos de red.",
    certification: "DNS Specialist",
    linkedinUrl: createLinkedInUrl("Servicios de Red", 3)
  },

  // --- CICLO 4 ---
  {
    id: 16, ciclo: 4,
    title: "Programación para IoT",
    officialName: "Exploración de IoT con Cisco Packet Tracer",
    category: "Programación",
    links: [
      { label: "Exploración IoT PT", url: "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=es-XL&instance_id=7f399b76-2a0c-4e1c-bea7-7010a0a36e84" },
      { label: "Introduction to IoT", url: "https://www.netacad.com/courses/introduction-iot?courseLang=es-XL&instance_id=59af6dee-7e65-4ae0-8fce-e2ae5e0a53eb" }
    ],
    description: "Conexión de dispositivos, captura de datos y automatización mediante IoT.",
    certification: "IoT Fundamentals",
    linkedinUrl: createLinkedInUrl("Programación IoT", 4)
  },
  {
    id: 17, ciclo: 4,
    title: "Tecnología de Acceso",
    officialName: "Fundamentos de Ciberseguridad",
    category: "Seguridad",
    links: [
      { label: "Fundamentos Ciberseguridad", url: "https://www.netacad.com/es/courses/cybersecurity-essentials?courseLang=es-XL&instance_id=46ebc9aa-bbd9-4867-b27d-5cfaa18f9bfa" }
    ],
    description: "Protección de los bordes de la red, firewalls y políticas de acceso seguro.",
    certification: "Cisco Cyber Essentials",
    linkedinUrl: createLinkedInUrl("Tecnología Acceso", 4)
  },
  {
    id: 18, ciclo: 4,
    title: "Seguridad Perimetral",
    officialName: "Introduction to the Threat Landscape",
    category: "Seguridad",
    links: [
      { label: "Fortinet Training", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape" }
    ],
    description: "Administración de arquitecturas de seguridad de red Fortinet y prevención de amenazas.",
    certification: "Fortinet NSE",
    linkedinUrl: createLinkedInUrl("Seguridad Perimetral", 4)
  },
  {
    id: 19, ciclo: 4,
    title: "Redes Convergentes",
    officialName: "PBXact Essentials",
    category: "Infraestructura",
    links: [
      { label: "Sangoma PBXact", url: "https://training.sangoma.com/course/view.php?id=2" }
    ],
    description: "Voz sobre IP (VoIP), telefonía IP y servicios de comunicación unificada.",
    certification: "Sangoma Certified",
    linkedinUrl: createLinkedInUrl("Redes Convergentes", 4)
  },

  // --- CICLO 5 ---
  {
    id: 20, ciclo: 5,
    title: "Virtualización y Cloud Computing",
    officialName: "Cloud and Virtualization Concepts",
    category: "Virtualización",
    links: [
      { label: "NDG Cloud Concepts", url: "https://www.netdevgroup.com/online/courses/virtualization/cloud-and-virtualization-concepts" }
    ],
    description: "Despliegue de infraestructura en la nube, hipervisores y contenedores.",
    certification: "Cloud Specialist",
    linkedinUrl: createLinkedInUrl("Virtualización y Cloud", 5)
  },
  {
    id: 21, ciclo: 5,
    title: "Comunicaciones Inalámbricas",
    officialName: "Wi-Fi Fundamentals",
    category: "Infraestructura",
    links: [
      { label: "Cambium Enterprise Wi-Fi", url: "https://learning.cambiumnetworks.com/learn/courses/1270/enterprise-wi-fi-fundamentals-elearning?generated_by=67770&hash=1ac6be5f71ac2552b8eb56da58d422a5fc82dc7c" }
    ],
    description: "Diseño, implementación y optimización de redes inalámbricas corporativas.",
    certification: "Cambium Certified",
    linkedinUrl: createLinkedInUrl("Comunicaciones Inalámbricas", 5)
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Especialista en Redes 2026",
  content: "¡Felicidades! Has completado el Roadmap Tecnológico. Estás listo para liderar la transformación digital."
};
