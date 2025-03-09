"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { GraduationCap, Briefcase, Award, MapPin, Building, Cpu } from "lucide-react"

export default function Timeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineEvents = [
    {
      year: "2024-2025",
      title: "Master's Degree in Information Systems",
      description: "University of Washington, Foster School of Business",
      icon: <GraduationCap className="h-6 w-6" />,
      position: "right",
      details: {
        institution: "University of Washington",
        location: "Seattle, WA",
        field: "Information Systems",
        achievements:
          "Selected Coursework: Data Mining, Artificial Intelligence and Machine Learning Applications, Advanced Databases and Data Warehousing",
      },
    },
    {
      year: "2023-2024",
      title: "Senior Consultant",
      description: "Architected real-time data processing pipelines and ML models",
      icon: <Briefcase className="h-6 w-6" />,
      position: "left",
      details: {
        company: "Deloitte",
        location: "Bengaluru, India",
        achievements:
          "Architected a real-time EV data processing pipeline using Azure microservices for Shell Corp., achieving near-instant data availability, cutting compute costs by over 90%, and enhancing system reliability",
      },
    },
    {
      year: "2020-2022",
      title: "Senior Consultant",
      description: "Enhanced AI risk intelligence platform and developed enterprise applications",
      icon: <Briefcase className="h-6 w-6" />,
      position: "right",
      details: {
        company: "Concentrix Catalyst",
        location: "Hyderabad, India",
        achievements:
          "Enhanced OnSolve's AI risk intelligence platform, enabling 100% YoY data source growth, processing 3M+ additional data points, and detecting 300K+ more events per month for real-time threat assessment",
      },
    },
    {
      year: "2017-2020",
      title: "Senior Systems Engineer",
      description: "Engineered high-performance APIs and modernized financial applications",
      icon: <Briefcase className="h-6 w-6" />,
      position: "left",
      details: {
        company: "Infosys",
        location: "Hyderabad, India",
        achievements:
          "Engineered high-performance APIs reducing query execution time by 30% across SQL and NOSQL databases. Created AKKA.NET performance benchmarking POC adopted company-wide",
      },
    },
    {
      year: "2013-2017",
      title: "Bachelor's Degree",
      description: "Electrical, Electronics Engineering",
      icon: <GraduationCap className="h-6 w-6" />,
      position: "right",
      details: {
        institution: "Osmania University",
        location: "Hyderabad, India",
        field: "Electrical, Electronics Engineering",
        achievements:
          "Participated actively in robotic events and workshops, first experience with Python programming robots for battle bots and line follower robots",
      },
    },
    {
      year: "Early Years",
      title: "Introduction to Computing",
      description: "First steps into technology and programming",
      icon: <Cpu className="h-6 w-6" />,
      position: "left",
      details: {
        achievements:
          "Introduced to computers at a young age as elder siblings worked in IT. Initially interested in hardware components, later developed passion for software development through robotics programming",
      },
    },
  ]

  return (
    <section
      ref={ref}
      className={cn("transition-opacity duration-500 delay-150", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">My Journey</h2>

      <div className="timeline-container mt-20 py-10">
        {timelineEvents.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">{event.year}</div>

            <div className={cn("timeline-content", event.position === "left" ? "timeline-left" : "timeline-right")}>
              <div
                className={cn(
                  "bg-card p-6 rounded-lg shadow-md card-hover",
                  event.position === "left" ? "ml-auto" : "mr-auto",
                )}
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-primary/10 rounded-full mr-3">{event.icon}</div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 text-sm">
                  {event.details.institution && (
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.details.institution}</span>
                    </div>
                  )}

                  {event.details.company && (
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.details.company}</span>
                    </div>
                  )}

                  {event.details.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.details.location}</span>
                    </div>
                  )}

                  {event.details.field && (
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      <span>{event.details.field}</span>
                    </div>
                  )}

                  {event.details.achievements && (
                    <div className="flex items-start">
                      <Award className="h-4 w-4 mr-2 text-primary mt-1" />
                      <span>{event.details.achievements}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

