import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Download, Mail, GraduationCap, Briefcase, Code } from 'lucide-react';
import { motion } from 'motion/react';

export function Resume() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container px-4 py-16 mx-auto max-w-4xl space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1>Resume</h1>
          <p className="text-lg text-muted-foreground">
            Download my complete resume or view the key highlights below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <a href="/Divya_Resume.pdf" download="Divya_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume (PDF)
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:dkankanala05@students.cumberland.edu">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <span>Email: </span>
                <a href="mailto:dkankanala05@students.cumberland.edu" className="text-indigo-600 dark:text-indigo-400 hover:underline break-all">
                  dkankanala05@students.cumberland.edu
                </a>
              </p>
              <p className="text-muted-foreground">Location: United States</p>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3>M.S. Information Technology Project Management</h3>
              <p className="text-muted-foreground">Cumberland University</p>
              <p className="text-muted-foreground">Expected 2025</p>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <h3>M.S. Computer Science</h3>
              <p className="text-muted-foreground">University of Memphis</p>
              <p className="text-muted-foreground">2024 • GPA: 3.63/4.0</p>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <h3>Graduate Assistant</h3>
              <p className="text-muted-foreground">University of Memphis • 2023 – 2024</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                <li>Conducted data analysis and research support for academic programs</li>
                <li>Provided tutoring and academic assistance to students</li>
                <li>Collaborated with faculty on research initiatives</li>
              </ul>
            </div>
            <div className="space-y-2 pt-4 border-t">
              <h3>Technical Assistant</h3>
              <p className="text-muted-foreground">University of Memphis • 2022</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-2">
                <li>Provided technical support and system maintenance</li>
                <li>Conducted user training sessions</li>
                <li>Assisted with IT infrastructure management</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4>Languages & Frameworks</h4>
                <p className="text-muted-foreground">Java, Python, JavaScript, React, Spring Boot</p>
              </div>
              <div className="space-y-2">
                <h4>Databases</h4>
                <p className="text-muted-foreground">MySQL, PostgreSQL, MongoDB</p>
              </div>
              <div className="space-y-2">
                <h4>Cloud & DevOps</h4>
                <p className="text-muted-foreground">AWS, Docker, CI/CD, Terraform</p>
              </div>
              <div className="space-y-2">
                <h4>Tools & Technologies</h4>
                <p className="text-muted-foreground">Git, REST APIs, Hibernate, HTML/CSS</p>
              </div>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      </div>
    </div>
  );
}
