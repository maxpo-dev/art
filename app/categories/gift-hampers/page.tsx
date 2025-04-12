import { Filter, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import ProductCard from "@/components/product-card"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function GiftHampersPage() {
  // This would typically come from an API or database
  const products = [
    {
      id: "1",
      name: "Deluxe Celebration Hamper",
      price: 89.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
      isBestseller: true,
    },
    {
      id: "2",
      name: "Birthday Surprise Basket",
      price: 69.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
    },
    {
      id: "3",
      name: "Gourmet Chocolate Collection",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
      isNew: true,
    },
    {
      id: "4",
      name: "Spa & Relaxation Hamper",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
    },
    {
      id: "5",
      name: "Wine & Cheese Basket",
      price: 99.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
    },
    {
      id: "6",
      name: "Tea Lover's Collection",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
    },
    {
      id: "7",
      name: "Baby Welcome Hamper",
      price: 74.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
      isNew: true,
    },
    {
      id: "8",
      name: "Anniversary Special Basket",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gift Hampers",
      isBestseller: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/categories/gift-hampers", active: true },
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
                      <RadioGroupItem value="50-100" id="50-100" />
                      <Label htmlFor="50-100">$50 - $100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-100" id="over-100" />
                      <Label htmlFor="over-100">Over $100</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Occasion</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="birthday" />
                      <label
                        htmlFor="birthday"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Birthday
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
                        Baby Shower
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="corporate" />
                      <label
                        htmlFor="corporate"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Corporate
                      </label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-medium mb-4">Contents</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="chocolates" />
                      <label
                        htmlFor="chocolates"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Chocolates
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="wine" />
                      <label
                        htmlFor="wine"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Wine
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="spa" />
                      <label
                        htmlFor="spa"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Spa Products
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tea" />
                      <label
                        htmlFor="tea"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tea & Coffee
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="snacks" />
                      <label
                        htmlFor="snacks"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Gourmet Snacks
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
                  <RadioGroupItem value="50-100" id="50-100-desktop" />
                  <Label htmlFor="50-100-desktop">$50 - $100</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="over-100" id="over-100-desktop" />
                  <Label htmlFor="over-100-desktop">Over $100</Label>
                </div>
              </RadioGroup>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Occasion</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="birthday-desktop" />
                  <label
                    htmlFor="birthday-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Birthday
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
                    Baby Shower
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="corporate-desktop" />
                  <label
                    htmlFor="corporate-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Corporate
                  </label>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-medium mb-4">Contents</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="chocolates-desktop" />
                  <label
                    htmlFor="chocolates-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Chocolates
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="wine-desktop" />
                  <label
                    htmlFor="wine-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Wine
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="spa-desktop" />
                  <label
                    htmlFor="spa-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Spa Products
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="tea-desktop" />
                  <label
                    htmlFor="tea-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tea & Coffee
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="snacks-desktop" />
                  <label
                    htmlFor="snacks-desktop"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Gourmet Snacks
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
              <h1 className="text-3xl font-bold">Gift Hampers</h1>
              <p className="text-gray-500 mt-2">
                Discover our collection of beautifully curated gift hampers for every occasion. Each hamper is
                thoughtfully assembled with premium products to create a memorable gifting experience.
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
