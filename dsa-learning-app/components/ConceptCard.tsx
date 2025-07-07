'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, Code, Lightbulb, ArrowRight } from 'lucide-react';
import { Concept } from '@/types';

interface ConceptCardProps {
  concept: Concept;
}

export default function ConceptCard({ concept }: ConceptCardProps) {
  const difficultyConfig = {
    beginner: {
      color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      label: 'Beginner'
    },
    intermediate: {
      color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      label: 'Intermediate'
    },
    advanced: {
      color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
      label: 'Advanced'
    }
  };

  const { color, label } = difficultyConfig[concept.difficulty];

  return (
    <Link href={`/concept/${concept.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer h-full"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {concept.title}
            </h3>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>
              {label}
            </span>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 dark:text-gray-600 mt-1" />
        </div>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {concept.description}
        </p>

        <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="font-semibold text-gray-900 dark:text-white">Real-Life Example</span>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
            {concept.realLifeExample.title}: {concept.realLifeExample.scenario}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Code className="w-4 h-4" />
              <span>{concept.code.length} examples</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{concept.exercises.length} exercises</span>
            </div>
          </div>
        </div>

        {(concept.timeComplexity || concept.spaceComplexity) && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex gap-4 text-sm">
              {concept.timeComplexity && (
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Time:</span>{' '}
                  <span className="font-mono text-primary-600 dark:text-primary-400">
                    {concept.timeComplexity}
                  </span>
                </div>
              )}
              {concept.spaceComplexity && (
                <div>
                  <span className="text-gray-500 dark:text-gray-400">Space:</span>{' '}
                  <span className="font-mono text-primary-600 dark:text-primary-400">
                    {concept.spaceComplexity}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </Link>
  );
}