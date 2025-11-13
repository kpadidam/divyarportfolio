import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Divya Reddy Kankanala
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer specializing in full-stack development, cloud architecture, and creating innovative solutions.
            </p>
            <p className="text-sm italic text-indigo-600 dark:text-indigo-400">
              "Building tomorrow's technology, today."
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block">
                  → Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block">
                  → Blog
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block">
                  → Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block">
                  → Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors hover:translate-x-1 inline-block">
                  → Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-lg">Let's Connect</h4>
            <p className="text-muted-foreground mb-6 text-sm">
              Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/divya-reddy-148a24316"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:dkankanala05@students.cumberland.edu"
                className="group p-3 rounded-full bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center space-y-2">
          <p className="text-muted-foreground">
            Copyright © {currentYear} Divya Reddy Kankanala. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/70">
            Designed & Built with passion using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
