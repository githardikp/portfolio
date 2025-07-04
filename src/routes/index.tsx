import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <section className="flex flex-col items-center gap-8">
      <motion.h1
        className="text-4xl sm:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I&apos;m <span className="text-blue-600">Your Name</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl text-center text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A full-stack developer passionate about building performant, accessible, and delightful digital experiences.
      </motion.p>
    </section>
  )
}