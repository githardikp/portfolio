import * as React from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { dsaProblems } from '~/data/dsaProblems'

export const Route = createFileRoute('/dsa')({
  component: DSAList,
})

function DSAList() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold">DSA from Real-Life Problems</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Explore how core algorithms and data structures solve everyday engineering challenges.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {dsaProblems.map((problem) => (
          <motion.article
            key={problem.id}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white dark:bg-slate-800 rounded shadow p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 flex-1">
              {problem.realLifeScenario}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 px-2 py-1 rounded">
                {problem.dsAlgo}
              </span>
            </div>
            <Link
              to={`/dsa/${problem.id}`}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Learn More →
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}