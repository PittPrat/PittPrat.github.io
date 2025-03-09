"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "FaceEx: Computer Vision-Based Game",
      description: "A game that leverages facial landmark detection for interactive gameplay",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["MediaPipe", "Next.js", "Computer Vision", "React"],
      category: "ai",
      github: "#",
      demo: "#",
    },
    {
      title: "iCARE: AI-based Vision Testing Platform",
      description: "Vision testing platform with online/offline operations and multilingual support",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["AI", "Computer Vision", "Product Management", "UI Design"],
      category: "ai",
      github: "#",
      demo: "#",
    },
    {
      title: "EV Data Processing Pipeline",
      description: "Real-time data processing pipeline for electric vehicle charging data",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Azure", "Microservices", "Event-Driven", "Real-time"],
      category: "cloud",
      github: "#",
      demo: "#",
    },
    {
      title: "Demand Forecasting Model",
      description: "Two-stage forecasting model with LSTM and XGBoost for personalized pricing",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["LSTM", "XGBoost", "K-Means", "Machine Learning"],
      category: "ai",
      github: "#",
      demo: "#",
    },
    {
      title: "Enterprise Resource Management App",
      description: "Full-stack application for Fortune 500 companies to manage resources",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", ".NET Core", "ElasticSearch", "Azure"],
      category: "web",
      github: "#",
      demo: "#",
    },
    {
      title: "Financial API Modernization",
      description: "Modernization of financial applications from mainframe to cloud services",
      image: "/placeholder.svg?height=300&width=600",
      tags: [".NET Core", "AKKA.NET", "MongoDB", "Cloud Migration"],
      category: "cloud",
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section
      id="projects"
      ref={ref}
      className={cn("transition-opacity duration-500 delay-150", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">Projects</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={filter === "all" ? "bg-primary" : ""}
        >
          All
        </Button>
        <Button
          variant={filter === "ai" ? "default" : "outline"}
          onClick={() => setFilter("ai")}
          className={filter === "ai" ? "bg-primary" : ""}
        >
          AI/ML
        </Button>
        <Button
          variant={filter === "web" ? "default" : "outline"}
          onClick={() => setFilter("web")}
          className={filter === "web" ? "bg-primary" : ""}
        >
          Web
        </Button>
        <Button
          variant={filter === "cloud" ? "default" : "outline"}
          onClick={() => setFilter("cloud")}
          className={filter === "cloud" ? "bg-primary" : ""}
        >
          Cloud
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="overflow-hidden card-hover">
            <div className="relative h-48 w-full">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

