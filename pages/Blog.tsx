import { motion } from 'motion/react';

export function Blog() {
  const sections = [
    {
      title: "Technical Roots and an Evolving Skillset",
      content: [
        "My journey started with a passion for technology and has grown through rigorous academic training and practical experience. I've earned two master's degrees: one in Computer Science from the University of Memphis and another in IT Project Management from Cumberland University, where I consistently pushed the limits to learn emerging skills and contribute as a member of the honor society.",
        "Over time, I've built expertise in Java, Spring Boot, Hibernate, and front-end frameworks like React.js and Angular. My projects span robust RESTful APIs, responsive interfaces, and scalable cloud deployments leveraging AWS. I'm equally comfortable with SQL and modern database architectures, and I take pride in delivering clean, maintainable code, whether working solo or within collaborative Agile teams."
      ]
    },
    {
      title: "Collaboration, Creativity, and Real Results",
      content: [
        "Working as a graduate assistant at the University of Memphis, I honed my analytical and project management skills by supporting research initiatives and leading technical efforts. My day-to-day involved diving deep into data analysis with Python, organizing departmental events, and tutoring peers—a testament to my focus on empowering others and sharing what I learn.",
        "I learned to resolve intricate hardware/software problems as a technical assistant, and thrived in environments where teamwork and continual learning are valued. My approach centers on blending creativity, logic, and empathy—addressing not just technical requirements, but also the human needs of users and collaborators."
      ]
    },
    {
      title: "Building for Tomorrow",
      content: [
        "My portfolio reflects a milestone-driven approach: I favor clean, modern design, smooth animations, and accessibility, with projects ranging from portfolio websites to AI-driven applications. Every project is an opportunity to grow, whether launching a new product, architecting a secure backend, or experimenting with new frameworks.",
        "Looking ahead, I aim to pioneer scalable, transparent AI solutions and stay at the forefront of tech's dynamic landscape. I welcome feedback, new challenges, and creative collaborations—because every idea, big or small, is the seed for the next transformation."
      ]
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-2"
          >
            Growing Ideas Into Impact: My Journey as a Software Engineer
          </motion.h1>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              There's something thrilling about translating ideas into real-world solutions. In my experience as a software engineer, I've found purpose and fulfillment through code—transforming complex challenges into innovative, user-friendly web applications. From the very beginning, curiosity and drive have guided me to explore cutting-edge technologies and leave a mark on every project I touch.
            </motion.p>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">{section.title}</h2>
                {section.content.map((paragraph, pIndex) => (
                  <motion.p
                    key={pIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                    className="mb-4"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
