'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, Trophy } from 'lucide-react';
import { categories } from '@/lib/data/categories';
import CategoryCard from '@/components/CategoryCard';
import Hero from '@/components/Hero';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const features = [
    {
      icon: BookOpen,
      title: 'Real-Life Examples',
      description: 'Learn DSA concepts through everyday scenarios you can relate to'
    },
    {
      icon: Brain,
      title: 'Interactive Learning',
      description: 'Visualize algorithms in action with interactive demonstrations'
    },
    {
      icon: Code,
      title: 'Hands-On Practice',
      description: 'Solve practical exercises with instant feedback'
    },
    {
      icon: Trophy,
      title: 'Track Progress',
      description: 'Monitor your learning journey and celebrate achievements'
    }
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      
      {/* Features Section */}
      <section className="mt-20 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Learn DSA with Real-Life Examples?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding data structures and algorithms becomes intuitive when connected to familiar experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Start with any topic that interests you. Each concept is explained with real-world analogies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}