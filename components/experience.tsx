"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin, ArrowRight } from "lucide-react"

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Senior Consultant",
      company: "Deloitte",
      location: "Bengaluru, India",
      period: "Jan 2023 - Jun 2024",
      description: "Led development of real-time data processing pipelines and ML models for Shell Corp.",
      responsibilities: [
        "Architected a real-time EV data processing pipeline using Azure microservices for Shell Corp., achieving near-instant data availability, cutting compute costs by over 90%, and enhancing system reliability over previous batch systems",
        "Optimized multi-database architecture (PostgreSQL, Azure Table Storage, SQL Server), reducing storage costs by 30%",
        "Architected scalable Power BI report automation systems, enhancing performance and optimizing costs",
        "Developed a two-stage demand forecasting model with LSTM and XGBoost, integrating personalized pricing (K-Means, price elasticity) to predict a 12% potential revenue increase",
      ],
      technologies: [
        "Azure Cloud",
        ".NET Core",
        "React",
        "PostgreSQL",
        "SQL Server",
        "Azure Table Storage",
        "LSTM",
        "XGBoost",
        "Power BI",
      ],
    },
    {
      title: "Senior Consultant",
      company: "Concentrix Catalyst",
      location: "Hyderabad, India",
      period: "Dec 2020 - Dec 2022",
      description: "Enhanced AI risk intelligence platform and developed enterprise applications",
      responsibilities: [
        "Enhanced OnSolve's AI risk intelligence platform, enabling 100% YoY data source growth, processing 3M+ additional data points, and detecting 300K+ more events per month for real-time threat assessment",
        "Engineered high-performance APIs reducing response times by 40%, enabling scalability for millions of daily alerts",
        "Developed Automated Email response system leveraging NLP, ML and AWS technologies, slashing customer turnaround time by 90% and significantly enhancing operational efficiency",
        "Led development of 4 core features for MCI's enterprise resource management app used by Fortune 500 organizations",
        "Developed full-stack features with custom ElasticSearch clusters, enhancing search performance and speed by 40%",
      ],
      technologies: [".NET Core", "React", "Kubernetes", "ElasticSearch", "Azure", "AWS", "NLP", "Microservices"],
    },
    {
      title: "Senior Systems Engineer",
      company: "Infosys",
      location: "Hyderabad, India",
      period: "Jun 2017 - Dec 2020",
      description: "Engineered high-performance APIs and modernized financial applications",
      responsibilities: [
        "Engineered high-performance APIs reducing query execution time by 30% across SQL and NOSQL databases",
        "Created AKKA.NET performance benchmarking POC adopted company-wide for validation testing of REST APIs",
        "Implemented pagination strategies for transaction history handling millions of records, reducing response time by 65%",
        "Modernized critical financial apps from mainframe to scalable cloud services, enhancing efficiency and maintainability",
        "Implemented BDD/TDD ensuring 90%+ code coverage and zero vulnerabilities using SonarQube and Veracode",
      ],
      technologies: [
        ".NET Framework",
        ".NET Core",
        "Angular",
        "AKKA.NET",
        "DB2",
        "MongoDB",
        "AerospikeDB",
        "BDD/TDD",
        "SonarQube",
      ],
    },
  ]

  return (
    <section
      id="experience"
      ref={ref}
      className={cn("transition-opacity duration-500 delay-150", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">Work Experience</h2>

      <div className="space-y-8 mt-16">
        {experiences.map((exp, index) => (
          <Card key={index} className="card-hover">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <CardTitle className="text-2xl">{exp.title}</CardTitle>
                  <CardDescription className="text-lg font-medium mt-1">{exp.company}</CardDescription>
                </div>
                <Badge variant="outline" className="text-primary border-primary whitespace-nowrap">
                  {exp.period}
                </Badge>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="mb-4">{exp.description}</p>

              <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
              <ul className="space-y-2 mb-6">
                {exp.responsibilities.map((resp, rIndex) => (
                  <li key={rIndex} className="flex items-start">
                    <ArrowRight className="h-4 w-4 mr-2 text-primary mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIndex) => (
                  <Badge key={tIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

