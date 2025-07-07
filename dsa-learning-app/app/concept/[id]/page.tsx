'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Code, Play, CheckCircle } from 'lucide-react';
import { concepts } from '@/lib/data/concepts';
import CodeExample from '@/components/CodeExample';
import ExerciseSection from '@/components/ExerciseSection';

export default function ConceptPage() {
  const params = useParams();
  const conceptId = params.id as string;
  const [activeTab, setActiveTab] = useState<'explanation' | 'code' | 'exercises'>('explanation');
  
  const concept = concepts.find(c => c.id === conceptId);
  
  if (!concept) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Concept not found
        </h1>
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          Go back to home
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: 'explanation', label: 'Real-Life Example', icon: BookOpen },
    { id: 'code', label: 'Code Examples', icon: Code },
    { id: 'exercises', label: 'Practice Exercises', icon: Play }
  ];

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href={`/category/${concept.category.id}`}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {concept.category.name}
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {concept.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {concept.description}
              </p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${
              concept.difficulty === 'beginner' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                : concept.difficulty === 'intermediate'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}>
              {concept.difficulty.charAt(0).toUpperCase() + concept.difficulty.slice(1)}
            </span>
          </div>

          {/* Complexity Info */}
          {(concept.timeComplexity || concept.spaceComplexity) && (
            <div className="flex gap-6 p-4 bg-gray-100 dark:bg-gray-900/50 rounded-lg">
              {concept.timeComplexity && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Time Complexity:</span>{' '}
                  <span className="font-mono text-primary-600 dark:text-primary-400 text-lg">
                    {concept.timeComplexity}
                  </span>
                </div>
              )}
              {concept.spaceComplexity && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">Space Complexity:</span>{' '}
                  <span className="font-mono text-primary-600 dark:text-primary-400 text-lg">
                    {concept.spaceComplexity}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'explanation' && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-4xl">💡</span>
                {concept.realLifeExample.title}
              </h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">The Scenario</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {concept.realLifeExample.scenario}
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">How It Works</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {concept.realLifeExample.explanation}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="space-y-6">
            {concept.code.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CodeExample example={example} />
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'exercises' && (
          <ExerciseSection exercises={concept.exercises} />
        )}
      </motion.div>
    </main>
  );
}