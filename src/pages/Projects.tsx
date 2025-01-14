import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
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
  // Add more projects as needed
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const categories = ["all", ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = projects.filter(project => 
    filter === "all" ? true : project.category === filter
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Projects</h1>
        
        <div className="flex gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary rounded-md text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;