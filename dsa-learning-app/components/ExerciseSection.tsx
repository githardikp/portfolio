'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronDown, ChevronUp, Lightbulb, CheckCircle, AlertCircle } from 'lucide-react';
import { Exercise } from '@/types';
import CodeExample from './CodeExample';

interface ExerciseSectionProps {
  exercises: Exercise[];
}

export default function ExerciseSection({ exercises }: ExerciseSectionProps) {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(
    exercises[0]?.id || null
  );
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});
  const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

  const toggleHints = (exerciseId: string) => {
    setShowHints(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  const toggleSolution = (exerciseId: string) => {
    setShowSolution(prev => ({ ...prev, [exerciseId]: !prev[exerciseId] }));
  };

  return (
    <div className="space-y-6">
      {exercises.map((exercise, index) => (
        <motion.div
          key={exercise.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <span className="text-primary-600 dark:text-primary-400 font-bold">
                  {index + 1}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Exercise {index + 1}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {exercise.question}
                </p>
              </div>
            </div>

            {/* Test Cases */}
            <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Example Test Case:
              </h4>
              {exercise.testCases[0] && (
                <div className="font-mono text-sm">
                  <div className="text-gray-600 dark:text-gray-400">
                    Input: <span className="text-gray-900 dark:text-white">
                      {JSON.stringify(exercise.testCases[0].input, null, 2)}
                    </span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-1">
                    Expected Output: <span className="text-green-600 dark:text-green-400">
                      {JSON.stringify(exercise.testCases[0].output, null, 2)}
                    </span>
                  </div>
                  {exercise.testCases[0].explanation && (
                    <div className="text-gray-600 dark:text-gray-400 mt-2 text-xs">
                      {exercise.testCases[0].explanation}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Hints Section */}
            <div className="mb-4">
              <button
                onClick={() => toggleHints(exercise.id)}
                className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <Lightbulb className="w-4 h-4" />
                {showHints[exercise.id] ? 'Hide Hints' : `Show ${exercise.hints.length} Hints`}
                {showHints[exercise.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {showHints[exercise.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 space-y-2"
                  >
                    {exercise.hints.map((hint, hintIndex) => (
                      <div
                        key={hintIndex}
                        className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg"
                      >
                        <AlertCircle className="w-4 h-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <strong>Hint {hintIndex + 1}:</strong> {hint}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solution Section */}
            <div>
              <button
                onClick={() => toggleSolution(exercise.id)}
                className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                {showSolution[exercise.id] ? 'Hide Solution' : 'Show Solution'}
                {showSolution[exercise.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <AnimatePresence>
                {showSolution[exercise.id] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <CodeExample example={exercise.solution} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      ))}

      {exercises.length === 0 && (
        <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No exercises available for this concept yet.
          </p>
        </div>
      )}
    </div>
  );
}