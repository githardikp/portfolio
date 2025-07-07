import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { BookOpen, Brain, Code, TrendingUp, Target, Users, Star, Clock } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Dashboard
})

function Dashboard() {
  const progressData = {
    totalTopics: 12,
    completedTopics: 4,
    totalProblems: 150,
    solvedProblems: 23,
    currentStreak: 7
  }

  const featuredTopics = [
    {
      id: 'arrays',
      title: 'Arrays & Lists',
      description: 'Learn through shopping cart and playlist management',
      icon: '📋',
      difficulty: 'Beginner',
      problems: 25,
      completed: 8
    },
    {
      id: 'stacks',
      title: 'Stacks',
      description: 'Master through browser history and undo functionality',
      icon: '📚',
      difficulty: 'Beginner',
      problems: 18,
      completed: 5
    },
    {
      id: 'trees',
      title: 'Binary Trees',
      description: 'Explore family trees and organizational hierarchies',
      icon: '🌳',
      difficulty: 'Intermediate',
      problems: 32,
      completed: 3
    },
    {
      id: 'graphs',
      title: 'Graphs',
      description: 'Navigate social networks and route planning',
      icon: '🕸️',
      difficulty: 'Advanced',
      problems: 28,
      completed: 0
    }
  ]

  const recentActivities = [
    { title: 'Completed "Shopping Cart Management"', time: '2 hours ago', type: 'problem' },
    { title: 'Learned about Stack Operations', time: '1 day ago', type: 'lesson' },
    { title: 'Achieved 7-day streak!', time: '1 day ago', type: 'achievement' },
    { title: 'Started Binary Search Trees', time: '3 days ago', type: 'lesson' }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to DSA Academy! 🎓</h1>
        <p className="text-xl mb-6 text-blue-100">
          Master Data Structures & Algorithms through engaging real-world scenarios
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/learn"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Learning
          </Link>
          <Link
            to="/practice"
            className="bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
          >
            Practice Problems
          </Link>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <BookOpen className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Topics Completed</p>
              <p className="text-2xl font-bold">
                {progressData.completedTopics}/{progressData.totalTopics}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Code className="text-green-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Problems Solved</p>
              <p className="text-2xl font-bold">
                {progressData.solvedProblems}/{progressData.totalProblems}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Target className="text-orange-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Current Streak</p>
              <p className="text-2xl font-bold">{progressData.currentStreak} days</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-purple-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Progress</p>
              <p className="text-2xl font-bold">
                {Math.round((progressData.completedTopics / progressData.totalTopics) * 100)}%
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Topics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Featured Learning Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-3">{topic.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                {topic.description}
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={`px-2 py-1 rounded text-xs ${
                    topic.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                    topic.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {topic.difficulty}
                  </span>
                  <span>{topic.completed}/{topic.problems} problems</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(topic.completed / topic.problems) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border p-6 space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'problem' ? 'bg-green-500' :
                  activity.type === 'lesson' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }`} />
                <div className="flex-1">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Quick Stats</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border p-6 space-y-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">23</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Problems this month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Day streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.2</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Average rating</div>
            </div>
            <Link
              to="/progress"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Detailed Progress
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}