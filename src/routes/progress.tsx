import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { Trophy, Target, Calendar, TrendingUp, Award, CheckCircle, Clock, Brain, Code, Book } from 'lucide-react'

export const Route = createFileRoute('/progress')({
  component: Progress
})

function Progress() {
  const userStats = {
    totalProblems: 150,
    solvedProblems: 35,
    currentStreak: 12,
    longestStreak: 18,
    totalPoints: 2850,
    averageTime: '28 mins',
    accuracy: 87,
    rank: 'Intermediate',
    nextRankProgress: 65
  }

  const weeklyProgress = [
    { day: 'Mon', problems: 3, time: 45 },
    { day: 'Tue', problems: 2, time: 30 },
    { day: 'Wed', problems: 4, time: 62 },
    { day: 'Thu', problems: 1, time: 15 },
    { day: 'Fri', problems: 5, time: 75 },
    { day: 'Sat', problems: 3, time: 42 },
    { day: 'Sun', problems: 2, time: 28 }
  ]

  const topicProgress = [
    { topic: 'Arrays & Lists', completed: 12, total: 25, percentage: 48, difficulty: 'Beginner' },
    { topic: 'Stacks', completed: 8, total: 18, percentage: 44, difficulty: 'Beginner' },
    { topic: 'Queues', completed: 6, total: 15, percentage: 40, difficulty: 'Beginner' },
    { topic: 'Linked Lists', completed: 4, total: 20, percentage: 20, difficulty: 'Intermediate' },
    { topic: 'Binary Trees', completed: 3, total: 22, percentage: 14, difficulty: 'Intermediate' },
    { topic: 'Hash Tables', completed: 2, total: 16, percentage: 13, difficulty: 'Intermediate' },
    { topic: 'Graphs', completed: 0, total: 18, percentage: 0, difficulty: 'Advanced' },
    { topic: 'Sorting Algorithms', completed: 0, total: 16, percentage: 0, difficulty: 'Intermediate' }
  ]

  const achievements = [
    {
      id: 1,
      title: '🔥 Week Warrior',
      description: 'Solve problems for 7 consecutive days',
      progress: 12,
      target: 7,
      completed: true,
      unlockedDate: '2024-01-15'
    },
    {
      id: 2,
      title: '🎯 Array Master',
      description: 'Complete all array problems',
      progress: 12,
      target: 25,
      completed: false,
      unlockedDate: null
    },
    {
      id: 3,
      title: '⚡ Speed Demon',
      description: 'Solve 10 problems in under 20 minutes each',
      progress: 7,
      target: 10,
      completed: false,
      unlockedDate: null
    },
    {
      id: 4,
      title: '🏆 Century Club',
      description: 'Solve 100 problems',
      progress: 35,
      target: 100,
      completed: false,
      unlockedDate: null
    },
    {
      id: 5,
      title: '🎓 Knowledge Seeker',
      description: 'Complete all learning modules',
      progress: 4,
      target: 8,
      completed: false,
      unlockedDate: null
    },
    {
      id: 6,
      title: '💎 Perfectionist',
      description: 'Maintain 95% accuracy over 20 problems',
      progress: 87,
      target: 95,
      completed: false,
      unlockedDate: null
    }
  ]

  const recentActivity = [
    { type: 'problem', title: 'Shopping Cart Calculator', time: '2 hours ago', points: 100, difficulty: 'Easy' },
    { type: 'lesson', title: 'Stack Operations', time: '1 day ago', points: 0, difficulty: null },
    { type: 'achievement', title: 'Week Warrior', time: '2 days ago', points: 250, difficulty: null },
    { type: 'problem', title: 'Browser History Navigation', time: '3 days ago', points: 120, difficulty: 'Easy' },
    { type: 'problem', title: 'Phone Directory Lookup', time: '4 days ago', points: 180, difficulty: 'Medium' }
  ]

  const getTopicColor = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-500'
    if (percentage >= 60) return 'bg-blue-500'
    if (percentage >= 40) return 'bg-yellow-500'
    if (percentage >= 20) return 'bg-orange-500'
    return 'bg-slate-300'
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/30'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30'
      case 'Advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/30'
      default: return 'text-slate-600 bg-slate-100 dark:bg-slate-700'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'problem': return <Code className="text-blue-500" size={16} />
      case 'lesson': return <Book className="text-green-500" size={16} />
      case 'achievement': return <Trophy className="text-yellow-500" size={16} />
      default: return <Target className="text-slate-500" size={16} />
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
        <h1 className="text-4xl font-bold mb-4">Your Learning Progress</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Track your journey through data structures and algorithms mastery
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Problems Solved</p>
              <p className="text-2xl font-bold">
                {userStats.solvedProblems}/{userStats.totalProblems}
              </p>
              <p className="text-xs text-green-600">
                {Math.round((userStats.solvedProblems / userStats.totalProblems) * 100)}% complete
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Calendar className="text-orange-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Current Streak</p>
              <p className="text-2xl font-bold">{userStats.currentStreak} days</p>
              <p className="text-xs text-orange-600">
                Best: {userStats.longestStreak} days
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Trophy className="text-yellow-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Total Points</p>
              <p className="text-2xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
              <p className="text-xs text-yellow-600">Rank: {userStats.rank}</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border">
          <div className="flex items-center gap-3">
            <Clock className="text-purple-600" size={24} />
            <div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Avg. Solution Time</p>
              <p className="text-2xl font-bold">{userStats.averageTime}</p>
              <p className="text-xs text-purple-600">
                {userStats.accuracy}% accuracy
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Progress Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
        >
          <h2 className="text-xl font-semibold mb-6">Weekly Activity</h2>
          <div className="space-y-4">
            {weeklyProgress.map((day, index) => (
              <div key={day.day} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-slate-600 dark:text-slate-400">
                  {day.day}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm">{day.problems} problems</span>
                    <span className="text-xs text-slate-500">({day.time} min)</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(day.problems / 5) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm font-semibold text-blue-600">
                  {day.problems}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rank Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
        >
          <h2 className="text-xl font-semibold mb-6">Rank Progress</h2>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{userStats.rank}</div>
            <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Current Rank
            </div>
            
            {/* Progress to next rank */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Progress to Advanced</span>
                <span>{userStats.nextRankProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${userStats.nextRankProgress}%` }}
                />
              </div>
              <div className="text-xs text-slate-500">
                Need {100 - userStats.nextRankProgress}% more to reach Advanced
              </div>
            </div>

            {/* Rank ladder */}
            <div className="mt-6 space-y-2">
              {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((rank, index) => (
                <div
                  key={rank}
                  className={`p-2 rounded text-sm ${
                    rank === userStats.rank
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {rank}
                  {rank === userStats.rank && ' (Current)'}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Topic Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <h2 className="text-xl font-semibold mb-6">Topic Mastery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topicProgress.map((topic, index) => (
            <div key={topic.topic} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{topic.topic}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(topic.difficulty)}`}>
                      {topic.difficulty}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {topic.completed}/{topic.total} problems
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{topic.percentage}%</div>
                </div>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-1000 ${getTopicColor(topic.percentage)}`}
                  style={{ width: `${topic.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <h2 className="text-xl font-semibold mb-6">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                achievement.completed
                  ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
                  : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl">{achievement.title.split(' ')[0]}</div>
                {achievement.completed && (
                  <CheckCircle className="text-yellow-500" size={20} />
                )}
              </div>
              
              <h3 className="font-semibold mb-1">
                {achievement.title.substring(achievement.title.indexOf(' ') + 1)}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {achievement.description}
              </p>
              
              {!achievement.completed && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {achievement.progress}/{achievement.target}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min((achievement.progress / achievement.target) * 100, 100)}%`
                      }}
                    />
                  </div>
                </div>
              )}
              
              {achievement.completed && achievement.unlockedDate && (
                <div className="text-xs text-yellow-600 mt-2">
                  Unlocked: {achievement.unlockedDate}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border"
      >
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors">
              <div className="flex-shrink-0">
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{activity.title}</span>
                  {activity.difficulty && (
                    <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(activity.difficulty)}`}>
                      {activity.difficulty}
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{activity.time}</div>
              </div>
              {activity.points > 0 && (
                <div className="text-sm font-semibold text-purple-600">
                  +{activity.points} pts
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Goals and Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border"
      >
        <h2 className="text-xl font-bold mb-4">🎯 Recommended Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Target size={16} />
              Focus Area
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Complete more Linked List problems to improve your intermediate skills.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <TrendingUp size={16} />
              Streak Goal
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              6 more days to beat your longest streak of {userStats.longestStreak} days!
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Brain size={16} />
              Challenge
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try your first Graph algorithm problem to unlock the Advanced category.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}