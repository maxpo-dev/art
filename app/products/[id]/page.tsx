"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useCart } from "@/context/cart-context"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState("standard")
  const { addToCart } = useCart()

  // This would typically come from an API or database based on the ID
  const product = {
    id: params.id,
    name: "Deluxe Celebration Hamper",
    price: 89.99,
    discountPrice: 79.99,
    rating: 4.8,
    reviewCount: 124,
    description:
      "The Deluxe Celebration Hamper is the perfect gift for any special occasion. This beautifully presented hamper includes a carefully curated selection of premium treats and goodies that are sure to delight.",
    features: [
      "Handcrafted wicker basket with premium finish",
      "Selection of gourmet chocolates and confectionery",
      "Artisan cheese and crackers",
      "Premium bottle of wine or non-alcoholic alternative",
      "Luxury scented candle",
      "Personalized greeting card",
    ],
    options: [
      {
        id: "standard",
        name: "Standard",
        description: "Includes all standard items",
        price: 79.99,
      },
      {
        id: "premium",
        name: "Premium",
        description: "Upgraded with premium chocolates and wine",
        price: 99.99,
      },
      {
        id: "deluxe",
        name: "Deluxe",
        description: "Our finest selection with added luxury items",
        price: 129.99,
      },
    ],
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    category: "Gift Hampers",
    inStock: true,
    isBestseller: true,
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    const selectedProductOption = product.options.find((option) => option.id === selectedOption)

    addToCart({
      id: product.id,
      name: product.name,
      price: selectedProductOption?.price || product.price,
      quantity: quantity,
      option: selectedProductOption?.name,
      image: product.images[0],
      category: product.category,
    })
  }

  const handleAddToWishlist = () => {
    // Wishlist functionality would go here
  }

  const selectedProductOption = product.options.find((option) => option.id === selectedOption)
  const currentPrice = selectedProductOption?.price || product.price

  return (
    <div className="container px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Gift Hampers", href: "/categories/gift-hampers" },
          { label: product.name, href: `/products/${product.id}`, active: true },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-6">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg border">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-rose-600">{product.category}</span>
              {product.isBestseller && (
                <span className="inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800">
                  Bestseller
                </span>
              )}
            </div>
            <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold">${currentPrice.toFixed(2)}</span>
              {currentPrice < product.price && (
                <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
              )}
            </div>
            <p className="text-sm text-gray-500">
              {product.inStock ? "In Stock" : "Out of Stock"} • Free shipping on orders over $50
            </p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Description</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Options</h3>
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-2">
                {product.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label
                      htmlFor={option.id}
                      className="flex flex-1 cursor-pointer items-center justify-between rounded-md border p-3 [&:has(:checked)]:bg-rose-50 [&:has(:checked)]:border-rose-200"
                    >
                      <div>
                        <div className="font-medium">{option.name}</div>
                        <div className="text-sm text-gray-500">{option.description}</div>
                      </div>
                      <div className="font-medium">${option.price.toFixed(2)}</div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Quantity</h3>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button variant="outline" size="icon" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-rose-600 hover:bg-rose-700" size="lg" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" size="lg" onClick={handleAddToWishlist}>
              <Heart className="mr-2 h-5 w-5" />
              Add to Wishlist
            </Button>
            <Button variant="outline" size="icon" className="hidden sm:flex">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="details">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-600 data-[state=active]:shadow-none py-3"
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-600 data-[state=active]:shadow-none py-3"
            >
              Shipping & Returns
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-rose-600 data-[state=active]:shadow-none py-3"
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Product Details</h3>
              <p className="text-gray-600">
                The Deluxe Celebration Hamper is the perfect gift for any special occasion. This beautifully presented
                hamper includes a carefully curated selection of premium treats and goodies that are sure to delight.
              </p>
              <p className="text-gray-600">
                Each hamper is lovingly assembled by hand in our workshop, ensuring the highest quality presentation.
                The wicker basket is of premium quality and can be reused for storage or decoration after the contents
                have been enjoyed.
              </p>
              <h4 className="text-lg font-medium mt-6">What's Included:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Premium wicker basket with handle</li>
                <li>Selection of gourmet chocolates (200g)</li>
                <li>Artisan cheese selection (150g)</li>
                <li>Gourmet crackers (100g)</li>
                <li>Premium bottle of wine (750ml) or sparkling juice</li>
                <li>Luxury scented candle (burn time: approx. 30 hours)</li>
                <li>Personalized greeting card</li>
                <li>Decorative ribbon and packaging</li>
              </ul>
              <h4 className="text-lg font-medium mt-6">Dimensions:</h4>
              <p className="text-gray-600">Approximately 40cm x 30cm x 20cm (Length x Width x Height)</p>
            </div>
          </TabsContent>
          <TabsContent value="shipping" className="pt-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              <p className="text-gray-600">
                We take great care to ensure your gift hamper arrives in perfect condition. Each hamper is carefully
                packaged to protect the contents during transit.
              </p>
              <h4 className="text-lg font-medium mt-4">Shipping Options:</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Standard Shipping (3-5 business days): $9.99</li>
                <li>Express Shipping (1-2 business days): $14.99</li>
                <li>Free shipping on all orders over $50</li>
              </ul>
              <h3 className="text-xl font-semibold mt-8">Returns Policy</h3>
              <p className="text-gray-600">
                Due to the perishable nature of some items in our gift hampers, we cannot accept returns unless the
                product is damaged upon arrival.
              </p>
              <p className="text-gray-600 mt-2">
                If your hamper arrives damaged, please contact our customer service team within 24 hours of delivery
                with photos of the damaged items. We will arrange for a replacement or refund as appropriate.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Based on {product.reviewCount} reviews</p>
                </div>
              </div>
              <Separator />
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Sarah M.</div>
                      <div className="text-sm text-gray-500">Verified Buyer</div>
                    </div>
                    <div className="text-sm text-gray-500">2 weeks ago</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium">Perfect gift for my sister's birthday!</h4>
                  <p className="text-gray-600">
                    I ordered this hamper for my sister's birthday and she absolutely loved it! The presentation was
                    beautiful and all the items were high quality. Will definitely order again for future gifts.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">John D.</div>
                      <div className="text-sm text-gray-500">Verified Buyer</div>
                    </div>
                    <div className="text-sm text-gray-500">1 month ago</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium">Great quality but delivery was delayed</h4>
                  <p className="text-gray-600">
                    The hamper itself was excellent with high-quality products. The only issue was that delivery took
                    longer than expected. Otherwise, I would have given 5 stars.
                  </p>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="font-semibold">Emily R.</div>
                      <div className="text-sm text-gray-500">Verified Buyer</div>
                    </div>
                    <div className="text-sm text-gray-500">2 months ago</div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "fill-amber-400 text-amber-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <h4 className="font-medium">Exceeded my expectations!</h4>
                  <p className="text-gray-600">
                    I sent this as a thank you gift to a client and they were absolutely thrilled. The presentation was
                    stunning and the products were all premium quality. Will definitely be ordering more for corporate
                    gifts.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Load More Reviews
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
