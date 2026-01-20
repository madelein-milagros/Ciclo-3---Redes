
export interface Course {
  id: number;
  ciclo: number;
  title: string;
  officialName: string;
  links: {
    label: string;
    url: string;
  }[];
  description: string;
  certification: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

export interface Checkpoint {
  title: string;
  content: string;
}
