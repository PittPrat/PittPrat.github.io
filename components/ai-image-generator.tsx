"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Loader2 } from "lucide-react"
import Image from "next/image"

export default function AIImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)

  // This is a mock function - in a real app, you would call an actual AI image generation API
  const generateImage = async () => {
    if (!prompt.trim()) return

    setIsGenerating(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // In a real implementation, you would call an actual API like:
      // const response = await fetch('/api/generate-image', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ prompt })
      // })
      // const data = await response.json()
      // setGeneratedImage(data.imageUrl)

      // For demo purposes, we'll just use a placeholder
      setGeneratedImage(`/placeholder.svg?height=512&width=512&text=${encodeURIComponent(prompt)}`)
    } catch (error) {
      console.error("Error generating image:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Image Generator</CardTitle>
        <CardDescription>Generate unique images using AI based on your text descriptions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Describe the image you want to generate..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={isGenerating}
          />
          <Button onClick={generateImage} disabled={isGenerating || !prompt.trim()}>
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Generate
              </>
            )}
          </Button>
        </div>

        {generatedImage && (
          <div className="mt-4">
            <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg border">
              <Image src={generatedImage || "/placeholder.svg"} alt={prompt} fill className="object-cover" />
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">Generated image based on: "{prompt}"</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Note: This is a demonstration. In a production environment, this would connect to an actual AI image generation
        API.
      </CardFooter>
    </Card>
  )
}

