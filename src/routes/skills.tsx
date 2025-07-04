import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Node.js',
  'Express',
  'TanStack Router',
  'TanStack Start',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'MongoDB',
  'PostgreSQL',
  'Drizzle ORM',
  'AWS',
  'Docker',
  'OWASP',
  'Reverse Engineering',
  'System Design',
  'GitHub',
  'Notion',
  'Obsidian',
  'Cursor',
] as const

export const Route = createFileRoute('/skills')({
  component: Skills,
})

function Skills() {
  return (
    <motion.section
      className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {skills.map((skill) => (
        <motion.div
          key={skill}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white dark:bg-slate-800 rounded shadow px-4 py-3 text-center"
        >
          {skill}
        </motion.div>
      ))}
    </motion.section>
  )
}