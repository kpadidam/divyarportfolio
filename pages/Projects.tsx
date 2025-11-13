import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';

interface CardProps {
  children: React.ReactNode;
  index: number;
}

function Card3D({ children, index }: CardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 30,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Responsive personal portfolio website built with milestone-based development approach, featuring dark mode, smooth animations, and modern design principles.',
      image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwMzczNzAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Spring Boot REST API',
      description: 'Enterprise-grade CRUD backend service built with Spring Boot, featuring Docker containerization, Hibernate ORM, and MySQL database integration.',
      image: 'https://images.unsplash.com/photo-1641127890354-97d6c00d8425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwNDA5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Java', 'Spring Boot', 'Docker', 'MySQL', 'Hibernate', 'REST API'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'React UI Component Library',
      description: 'Collection of reusable, accessible React components with comprehensive documentation, theming support, and TypeScript definitions.',
      image: 'https://images.unsplash.com/photo-1655891709727-1506dff4af97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGNvbXBvbmVudHN8ZW58MXx8fHwxNzYwNDA5OTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Accessibility', 'Storybook'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated deployment pipeline for cloud infrastructure using AWS services, implementing CI/CD best practices and infrastructure as code.',
      image: 'https://images.unsplash.com/photo-1658806277165-af0b60eb6733?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MXx8fHwxNzYwMzI5MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['AWS', 'CI/CD', 'Terraform', 'DevOps'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container px-4 py-16 mx-auto max-w-7xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1>Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work in full-stack development, cloud infrastructure, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card3D key={index} index={index}>
              <Card className="rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="rounded-lg">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button asChild variant="outline" className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild className="flex-1 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
              </Card>
            </Card3D>
          ))}
        </div>
      </div>
    </div>
  );
}
