"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { SearchX, Home, ArrowLeft, Search, FileQuestion, Compass } from "lucide-react"

export function NotFoundError() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  const popularPages = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Login", path: "/login", icon: ArrowLeft },
  ]

  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center p-4'>
      <div className='max-w-2xl w-full space-y-8'>
        {/* Icon */}
        <div className='flex justify-center'>
          <div className='bg-blue-900/30 rounded-full p-6'>
            <SearchX className='w-10 h-10 text-blue-400' />
          </div>
        </div>

        {/* Header */}
        <div className='text-center space-y-4'>
          <div className='flex justify-center'>
            <Badge variant="outline" className='border-blue-500 text-blue-400 bg-blue-500/10 px-3 py-1'>
              <FileQuestion className='w-3 h-3 mr-1' />
              404 Error
            </Badge>
          </div>
          <h1 className='text-4xl font-bold'>Page Not Found</h1>
          <p className='text-neutral-400 max-w-lg mx-auto'>
            The page you're looking for doesn't exist or has been moved. Let's help you find what you need.
          </p>
        </div>

        {/* Search Box */}
        <Card className='bg-neutral-900 border-neutral-800'>
          <CardContent className='p-6'>
            <form onSubmit={handleSearch} className='space-y-3'>
              <div className='flex items-center gap-2 mb-2'>
                <Search className='w-4 h-4 text-blue-400' />
                <span className='text-sm font-medium'>Search for a page</span>
              </div>
              <div className='flex gap-2'>
                <Input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className='bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500'
                />
                <Button type="submit" className='bg-blue-600 hover:bg-blue-700'>
                  <Search className='w-4 h-4' />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Popular Pages */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <Compass className='w-4 h-4 text-blue-400' />
                <span className='font-semibold'>Popular Pages</span>
              </div>
              <div className='space-y-2'>
                {popularPages.map((page) => (
                  <Button
                    key={page.path}
                    variant="outline"
                    className='w-full justify-start border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                    onClick={() => navigate(page.path)}
                  >
                    <page.icon className='w-4 h-4 mr-2' />
                    {page.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className='bg-neutral-900 border-neutral-800'>
            <CardContent className='p-6 space-y-4'>
              <div className='flex items-center gap-2'>
                <FileQuestion className='w-4 h-4 text-blue-400' />
                <span className='font-semibold'>Need Help?</span>
              </div>
              <p className='text-sm text-neutral-400'>
                If you believe this is an error, please contact our support team.
              </p>
              <div className='space-y-2'>
                <Button
                  variant="outline"
                  className='w-full border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                  onClick={() => navigate('/')}
                >
                  <Home className='w-4 h-4 mr-2' />
                  Go to Homepage
                </Button>
                <Button
                  variant="outline"
                  className='w-full border-neutral-700 bg-neutral-800 hover:bg-neutral-700'
                  onClick={() => navigate(-1)}
                >
                  <ArrowLeft className='w-4 h-4 mr-2' />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Error Details */}
        <Card className='bg-neutral-900/50 border-neutral-800'>
          <CardContent className='p-4'>
            <div className='text-center text-sm text-neutral-500'>
              <p>Error Code: <span className='text-blue-400 font-mono'>404</span></p>
              <p className='mt-1'>If this problem persists, please contact support</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
