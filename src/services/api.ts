// Types for our data
export interface HomeData {
  name: string;
  role: string;
  introduction: string;
}

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export interface ResumeData {
  experience: Array<{
    title: string;
    company: string;
    period: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
    details: string;
  }>;
  skills: {
    [category: string]: string[];
  };
  certifications: string[];
}

// API functions
export const fetchHomeData = async (): Promise<HomeData> => {
  // Simulated API call
  return {
    name: "Your Name",
    role: "AI/ML Engineer",
    introduction: "AI/ML Engineer passionate about building intelligent systems. Specializing in machine learning, deep learning, and software development."
  };
};

export const fetchProjects = async (): Promise<ProjectData[]> => {
  // Simulated API call
  return [
    {
      id: 1,
      title: "AI Image Generator",
      description: "A deep learning model that generates realistic images from text descriptions using GANs.",
      technologies: ["Python", "PyTorch", "React", "FastAPI"],
      category: "Machine Learning",
      github: "https://github.com/yourusername/ai-image-generator",
      demo: "https://demo-url.com",
    },
    {
      id: 2,
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis API using transformer models.",
      technologies: ["Python", "Transformers", "Flask", "Docker"],
      category: "NLP",
      github: "https://github.com/yourusername/sentiment-analysis",
    },
  ];
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  // Simulated API call
  return [
    {
      id: 1,
      title: "Understanding Transformer Architecture",
      excerpt: "A deep dive into the architecture that revolutionized natural language processing...",
      category: "Deep Learning",
      date: "2024-02-15",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Optimizing PyTorch Models for Production",
      excerpt: "Best practices and techniques for deploying efficient PyTorch models in production...",
      category: "MLOps",
      date: "2024-02-10",
      readTime: "6 min read",
    },
  ];
};

export const fetchResumeData = async (): Promise<ResumeData> => {
  // Simulated API call
  return {
    experience: [
      {
        title: "Senior AI Engineer",
        company: "Company Name",
        period: "2021 - Present",
        description: [
          "Led development of computer vision models for autonomous systems",
          "Improved model accuracy by 25% through innovative architecture changes",
          "Mentored junior engineers and conducted technical interviews"
        ],
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "University Name",
        period: "2019 - 2021",
        details: "Focus: Machine Learning and Artificial Intelligence",
      },
    ],
    skills: {
      Programming: ["Python", "JavaScript/TypeScript", "C++"],
      "ML/AI": ["PyTorch", "TensorFlow", "Scikit-learn"],
      Tools: ["Docker", "Git", "AWS/GCP"],
    },
    certifications: [
      "AWS Machine Learning Specialty",
      "Deep Learning Specialization - Coursera",
      "TensorFlow Developer Certificate",
    ],
  };
};