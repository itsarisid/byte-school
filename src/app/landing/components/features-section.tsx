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
  Palette,
  Sparkles,
  BookOpen,
  CreditCard,
  MessageSquare,
  Video,
  Shield,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/elements/image-3d'

const mainFeatures = [
  {
    icon: Users,
    title: 'Core Academic Module',
    description: 'Manage student admissions, teacher profiles, and class enrollments in a centralized platform.'
  },
  {
    icon: Sparkles,
    title: 'AI-Enhanced Hub',
    description: 'Career guidance, intelligent evaluation of assignments, and predictive performance analytics.'
  },
  {
    icon: BookOpen,
    title: 'LMS Module',
    description: 'Deliver interactive courses, track assignments, and conduct online quizzes with ease.'
  },
  {
    icon: CreditCard,
    title: 'ERP & Finance',
    description: 'Automated fee collection, payroll management, and comprehensive expense tracking.'
  }
]

const secondaryFeatures = [
  {
    icon: MessageSquare,
    title: 'Smart Communication',
    description: 'Real-time parent alerts via WhatsApp and SMS for attendance and performance updates.'
  },
  {
    icon: Video,
    title: 'Virtual Learning',
    description: 'Seamless integration with Zoom, Google Meet, and Microsoft Teams for hybrid education.'
  },
  {
    icon: MapPin,
    title: 'Advanced Operations',
    description: 'GPS-enabled transport tracking, library management, and hostel/cafeteria operations.'
  },
  {
    icon: Shield,
    title: 'Secure & Cloud-Based',
    description: 'Enterprise-grade security architecture with 24/7 access to your institutional data.'
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
            A comprehensive ecosystem for your school
          </h2>
          <p className="text-lg text-muted-foreground">
            Byte School replaces fragmented systems with a single, intuitive platform to manage every aspect of CBSE school operations.
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
                Digitize your institutional operations
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                From admissions to graduation, Byte School automates the entire student lifecycle while providing real-time data access for all stakeholders.
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
                Empower education with smart tools
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Leverage AI insights and seamless virtual integrations to provide a modern, high-quality learning experience for your students.
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
