
import { FileDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchResumeData } from "../services/api";
import { Skeleton } from "@/components/ui/skeleton";


const Resume = () => {
  const { data: resume, isLoading, error } = useQuery({
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

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-red-500">Error loading resume data</p>
          </div>
        </div>
      </div>
    );
  }

  if (!resume) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Resume</h1>
            <a
              href="/resume.pdf"
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
              {resume.experience && resume.experience.length > 0 ? (
                resume.experience.map((exp) => (
                  <div key={exp.id}>
                    <h3 className="text-lg font-medium text-primary">{exp.position}</h3>
                    <p className="text-gray-600">
                      {exp.company} • {exp.start_date} - {exp.end_date}
                    </p>
                    {exp.description && (
                      <p className="mt-2 text-gray-600">{exp.description}</p>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No experience listed</p>
              )}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="space-y-4">
              {resume.education && resume.education.length > 0 ? (
                resume.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="text-lg font-medium text-primary">{edu.degree}</h3>
                    <p className="text-gray-600">
                      {edu.institution} • {edu.start_date} - {edu.end_date}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No education listed</p>
              )}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {resume.skills && resume.skills.length > 0 ? (
                resume.skills.map((skill) => (
                  <div key={skill.id}>
                    <span className="text-gray-600">{skill.name} - {skill.level || skill.proficiency}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No skills listed</p>
              )}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
            <div className="space-y-2">
              {resume.certifications && resume.certifications.length > 0 ? (
                resume.certifications.map((cert) => (
                  <div key={cert.id} className="text-gray-600">
                    {cert.name} - {cert.issuer} ({cert.date})
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No certifications listed</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
