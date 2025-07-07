'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Zap } from 'lucide-react';
import { categories } from '@/lib/data/categories';
import { concepts } from '@/lib/data/concepts';
import ConceptCard from '@/components/ConceptCard';

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.id as string;
  
  const category = categories.find(c => c.id === categoryId);
  const categoryConcepts = concepts.filter(c => c.category.id === categoryId);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Category not found
        </h1>
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          Go back to home
        </Link>
      </div>
    );
  }

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    advanced: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Categories
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {category.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Clock className="w-5 h-5" />
              <span>{categoryConcepts.length} concepts to explore</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Zap className="w-5 h-5" />
              <span>Interactive examples included</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Concepts Grid */}
      <section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Available Concepts
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {categoryConcepts.map((concept, index) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <ConceptCard concept={concept} />
            </motion.div>
          ))}
        </div>

        {categoryConcepts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-xl"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No concepts available for this category yet.
            </p>
            <p className="text-gray-500 dark:text-gray-500 mt-2">
              Check back soon for new content!
            </p>
          </motion.div>
        )}
      </section>
    </main>
  );
}