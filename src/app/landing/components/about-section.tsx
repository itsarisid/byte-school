"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Code, Palette, Layout, Crown } from 'lucide-react'

const values = [
  {
    icon: Code,
    title: 'Education First',
    description: 'Every feature is designed with educators and students in mind, ensuring the platform enhances the learning experience.'
  },
  {
    icon: Palette,
    title: 'User-Friendly Design',
    description: 'Intuitive interfaces that require minimal training, making it easy for teachers, staff, and parents to adopt.'
  },
  {
    icon: Layout,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security and 99.9% uptime to ensure your school data is always safe and accessible.'
  },
  {
    icon: Crown,
    title: 'Continuous Innovation',
    description: 'Regular updates and new features based on feedback from schools and educational institutions worldwide.'
  }
]


export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Byte School
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Built for schools, by educators
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're passionate about transforming education through technology. Our mission is to help schools eliminate paperwork, streamline operations, and focus on what matters most—providing quality education to students.
          </p>
        </div>

        {/* Modern Values Grid with Enhanced Design */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 mb-12">
          {values.map((value, index) => (
            <Card key={index} className='group shadow-xs py-2'>
              <CardContent className='p-8'>
                <div className='flex flex-col items-center text-center'>
                  <CardDecorator>
                    <value.icon className='h-6 w-6' aria-hidden />
                  </CardDecorator>
                  <h3 className='mt-6 font-medium text-balance'>{value.title}</h3>
                  <p className='text-muted-foreground mt-3 text-sm'>{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-muted-foreground">❤️ Made with love for the education community</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="cursor-pointer" asChild>
              <a href="https://github.com/itsarisid/byte-school" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="cursor-pointer" asChild>
              <a href="https://x.com/itsarisid" target="_blank" rel="noopener noreferrer">
                Follow on X
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
