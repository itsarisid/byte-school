"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Wrench, Clock, CheckCircle2, AlertCircle, Circle, Bell, Twitter, Github, MessageSquare } from "lucide-react"

export function UnderMaintenanceError() {
  // Countdown timer state - set to 2 hours, 44 minutes, 16 seconds from now
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 2,
    minutes: 44,
    seconds: 16
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email subscription
    console.log("Subscribed:", email)
  }

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-neutral-800 rounded-full p-6'>
            <Wrench className='w-10 h-10 text-white' />
          </div>
        </div>

        {/* Header */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Badge variant="outline" className='border-red-500 text-red-500 bg-red-500/10 px-3 py-1'>
              <Clock className='w-3 h-3 mr-1' />
              Scheduled Maintenance
            </Badge>
          </div>
          <h1 className='text-4xl font-bold'>We'll Be Right Back!</h1>
          <p className='text-neutral-400 max-w-lg mx-auto'>
            We're currently performing scheduled maintenance to improve your experience. Our team is working hard to get everything back online soon.
          </p>
        </div>

        {/* Countdown Timer */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <Clock className='w-4 h-4 text-red-500' />
              <span className='text-sm text-red-500 font-medium'>Estimated Time Remaining</span>
            </div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='text-center'>
                <div className='text-4xl font-bold'>{String(timeRemaining.hours).padStart(2, '0')}</div>
                <div className='text-xs text-neutral-500 uppercase mt-1'>Hours</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold'>{String(timeRemaining.minutes).padStart(2, '0')}</div>
                <div className='text-xs text-neutral-500 uppercase mt-1'>Minutes</div>
              </div>
              <div className='text-center'>
                <div className='text-4xl font-bold'>{String(timeRemaining.seconds).padStart(2, '0')}</div>
                <div className='text-xs text-neutral-500 uppercase mt-1'>Seconds</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Two Column Layout */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Maintenance Progress */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <CheckCircle2 className='w-4 h-4 text-green-500' />
                <span className='font-semibold'>Maintenance Progress</span>
              </div>

              <div className='space-y-2'>
                <div className='flex justify-between text-sm'>
                  <span className='text-neutral-400'>Overall Progress</span>
                  <span className='font-medium'>75%</span>
                </div>
                <Progress value={75} className='h-2 bg-neutral-800' />
              </div>

              <div className='space-y-3'>
                <div className='flex items-start gap-3'>
                  <CheckCircle2 className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <div className='font-medium text-sm'>Performance Improvements</div>
                    <div className='text-xs text-neutral-500'>Optimizing backend speeds and database</div>
                    <Badge variant="outline" className='border-green-500 text-green-500 bg-green-500/10 text-xs mt-1'>
                      completed
                    </Badge>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <AlertCircle className='w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <div className='font-medium text-sm'>Security Updates</div>
                    <div className='text-xs text-neutral-500'>Implementing enhanced security protocols</div>
                    <Badge variant="outline" className='border-orange-500 text-orange-500 bg-orange-500/10 text-xs mt-1'>
                      in progress
                    </Badge>
                  </div>
                </div>

                <div className='flex items-start gap-3'>
                  <Circle className='w-4 h-4 text-neutral-600 mt-0.5 flex-shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <div className='font-medium text-sm'>Mobile Experience</div>
                    <div className='text-xs text-neutral-500'>Enhanced mobile interface and features</div>
                    <Badge variant="outline" className='border-neutral-600 text-neutral-400 bg-neutral-800 text-xs mt-1'>
                      pending
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stay Updated */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <Bell className='w-4 h-4 text-blue-500' />
                <span className='font-semibold'>Stay Updated</span>
              </div>

              <p className='text-sm text-neutral-400'>
                Get notified the second we're back online. We'll send you an email as soon as maintenance is complete.
              </p>

              <form onSubmit={handleSubscribe} className='space-y-3'>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500'
                  required
                />
                <Button type="submit" className='w-full bg-green-600 hover:bg-green-700 text-white'>
                  Notify Me When Live
                </Button>
              </form>

              <div className='pt-2'>
                <p className='text-xs text-neutral-500 mb-3'>Follow us for real-time updates:</p>
                <div className='flex gap-2'>
                  <Button variant="outline" size="sm" className='flex-1 border-neutral-700 bg-neutral-800 hover:bg-neutral-700'>
                    <Twitter className='w-4 h-4 mr-1' />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className='flex-1 border-neutral-700 bg-neutral-800 hover:bg-neutral-700'>
                    <Github className='w-4 h-4 mr-1' />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm" className='flex-1 border-neutral-700 bg-neutral-800 hover:bg-neutral-700'>
                    <MessageSquare className='w-4 h-4 mr-1' />
                    Discord
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className='bg-red-950/20 border-red-900/50'>
          <CardContent className='p-6 text-center space-y-3'>
            <div className='flex justify-center'>
              <div className='bg-red-900/30 rounded-full p-2'>
                <AlertCircle className='w-5 h-5 text-red-500' />
              </div>
            </div>
            <div>
              <h3 className='font-semibold text-red-400'>Need Immediate Assistance?</h3>
              <p className='text-sm text-red-300/70'>
                If you have an urgent matter that can't wait, please contact our emergency support.
              </p>
            </div>
            <Button variant="outline" className='border-red-500 text-red-500 hover:bg-red-500/10'>
              Emergency Contact
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
