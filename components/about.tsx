'use client'

import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className={cn(
      "transition-opacity duration-1000 delay-300",
      inView ? "opacity-100" : "opacity-0"
    )}>
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
        <div className="relative">
          <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-lg">
            <Image 
              src="videos/Prathik.png?height=400&width=400" 
              alt="Prathik Pittala" 
              width={400} 
              height={400}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
          <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-lg -z-10"></div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-4">Senior Software Engineer & Technical Product Manager</h3>
          <p className="text-muted-foreground mb-6">
            Senior Software Engineer with 7 years of industry experience and advanced ML expertise from Master's education
            at University of Washington. Skilled in cloud architecture, AI/ML and Full-Stack software implementation with
            proven success delivering high-performance solutions for global organizations, combining technical expertise with
            product vision to align engineering excellence with strategic objectives.
          </p>
          <p className="text-muted-foreground mb-6">
            Currently pursuing my Master's degree in Information Systems at University of Washington (expected 2025), 
            focused on expanding my knowledge in advanced technologies and product management methodologies.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Cloud Architecture</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">AI/ML</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Full-Stack Development</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Product Management</span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Technical Leadership</span>
          </div>
        </div>
      </div>
    </section>
  )
}
