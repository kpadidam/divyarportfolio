import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Download, Code2, Database, Cloud, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { TypingAnimation } from '../components/TypingAnimation';

export function Home() {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const techStack = [
    { icon: Code2, name: 'Full-Stack Dev', color: 'text-indigo-600 dark:text-indigo-400' },
    { icon: Database, name: 'Databases', color: 'text-emerald-600 dark:text-emerald-400' },
    { icon: Cloud, name: 'Cloud & AWS', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Zap, name: 'CI/CD', color: 'text-amber-600 dark:text-amber-400' },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-emerald-50 dark:from-indigo-950/20 dark:via-background dark:to-emerald-950/20" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 dark:bg-emerald-600/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-200/20 dark:bg-purple-600/10 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container relative px-4 py-8 md:py-12 mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Animated Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-7xl tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-emerald-600 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  Hi Divya here ! 
                </h1>
              </motion.div>
              {/* <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl md:text-4xl text-muted-foreground">
                Hi Divya here! 👩‍💻
              </motion.h2> */}
            </motion.div>

            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto space-y-4"
            >
              <p className="leading-relaxed">
                <TypingAnimation
                  text="I'm a Software Engineer & Full-Stack Developer passionate about crafting seamless digital experiences that merge creativity with technology."
                  delay={1000}
                  speed={30}
                />
              </p>
              <p className="leading-relaxed">
                With hands-on experience in Java, Spring Boot, React.js, REST APIs, and AWS, I love bringing ideas to life through code — transforming complex problems into elegant, user-friendly solutions.
              </p>
              <p className="leading-relaxed">
                I've worked across the full development lifecycle — from backend architecture and API integration to front-end design and cloud deployment. My journey through graduate research, data analysis, and software projects has taught me the importance of clean code, agile collaboration, and purposeful design.
              </p>
              <p className="font-semibold text-center pt-2">
                All things dev: Front-End. Back-End. Cloud. CI/CD.<br/>
                Yep, I build them all.
              </p>
              <p className="text-center italic">
                Let's create applications that don't just work — they wow, scale, and inspire
              </p>
            </motion.div>

            {/* Animated Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/projects">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="shadow-lg">
                  <a href="/Divya_Resume.pdf" download="Divya_Resume.pdf">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Icons */}
      <section className="border-t bg-muted/30 relative overflow-hidden">
        <div className="container px-4 py-16 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <motion.div
                  animate={floatingAnimation}
                  className={`${tech.color}`}
                >
                  <tech.icon className="h-10 w-10" />
                </motion.div>
                <p className="text-center text-muted-foreground">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-t">
        <div className="container px-4 py-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '2+', label: 'Years Experience', delay: 0 },
              { value: '10+', label: 'Projects Completed', delay: 0.2 },
              { value: '3.63', label: 'GPA', delay: 0.4 },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
                whileHover={{ scale: 1.05 }}
                className="space-y-2 p-6 rounded-2xl hover:bg-muted/50 transition-colors"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: stat.delay + 0.3 }}
                  className="text-4xl md:text-5xl bg-gradient-to-r from-indigo-600 to-emerald-600 dark:from-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
