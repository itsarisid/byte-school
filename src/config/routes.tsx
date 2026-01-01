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
const Attendance = lazy(() => import('@/app/attendance'))
const Fees = lazy(() => import('@/app/fees'))
const Expenses = lazy(() => import('@/app/expenses'))
const Exams = lazy(() => import('@/app/exams'))
const Profile = lazy(() => import('@/app/profile'))
const Parents = lazy(() => import('@/app/parents'))
const TeachersList = lazy(() => import('@/app/teachers'))
const TeacherDetails = lazy(() => import('@/app/teachers/[id]'))
const TeacherAdd = lazy(() => import('@/app/teachers/add'))
const StudentsList = lazy(() => import('@/app/students'))
const StudentDetails = lazy(() => import('@/app/students/[id]'))
const StudentAdd = lazy(() => import('@/app/students/add'))
const StaffAdd = lazy(() => import('@/app/staff/add'))




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
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/teachers",
    element: <TeachersList />
  },
  {
    path: "/teachers/add",
    element: <TeacherAdd />
  },
  {
    path: "/teachers/:id",
    element: <TeacherDetails />
  },
  {
    path: "/students",
    element: <StudentsList />
  },
  {
    path: "/students/:id",
    element: <StudentDetails />
  },
  {
    path: "/students/add",
    element: <StudentAdd />
  },
  {
    path: "/attendance",
    element: <Attendance />
  },
  {
    path: "/fees",
    element: <Fees />
  },
  {
    path: "/exams",
    element: <Exams />
  },
  {
    path: "/parents",
    element: <Parents />
  },
  {
    path: "/staff/add",
    element: <StaffAdd />
  },
  {
    path: "/expenses",
    element: <Expenses />
  },
]
