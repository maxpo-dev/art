import ProductCard from "@/components/product-card"

export function FeaturedProducts() {
  // This would typically come from an API or database
  const featuredProducts = [
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
      name: "Vintage Wooden Photo Frame",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Custom Frames",
    },
    {
      id: "3",
      name: "Custom Family Portrait",
      price: 79.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Scribbling Portraits",
      isNew: true,
    },
    {
      id: "4",
      name: "Leather Ring Album",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Ring Albums",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}
