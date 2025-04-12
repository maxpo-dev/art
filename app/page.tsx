import Image from "next/image"
import { ChevronRight, Gift, ImageIcon, PenTool, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CategoryCard } from "@/components/category-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FeaturedProducts } from "@/components/featured-products"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col min-h-screen justify-center items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-amber-500/20 z-10 " />
          <div className="container relative z-20 px-4 py-24 md:py-32 lg:py-40">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                A Token of Love from <span className="text-rose-600">Anagha Shaji</span>
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-rose-600 hover:bg-rose-700">
                    Shop Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Gift Hampers Collection"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="flex flex-col min-h-screen justify-center items-center bg-amber-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">
                  Our Collections
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explore Our Categories</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our carefully curated collections of handcrafted gifts and keepsakes.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <CategoryCard
                title="Gift Hampers"
                description="Curated gift collections for every occasion"
                icon={<Gift className="h-8 w-8 text-rose-600" />}
                href="/categories/gift-hampers"
              />
              <CategoryCard
                title="Custom Frames"
                description="Beautifully crafted frames for your precious memories"
                icon={<ImageIcon className="h-8 w-8 text-amber-600" />}
                href="/categories/frames"
              />
              <CategoryCard
                title="Scribbling Portraits"
                description="Unique hand-drawn portraits from your photos"
                icon={<PenTool className="h-8 w-8 text-emerald-600" />}
                href="/categories/portraits"
              />
              <CategoryCard
                title="Ring Albums"
                description="Elegant albums to preserve your special moments"
                icon={<BookOpen className="h-8 w-8 text-sky-600" />}
                href="/categories/albums"
              />
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="flex flex-col min-h-screen justify-center items-center py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Featured Items
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Best Sellers</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most popular handcrafted gifts loved by our customers.
                </p>
              </div>
            </div>
            <FeaturedProducts />
          </div>
        </section>

        {/* About Section with Animation */}
        <section className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-b from-white to-rose-50 py-16 md:py-24 overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our Workshop" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Crafted with Passion</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  We started our journey with a simple belief: gifts should be as special as the occasions they
                  celebrate. Each of our products is handcrafted with attention to detail and made with love.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  From personalized gift hampers to custom scribbling portraits, we put our heart into creating
                  memorable keepsakes that bring joy and preserve precious moments.
                </p>
                <div>
                  <Button variant="link" className="text-rose-600 p-0 flex items-center gap-1">
                    Learn more about our story <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-rose-300 rounded-full opacity-20 blur-3xl"></div>
        </section>

        {/* Testimonials */}
        <section className="flex flex-col min-h-screen justify-center items-center bg-amber-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our happy customers have to say.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="The gift hamper I ordered was beautifully arranged and delivered on time. My friend loved it!"
                author="Sarah Johnson"
                role="Happy Customer"
              />
              <TestimonialCard
                quote="The scribbling portrait captured my daughter's personality perfectly. It's now the centerpiece of our living room."
                author="Michael Thompson"
                role="Proud Parent"
              />
              <TestimonialCard
                quote="The custom frame I ordered for our anniversary was exquisite. The quality and craftsmanship exceeded my expectations."
                author="Emily Rodriguez"
                role="Repeat Customer"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col  justify-center items-center bg-rose-600 text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Create Lasting Memories?</h2>
                <p className="text-rose-100 md:text-xl/relaxed">
                  Browse our collections or contact us for custom orders. We're here to help you find the perfect gift.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
                <Button size="lg" variant="secondary" className="bg-white text-rose-600 hover:bg-rose-50">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-rose-700">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
