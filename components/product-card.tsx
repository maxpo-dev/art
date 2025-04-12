"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  isNew?: boolean
  isBestseller?: boolean
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  category,
  isNew = false,
  isBestseller = false,
}: ProductCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      quantity: 1,
      image,
      category,
    })
  }

  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Link href={`/products/${id}`}>
          <div className="aspect-square overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={300}
              height={300}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <Button
          variant="outline"
          size="icon"
          className="absolute top-2 right-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
        >
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && <Badge className="bg-rose-600 hover:bg-rose-700">New</Badge>}
          {isBestseller && <Badge className="bg-amber-600 hover:bg-amber-700">Bestseller</Badge>}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <Link href={`/products/${id}`} className="hover:underline">
          <h3 className="font-medium text-lg line-clamp-1">{name}</h3>
        </Link>
        <div className="mt-2 font-semibold text-rose-600">${price.toFixed(2)}</div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-rose-600 hover:bg-rose-700" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
