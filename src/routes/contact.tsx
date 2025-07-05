import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <motion.section
      className="max-w-xl mx-auto text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
      <p className="mb-6">
        Shoot me an email at{' '}
        <a
          href="mailto:your.email@example.com"
          className="text-blue-600 underline"
        >
          your.email@example.com
        </a>{' '}
        or find me on{' '}
        <a
          href="https://github.com/your-github"
          className="text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </motion.section>
  )
}