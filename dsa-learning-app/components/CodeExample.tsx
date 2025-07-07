'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Code2 } from 'lucide-react';
import { CodeExample as CodeExampleType } from '@/types';

interface CodeExampleProps {
  example: CodeExampleType;
}

export default function CodeExample({ example }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(example.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const languageColors = {
    javascript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    typescript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    python: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          <span className={`px-2 py-1 rounded text-xs font-medium ${languageColors[example.language]}`}>
            {example.language.toUpperCase()}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <div className="p-6">
        <pre className="bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg overflow-x-auto">
          <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
            {example.code}
          </code>
        </pre>

        {example.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
          >
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong className="text-primary-700 dark:text-primary-400">Explanation:</strong>{' '}
              {example.explanation}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}