import { motion } from 'motion/react';

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 text-white font-medium text-sm shadow-md hover:shadow-lg transition-shadow cursor-default"
    >
      {skill}
    </motion.span>
  );
}
