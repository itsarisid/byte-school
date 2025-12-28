"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { CardDecorator } from '@/components/ui/card-decorator'
import { Github, Linkedin, Globe } from 'lucide-react'



const team = [
  {
    id: 1,
    name: 'Sajid Khan',
    role: 'Founder & CEO',
    description: 'Passionate educator and technology enthusiast dedicated to transforming education through innovative solutions.',
    image: 'https://ui-avatars.com/api/?name=Sajid+Khan&size=150&background=0D8ABC&color=fff',
    fallback: 'SK',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 2,
    name: 'Umair Malik',
    role: 'Chief Technology Officer',
    description: 'Full-stack developer with expertise in building scalable educational platforms and modern web applications.',
    image: 'https://ui-avatars.com/api/?name=Umair+Malik&size=150&background=6366F1&color=fff',
    fallback: 'UM',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  },
  {
    id: 3,
    name: 'Imtiyaz Pasha',
    role: 'Head of Product',
    description: 'Product strategist focused on creating engaging learning experiences and user-centric educational tools.',
    image: 'https://ui-avatars.com/api/?name=Imtiyaz+Pasha&size=150&background=10B981&color=fff',
    fallback: 'IP',
    social: {
      linkedin: '#',
      github: '#',
      website: '#'
    }
  }
]


export function TeamSection() {
  return (
    <section id="team" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Meet our team
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are a passionate team of innovators, builders, and problem-solvers dedicated to creating exceptional digital experiences that make a difference.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.id} className="shadow-xs py-2">
              <CardContent className="p-4">
                <div className="text-center">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <CardDecorator>
                      <Avatar className="h-24 w-24 border shadow-lg">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover"
                        />
                        <AvatarFallback className="text-lg font-semibold">
                          {member.fallback}
                        </AvatarFallback>
                      </Avatar>
                    </CardDecorator>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 cursor-pointer hover:text-primary"
                      asChild
                    >
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} Website`}
                      >
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
