/// <reference types="vite/client" />
import { type ReactNode } from 'react'
import {
  Outlet,
  HeadContent,
  Scripts,
  Link,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import '~/styles/tailwind.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Developer Portfolio' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
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
    <header className="bg-white/80 backdrop-blur border-b sticky top-0 z-50">
      <nav className="container mx-auto flex items-center gap-6 py-4 px-4">
        <span className="font-bold text-xl">Your Name</span>
        <div className="flex-1" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
    <footer className="py-6 border-t text-center text-sm">
      © {new Date().getFullYear()} Your Name — All rights reserved.
    </footer>
  )
}