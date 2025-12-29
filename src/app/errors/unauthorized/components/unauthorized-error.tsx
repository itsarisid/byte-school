"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { KeyRound, LogIn, UserPlus, Home, Shield, Info } from "lucide-react"

export function UnauthorizedError() {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-purple-900/30 rounded-full p-6'>
            <KeyRound className='w-10 h-10 text-purple-400' />
          </div>
        </div>

        {/* Header */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Badge variant="outline" className='border-purple-500 text-purple-400 bg-purple-500/10 px-3 py-1'>
              <Shield className='w-3 h-3 mr-1' />
              401 Unauthorized
            </Badge>
          </div>
          <h1 className='text-4xl font-bold'>Authentication Required</h1>
          <p className='text-neutral-400 max-w-lg mx-auto'>
            You need to be signed in to access this resource. Please log in with your credentials or create a new account.
          </p>
        </div>

        {/* Info Card */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <Info className='w-4 h-4 text-purple-400' />
              <span className='font-semibold'>Why do I need to sign in?</span>
            </div>
            <p className='text-sm text-neutral-400'>
              This content is protected and requires authentication. Signing in ensures that only authorized users can access sensitive information and features.
            </p>
          </CardContent>
        </Card>

        {/* Authentication Options */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Sign In */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <LogIn className='w-4 h-4 text-green-400' />
                <span className='font-semibold'>Existing User</span>
              </div>
              <p className='text-sm text-neutral-400'>
                Already have an account? Sign in to continue.
              </p>
              <Button
                className='w-full bg-green-600 hover:bg-green-700'
                onClick={() => navigate('/login')}
              >
                <LogIn className='w-4 h-4 mr-2' />
                Sign In
              </Button>
            </CardContent>
          </Card>

          {/* Sign Up */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <UserPlus className='w-4 h-4 text-blue-400' />
                <span className='font-semibold'>New User</span>
              </div>
              <p className='text-sm text-neutral-400'>
                Don't have an account? Create one now.
              </p>
              <Button
                variant="outline"
                className='w-full border-blue-600 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                onClick={() => navigate('/register')}
              >
                <UserPlus className='w-4 h-4 mr-2' />
                Create Account
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Actions */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6'>
            <div className='flex flex-col sm:flex-row gap-3'>
              <Button
                variant="outline"
                className='flex-1 border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                onClick={() => navigate('/')}
              >
                <Home className='w-4 h-4 mr-2' />
                Go to Homepage
              </Button>
              <Button
                variant="outline"
                className='flex-1 border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Card className='bg-purple-950/20 border-purple-900/50'>
          <CardContent className='p-4 text-center'>
            <p className='text-sm text-purple-300/70'>
              <Shield className='w-3 h-3 inline mr-1' />
              Your session may have expired. Please sign in again to continue.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
