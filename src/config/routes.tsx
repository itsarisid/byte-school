import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Lazy load components for better performance
const Landing = lazy(() => import('@/app/landing'))
// Auth pages
const SignIn = lazy(() => import('@/app/auth/login'))


export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - redirect to Landing Page
  // Use relative path "dashboard" instead of "/dashboard" for basename compatibility
  // Landing Page
  {
    path: "/landing",
    element: <Landing />
  },
  {
    path: "/",
    element: <Navigate to="landing" replace />
  },

  // Authentication Routes
  {
    path: "login",
    element: <SignIn />
  },
]
