'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

export default function Component() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const portfolioImages = [
    { src: "/1.png", alt: "Roblox Thumbnail 1" },
    { src: "/2.png", alt: "Roblox Thumbnail 2" },
    { src: "/3.png", alt: "Roblox Thumbnail 3" },
    { src: "/4.png", alt: "Roblox Thumbnail 4" },
    { src: "/5.png", alt: "Roblox Thumbnail 5" },
    { src: "/6.png", alt: "Roblox Thumbnail 6" },
    { src: "/7.png", alt: "Roblox Thumbnail 7" },
    { src: "/8.png", alt: "Roblox Thumbnail 8" },
    { src: "/9.png", alt: "Roblox Thumbnail 9" },
  ]

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-normal text-black mb-2">8drei - DreiVision.</h1>
          <div className="space-y-6 text-grey-900 leading-relaxed">
            <p className="text-lg">
              <strong>Freelancer Roblox Artist</strong>
            </p>

            <p>
              I'm a freelance graphic artist with a focus on 2D art for Roblox games, specializing in high-quality thumbnails and icons—particularly for anime-inspired titles. My work blends dynamic visuals with clean, engaging design to help games capture attention and drive player interest. From action-packed scenes to detailed character illustrations, I strive to bring each project to life with bold, vibrant artwork that stands out in the Roblox community.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="aspect-[1/1] relative overflow-hidden rounded-lg group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="max-w-2xl">
          <div className="mb-8">
            <div className="flex items-start gap-3 mb-4">
              <p className="text-lg font-medium text-gray-900">Ready to work together?</p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Let's discuss your project! Join my Discord Server to get in touch and see how I can help bring your
              Roblox game to life with stunning visuals.
            </p>
            <Button
              asChild
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              <a
                href="https://discord.gg/hvxjKdHsKw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Discord Server
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-center text-sm text-black-500">
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-900 transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-blue-900 transition-colors">
              Twitter
            </a>
          </div>
          <div>2025 © DreiVision</div>
        </div>
      </footer>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-white flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Portfolio item full size"
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
