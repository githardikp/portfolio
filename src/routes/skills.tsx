import * as React from 'react'
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
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Technical Skills</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          A snapshot of the technologies I work with day-to-day
        </p>
      </div>

      <motion.div
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
            className="bg-white dark:bg-slate-800 rounded shadow px-4 py-3 text-center text-sm font-medium"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}