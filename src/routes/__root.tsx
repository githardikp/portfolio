/// <reference types="vite/client" />
import * as React from 'react'
import { type ReactNode } from 'react'
import {
  Outlet,
  HeadContent,
  Scripts,
  Link,
  createRootRoute,
  useRouter,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { AnimatePresence, motion } from 'framer-motion'
import '~/styles/tailwind.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'DSA Academy - Learn Data Structures & Algorithms Through Real-Life Scenarios' },
      { name: 'description', content: 'Master data structures and algorithms through engaging real-world problems and interactive visualizations.' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  const router = useRouter()
  const pathname = router.state.location.pathname

  return (
    <RootDocument>
      <Header />
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <TanStackRouterDevtools position="bottom-right" />
    </RootDocument>
  )
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-white/90 backdrop-blur border-b sticky top-0 z-50 dark:bg-slate-900/90">
      <nav className="container mx-auto flex items-center gap-6 py-4 px-4">
        <span className="font-bold text-xl text-blue-600">🎓 DSA Academy</span>
        <div className="flex-1" />
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/learn">Learn</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/visualize">Visualize</NavLink>
        <NavLink to="/progress">Progress</NavLink>
      </nav>
    </header>
  )
}

function NavLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      activeOptions={{ exact: true }}
      activeProps={{ className: 'font-semibold text-blue-600 underline' }}
      className="hover:text-blue-500 transition-colors"
    />
  )
}

function Footer() {
  return (
    <footer className="py-6 border-t text-center text-sm bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} DSA Academy — Learn Data Structures & Algorithms Through Real-Life Scenarios</p>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">
          Built with React, TypeScript, and ❤️ for learning
        </p>
      </div>
    </footer>
  )
}