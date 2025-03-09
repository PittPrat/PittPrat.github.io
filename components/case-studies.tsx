"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CaseStudies() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      title: "Real-time EV Data Processing Pipeline",
      description: "How we optimized data processing for Shell Corp's electric vehicle charging network",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Azure", "Microservices", "Event-Driven", "Real-time"],
      highlights: [
        "Reduced compute costs by over 90%",
        "Achieved near-instant data availability",
        "Enhanced system reliability over previous batch systems",
      ],
      link: "#",
    },
    {
      title: "AI Risk Intelligence Platform Enhancement",
      description: "Scaling OnSolve's platform to process millions more data points for threat assessment",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["AI", "Scalability", "Data Processing", "Cloud Architecture"],
      highlights: [
        "100% YoY data source growth",
        "Processing 3M+ additional data points",
        "Detecting 300K+ more events per month",
      ],
      link: "#",
    },
    {
      title: "Financial Application Modernization",
      description: "Transforming legacy mainframe systems to modern cloud architecture",
      image: "/placeholder.svg?height=400&width=800",
      tags: ["Cloud Migration", "API Development", "Performance Optimization"],
      highlights: [
        "Reduced query execution time by 30%",
        "Decreased response time by 65% for transaction history",
        "Achieved 90%+ code coverage with BDD/TDD",
      ],
      link: "#",
    },
  ]

  return (
    <section
      id="case-studies"
      ref={ref}
      className={cn("transition-opacity duration-1000 delay-300", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">Case Studies</h2>

      <div className="space-y-16 mt-16">
        {caseStudies.map((study, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="relative h-64 lg:h-full w-full">
                <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
              </div>

              <div className="p-6">
                <CardHeader className="px-0 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-primary text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl">{study.title}</CardTitle>
                  <CardDescription className="text-base">{study.description}</CardDescription>
                </CardHeader>

                <CardContent className="px-0">
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {study.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <ArrowRight className="h-4 w-4 mr-2 text-primary mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-0 pt-4">
                  <Button asChild>
                    <Link href={study.link}>
                      Read Case Study
                      <FileText className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

