"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Code, Database, Briefcase, Users, Cloud, Server, Bot, Shield } from "lucide-react"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      title: "Cloud Architecture",
      description: "Designing scalable and resilient cloud solutions on Azure and AWS",
      icon: <Cloud className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI/ML Engineering",
      description: "Building machine learning models and AI-powered applications",
      icon: <Bot className="h-10 w-10 text-primary" />,
    },
    {
      title: "Full-Stack Development",
      description: "Creating end-to-end web applications with modern frameworks",
      icon: <Code className="h-10 w-10 text-primary" />,
    },
    {
      title: "Microservices",
      description: "Designing and implementing distributed systems architecture",
      icon: <Server className="h-10 w-10 text-primary" />,
    },
    {
      title: "Product Management",
      description: "Leading product strategy, roadmapping, and execution",
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      title: "Data Engineering",
      description: "Building data pipelines and optimizing database performance",
      icon: <Database className="h-10 w-10 text-primary" />,
    },
    {
      title: "Cybersecurity",
      description: "Implementing secure systems and best practices",
      icon: <Shield className="h-10 w-10 text-primary" />,
    },
    {
      title: "Technical Leadership",
      description: "Guiding teams and mentoring junior developers",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section
      ref={ref}
      className={cn("transition-opacity duration-500 delay-150", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">Skills & Expertise</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {skills.map((skill, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-md card-hover">
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

