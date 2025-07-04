import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

const tools = [
  'Notion',
  'Obsidian',
  'Cursor',
] as const

export const Route = createFileRoute('/tools')({
  component: Tools,
})

function Tools() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Tools & Productivity</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Apps and platforms that super-charge my workflow
        </p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            className="bg-white dark:bg-slate-800 rounded shadow px-6 py-3 text-sm font-medium"
          >
            {tool}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}