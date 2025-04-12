import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/breadcrumbs"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about", active: true },
        ]}
      />

      <div className="space-y-12 mt-6">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-amber-500/20 z-10" />
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Our Workshop"
            width={1200}
            height={400}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
                  Crafting Memories with Love
                </h1>
                <p className="text-white/90 text-lg md:text-xl drop-shadow-md">
                  Our story, our passion, and our commitment to creating beautiful keepsakes for your special moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="flex flex-col min-h-screen justify-center items-center p-40">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">Our Story</div>
              <h2 className="text-3xl font-bold">How It All Began</h2>
              <p className="text-gray-500 leading-relaxed">
                GiftCraft was born from a simple passion: creating meaningful gifts that celebrate life's special
                moments. What started as a small hobby in 2010 has grown into a beloved brand known for quality
                craftsmanship and attention to detail.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our founder, Sarah Johnson, began by creating custom gift hampers for friends and family. The joy and
                appreciation she witnessed inspired her to share her creations with a wider audience. Soon after, she
                expanded into custom frames, scribbling portraits, and ring albums, each product designed to preserve
                and celebrate precious memories.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Today, our team of skilled artisans continues this tradition, handcrafting each item with the same care
                and dedication that has defined GiftCraft from the beginning.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Our Beginnings" fill className="object-cover" />
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Values */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-700">Our Values</div>
            <h2 className="text-3xl font-bold mt-2">What Drives Us</h2>
            <p className="text-gray-500 mt-4">
              At GiftCraft, we're guided by a set of core values that influence everything we do, from product design to
              customer service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-500">
                We believe in creating products that stand the test of time, using premium materials and meticulous
                attention to detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-gray-500">
                We take the time to understand your needs and preferences, ensuring each gift is as unique as the person
                receiving it.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p className="text-gray-500">
                We're committed to reducing our environmental impact by using eco-friendly materials and sustainable
                production methods.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* Our Team */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-700">Our Team</div>
            <h2 className="text-3xl font-bold mt-2">The People Behind GiftCraft</h2>
            <p className="text-gray-500 mt-4">
              Meet the talented artisans and dedicated professionals who bring our products to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Sarah Johnson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-rose-600">Founder & Creative Director</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="Michael Chen" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">Michael Chen</h3>
              <p className="text-rose-600">Lead Artist</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Emily Rodriguez"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Emily Rodriguez</h3>
              <p className="text-rose-600">Gift Hamper Specialist</p>
            </div>
            <div className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=300&width=300" alt="David Thompson" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">David Thompson</h3>
              <p className="text-rose-600">Customer Experience Manager</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-rose-50 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Join Our Journey</h2>
              <p className="text-gray-600">
                We're always looking for talented individuals who share our passion for craftsmanship and creativity.
                Whether you're an artist, designer, or customer service professional, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-rose-600 hover:bg-rose-700">View Careers</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
            <div className="relative h-[250px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=250&width=500" alt="Join Our Team" fill className="object-cover" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
