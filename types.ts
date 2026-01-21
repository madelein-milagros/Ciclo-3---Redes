
export type CourseCategory = 'Infraestructura' | 'Programación' | 'Seguridad' | 'Virtualización';

export interface Course {
  id: number;
  ciclo: number;
  title: string;
  officialName: string;
  category: CourseCategory;
  links: {
    label: string;
    url: string;
  }[];
  description: string;
  certification: string;
  linkedinUrl?: string;
}

export interface Checkpoint {
  title: string;
  content: string;
}
