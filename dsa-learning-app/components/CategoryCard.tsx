'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Category } from '@/types';
import { 
  Grid3x3, 
  Layers, 
  Network, 
  Share2, 
  Hash, 
  ArrowUpDown, 
  Search, 
  Puzzle,
  BookOpen 
} from 'lucide-react';

interface CategoryCardProps {
  category: Category;
}

const iconMap: Record<string, any> = {
  Grid3x3,
  Layers,
  Network,
  Share2,
  Hash,
  ArrowUpDown,
  Search,
  Puzzle,
  BookOpen
};

export default function CategoryCard({ category }: CategoryCardProps) {
  // Get the icon component from the map
  const IconComponent = iconMap[category.icon] || BookOpen;

  return (
    <Link href={`/category/${category.id}`}>
      <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer h-full"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
            <IconComponent className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full">
            Explore →
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {category.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
          {category.description}
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white dark:border-gray-800"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Multiple concepts
          </span>
        </div>
      </motion.div>
    </Link>
  );
}