export interface Service {
  title: string;
  description: string;
  icon: string;
  link: string;
  image: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}
