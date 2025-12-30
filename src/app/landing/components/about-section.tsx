"use client"

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, BookOpen, Cloud, Lock } from 'lucide-react'

const values = [
  {
    icon: BookOpen,
    title: 'CBSE Aligned',
    description: 'Specifically tailored to meet the academic and administrative guidelines of CBSE-affiliated schools in India.'
  },
  {
    icon: Cloud,
    title: 'Paperless Vision',
    description: 'Replacing manual registers and fragmented systems with a single, intuitive digital ecosystem.'
  },
  {
    icon: Lock,
    title: 'Secure Architecture',
    description: 'Scalable, cloud-based platform focusing on data integrity and enterprise-grade security.'
  },
  {
    icon: Github,
    title: 'Open Source',
    description: 'A transparent, community-driven ERP that schools can adapt to their unique policies and future growth.'
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
            Designed for CBSE schools, built for the future
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Byte School is dedicated to digitizing school operations across India. Our mission is to provide an affordable, open-source ERP that empowers educators and simplifies administration.
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
