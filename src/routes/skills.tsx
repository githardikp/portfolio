import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

const skills = {
  'Frontend': [
    'JavaScript',
    'TypeScript',
    'React',
    'React Native',
    'TanStack Router',
    'TanStack Start',
    'Vite',
    'Tailwind CSS',
    'Framer Motion',
  ],
  'Backend': ['Node.js', 'Express', 'System Design'],
  'Databases': ['MongoDB', 'PostgreSQL', 'Drizzle ORM'],
  'DevOps & Cloud': ['AWS', 'Docker', 'GitHub'],
  'Security': ['OWASP', 'Reverse Engineering'],
} as const

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

      <div className="space-y-10">
        {Object.entries(skills).map(([category, list]) => (
          <motion.section key={category} layout>
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
            >
              {list.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                  className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 rounded text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </section>
  )
}