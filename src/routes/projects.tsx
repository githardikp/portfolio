import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'

type Project = {
  name: string
  description: string
  link?: string
  tech: string[]
}

const projects: Project[] = [
  {
    name: 'Project Alpha',
    description: 'A brief description of Project Alpha.',
    link: '#',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Project Beta',
    description: 'A brief description of Project Beta.',
    link: '#',
    tech: ['Node.js', 'Express', 'MongoDB'],
  },
  {
    name: 'Project Gamma',
    description: 'A brief description of Project Gamma.',
    link: '#',
    tech: ['React Native'],
  },
]

export const Route = createFileRoute('/projects')({
  component: Projects,
})

function Projects() {
  return (
    <motion.section
      className="grid md:grid-cols-2 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {projects.map((project) => (
        <motion.article
          key={project.name}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white dark:bg-slate-800 rounded shadow p-6"
        >
          <h3 className="text-xl font-semibold">{project.name}</h3>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-700/20 dark:text-blue-300 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              View Project →
            </a>
          )}
        </motion.article>
      ))}
    </motion.section>
  )
}