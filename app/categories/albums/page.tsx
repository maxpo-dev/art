import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AlbumsPage() {
  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Leather Ring Album",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
      isBestseller: true,
    },
    {
      id: "2",
      name: "Wedding Memory Album",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
    },
    {
      id: "3",
      name: "Baby's First Year Album",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
      isNew: true,
    },
    {
      id: "4",
      name: "Travel Memories Album",
      price: 44.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
    },
    {
      id: "5",
      name: "Personalized Anniversary Album",
      price: 64.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
    },
    {
      id: "6",
      name: "Vintage Style Photo Album",
      price: 54.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
    },
    {
      id: "7",
      name: "Family Heritage Album",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
      isNew: true,
    },
    {
      id: "8",
      name: "Graduation Memories Album",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
      isBestseller: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Ring Albums", href: "/categories/albums", active: true },
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
                      <RadioGroupItem value="under-50" id="under-50" />
                      <Label htmlFor="under-50">Under $50</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="50-70" id="50-70" />
                      <Label htmlFor="50-70">$50 - $70</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-70" id="over-70" />
                      <Label htmlFor="over-70">Over $70</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Material</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="leather" />
                      <label
                        htmlFor="leather"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Leather
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="fabric" />
                      <label
                        htmlFor="fabric"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Fabric
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="hardcover" />
                      <label
                        htmlFor="hardcover"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Hardcover
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="eco-friendly" />
                      <label
                        htmlFor="eco-friendly"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Eco-Friendly
                      </label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Occasion</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wedding" />
                      <label
                        htmlFor="wedding"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wedding
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="baby" />
                      <label
                        htmlFor="baby"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Baby
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="travel" />
                      <label
                        htmlFor="travel"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Travel
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anniversary" />
                      <label
                        htmlFor="anniversary"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Anniversary
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="graduation" />
                      <label
                        htmlFor="graduation"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Graduation
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
                  <RadioGroupItem value="under-50" id="under-50-desktop" />
                  <Label htmlFor="under-50-desktop">Under $50</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="50-70" id="50-70-desktop" />
                  <Label htmlFor="50-70-desktop">$50 - $70</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-70" id="over-70-desktop" />
                  <Label htmlFor="over-70-desktop">Over $70</Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Material</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="leather-desktop" />
                  <label
                    htmlFor="leather-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Leather
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="fabric-desktop" />
                  <label
                    htmlFor="fabric-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Fabric
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hardcover-desktop" />
                  <label
                    htmlFor="hardcover-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Hardcover
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="eco-friendly-desktop" />
                  <label
                    htmlFor="eco-friendly-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Eco-Friendly
                  </label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Occasion</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="wedding-desktop" />
                  <label
                    htmlFor="wedding-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wedding
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="baby-desktop" />
                  <label
                    htmlFor="baby-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Baby
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="travel-desktop" />
                  <label
                    htmlFor="travel-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Travel
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="anniversary-desktop" />
                  <label
                    htmlFor="anniversary-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Anniversary
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="graduation-desktop" />
                  <label
                    htmlFor="graduation-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Graduation
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
              <h1 className="text-3xl font-bold">Ring Albums</h1>
              <p className="text-gray-500 mt-2">
                Preserve your precious memories with our collection of high-quality ring albums. Perfect for weddings,
                baby milestones, travel adventures, and more. Each album is crafted with care to protect and showcase
                your photos for years to come.
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
