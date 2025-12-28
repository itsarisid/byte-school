"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'How long does it take to implement Byte School?',
    answer:
      'Most schools complete the implementation within 2-4 weeks. This includes data migration, staff training, and system configuration. Our support team guides you through every step to ensure a smooth transition.',
  },
  {
    value: 'item-2',
    question: 'Can we migrate our existing student data?',
    answer:
      'Yes! We provide comprehensive data migration services. Our team will help you transfer all your existing student records, grades, attendance data, and other information from your current system or paper records into Byte School.',
  },
  {
    value: 'item-3',
    question: 'Is my school data secure?',
    answer:
      'Absolutely. We use enterprise-grade security with encrypted data storage, regular backups, and comply with all major data protection regulations. Your school data is stored securely in the cloud with 99.9% uptime guarantee.',
  },
  {
    value: 'item-4',
    question: 'Do you provide training for our staff?',
    answer:
      'Yes! All plans include comprehensive training materials and video tutorials. Professional and Enterprise plans include live training sessions for your staff. We also provide ongoing support to ensure everyone is comfortable using the system.',
  },
  {
    value: 'item-5',
    question: 'Can parents access the system?',
    answer:
      'Yes! Parents get their own portal where they can view their child\'s attendance, grades, assignments, fee status, and school announcements in real-time. They can also communicate with teachers and receive automated notifications.',
  },
  {
    value: 'item-6',
    question: 'What happens if we need to cancel?',
    answer:
      'You can cancel your subscription at any time with no penalties. We offer a 14-day free trial so you can test the system risk-free. If you cancel, you\'ll have access to export all your data before your subscription ends.',
  },
]


const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Byte School components, licensing, and integration. Still have questions? We're here to help!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="#contact">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
