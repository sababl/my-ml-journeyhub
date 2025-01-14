import { FileDown } from "lucide-react";

const Resume = () => {
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
              <div>
                <h3 className="text-lg font-medium text-primary">Senior AI Engineer</h3>
                <p className="text-gray-600">Company Name • 2021 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-600">
                  <li>Led development of computer vision models for autonomous systems</li>
                  <li>Improved model accuracy by 25% through innovative architecture changes</li>
                  <li>Mentored junior engineers and conducted technical interviews</li>
                </ul>
              </div>
              {/* Add more experience items */}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-primary">M.S. in Computer Science</h3>
                <p className="text-gray-600">University Name • 2019 - 2021</p>
                <p className="text-gray-600">Focus: Machine Learning and Artificial Intelligence</p>
              </div>
              {/* Add more education items */}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-primary mb-2">Programming</h3>
                <ul className="text-gray-600">
                  <li>Python</li>
                  <li>JavaScript/TypeScript</li>
                  <li>C++</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">ML/AI</h3>
                <ul className="text-gray-600">
                  <li>PyTorch</li>
                  <li>TensorFlow</li>
                  <li>Scikit-learn</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Tools</h3>
                <ul className="text-gray-600">
                  <li>Docker</li>
                  <li>Git</li>
                  <li>AWS/GCP</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
            <ul className="space-y-2 text-gray-600">
              <li>AWS Machine Learning Specialty</li>
              <li>Deep Learning Specialization - Coursera</li>
              <li>TensorFlow Developer Certificate</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;