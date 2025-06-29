export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
  image: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}
