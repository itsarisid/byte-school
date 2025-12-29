"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { ServerCrash, AlertCircle, Home, RefreshCw, Mail, CheckCircle2, XCircle } from "lucide-react"

export function InternalServerError() {
  const navigate = useNavigate()

  const troubleshootingSteps = [
    { text: "Refresh the page", icon: RefreshCw, action: () => window.location.reload() },
    { text: "Clear your browser cache", icon: XCircle },
    { text: "Try again in a few minutes", icon: CheckCircle2 },
  ]

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-orange-900/30 rounded-full p-6'>
            <ServerCrash className='w-10 h-10 text-orange-400' />
          </div>
        </div>

        {/* Header */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Badge variant="outline" className='border-orange-500 text-orange-400 bg-orange-500/10 px-3 py-1'>
              <AlertCircle className='w-3 h-3 mr-1' />
              500 Internal Server Error
            </Badge>
          </div>
          <h1 className='text-4xl font-bold'>Something Went Wrong</h1>
          <p className='text-neutral-400 max-w-lg mx-auto'>
            We're experiencing technical difficulties on our end. Our team has been notified and is working to resolve the issue.
          </p>
        </div>

        {/* Error Details */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6 space-y-4'>
            <div className='flex items-center gap-2'>
              <AlertCircle className='w-4 h-4 text-orange-400' />
              <span className='font-semibold'>What happened?</span>
            </div>
            <p className='text-sm text-neutral-400'>
              An unexpected error occurred while processing your request. This is not your fault - it's an issue with our servers. We've automatically logged this error and our technical team will investigate.
            </p>
          </CardContent>
        </Card>

        {/* Troubleshooting Steps */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* What You Can Do */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <RefreshCw className='w-4 h-4 text-blue-400' />
                <span className='font-semibold'>What You Can Do</span>
              </div>
              <div className='space-y-3'>
                {troubleshootingSteps.map((step, index) => (
                  <div key={index} className='flex items-start gap-3'>
                    <step.icon className='w-4 h-4 text-neutral-400 mt-0.5 flex-shrink-0' />
                    <div className='flex-1'>
                      {step.action ? (
                        <button
                          onClick={step.action}
                          className='text-sm text-neutral-300 hover:text-white transition-colors text-left'
                        >
                          {step.text}
                        </button>
                      ) : (
                        <span className='text-sm text-neutral-300'>{step.text}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Get Help */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-green-400' />
                <span className='font-semibold'>Need Help?</span>
              </div>
              <p className='text-sm text-neutral-400'>
                If the problem persists, please contact our support team with the error details.
              </p>
              <div className='space-y-2'>
                <Button
                  className='w-full bg-green-600 hover:bg-green-700'
                  onClick={() => navigate('/contact')}
                >
                  <Mail className='w-4 h-4 mr-2' />
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className='w-full border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                  onClick={() => navigate('/dashboard')}
                >
                  <Home className='w-4 h-4 mr-2' />
                  Go to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error Reference */}
        <Card className='bg-orange-950/20 border-orange-900/50'>
          <CardContent className='p-4'>
            <div className='text-center text-sm'>
              <p className='text-orange-300/70'>
                Error Reference: <span className='text-orange-400 font-mono'>ERR_500_{new Date().getTime()}</span>
              </p>
              <p className='text-orange-300/70 mt-1'>
                Please include this reference when contacting support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
