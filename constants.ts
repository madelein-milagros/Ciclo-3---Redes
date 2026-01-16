
import { Course, Checkpoint } from './types';

export const COLORS = {
  COURSE_START: '#a81d3a',
  COURSE_END: '#830c24',
  CHECKPOINT_START: '#c41e45',
  CHECKPOINT_END: '#9a132f',
  ACCENT: '#d62d51',
  TEXT_LIGHT: '#ffffff',
};

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Programación Móvil para Redes",
    officialName: "Tecsup – Python Essentials 2",
    links: [
      {
        label: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/python-essentials-2?courseLang=es-XL&instance_id=e679ad5b-1a5e-4b29-860b-39fa2807240f"
      }
    ],
    description: "Programación orientada a objetos en Python, manejo de excepciones, archivos, módulos y librerías estándar.",
    certification: "Cisco Networking Academy – Python Essentials 2"
  },
  {
    id: 2,
    title: "Sistemas Operativos de Código Abierto",
    officialName: "Tecsup – Fundamentos de Linux",
    links: [
      {
        label: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/fundamentos-de-linux?courseLang=es-XL&instance_id=2924e557-a2f0-4a87-826e-cda20c0e5e6e"
      }
    ],
    description: "Comandos básicos de Linux, gestión de usuarios, permisos, procesos y administración del sistema.",
    certification: "Cisco Networking Academy – Linux Essentials / LPI Linux Essentials"
  },
  {
    id: 3,
    title: "Administración de Sistemas Operativos",
    officialName: "Tecsup – Operating Systems Basics",
    links: [
      {
        label: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/operating-systems-basics?courseLang=en-US&instance_id=7c97b63e-e290-41f5-abb3-600ec1168b07"
      }
    ],
    description: "Arquitectura de sistemas operativos, gestión de memoria, procesos, seguridad y virtualización básica.",
    certification: "Cisco Networking Academy – Operating Systems Basics"
  },
  {
    id: 4,
    title: "Protocolos de Enrutamiento",
    officialName: "Tecsup – Networking Essentials",
    links: [
      {
        label: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/networking-essentials?courseLang=es-XL&instance_id=999ba940-73d6-4ee2-befe-ffebe1ac77ab"
      }
    ],
    description: "Principios de enrutamiento estático y dinámico (RIP, OSPF), direccionamiento IP, subredes y configuración de routers.",
    certification: "Cisco Networking Academy – Networking Essentials (base para CCNA)"
  },
  {
    id: 5,
    title: "Matemáticas para las redes de comunicaciones",
    officialName: "Tecsup – Introduction to Data Science",
    links: [
      {
        label: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/introduction-data-science?courseLang=es-XL&instance_id=9d70f027-e07b-4357-a85e-b66d409a23fc"
      }
    ],
    description: "Fundamentos de estadística, lógica binaria, álgebra booleana, criptografía básica y análisis de datos aplicado a redes.",
    certification: "Cisco Networking Academy – Introduction to Data Science"
  }
];

export const FINAL_MISSION: Checkpoint = {
  title: "Misión Final: Integración de Redes",
  content: "Implementa una red corporativa con OSPF, servidores Linux administrados por consola y scripts de automatización en Python."
};
