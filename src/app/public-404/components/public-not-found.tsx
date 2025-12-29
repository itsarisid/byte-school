"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"
import {
    Search,
    Home,
    HelpCircle,
    MessageSquare,
    FileText,
    ExternalLink,
    MessageCircle,
    Mail
} from "lucide-react"

export function PublicNotFound() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle search functionality
        console.log("Searching for:", searchQuery)
    }

    const popularSearches = [
        "staff account",
        "billing issues",
        "password reset",
        "API integration",
        "mobile app",
        "data export"
    ]

    const quickLinks = [
        {
            name: "Home",
            description: "Return to homepage",
            path: "/",
            icon: Home,
            color: "text-green-400"
        },
        {
            name: "Help Center",
            description: "Browse our guides",
            path: "/help",
            icon: HelpCircle,
            color: "text-blue-400"
        },
        {
            name: "Contact Support",
            description: "Get direct help",
            path: "/contact",
            icon: MessageSquare,
            color: "text-purple-400"
        },
        {
            name: "Documentation",
            description: "Technical docs",
            path: "/docs",
            icon: FileText,
            color: "text-orange-400"
        },
    ]

    const popularPages = [
        { name: "Getting Started Guide", visits: "10k visits" },
        { name: "API Documentation", visits: "8.5k visits" },
        { name: "Pricing Plans", visits: "6.2k visits" },
        { name: "Community Forum", visits: "4.3k visits" },
    ]

    return (
        <div className='min-h-screen bg-neutral-950 text-white flex items-center justify-center p-4'>
            <div className='max-w-4xl w-full space-y-8 py-12'>
                {/* Large 404 Text */}
                <div className='text-center'>
                    <h1 className='text-8xl md:text-9xl font-bold text-neutral-800 mb-4'>404</h1>
                    <h2 className='text-3xl md:text-4xl font-bold mb-3'>Oops! Page Not Found</h2>
                    <p className='text-neutral-400 max-w-lg mx-auto'>
                        The page you're looking for doesn't exist or has been moved. Let's help you find what you need.
                    </p>
                </div>

                {/* Search Box */}
                <Card className='bg-neutral-900 border-neutral-800'>
                    <CardContent className='p-6'>
                        <form onSubmit={handleSearch} className='space-y-4'>
                            <div className='relative'>
                                <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500' />
                                <Input
                                    type="text"
                                    placeholder="Search for pages, help articles, or features..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className='bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 pl-10 h-12'
                                />
                            </div>
                            <Button type="submit" className='w-full bg-green-600 hover:bg-green-700 h-12 text-base font-medium'>
                                Search Our Site
                            </Button>

                            {/* Popular Searches */}
                            <div className='pt-2'>
                                <p className='text-xs text-neutral-500 mb-2'>Popular searches:</p>
                                <div className='flex flex-wrap gap-2'>
                                    {popularSearches.map((search, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSearchQuery(search)}
                                            className='px-3 py-1 text-xs bg-neutral-800 hover:bg-neutral-700 rounded-full text-neutral-300 transition-colors'
                                        >
                                            {search}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Quick Links Grid */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {quickLinks.map((link) => (
                        <Card
                            key={link.path}
                            className='bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all cursor-pointer group'
                            onClick={() => navigate(link.path)}
                        >
                            <CardContent className='p-6 text-center space-y-3'>
                                <div className='flex justify-center'>
                                    <div className='bg-neutral-800 group-hover:bg-neutral-700 rounded-lg p-3 transition-colors'>
                                        <link.icon className={`w-6 h-6 ${link.color}`} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-semibold text-sm mb-1'>{link.name}</h3>
                                    <p className='text-xs text-neutral-500'>{link.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className='grid md:grid-cols-2 gap-6'>
                    {/* Popular Pages */}
                    <Card className='bg-neutral-900 border-neutral-800'>
                        <CardContent className='p-6 space-y-4'>
                            <div className='flex items-center gap-2 mb-4'>
                                <ExternalLink className='w-4 h-4 text-blue-400' />
                                <h3 className='font-semibold'>Popular Pages</h3>
                            </div>
                            <div className='space-y-3'>
                                {popularPages.map((page, index) => (
                                    <div
                                        key={index}
                                        className='flex items-center justify-between p-3 bg-neutral-800 hover:bg-neutral-750 rounded-lg cursor-pointer transition-colors group'
                                    >
                                        <div className='flex items-center gap-3'>
                                            <ExternalLink className='w-4 h-4 text-neutral-500 group-hover:text-blue-400 transition-colors' />
                                            <span className='text-sm text-neutral-300'>{page.name}</span>
                                        </div>
                                        <span className='text-xs text-neutral-500'>{page.visits}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Need More Help */}
                    <Card className='bg-neutral-900 border-neutral-800'>
                        <CardContent className='p-6 space-y-4'>
                            <div className='flex items-center gap-2 mb-4'>
                                <HelpCircle className='w-4 h-4 text-purple-400' />
                                <h3 className='font-semibold'>Need More Help?</h3>
                            </div>

                            {/* Live Chat Support */}
                            <div className='p-4 bg-neutral-800 rounded-lg space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <MessageCircle className='w-4 h-4 text-green-400' />
                                    <span className='text-sm font-medium text-green-400'>Live Chat Support</span>
                                </div>
                                <p className='text-xs text-neutral-400'>Get instant help from our support team</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className='w-full mt-2 border-green-600 text-green-400 bg-green-500/10 hover:bg-green-500/20'
                                >
                                    Start Chat
                                </Button>
                            </div>

                            {/* Email Support */}
                            <div className='p-4 bg-neutral-800 rounded-lg space-y-2'>
                                <div className='flex items-center gap-2'>
                                    <Mail className='w-4 h-4 text-blue-400' />
                                    <span className='text-sm font-medium text-blue-400'>Email Support</span>
                                </div>
                                <p className='text-xs text-neutral-400'>Send us a detailed message about your issue</p>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className='w-full mt-2 border-blue-600 text-blue-400 bg-blue-500/10 hover:bg-blue-500/20'
                                >
                                    Send Email
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-4 justify-center pt-4'>
                    <Button
                        size="lg"
                        className='bg-green-600 hover:bg-green-700 px-8'
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className='border-neutral-700 bg-neutral-800 hover:bg-neutral-700 px-8'
                        onClick={() => navigate('/')}
                    >
                        Go to Homepage
                    </Button>
                </div>
            </div>
        </div>
    )
}
