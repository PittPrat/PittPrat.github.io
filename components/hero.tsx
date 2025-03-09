"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import Typewriter from "./typewriter"
import Link from "next/link"

export default function Hero() {
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypingComplete(true)
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContent = () => {
    const contentSection = document.getElementById("about")
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - rely on autoPlay attribute instead of JavaScript */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/videos/Vid3.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
      
      {/* Hero Content */}
      <div
        ref={ref}
        className={cn("text-center z-10 px-4 relative transition-opacity duration-1000", 
          inView ? "opacity-100" : "opacity-0")}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="block mb-2">Hi, I'm</span>
          <span className="text-primary text-glow">Prathik Pittala</span>
          <span
            className={cn("inline-block w-1 h-12 bg-primary ml-1 animate-blink", 
              isTypingComplete ? "" : "hidden")}
          ></span>
        </h1>
        <p
          className={cn(
            "text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 transition-opacity duration-1000 delay-500",
            isTypingComplete ? "opacity-100" : "opacity-0",
          )}
        >
          <Typewriter
            words={["Software Development Engineer", "AI/ML Engineer", "Product Manager", "Technical Product Manager"]}
            typingSpeed={80}
            deletingSpeed={40}
            delayBetweenWords={1800}
          />
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row gap-4 justify-center transition-opacity duration-1000 delay-1000",
            isTypingComplete ? "opacity-100" : "opacity-0",
          )}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            <a href="/resume.pdf" download>
              Download Resume
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/gallery">Image Gallery</Link>
          </Button>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToContent}
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  )
}