import { Card } from '../components/ui/card';
import { GraduationCap } from 'lucide-react';

export function About() {
  const education = [
    {
      degree: 'M.S. Information Technology Project Management',
      school: 'Cumberland University — Lebanon, TN',
      date: 'Aug 2025',
    },
    {
      degree: 'M.S. Computer Science',
      school: 'University of Memphis',
      date: 'May 2024',
      gpa: 'GPA 3.63/4.0',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container px-4 py-16 mx-auto max-w-5xl space-y-12">
        {/* Bio Section */}
        <section className="space-y-6">
          <h1>About Me</h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
             I’m Divya Reddy, a curious and driven professional who loves bringing ideas to life through creativity, logic, and collaboration. With a background in software engineering and project management, I enjoy turning challenges into meaningful, user-centered solutions that make a difference.
            </p>
            <p>
              Beyond the code, I’m passionate about teamwork, problem-solving, and continuous learning. My journey — from supporting academic research to developing digital solutions — has taught me the importance of adaptability, precision, and innovation.
               I’m inspired by growth, fueled by curiosity, and motivated to create technology that truly empowers people.
              
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-indigo-600 dark:border-l-indigo-400">
                <h3>{edu.degree}</h3>
                <p className="text-muted-foreground mt-1">{edu.school}</p>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-muted-foreground">{edu.date}</p>
                  {edu.gpa && (
                    <p className="text-muted-foreground">• {edu.gpa}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
