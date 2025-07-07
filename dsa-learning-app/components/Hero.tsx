'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="relative"
          >
            <Sparkles className="w-16 h-16 text-primary-500" />
            <div className="absolute inset-0 blur-xl bg-primary-400/20"></div>
          </motion.div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Learn DSA the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
            Real-World
          </span>{' '}
          Way
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Master Data Structures & Algorithms through everyday examples.
          From shopping carts to browser history - see how DSA powers the world around you.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
          onClick={() => {
            document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Learning Now
        </motion.button>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</h3>
            <p className="text-gray-600 dark:text-gray-400">DSA Concepts</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</h3>
            <p className="text-gray-600 dark:text-gray-400">Real Examples</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</h3>
            <p className="text-gray-600 dark:text-gray-400">Exercises</p>
          </div>
        </div>
      </motion.div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}