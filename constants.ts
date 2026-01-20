
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
  // CICLO 1
  {
    id: 1, ciclo: 1,
    title: "Soporte de Hardware y Software",
    officialName: "IT Essentials - Computer Hardware Basics",
    category: "Infraestructura",
    links: [
      { label: "Curso: Hardware Basics", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL" }
    ],
    description: "Instalación, configuración y mantenimiento de componentes de hardware y sistemas operativos base.",
    certification: "Cisco Networking Academy Cert",
    youtubeUrl: "https://www.youtube.com/results?search_query=it+essentials+tecsup",
    linkedinUrl: createLinkedInUrl("Soporte de Hardware y Software", 1)
  },
  // CICLO 2
  {
    id: 2, ciclo: 2,
    title: "Informática Aplicada (Redes)",
    officialName: "Introducción a la Ciberseguridad",
    category: "Seguridad",
    links: [
      { label: "Curso: Ciberseguridad", url: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL&instance_id=0d50742d-45ba-4a91-87b7-3a10282bcd2c" }
    ],
    description: "Principios de protección de datos, identidad digital y seguridad en redes domésticas y empresariales.",
    certification: "Cisco Cyber Intro Badge",
    youtubeUrl: "https://www.youtube.com/results?search_query=ciberseguridad+redes+tecsup",
    linkedinUrl: createLinkedInUrl("Informática Aplicada", 2)
  },
  {
    id: 3, ciclo: 2,
    title: "Programación básica para redes",
    officialName: "Fundamentos de Python 1",
    category: "Programación",
    links: [
      { label: "Curso: Python Essentials 1", url: "https://www.netacad.com/courses/python-essentials-1?courseLang=es-XL&instance_id=8e897e8c-3cc4-43be-8440-485e0e356a51" }
    ],
    description: "Introducción a la lógica de programación y desarrollo de scripts básicos en Python para administración.",
    certification: "Python Institute PCEP",
    youtubeUrl: "https://www.youtube.com/results?search_query=python+for+networking+tecsup",
    linkedinUrl: createLinkedInUrl("Programación básica", 2)
  },
  {
    id: 4, ciclo: 2,
    title: "Electrónica y Hardware",
    officialName: "Conceptos Básicos de Hardware",
    category: "Infraestructura",
    links: [
      { label: "Curso: Hardware Avanzado", url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL&instance_id=bccb74b2-494d-4ded-9c09-259ae2429c18" }
    ],
    description: "Análisis de circuitos, componentes electrónicos y arquitectura avanzada de computadoras.",
    certification: "Hardware Specialist",
    linkedinUrl: createLinkedInUrl("Electrónica y Hardware", 2)
  },
  {
    id: 5, ciclo: 2,
    title: "Implementación de Redes",
    officialName: "Networking Basics & Packet Tracer",
    category: "Infraestructura",
    links: [
      { label: "Conceptos Básicos de Redes", url: "https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL&instance_id=33f06ed4-d7e7-427c-91f1-f8d5ff8d15cb" },
      { label: "Cisco Packet Tracer Intro", url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=es-XL&instance_id=4b05e405-c08a-4482-a8c7-cda3d7ca39c2" }
    ],
    description: "Simulación de redes, configuración de routers y protocolos de comunicación iniciales.",
    certification: "Packet Tracer Expert",
    youtubeUrl: "https://www.youtube.com/results?search_query=cisco+packet+tracer+redes+tecsup",
    linkedinUrl: createLinkedInUrl("Implementación de Redes", 2)
  },
  // CICLO 3
  {
    id: 6, ciclo: 3,
    title: "Programación Móvil para Redes",
    officialName: "Python Essentials 2",
    category: "Programación",
    links: [
      { label: "Curso: Python Essentials 2", url: "https://www.netacad.com/courses/python-essentials-2?courseLang=es-XL&instance_id=e679ad5b-1a5e-4b29-860b-39fa2807240f" }
    ],
    description: "Desarrollo avanzado en Python enfocado en automatización de tareas de red y scripts de gestión.",
    certification: "Python Institute PCAP",
    youtubeUrl: "https://www.youtube.com/results?search_query=python+essentials+2+networking",
    linkedinUrl: createLinkedInUrl("Programación Móvil", 3)
  },
  {
    id: 7, ciclo: 3,
    title: "Sistemas Operativos Código Abierto",
    officialName: "Linux Essentials",
    category: "Virtualización",
    links: [
      { label: "Fundamentos de Linux", url: "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL&instance_id=2924e557-a2f0-4a87-826e-cda20c0e5e6e" },
      { label: "Linux Essentials Course", url: "https://www.netdevgroup.com/online/courses/open-source/linux-essentials" }
    ],
    description: "Dominio de la línea de comandos de Linux, gestión de archivos y administración del sistema.",
    certification: "LPI Linux Essentials",
    youtubeUrl: "https://www.youtube.com/results?search_query=linux+essentials+networking+tecsup",
    linkedinUrl: createLinkedInUrl("Linux OS", 3)
  },
  {
    id: 8, ciclo: 3,
    title: "Administración de Sistemas Operativos",
    officialName: "Operating Systems Basics",
    category: "Virtualización",
    links: [
      { label: "Admin OS Basics", url: "https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US&instance_id=7c97b63e-e290-41f5-abb3-600ec1168b07" }
    ],
    description: "Instalación y configuración avanzada de sistemas operativos servidor y cliente.",
    certification: "OS Admin Cert",
    linkedinUrl: createLinkedInUrl("Admin SS.OO.", 3)
  },
  {
    id: 9, ciclo: 3,
    title: "Protocolos de Enrutamiento",
    officialName: "Networking Essentials",
    category: "Infraestructura",
    links: [
      { label: "Networking Essentials", url: "https://www.netacad.com/courses/networking-essentials?courseLang=es-XL&instance_id=999ba940-73d6-4ee2-befe-ffebe1ac77ab" }
    ],
    description: "Enrutamiento estático y dinámico, VLSM, y protocolos de comunicación de capa 3.",
    certification: "CCNA Preparation",
    youtubeUrl: "https://www.youtube.com/results?search_query=routing+protocols+networking",
    linkedinUrl: createLinkedInUrl("Enrutamiento", 3)
  },
  {
    id: 10, ciclo: 3,
    title: "Matemáticas para Redes",
    officialName: "Introduction to Data Science",
    category: "Programación",
    links: [
      { label: "Intro a Data Science", url: "https://www.netacad.com/courses/introduction-data-science?courseLang=es-XL&instance_id=9d70f027-e07b-4357-a85e-b66d409a23fc" }
    ],
    description: "Aplicación de estadística y análisis de datos en el tráfico y rendimiento de redes.",
    certification: "Cisco Data Science Badge",
    linkedinUrl: createLinkedInUrl("Mates para Redes", 3)
  },
  // CICLO 4
  {
    id: 11, ciclo: 4,
    title: "Cableado y Fibra Óptica",
    officialName: "CommScope Residential Cabling",
    category: "Infraestructura",
    links: [
      { label: "CommScope WR9100", url: "https://www.commscopetraining.com/courses/cabling/wr9100/residentialmdu-cabling-solutions" }
    ],
    description: "Normativas de cableado estructurado, empalmes de fibra óptica y certificación de enlaces.",
    certification: "CommScope Professional",
    linkedinUrl: createLinkedInUrl("Cableado Estructurado", 4)
  },
  {
    id: 12, ciclo: 4,
    title: "Arquitectura de Servidores",
    officialName: "Scrum Fundamentals TEO",
    category: "Programación",
    links: [
      { label: "Certificación Scrum", url: "https://www.scrumstudy.com/certification/certification-hierarchy" }
    ],
    description: "Implementación de metodologías ágiles en el despliegue de infraestructura y servidores.",
    certification: "Scrum Fundamentals",
    youtubeUrl: "https://www.youtube.com/results?search_query=scrum+fundamentals+tecsup",
    linkedinUrl: createLinkedInUrl("Arquitectura Servidores", 4)
  },
  {
    id: 13, ciclo: 4,
    title: "Ethical Hacking y Forense",
    officialName: "Cisco Ethical Hacker",
    category: "Seguridad",
    links: [
      { label: "Curso: Ethical Hacker", url: "https://www.netacad.com/courses/ethical-hacker?courseLang=es-XL&instance_id=9486cff1-0591-4e8a-8da7-d64e66d21481" }
    ],
    description: "Técnicas de pentesting, análisis de vulnerabilidades y defensa proactiva de sistemas.",
    certification: "Cisco Ethical Hacker Cert",
    youtubeUrl: "https://www.youtube.com/results?search_query=ethical+hacking+forense+tecsup",
    linkedinUrl: createLinkedInUrl("Ethical Hacking", 4)
  },
  {
    id: 14, ciclo: 4,
    title: "Servicios de Red",
    officialName: "ICANN DNS Fundamentals",
    category: "Infraestructura",
    links: [
      { label: "ICANN DNS Academy", url: "https://www.icann.org/en/beginners/courses-and-learning" }
    ],
    description: "Configuración y gestión de servicios DNS, DHCP, Web y FTP en entornos escalables.",
    certification: "DNS Specialist",
    linkedinUrl: createLinkedInUrl("Servicios Red", 4)
  },
  // CICLO 5
  {
    id: 15, ciclo: 5,
    title: "Programación IoT",
    officialName: "Introduction to IoT",
    category: "Programación",
    links: [
      { label: "Exploración IoT PT", url: "https://www.netacad.com/courses/introduction-iot?courseLang=es-XL&instance_id=59af6dee-7e65-4ae0-8fce-e2ae5e0a53eb" },
      { label: "IoT Digital Transformation", url: "https://www.netacad.com/courses/exploring-iot-cisco-packet-tracer?courseLang=es-XL&instance_id=7f399b76-2a0c-4e1c-bea7-7010a0a36e84" }
    ],
    description: "Conexión de dispositivos, captura de datos mediante sensores y análisis IoT.",
    certification: "IoT Fundamentals",
    youtubeUrl: "https://www.youtube.com/results?search_query=iot+networking+tecsup",
    linkedinUrl: createLinkedInUrl("Programación IoT", 5)
  },
  {
    id: 16, ciclo: 5,
    title: "Tecnología de Acceso",
    officialName: "Cybersecurity Essentials",
    category: "Seguridad",
    links: [
      { label: "Fundamentos Ciberseguridad", url: "https://www.netacad.com/es/courses/cybersecurity-essentials?courseLang=es-XL&instance_id=46ebc9aa-bbd9-4867-b27d-5cfaa18f9bfa" }
    ],
    description: "Protección de los bordes de la red, firewalls y políticas de acceso remoto seguro.",
    certification: "Cisco Cyber Essentials",
    linkedinUrl: createLinkedInUrl("Tecnología Acceso", 5)
  },
  {
    id: 17, ciclo: 5,
    title: "Seguridad Perimetral",
    officialName: "Fortinet Library Training",
    category: "Seguridad",
    links: [
      { label: "Threat Landscape", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_introduction-to-the-threat-landscape" },
      { label: "Getting Started Fortinet", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_getting-started-in-cybersecurity" },
      { label: "Technical Intro", url: "https://training.fortinet.com/local/staticpage/view.php?page=library_technical-introduction-to-cybersecurity" }
    ],
    description: "Administración de equipos FortiGate y arquitecturas de seguridad de red Fortinet.",
    certification: "Fortinet NSE 1, 2 & 3",
    youtubeUrl: "https://www.youtube.com/results?search_query=fortinet+security+tecsup",
    linkedinUrl: createLinkedInUrl("Seguridad Perimetral", 5)
  },
  {
    id: 18, ciclo: 5,
    title: "Redes Convergentes",
    officialName: "PBXact Sangoma Essentials",
    category: "Infraestructura",
    links: [
      { label: "PBXact Sangoma", url: "https://training.sangoma.com/course/view.php?id=2" }
    ],
    description: "Voz sobre IP (VoIP), telefonía IP y servicios de comunicación unificada.",
    certification: "Sangoma PBXact Certified",
    linkedinUrl: createLinkedInUrl("Redes Convergentes", 5)
  },
  // CICLO 6
  {
    id: 19, ciclo: 6,
    title: "Virtualización y Cloud",
    officialName: "Cloud and Virtualization Concepts",
    category: "Virtualización",
    links: [
      { label: "Cloud Concepts Course", url: "https://www.netdevgroup.com/online/courses/virtualization/cloud-and-virtualization-concepts" }
    ],
    description: "Despliegue de infraestructura en la nube, hipervisores y contenedores.",
    certification: "Cloud Computing Specialist",
    youtubeUrl: "https://www.youtube.com/results?search_query=cloud+virtualization+tecsup",
    linkedinUrl: createLinkedInUrl("Cloud Computing", 6)
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Especialista en Redes 2026",
  content: "¡Felicidades! Has completado el Roadmap Tecnológico. Ahora estás preparado para liderar la transformación digital en infraestructura y seguridad."
};
