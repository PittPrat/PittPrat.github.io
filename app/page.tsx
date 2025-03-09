import { Metadata } from 'next'
import Hero from '@/components/hero'
import About from '@/components/about'
import Timeline from '@/components/timeline'
import Projects from '@/components/projects'
import CaseStudies from '@/components/case-studies'
import Experience from '@/components/experience'
import Contact from '@/components/contact'
import Skills from '@/components/skills'

export const metadata: Metadata = {
  title: 'Prathik Pittala | Software Engineer & Product Manager',
  description: 'Portfolio of Prathik Pittala, a Senior Software Engineer and Technical Product Manager with 7 years of industry experience and advanced ML expertise from Master\'s education at University of Washington.',
  keywords: 'Prathik Pittala, Software Engineer, Product Manager, Technical Product Manager, AI/ML Engineer, Cloud Architecture',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pittprat.github.io',
    title: 'Prathik Pittala | Software Engineer & Product Manager',
    description: 'Portfolio of Prathik Pittala, a Senior Software Engineer and Technical Product Manager with 7 years of industry experience and advanced ML expertise from Master\'s education at University of Washington.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Prathik Pittala Portfolio',
      },
    ],
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-16 space-y-32">
        <About />
        <Timeline />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Contact />
      </div>
    </main>
  )
}
