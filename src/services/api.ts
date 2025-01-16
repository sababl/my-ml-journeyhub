import axios from 'axios';
export interface BaseModel {
  id: string;
}
// Types for our data
export interface HomeData extends BaseModel {
  first_name: string;
  last_name: string;
  about: string;
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// First, add new interfaces for Category and Technology
export interface Category extends BaseModel {
  name: string;
  slug: string;
}

export interface Technology extends BaseModel {
  name: string;
  slug: string;
}

// Then modify ProjectData interface
export interface ProjectData extends BaseModel {
  title: string;
  description: string;
  technologies: Technology[]; 
  github_link: string;
  demo_link?: string;
  slug: string;
  category: Category[];     
  image: string;
}

export interface BlogPost extends BaseModel {
  title: string;
  slug: string;
  content: string;
  date: string;
}

export interface ResumeData {
  education: Education[];
  experience: WorkExperience[];
  skills: Skill[];
  certifications: Certification[];
}

interface Education extends BaseModel {
  institution: string;
  degree: string;
  start_date: string;
  end_date: string;
}

interface WorkExperience extends BaseModel {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
}

interface Skill extends BaseModel {
  name: string;
  level: string;
}

interface Certification extends BaseModel {
  name: string;
  issuer: string;
  date: string;
}

// API functions
export const fetchHomeData = async (): Promise<HomeData> => {
  const response = await axios.get('http://localhost:8000/api/home/1/');
  return response.data;
};

export const fetchProjects = async (): Promise<ProjectData[]> => {
  const response = await axios.get('http://localhost:8000/api/projects/');
  return response.data.results;
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await axios.get<PaginatedResponse<BlogPost>>('http://localhost:8000/api/posts/');
  return response.data.results;
};

export const fetchResumeData = async (): Promise<ResumeData> => {
  const [education, experience, skills, certifications] = await Promise.all([
    axios.get<Education[]>('http://localhost:8000/api/education/'),
    axios.get<WorkExperience[]>('http://localhost:8000/api/experience/'),
    axios.get<Skill[]>('http://localhost:8000/api/skills/'),
    axios.get<Certification[]>('http://localhost:8000/api/certifications/')
  ]);

  return {
    education: education.data,
    experience: experience.data,
    skills: skills.data,
    certifications: certifications.data
  };
};