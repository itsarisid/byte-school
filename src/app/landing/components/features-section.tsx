"use client"

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/elements/image-3d'

const mainFeatures = [
  {
    icon: Package,
    title: 'Student Management',
    description: 'Complete student profiles, enrollment, attendance tracking, and academic records in one centralized system.'
  },
  {
    icon: Users,
    title: 'Staff & Faculty Management',
    description: 'Manage teacher schedules, assignments, payroll, and performance tracking effortlessly.'
  },
  {
    icon: Layout,
    title: 'Digital Classrooms',
    description: 'Online assignments, grade books, and communication tools for modern education.'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Eliminate manual paperwork with automated admissions, fee collection, and report generation.'
  }
]

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Real-time insights into student performance, attendance trends, and institutional metrics.'
  },
  {
    icon: Palette,
    title: 'Parent Portal',
    description: 'Keep parents informed with real-time updates on attendance, grades, and school activities.'
  },
  {
    icon: Database,
    title: 'Secure Data Storage',
    description: 'Cloud-based storage with enterprise-grade security for all your school records.'
  },
  {
    icon: Crown,
    title: 'Mobile Access',
    description: 'Access your school management system anytime, anywhere from any device.'
  }
]


export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Key Features</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything your school needs in one platform
          </h2>
          <p className="text-lg text-muted-foreground">
            Byte School provides a complete suite of tools to manage every aspect of your educational institution, from student enrollment to graduation.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="feature-1-light.png"
            darkSrc="feature-1-dark.png"
            alt="Analytics dashboard"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Streamline school operations effortlessly
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                From student admissions to daily attendance, manage all your school's core functions in one unified platform designed for educational excellence.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#pricing" className='flex items-center'>
                  View Pricing
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="#contact">
                  Request Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Go paperless with confidence
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Eliminate manual paperwork and reduce administrative burden with automated processes, digital records, and real-time reporting capabilities.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#features" className='flex items-center'>
                  Explore Features
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="#contact">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="feature-2-light.png"
            darkSrc="feature-2-dark.png"
            alt="Performance dashboard"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
