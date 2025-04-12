import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function FramesPage() {
  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Vintage Wooden Photo Frame",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
      isBestseller: true,
    },
    {
      id: "2",
      name: "Minimalist Metal Frame",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
    },
    {
      id: "3",
      name: "Rustic Reclaimed Wood Frame",
      price: 39.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
      isNew: true,
    },
    {
      id: "4",
      name: "Ornate Gold Decorative Frame",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
    },
    {
      id: "5",
      name: "Multi-Photo Collage Frame",
      price: 44.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
    },
    {
      id: "6",
      name: "Floating Glass Frame",
      price: 37.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
    },
    {
      id: "7",
      name: "Personalized Name Frame",
      price: 42.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
      isNew: true,
    },
    {
      id: "8",
      name: "Wedding Memory Frame",
      price: 54.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
      isBestseller: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Custom Frames", href: "/categories/frames", active: true },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Mobile Filter Button */}
        <div className="md:hidden w-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-between">
                <span className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </span>
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="grid gap-6 py-4">
                <div>
                  <h3 className="text-lg font-medium mb-4">Price Range</h3>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="all" id="all-price" />
                      <Label htmlFor="all-price">All Prices</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="under-30" id="under-30" />
                      <Label htmlFor="under-30">Under $30</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="30-50" id="30-50" />
                      <Label htmlFor="30-50">$30 - $50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-50" id="over-50" />
                      <Label htmlFor="over-50">Over $50</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Material</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wood" />
                      <label
                        htmlFor="wood"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wood
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="metal" />
                      <label
                        htmlFor="metal"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Metal
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="glass" />
                      <label
                        htmlFor="glass"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Glass
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="acrylic" />
                      <label
                        htmlFor="acrylic"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Acrylic
                      </label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Size</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="small" />
                      <label
                        htmlFor="small"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Small (4x6")
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="medium" />
                      <label
                        htmlFor="medium"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Medium (5x7")
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="large" />
                      <label
                        htmlFor="large"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Large (8x10")
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="extra-large" />
                      <label
                        htmlFor="extra-large"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Extra Large (11x14"+)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-1/4 max-w-xs">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Price Range</h3>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="all" id="all-price-desktop" />
                  <Label htmlFor="all-price-desktop">All Prices</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="under-30" id="under-30-desktop" />
                  <Label htmlFor="under-30-desktop">Under $30</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="30-50" id="30-50-desktop" />
                  <Label htmlFor="30-50-desktop">$30 - $50</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-50" id="over-50-desktop" />
                  <Label htmlFor="over-50-desktop">Over $50</Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Material</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="wood-desktop" />
                  <label
                    htmlFor="wood-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wood
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="metal-desktop" />
                  <label
                    htmlFor="metal-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Metal
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="glass-desktop" />
                  <label
                    htmlFor="glass-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Glass
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="acrylic-desktop" />
                  <label
                    htmlFor="acrylic-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acrylic
                  </label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Size</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="small-desktop" />
                  <label
                    htmlFor="small-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Small (4x6")
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="medium-desktop" />
                  <label
                    htmlFor="medium-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Medium (5x7")
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="large-desktop" />
                  <label
                    htmlFor="large-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Large (8x10")
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="extra-large-desktop" />
                  <label
                    htmlFor="extra-large-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Extra Large (11x14"+)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <div className="flex flex-col space-y-4">
            <div>
              <h1 className="text-3xl font-bold">Custom Frames</h1>
              <p className="text-gray-500 mt-2">
                Browse our collection of beautifully crafted frames to showcase your precious memories. From classic
                wooden designs to modern metal finishes, find the perfect frame to complement your home decor.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
