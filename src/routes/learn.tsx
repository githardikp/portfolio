import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, Play, CheckCircle, Clock, User, Star, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/learn')({
  component: Learn
})

function Learn() {
  const topics = [
    {
      id: 'arrays',
      title: 'Arrays & Lists',
      icon: '📋',
      difficulty: 'Beginner',
      duration: '2-3 hours',
      students: 1250,
      rating: 4.8,
      description: 'Master arrays through real-world scenarios like managing shopping carts, playlists, and student rosters.',
      lessons: [
        'Shopping Cart Management - Add, Remove, Update Items',
        'Music Playlist Operations - Shuffle, Repeat, Queue',
        'Student Grade Book - Sorting and Filtering',
        'Image Gallery - Navigation and Thumbnails'
      ],
      realLifeExamples: [
        '🛒 E-commerce shopping cart operations',
        '🎵 Spotify playlist management',
        '📊 Excel spreadsheet operations',
        '📱 Contact list organization'
      ],
      keyLearning: ['Array indexing', 'Dynamic resizing', 'Search operations', 'Sorting algorithms'],
      completed: 75
    },
    {
      id: 'stacks',
      title: 'Stacks (LIFO)',
      icon: '📚',
      difficulty: 'Beginner',
      duration: '1-2 hours',
      students: 980,
      rating: 4.7,
      description: 'Learn stack operations through browser history, undo functionality, and function call management.',
      lessons: [
        'Browser History - Back/Forward Navigation',
        'Text Editor Undo/Redo System',
        'Function Call Stack Visualization',
        'Expression Evaluation - Parentheses Matching'
      ],
      realLifeExamples: [
        '🌐 Browser back button functionality',
        '📝 Ctrl+Z undo operations',
        '📞 Call center queue management',
        '🍽️ Restaurant plate stacking'
      ],
      keyLearning: ['LIFO principle', 'Push/Pop operations', 'Stack overflow', 'Recursion basics'],
      completed: 60
    },
    {
      id: 'queues',
      title: 'Queues (FIFO)',
      icon: '🚶‍♂️',
      difficulty: 'Beginner',
      duration: '1-2 hours',
      students: 875,
      rating: 4.6,
      description: 'Understand queues through customer service systems, printer queues, and task scheduling.',
      lessons: [
        'Customer Service Queue Management',
        'Printer Job Scheduling',
        'Task Queue in Operating Systems',
        'Breadth-First Search Preview'
      ],
      realLifeExamples: [
        '🏪 Supermarket checkout lines',
        '🖨️ Document printing queue',
        '📞 Customer support systems',
        '🚌 Bus boarding queues'
      ],
      keyLearning: ['FIFO principle', 'Enqueue/Dequeue', 'Priority queues', 'Circular queues'],
      completed: 45
    },
    {
      id: 'linked-lists',
      title: 'Linked Lists',
      icon: '🔗',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      students: 720,
      rating: 4.5,
      description: 'Master linked structures through train car connections, social media feeds, and navigation systems.',
      lessons: [
        'Train Car Management - Coupling and Decoupling',
        'Social Media Feed - Dynamic Content Loading',
        'GPS Navigation - Route Building',
        'Memory Management - Dynamic Allocation'
      ],
      realLifeExamples: [
        '🚂 Train cars connecting/disconnecting',
        '📱 Instagram/Twitter infinite scroll',
        '🗺️ GPS route planning',
        '🎬 Netflix episode queues'
      ],
      keyLearning: ['Node structure', 'Dynamic memory', 'Pointer manipulation', 'List traversal'],
      completed: 30
    },
    {
      id: 'trees',
      title: 'Binary Trees',
      icon: '🌳',
      difficulty: 'Intermediate',
      duration: '4-5 hours',
      students: 650,
      rating: 4.9,
      description: 'Explore hierarchical data through family trees, organizational charts, and decision systems.',
      lessons: [
        'Family Tree Genealogy System',
        'Company Organizational Chart',
        'File System Directory Structure',
        'Decision Tree for Recommendations'
      ],
      realLifeExamples: [
        '👨‍👩‍👧‍👦 Family genealogy tracking',
        '🏢 Corporate hierarchy charts',
        '📁 Computer file systems',
        '🤖 AI decision making trees'
      ],
      keyLearning: ['Tree traversal', 'Binary search trees', 'Tree balancing', 'Recursive thinking'],
      completed: 15
    },
    {
      id: 'graphs',
      title: 'Graphs & Networks',
      icon: '🕸️',
      difficulty: 'Advanced',
      duration: '5-6 hours',
      students: 420,
      rating: 4.8,
      description: 'Navigate complex relationships through social networks, maps, and recommendation engines.',
      lessons: [
        'Social Network Analysis - Friends and Connections',
        'Google Maps - Shortest Path Finding',
        'Recommendation Systems - "People You May Know"',
        'Internet Routing - Network Protocols'
      ],
      realLifeExamples: [
        '👥 Facebook friend networks',
        '🗺️ Google Maps navigation',
        '🛒 Amazon product recommendations',
        '🌐 Internet routing protocols'
      ],
      keyLearning: ['Graph representation', 'Shortest paths', 'Network algorithms', 'Graph traversal'],
      completed: 0
    },
    {
      id: 'hash-tables',
      title: 'Hash Tables',
      icon: '📞',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      students: 580,
      rating: 4.7,
      description: 'Master fast lookups through phone books, databases, and caching systems.',
      lessons: [
        'Phone Book Directory - Contact Lookup',
        'Database Indexing - Fast Data Retrieval',
        'Web Caching - Browser Cache Management',
        'Password Storage - Secure Hashing'
      ],
      realLifeExamples: [
        '📞 Phone directory lookups',
        '🗃️ Database record finding',
        '💾 Browser cache storage',
        '🔐 Password verification systems'
      ],
      keyLearning: ['Hash functions', 'Collision handling', 'Load factors', 'Performance optimization'],
      completed: 25
    },
    {
      id: 'sorting',
      title: 'Sorting Algorithms',
      icon: '📊',
      difficulty: 'Intermediate',
      duration: '4-5 hours',
      students: 890,
      rating: 4.6,
      description: 'Learn sorting through library organization, leaderboards, and data analysis.',
      lessons: [
        'Library Book Organization - Multiple Sorting Criteria',
        'Sports Leaderboard - Real-time Ranking',
        'E-commerce Product Sorting - Price, Rating, Popularity',
        'Data Analysis - Statistical Sorting'
      ],
      realLifeExamples: [
        '📚 Library book organization',
        '🏆 Sports rankings and leaderboards',
        '🛍️ Online shopping filters',
        '📈 Stock market price sorting'
      ],
      keyLearning: ['Time complexity', 'Space complexity', 'Stable sorting', 'Comparison-based sorting'],
      completed: 40
    }
  ]

  const difficultyColors = {
    'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
    'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-8"
      >
        <h1 className="text-4xl font-bold mb-4">Learn Data Structures & Algorithms</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Master fundamental computer science concepts through engaging real-world scenarios. 
          Each topic includes interactive examples, practical applications, and hands-on exercises.
        </p>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Learning Progress</h2>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            {topics.filter(t => t.completed > 0).length} of {topics.length} topics started
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {topics.filter(t => t.completed === 100).length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
              {topics.filter(t => t.completed > 0 && t.completed < 100).length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">In Progress</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-600">
              {topics.filter(t => t.completed === 0).length}
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Not Started</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {Math.round(topics.reduce((acc, t) => acc + t.completed, 0) / topics.length)}%
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Overall Progress</div>
          </div>
        </div>
      </motion.div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {topics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              {/* Topic Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{topic.icon}</div>
                  <div>
                    <h3 className="font-bold text-xl">{topic.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[topic.difficulty]}`}>
                        {topic.difficulty}
                      </span>
                      <span className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                        <Clock size={14} />
                        {topic.duration}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="text-yellow-500" size={14} fill="currentColor" />
                    <span>{topic.rating}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <User size={12} />
                    {topic.students.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {topic.description}
              </p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{topic.completed}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      topic.completed === 100 ? 'bg-green-500' :
                      topic.completed > 0 ? 'bg-blue-500' : 'bg-slate-300'
                    }`}
                    style={{ width: `${topic.completed}%` }}
                  />
                </div>
              </div>

              {/* Real-life Examples */}
              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Real-Life Applications:</h4>
                <div className="grid grid-cols-2 gap-1">
                  {topic.realLifeExamples.slice(0, 4).map((example, i) => (
                    <div key={i} className="text-xs text-slate-600 dark:text-slate-400">
                      {example}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Learning Points */}
              <div className="mb-6">
                <h4 className="font-medium text-sm mb-2">Key Concepts:</h4>
                <div className="flex flex-wrap gap-1">
                  {topic.keyLearning.slice(0, 3).map((concept, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded"
                    >
                      {concept}
                    </span>
                  ))}
                  {topic.keyLearning.length > 3 && (
                    <span className="text-xs text-slate-500">
                      +{topic.keyLearning.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {topic.completed > 0 ? (
                  <Link
                    to={`/learn/${topic.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Play size={16} />
                    Continue
                  </Link>
                ) : (
                  <Link
                    to={`/learn/${topic.id}`}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <BookOpen size={16} />
                    Start Learning
                  </Link>
                )}
                <button className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                  Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Learning Path Recommendation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border"
      >
        <h2 className="text-xl font-bold mb-4">📚 Recommended Learning Path</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          For beginners, we recommend starting with these topics in order:
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {['Arrays & Lists', 'Stacks (LIFO)', 'Queues (FIFO)', 'Hash Tables', 'Sorting Algorithms', 'Linked Lists', 'Binary Trees', 'Graphs & Networks'].map((topic, index) => (
            <div key={topic} className="flex items-center">
              <span className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                {index + 1}. {topic}
              </span>
              {index < 7 && <ArrowRight className="mx-2 text-slate-400" size={16} />}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}