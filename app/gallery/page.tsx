import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import fs from "fs"
import path from "path"

export const metadata: Metadata = {
  title: "Image Gallery | Prathik Pittala",
  description: "Browse through a collection of images by Prathik Pittala",
}

// This function runs at build time in production, and on every request in development
async function getImagePaths() {
  try {
    const imagesDirectory = path.join(process.cwd(), "public/images")
    const imageFiles = fs.readdirSync(imagesDirectory)

    // Filter for image files only
    return imageFiles.filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file)).map((file) => `/images/${file}`)
  } catch (error) {
    console.error("Error reading image directory:", error)
    return []
  }
}

export default async function Gallery() {
  const imagePaths = await getImagePaths()

  return (
    <main className="min-h-screen bg-background">
      {/* Video Background (reused from homepage) */}
      <video autoPlay muted loop playsInline className="video-background">
        <source src="/videos/Vid3.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Image Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A collection of images from my projects and experiences
            </p>
          </div>
          <Link href="/" className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {imagePaths.length > 0 ? (
            imagePaths.map((imagePath, index) => (
              <Card key={index} className="overflow-hidden card-hover">
                <div className="relative aspect-square w-full">
                  <Image
                    src={imagePath || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" asChild>
                      <a href={imagePath} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Full Size
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground text-lg">
                No images found in the gallery. Add images to the public/images directory to display them here.
              </p>
            </div>
          )}
        </div>

        {/* Fallback Images */}
        {imagePaths.length === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Card key={num} className="overflow-hidden card-hover">
                <div className="relative aspect-square w-full">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Image+${num}`}
                    alt={`Placeholder image ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" disabled>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

