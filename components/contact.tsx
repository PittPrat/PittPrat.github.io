"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or a service like Formspree
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    // Show success message
    alert("Thank you for your message! I will get back to you soon.")
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={cn("transition-opacity duration-1000 delay-300", inView ? "opacity-100" : "opacity-0")}
    >
      <h2 className="section-heading">Get In Touch</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:pittalaprathik@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  pittalaprathik@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+12817025473" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (281) 702-5473
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 bg-primary/10 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Seattle, WA</p>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/prathikpittala"
                  className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://github.com/pittprat"
                  className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
                <a href="#" className="p-3 bg-card hover:bg-primary/10 rounded-full transition-colors">
                  <FileText className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

