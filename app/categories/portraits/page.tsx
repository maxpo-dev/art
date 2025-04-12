import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function PortraitsPage() {
  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Custom Family Portrait",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
      isBestseller: true,
    },
    {
      id: "2",
      name: "Pet Portrait - Pencil Sketch",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
    },
    {
      id: "3",
      name: "Couple Portrait - Charcoal",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
      isNew: true,
    },
    {
      id: "4",
      name: "Child Portrait - Colored Pencil",
      price: 64.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
    },
    {
      id: "5",
      name: "Watercolor Portrait",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
    },
    {
      id: "6",
      name: "Digital Portrait with Print",
      price: 74.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
    },
    {
      id: "7",
      name: "Family Portrait with Frame",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
      isNew: true,
    },
    {
      id: "8",
      name: "Anniversary Portrait Gift",
      price: 84.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
      isBestseller: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Scribbling Portraits", href: "/categories/portraits", active: true },
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
                      <RadioGroupItem value="under-60" id="under-60" />
                      <Label htmlFor="under-60">Under $60</Label>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem value="60-80" id="60-80" />
                      <Label htmlFor="60-80">$60 - $80</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-80" id="over-80" />
                      <Label htmlFor="over-80">Over $80</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Style</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pencil" />
                      <label
                        htmlFor="pencil"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Pencil Sketch
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="charcoal" />
                      <label
                        htmlFor="charcoal"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Charcoal
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="colored-pencil" />
                      <label
                        htmlFor="colored-pencil"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Colored Pencil
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="watercolor" />
                      <label
                        htmlFor="watercolor"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Watercolor
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="digital" />
                      <label
                        htmlFor="digital"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Digital
                      </label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Subject</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="individual" />
                      <label
                        htmlFor="individual"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Individual
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="couple" />
                      <label
                        htmlFor="couple"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Couple
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="family" />
                      <label
                        htmlFor="family"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Family
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pet" />
                      <label
                        htmlFor="pet"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Pet
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
                  <RadioGroupItem value="under-60" id="under-60-desktop" />
                  <Label htmlFor="under-60-desktop">Under $60</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="60-80" id="60-80-desktop" />
                  <Label htmlFor="60-80-desktop">$60 - $80</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-80" id="over-80-desktop" />
                  <Label htmlFor="over-80-desktop">Over $80</Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Style</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pencil-desktop" />
                  <label
                    htmlFor="pencil-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pencil Sketch
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="charcoal-desktop" />
                  <label
                    htmlFor="charcoal-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Charcoal
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="colored-pencil-desktop" />
                  <label
                    htmlFor="colored-pencil-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Colored Pencil
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="watercolor-desktop" />
                  <label
                    htmlFor="watercolor-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Watercolor
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="digital-desktop" />
                  <label
                    htmlFor="digital-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Digital
                  </label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Subject</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="individual-desktop" />
                  <label
                    htmlFor="individual-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Individual
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="couple-desktop" />
                  <label
                    htmlFor="couple-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Couple
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="family-desktop" />
                  <label
                    htmlFor="family-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Family
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pet-desktop" />
                  <label
                    htmlFor="pet-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Pet
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
              <h1 className="text-3xl font-bold">Scribbling Portraits</h1>
              <p className="text-gray-500 mt-2">
                Transform your photos into beautiful hand-drawn portraits. Our talented artists create unique,
                personalized artwork that captures the essence and personality of your loved ones.
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
