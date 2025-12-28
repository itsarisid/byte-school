"use client"

import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const blogs = [
  {
    id: 1,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Education Technology',
    title: 'Going Paperless in Schools',
    description:
      'A comprehensive guide to transitioning your school from manual paperwork to a fully digital management system.',
  },
  {
    id: 2,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Best Practices',
    title: 'Improving Parent Engagement',
    description:
      'How digital parent portals and real-time communication can strengthen the school-parent partnership.',
  },
  {
    id: 3,
    image: 'https://ui.shadcn.com/placeholder.svg',
    category: 'Case Study',
    title: 'Success Story: Digital Transformation',
    description:
      'How Green Valley High School reduced administrative costs by 60% after implementing Byte School.',
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Latest Insights</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            From our blog
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest trends in education technology, best practices, and success stories from schools using Byte School.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {blogs.map(blog => (
            <Card key={blog.id} className="overflow-hidden py-0">
              <CardContent className="px-0">
                <div className="aspect-video">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="size-full object-cover dark:invert dark:brightness-[0.95]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase">
                    {blog.category}
                  </p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="cursor-pointer"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">{blog.title}</h3>
                  </a>
                  <p className="text-muted-foreground">{blog.description}</p>
                  <a
                    href="#"
                    onClick={e => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
                  >
                    Learn More
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
