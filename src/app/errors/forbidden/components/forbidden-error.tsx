"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { ShieldX, Lock, Home, Mail, User, AlertTriangle } from "lucide-react"

export function ForbiddenError() {
  const navigate = useNavigate()

  const requiredPermissions = [
    "Admin Access",
    "Resource Management",
    "Advanced Features"
  ]

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-red-900/30 rounded-full p-6'>
            <ShieldX className='w-10 h-10 text-red-400' />
          </div>
        </div>

        {/* Header */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Badge variant="outline" className='border-red-500 text-red-400 bg-red-500/10 px-3 py-1'>
              <Lock className='w-3 h-3 mr-1' />
              403 Forbidden
            </Badge>
          </div>
          <h1 className='text-4xl font-bold'>Access Denied</h1>
          <p className='text-neutral-400 max-w-lg mx-auto'>
            You don't have the necessary permissions to access this resource. This area is restricted to authorized users only.
          </p>
        </div>

        {/* Permission Details */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <AlertTriangle className='w-4 h-4 text-yellow-500' />
              <span className='font-semibold'>Why am I seeing this?</span>
            </div>
            <p className='text-sm text-neutral-400'>
              This page requires special permissions that your current account doesn't have. You may need one or more of the following:
            </p>
            <div className='space-y-2'>
              {requiredPermissions.map((permission, index) => (
                <div key={index} className='flex items-center gap-2 text-sm'>
                  <div className='w-1.5 h-1.5 rounded-full bg-red-500' />
                  <span className='text-neutral-300'>{permission}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Request Access */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <User className='w-4 h-4 text-blue-400' />
                <span className='font-semibold'>Request Access</span>
              </div>
              <p className='text-sm text-neutral-400'>
                Need access to this resource? Contact your administrator to request the necessary permissions.
              </p>
              <Button
                variant="outline"
                className='w-full border-blue-600 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                onClick={() => navigate('/contact')}
              >
                <Mail className='w-4 h-4 mr-2' />
                Contact Administrator
              </Button>
            </CardContent>
          </Card>

          {/* Navigation */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <Home className='w-4 h-4 text-green-400' />
                <span className='font-semibold'>Go Back</span>
              </div>
              <p className='text-sm text-neutral-400'>
                Return to a page you have access to and continue working.
              </p>
              <div className='space-y-2'>
                <Button
                  className='w-full bg-green-600 hover:bg-green-700'
                  onClick={() => navigate('/dashboard')}
                >
                  <Home className='w-4 h-4 mr-2' />
                  Go to Dashboard
                </Button>
                <Button
                  variant="outline"
                  className='w-full border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Security Notice */}
        <Card className='bg-red-950/20 border-red-900/50'>
          <CardContent className='p-4 text-center'>
            <p className='text-sm text-red-300/70'>
              <Lock className='w-3 h-3 inline mr-1' />
              This access attempt has been logged for security purposes
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
