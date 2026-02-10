// internadda-next/types/index.ts

export interface Internship {
  id: string;
  title: string;
  company: string;
  category: string;
  image: string;
  stipend: string;
  location: string;
  type: string;
  status: 'ACTIVE' | 'CLOSED';
  description: string;
  skills: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  domain?: string;
  avatar?: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
}
