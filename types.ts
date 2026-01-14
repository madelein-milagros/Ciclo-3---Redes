
export interface Course {
  id: number;
  title: string;
  officialName: string;
  links: {
    label: string;
    url: string;
  }[];
  description: string;
  certification: string;
}

export interface Checkpoint {
  title: string;
  content: string;
}
