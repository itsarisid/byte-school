import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Lazy load components for better performance
const Landing = lazy(() => import('@/app/landing'))

// Auth pages
const SignIn = lazy(() => import('@/app/auth/login'))
const SignUp = lazy(() => import('@/app/auth/register'))
const ForgotPassword = lazy(() => import('@/app/auth/forgot-password'))

// Error pages
const Unauthorized = lazy(() => import('@/app/errors/unauthorized'))
const Forbidden = lazy(() => import('@/app/errors/forbidden'))
const NotFound = lazy(() => import('@/app/errors/not-found'))
const InternalServerError = lazy(() => import('@/app/errors/internal-server-error'))
const UnderMaintenance = lazy(() => import('@/app/errors/under-maintenance'))
const PublicNotFound = lazy(() => import('@/app/public-404'))

// Authenticated pages
const Dashboard = lazy(() => import('@/app/dashboard'))
const Settings = lazy(() => import('@/app/settings'))


export interface RouteConfig {
  path: string
  element: React.ReactNode
  children?: RouteConfig[]
}

export const routes: RouteConfig[] = [
  // Default route - redirect to Landing Page

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
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/register",
    element: <SignUp />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },

  // Error Pages
  {
    path: "/unauthorized",
    element: <Unauthorized />
  },
  {
    path: "/forbidden",
    element: <Forbidden />
  },
  {
    path: "/not-found",
    element: <NotFound />
  },
  {
    path: "/internal-server-error",
    element: <InternalServerError />
  },
  {
    path: "/under-maintenance",
    element: <UnderMaintenance />
  },
  {
    path: "/public-404",
    element: <PublicNotFound />
  },

  // Authenticated Routes
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/settings",
    element: <Settings />
  },
]
