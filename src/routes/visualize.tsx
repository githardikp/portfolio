import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Play, Pause, RotateCcw, SkipForward, Settings, Eye, Zap, Clock } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/visualize')({
  component: Visualize
})

function Visualize() {
  const [selectedCategory, setSelectedCategory] = useState('Sorting')
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)

  const categories = [
    {
      name: 'Sorting',
      algorithms: [
        {
          name: 'Bubble Sort',
          difficulty: 'Easy',
          timeComplexity: 'O(n²)',
          description: 'Compare adjacent elements and swap them if they are in the wrong order',
          realWorldExample: '📚 Organizing books by height on a shelf',
          visualization: 'bubble-sort'
        },
        {
          name: 'Quick Sort',
          difficulty: 'Medium',
          timeComplexity: 'O(n log n)',
          description: 'Divide and conquer algorithm that picks a pivot and partitions the array',
          realWorldExample: '🗂️ Organizing files in computer directories',
          visualization: 'quick-sort'
        },
        {
          name: 'Merge Sort',
          difficulty: 'Medium',
          timeComplexity: 'O(n log n)',
          description: 'Divide the array into halves, sort them, and merge back together',
          realWorldExample: '📊 Merging two sorted spreadsheets into one',
          visualization: 'merge-sort'
        }
      ]
    },
    {
      name: 'Searching',
      algorithms: [
        {
          name: 'Linear Search',
          difficulty: 'Easy',
          timeComplexity: 'O(n)',
          description: 'Check every element one by one until the target is found',
          realWorldExample: '📞 Looking through a physical phone book page by page',
          visualization: 'linear-search'
        },
        {
          name: 'Binary Search',
          difficulty: 'Medium',
          timeComplexity: 'O(log n)',
          description: 'Repeatedly divide sorted array in half to find the target',
          realWorldExample: '📖 Finding a word in a dictionary by opening to the middle',
          visualization: 'binary-search'
        }
      ]
    },
    {
      name: 'Graph Algorithms',
      algorithms: [
        {
          name: 'Breadth-First Search (BFS)',
          difficulty: 'Medium',
          timeComplexity: 'O(V + E)',
          description: 'Explore all neighbors at current depth before moving to next depth',
          realWorldExample: '🌐 Finding shortest path on Google Maps',
          visualization: 'bfs'
        },
        {
          name: 'Depth-First Search (DFS)',
          difficulty: 'Medium',
          timeComplexity: 'O(V + E)',
          description: 'Explore as far as possible along each branch before backtracking',
          realWorldExample: '🧩 Solving a maze by going down one path completely',
          visualization: 'dfs'
        },
        {
          name: 'Dijkstra\'s Algorithm',
          difficulty: 'Hard',
          timeComplexity: 'O(V²)',
          description: 'Find shortest paths from source to all other vertices',
          realWorldExample: '🚗 GPS navigation finding fastest route',
          visualization: 'dijkstra'
        }
      ]
    },
    {
      name: 'Tree Algorithms',
      algorithms: [
        {
          name: 'Tree Traversal (Inorder)',
          difficulty: 'Medium',
          timeComplexity: 'O(n)',
          description: 'Visit left subtree, root, then right subtree',
          realWorldExample: '👨‍👩‍👧‍👦 Reading family tree from left to right',
          visualization: 'inorder'
        },
        {
          name: 'Tree Traversal (Preorder)',
          difficulty: 'Medium',
          timeComplexity: 'O(n)',
          description: 'Visit root, then left subtree, then right subtree',
          realWorldExample: '📁 Exploring file system directories top-down',
          visualization: 'preorder'
        }
      ]
    }
  ]

  const currentAlgorithms = categories.find(cat => cat.name === selectedCategory)?.algorithms || []

  // Sample visualization component for Bubble Sort
  const BubbleSortVisualization = () => {
    const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90])
    const [currentIndices, setCurrentIndices] = useState({ i: 0, j: 0 })
    const [isAnimating, setIsAnimating] = useState(false)

    const step = () => {
      if (currentIndices.i < array.length - 1) {
        if (currentIndices.j < array.length - currentIndices.i - 1) {
          if (array[currentIndices.j] > array[currentIndices.j + 1]) {
            const newArray = [...array]
            const temp = newArray[currentIndices.j]
            newArray[currentIndices.j] = newArray[currentIndices.j + 1]
            newArray[currentIndices.j + 1] = temp
            setArray(newArray)
          }
          setCurrentIndices(prev => ({ ...prev, j: prev.j + 1 }))
        } else {
          setCurrentIndices(prev => ({ i: prev.i + 1, j: 0 }))
        }
      } else {
        setIsAnimating(false)
      }
    }

    return (
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Bubble Sort Visualization</h3>
          <div className="flex gap-2">
            <button
              onClick={() => setIsAnimating(!isAnimating)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isAnimating ? <Pause size={16} /> : <Play size={16} />}
              {isAnimating ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={() => {
                setArray([64, 34, 25, 12, 22, 11, 90])
                setCurrentIndices({ i: 0, j: 0 })
                setIsAnimating(false)
              }}
              className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw size={16} />
              Reset
            </button>
            <button
              onClick={step}
              disabled={isAnimating}
              className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              <SkipForward size={16} />
              Step
            </button>
          </div>
        </div>

        {/* Array Visualization */}
        <div className="flex items-end justify-center space-x-2 mb-6 h-48">
          {array.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-all duration-300 ${
                index === currentIndices.j || index === currentIndices.j + 1
                  ? 'transform scale-110'
                  : ''
              }`}
            >
              <div
                className={`w-12 rounded-t flex items-end justify-center text-white font-bold text-sm transition-colors duration-300 ${
                  index === currentIndices.j
                    ? 'bg-red-500'
                    : index === currentIndices.j + 1
                    ? 'bg-orange-500'
                    : index >= array.length - currentIndices.i
                    ? 'bg-green-500'
                    : 'bg-blue-500'
                }`}
                style={{ height: `${(value / Math.max(...array)) * 150}px` }}
              >
                {value}
              </div>
              <div className="text-xs mt-1 text-slate-600 dark:text-slate-400">{index}</div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span>Comparing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded"></div>
            <span>Comparing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Sorted</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded"></div>
            <span>Unsorted</span>
          </div>
        </div>

        {/* Step Information */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Current Step:</strong> Comparing elements at positions {currentIndices.j} and{' '}
            {currentIndices.j + 1}
            {array[currentIndices.j] > array[currentIndices.j + 1]
              ? ' - Swapping because they are out of order!'
              : ' - No swap needed, they are in correct order.'}
          </p>
        </div>
      </div>
    )
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:bg-green-900/30'
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
      case 'Hard': return 'text-red-600 bg-red-100 dark:bg-red-900/30'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold mb-4">Algorithm Visualizations</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Watch algorithms come to life! Interactive visualizations help you understand 
          how data structures and algorithms work step by step.
        </p>
      </motion.div>

      {/* Category Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </motion.div>

      {/* Featured Visualization - Bubble Sort */}
      {selectedCategory === 'Sorting' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <BubbleSortVisualization />
        </motion.div>
      )}

      {/* Algorithm Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentAlgorithms.map((algorithm, index) => (
          <motion.div
            key={algorithm.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 overflow-hidden group"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-2">{algorithm.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(algorithm.difficulty)}`}>
                      {algorithm.difficulty}
                    </span>
                    <span className="text-sm bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                      {algorithm.timeComplexity}
                    </span>
                  </div>
                </div>
                <Eye className="text-slate-400 group-hover:text-blue-500 transition-colors" size={24} />
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                {algorithm.description}
              </p>

              {/* Real-world Example */}
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Real-world example:</strong><br />
                  {algorithm.realWorldExample}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Play size={16} />
                  Visualize
                </button>
                <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  <Settings size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Controls Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <h2 className="text-xl font-semibold mb-4">Visualization Controls</h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Speed Control */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Animation Speed</label>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600 dark:text-slate-400">Slow</span>
              <input
                type="range"
                min="1"
                max="5"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="flex-1"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400">Fast</span>
            </div>
          </div>

          {/* Size Control */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Array Size</label>
            <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700">
              <option value="5">Small (5 elements)</option>
              <option value="10">Medium (10 elements)</option>
              <option value="15">Large (15 elements)</option>
            </select>
          </div>

          {/* Data Type */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Data Type</label>
            <select className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700">
              <option value="random">Random Numbers</option>
              <option value="sorted">Pre-sorted</option>
              <option value="reverse">Reverse Sorted</option>
              <option value="custom">Custom Input</option>
            </select>
          </div>
        </div>
      </motion.div>

      {/* Learning Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border"
      >
        <h2 className="text-xl font-bold mb-4">💡 Visualization Learning Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock size={16} />
              Take Your Time
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Use the step-by-step mode to understand each operation. Don't rush through the animation.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Zap size={16} />
              Compare Algorithms
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Run different algorithms on the same data to see performance differences visually.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Eye size={16} />
              Focus on Patterns
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Look for recurring patterns and try to predict the next step before clicking.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Settings size={16} />
              Experiment
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try different input sizes and data types to see how algorithms behave in various scenarios.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}