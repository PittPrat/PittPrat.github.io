import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, ExternalLink, RefreshCcw } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Showcase | Prathik Pittala",
  description: "Explore AI-generated content and projects by Prathik Pittala",
}

export default function AIShowcase() {
  return (
    <main className="min-h-screen bg-background">
      {/* Video Background (reused from homepage) */}
      <video autoPlay muted loop playsInline className="video-background">
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Showcase</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Exploring the intersection of creativity and artificial intelligence
            </p>
          </div>
          <Link href="/" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* AI Generated Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/images/ai-generated-1.jpg" alt="AI Generated Artwork" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Neural Style Transfer</CardTitle>
                  <CardDescription>Combining content and style images using deep neural networks</CardDescription>
                </div>
                <Badge>Image Generation</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This artwork was created using a neural style transfer algorithm that applies the artistic style of one
                image to the content of another. The model uses convolutional neural networks to separate and recombine
                content and style.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Process
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative h-64 w-full">
              <Image src="/images/ai-generated-2.jpg" alt="AI Generated 3D Model" fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>3D Model Generation</CardTitle>
                  <CardDescription>Text-to-3D model generation using diffusion models</CardDescription>
                </div>
                <Badge>3D Generation</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This 3D model was generated from a text prompt using a diffusion-based text-to-3D generation model. The
                system creates detailed 3D meshes with textures from natural language descriptions, enabling rapid
                prototyping and creative exploration.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download Model
              </Button>
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                View in 3D
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Interactive AI Demo */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Interactive AI Text Generation</CardTitle>
            <CardDescription>Try out a simple text generation model powered by AI</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-card border rounded-lg p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Generated Text</h3>
                <div className="bg-background p-4 rounded-md min-h-[100px] mb-4">
                  <p className="text-muted-foreground">
                    The intersection of artificial intelligence and creative expression represents one of the most
                    fascinating frontiers in technology today. As AI systems become increasingly sophisticated, they
                    challenge our understanding of creativity, authorship, and the unique qualities of human expression.
                  </p>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <RefreshCcw className="h-4 w-4" />
                    Generate New Text
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Projects */}
        <h2 className="text-3xl font-bold mb-8">AI Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis Tool</CardTitle>
              <CardDescription>NLP-based sentiment analysis for customer feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A machine learning model that analyzes customer feedback and categorizes sentiment as positive,
                negative, or neutral with 92% accuracy.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Classification API</CardTitle>
              <CardDescription>Computer vision model for image categorization</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A REST API that uses a convolutional neural network to classify images into 1,000 different categories
                with high precision.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendation Engine</CardTitle>
              <CardDescription>Personalized content recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A collaborative filtering algorithm that provides personalized content recommendations based on user
                behavior and preferences.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View Project
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}

