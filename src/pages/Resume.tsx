import { FileDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchResumeData } from "../services/api";
import { Skeleton } from "@/components/ui/skeleton";

const Resume = () => {
  const { data: resume, isLoading } = useQuery({
    queryKey: ['resume'],
    queryFn: fetchResumeData,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-8">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-10 w-40" />
            </div>
            {[1, 2, 3].map(i => (
              <Skeleton key={i} className="h-48 mb-8" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Resume</h1>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <FileDown className="h-5 w-5 mr-2" />
              Download PDF
            </a>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h2>
            <div className="space-y-6">
              {resume?.experience.map((exp, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-primary">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company} • {exp.period}</p>
                  <ul className="mt-2 list-disc list-inside text-gray-600">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="space-y-4">
              {resume?.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-primary">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution} • {edu.period}</p>
                  <p className="text-gray-600">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {resume && Object.entries(resume.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-medium text-primary mb-2">{category}</h3>
                  <ul className="text-gray-600">
                    {skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
            <ul className="space-y-2 text-gray-600">
              {resume?.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;