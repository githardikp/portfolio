import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Code, Trophy, Clock, Users, Star, Filter, Search, CheckCircle, AlertCircle, Zap } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/practice')({
  component: Practice
})

function Practice() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')
  const [selectedTopic, setSelectedTopic] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const problems = [
    {
      id: 1,
      title: 'Shopping Cart Total Calculator',
      description: 'Build a shopping cart system that calculates totals, applies discounts, and manages item quantities.',
      difficulty: 'Easy',
      topic: 'Arrays',
      scenario: '🛒 E-commerce Platform',
      timeEstimate: '15-30 min',
      submissions: 1250,
      acceptance: 89,
      points: 100,
      tags: ['arrays', 'loops', 'conditionals'],
      realWorldContext: 'Amazon cart system - handling item addition, removal, and total calculation',
      companies: ['Amazon', 'Shopify', 'eBay'],
      status: 'solved'
    },
    {
      id: 2,
      title: 'Browser History Navigation',
      description: 'Implement browser back/forward functionality using stack operations.',
      difficulty: 'Easy',
      topic: 'Stacks',
      scenario: '🌐 Web Browser',
      timeEstimate: '20-40 min',
      submissions: 980,
      acceptance: 75,
      points: 120,
      tags: ['stacks', 'LIFO', 'navigation'],
      realWorldContext: 'Chrome/Firefox browser history - managing page navigation with back/forward buttons',
      companies: ['Google', 'Mozilla', 'Microsoft'],
      status: 'attempted'
    },
    {
      id: 3,
      title: 'Restaurant Order Queue',
      description: 'Manage customer orders in a restaurant using queue operations for fair service.',
      difficulty: 'Easy',
      topic: 'Queues',
      scenario: '🍽️ Restaurant Management',
      timeEstimate: '25-45 min',
      submissions: 765,
      acceptance: 82,
      points: 110,
      tags: ['queues', 'FIFO', 'scheduling'],
      realWorldContext: 'McDonald\'s order system - first-come-first-served order processing',
      companies: ['McDonald\'s', 'Uber Eats', 'DoorDash'],
      status: 'new'
    },
    {
      id: 4,
      title: 'Social Media Friend Finder',
      description: 'Find mutual friends and suggest connections using graph traversal algorithms.',
      difficulty: 'Hard',
      topic: 'Graphs',
      scenario: '👥 Social Network',
      timeEstimate: '60-90 min',
      submissions: 320,
      acceptance: 45,
      points: 300,
      tags: ['graphs', 'BFS', 'DFS', 'networking'],
      realWorldContext: 'Facebook friend suggestions - analyzing social connections and mutual friends',
      companies: ['Meta', 'LinkedIn', 'Twitter'],
      status: 'new'
    },
    {
      id: 5,
      title: 'Music Playlist Manager',
      description: 'Create a dynamic playlist with shuffle, repeat, and queue management features.',
      difficulty: 'Medium',
      topic: 'Linked Lists',
      scenario: '🎵 Music Streaming',
      timeEstimate: '45-60 min',
      submissions: 540,
      acceptance: 67,
      points: 200,
      tags: ['linked-lists', 'pointers', 'dynamic-structures'],
      realWorldContext: 'Spotify playlist - managing song order, shuffle mode, and queue operations',
      companies: ['Spotify', 'Apple Music', 'YouTube Music'],
      status: 'new'
    },
    {
      id: 6,
      title: 'Family Tree Genealogy',
      description: 'Build a family tree system to find relationships and common ancestors.',
      difficulty: 'Medium',
      topic: 'Trees',
      scenario: '👨‍👩‍👧‍👦 Genealogy Platform',
      timeEstimate: '50-70 min',
      submissions: 420,
      acceptance: 58,
      points: 250,
      tags: ['binary-trees', 'recursion', 'tree-traversal'],
      realWorldContext: 'Ancestry.com genealogy - tracking family relationships and lineage',
      companies: ['Ancestry', '23andMe', 'FamilySearch'],
      status: 'new'
    },
    {
      id: 7,
      title: 'Phone Directory Lookup',
      description: 'Implement a fast contact search system using hash table optimization.',
      difficulty: 'Medium',
      topic: 'Hash Tables',
      scenario: '📞 Contact Management',
      timeEstimate: '40-55 min',
      submissions: 680,
      acceptance: 71,
      points: 180,
      tags: ['hash-tables', 'optimization', 'search'],
      realWorldContext: 'iPhone contacts app - instant contact lookup and organization',
      companies: ['Apple', 'Google', 'Microsoft'],
      status: 'new'
    },
    {
      id: 8,
      title: 'Library Book Organizer',
      description: 'Sort books by multiple criteria: author, title, genre, and publication date.',
      difficulty: 'Medium',
      topic: 'Sorting',
      scenario: '📚 Library System',
      timeEstimate: '35-50 min',
      submissions: 890,
      acceptance: 79,
      points: 160,
      tags: ['sorting', 'algorithms', 'multiple-criteria'],
      realWorldContext: 'Library management system - organizing books with complex sorting requirements',
      companies: ['Amazon', 'Barnes & Noble', 'Goodreads'],
      status: 'new'
    }
  ]

  const difficulties = ['All', 'Easy', 'Medium', 'Hard']
  const topics = ['All', 'Arrays', 'Stacks', 'Queues', 'Linked Lists', 'Trees', 'Graphs', 'Hash Tables', 'Sorting']

  const filteredProblems = problems.filter(problem => {
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty
    const matchesTopic = selectedTopic === 'All' || problem.topic === selectedTopic
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.scenario.toLowerCase().includes(searchTerm.toLowerCase())
    
    return matchesDifficulty && matchesTopic && matchesSearch
  })

  const stats = {
    totalSolved: problems.filter(p => p.status === 'solved').length,
    totalAttempted: problems.filter(p => p.status === 'attempted').length,
    totalPoints: problems.filter(p => p.status === 'solved').reduce((acc, p) => acc + p.points, 0),
    streak: 7
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-300'
      case 'Medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'Hard': return 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-300'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700 dark:text-slate-300'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'solved': return <CheckCircle className="text-green-500" size={20} />
      case 'attempted': return <AlertCircle className="text-yellow-500" size={20} />
      default: return <div className="w-5 h-5 border-2 border-slate-300 rounded-full" />
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
        <h1 className="text-4xl font-bold mb-4">Practice DSA Problems</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Solve real-world programming challenges that teach data structures and algorithms 
          through practical scenarios you'll encounter in the industry.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border text-center">
          <CheckCircle className="mx-auto text-green-600 mb-2" size={24} />
          <div className="text-2xl font-bold">{stats.totalSolved}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Problems Solved</div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border text-center">
          <Code className="mx-auto text-blue-600 mb-2" size={24} />
          <div className="text-2xl font-bold">{stats.totalAttempted}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Attempted</div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border text-center">
          <Trophy className="mx-auto text-yellow-600 mb-2" size={24} />
          <div className="text-2xl font-bold">{stats.totalPoints}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Points Earned</div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border text-center">
          <Zap className="mx-auto text-purple-600 mb-2" size={24} />
          <div className="text-2xl font-bold">{stats.streak}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">Day Streak</div>
        </div>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search problems by title, description, or scenario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          {/* Difficulty Filter */}
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-slate-400" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map(diff => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
          
          {/* Topic Filter */}
          <div>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {topics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Problems List */}
      <div className="space-y-4">
        {filteredProblems.map((problem, index) => (
          <motion.div
            key={problem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* Status Icon */}
                  <div className="mt-1">
                    {getStatusIcon(problem.status)}
                  </div>
                  
                  {/* Problem Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg mb-1">{problem.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                          <span className="text-sm text-slate-600 dark:text-slate-400">{problem.scenario}</span>
                          <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                            {problem.topic}
                          </span>
                        </div>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-bold text-purple-600">{problem.points} pts</div>
                        <div className="text-slate-600 dark:text-slate-400">{problem.timeEstimate}</div>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-3">
                      {problem.description}
                    </p>
                    
                    {/* Real-world Context */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-3">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Real-world application:</strong> {problem.realWorldContext}
                      </p>
                    </div>
                    
                    {/* Stats and Tags */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Users size={14} />
                          <span>{problem.submissions.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CheckCircle size={14} />
                          <span>{problem.acceptance}%</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {/* Company Tags */}
                        <div className="flex gap-1">
                          {problem.companies.slice(0, 2).map(company => (
                            <span key={company} className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded">
                              {company}
                            </span>
                          ))}
                          {problem.companies.length > 2 && (
                            <span className="text-xs text-slate-500">+{problem.companies.length - 2}</span>
                          )}
                        </div>
                        
                        {/* Action Button */}
                        <Link
                          to={`/practice/${problem.id}`}
                          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          {problem.status === 'solved' ? 'Review' : 
                           problem.status === 'attempted' ? 'Continue' : 'Solve'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results */}
      {filteredProblems.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">No problems found</h3>
          <p className="text-slate-600 dark:text-slate-400">
            Try adjusting your filters or search terms to find more problems.
          </p>
        </motion.div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6 border text-center"
      >
        <h2 className="text-xl font-bold mb-2">🚀 Ready for a Challenge?</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-4">
          Start with easier problems and work your way up. Each problem teaches you something new about real-world software development!
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/learn"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn Concepts First
          </Link>
          <Link
            to="/visualize"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Visualize Algorithms
          </Link>
        </div>
      </motion.div>
    </div>
  )
}