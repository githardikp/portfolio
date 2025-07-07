import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { dsaProblems } from '~/data/dsaProblems'

export const Route = createFileRoute('/dsa/$problemId')({
  component: ProblemDetail,
  // Parse params to numbers
  parseParams: (params) => ({ problemId: Number(params.problemId) }),
})

function ProblemDetail() {
  const { problemId } = Route.useParams()
  const problem = dsaProblems.find((p) => p.id === problemId)

  if (!problem) {
    return <p>Problem not found.</p>
  }

  return (
    <article className="prose lg:prose-lg dark:prose-invert">
      <h1>{problem.title}</h1>
      <p className="italic text-slate-600 dark:text-slate-400">
        Scenario: {problem.realLifeScenario}
      </p>

      <h2>Why {problem.dsAlgo}?</h2>
      <p>{problem.description}</p>

      <h3>Complexity</h3>
      <p>{problem.complexity}</p>

      <h3>Step-by-Step Solution</h3>
      <ol>
        {problem.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </article>
  )
}