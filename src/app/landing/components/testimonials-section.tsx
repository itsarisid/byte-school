"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Principal, Green Valley High School',
    image: 'https://ui-avatars.com/api/?name=Sarah+Johnson&size=120&background=6366F1&color=fff',
    quote:
      'Byte School has revolutionized how we manage our institution. Going paperless has saved us countless hours and significantly reduced administrative costs.',
  },
  {
    name: 'Michael Chen',
    role: 'School Administrator, Riverside Academy',
    image: 'https://ui-avatars.com/api/?name=Michael+Chen&size=120&background=10B981&color=fff',
    quote: 'The automated attendance and grade management features are game-changers. Parents love the real-time updates through the portal.',
  },
  {
    name: 'Priya Sharma',
    role: 'IT Director, Delhi International School',
    image: 'https://ui-avatars.com/api/?name=Priya+Sharma&size=120&background=F59E0B&color=fff',
    quote:
      'Implementation was seamless, and the support team was exceptional. We migrated from paper-based systems in just two weeks.',
  },
  {
    name: 'Robert Williams',
    role: 'Superintendent, Lincoln School District',
    image: 'https://ui-avatars.com/api/?name=Robert+Williams&size=120&background=EF4444&color=fff',
    quote:
      'Managing multiple campuses has never been easier. The analytics dashboard gives us insights we never had before.',
  },
  {
    name: 'Maria Santos',
    role: 'Vice Principal, St. Mary\'s School',
    image: 'https://ui-avatars.com/api/?name=Maria+Santos&size=120&background=8B5CF6&color=fff',
    quote:
      'The fee collection module has improved our cash flow significantly. Parents appreciate the convenience of online payments and automated reminders.',
  },
  {
    name: 'David Thompson',
    role: 'Academic Coordinator, Oakwood School',
    image: 'https://ui-avatars.com/api/?name=David+Thompson&size=120&background=EC4899&color=fff',
    quote: 'Exam scheduling and result management are now completely automated. Teachers can focus more on teaching and less on paperwork.',
  },
  {
    name: 'Lisa Anderson',
    role: 'Parent & PTA President',
    image: 'https://ui-avatars.com/api/?name=Lisa+Anderson&size=120&background=14B8A6&color=fff',
    quote:
      'As a parent, I love being able to track my child\'s attendance, grades, and school activities in real-time. The mobile app is fantastic!',
  },
  {
    name: 'James Foster',
    role: 'Teacher, Maple Leaf Elementary',
    image: 'https://ui-avatars.com/api/?name=James+Foster&size=120&background=F97316&color=fff',
    quote: 'Grade entry and report card generation used to take hours. Now it takes minutes. The system is intuitive and easy to use.',
  },
  {
    name: 'Sophie Laurent',
    role: 'Registrar, Cambridge Academy',
    image: 'https://ui-avatars.com/api/?name=Sophie+Laurent&size=120&background=0EA5E9&color=fff',
    quote:
      'Student enrollment and record management have become so much simpler. Everything is organized and accessible at our fingertips.',
  },
  {
    name: 'Ahmed Hassan',
    role: 'Finance Manager, Al-Noor School',
    image: 'https://ui-avatars.com/api/?name=Ahmed+Hassan&size=120&background=84CC16&color=fff',
    quote: 'The financial reporting and fee tracking features are comprehensive. Reconciliation that used to take days now takes hours.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Librarian, Westside High School',
    image: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&size=120&background=A855F7&color=fff',
    quote:
      'The library management module is excellent. Book tracking, issuing, and returns are all automated. Students can even search the catalog online.',
  },
  {
    name: 'Dr. John Mitchell',
    role: 'Dean, Heritage College',
    image: 'https://ui-avatars.com/api/?name=John+Mitchell&size=120&background=06B6D4&color=fff',
    quote: 'Byte School has helped us achieve our goal of becoming a completely paperless institution. The environmental impact alone is significant.',
  },
]


export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Trusted by Schools Worldwide
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of educational institutions that have transformed their operations with Byte School.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarImage
                      alt={testimonial.name}
                      src={testimonial.image}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <a href="#" onClick={e => e.preventDefault()} className="cursor-pointer">
                      <h3 className="font-medium hover:text-primary transition-colors">{testimonial.name}</h3>
                    </a>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
