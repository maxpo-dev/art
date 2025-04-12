import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Package, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ConfirmationPage() {
  // This would typically come from an order state or database
  const orderNumber = "ORD-" + Math.floor(100000 + Math.random() * 900000)
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const orderItems = [
    {
      id: "1",
      name: "Deluxe Celebration Hamper",
      price: 79.99,
      quantity: 1,
      option: "Standard",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "3",
      name: "Custom Family Portrait",
      price: 79.99,
      quantity: 1,
      option: "Pencil Sketch",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "4",
      name: "Leather Ring Album",
      price: 49.99,
      quantity: 2,
      option: "Medium (20 pages)",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const subtotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 9.99
  const total = subtotal + shipping

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-gray-500 mt-2">Your order has been received and is being processed.</p>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Order Number</h3>
              <p className="font-semibold">{orderNumber}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Date</h3>
              <p>{orderDate}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Email</h3>
              <p>customer@example.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Payment Method</h3>
              <p>Credit Card (•••• 1234)</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Order Details</h3>
            {orderItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.option}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-6">
          <h3 className="font-semibold text-lg mb-4">Shipping Information</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-500 mb-1">Shipping Address</h4>
              <p>John Doe</p>
              <p>123 Main Street</p>
              <p>Apt 4B</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-500 mb-1">Shipping Method</h4>
              <p>Standard Shipping (3-5 business days)</p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-500 mb-1">Estimated Delivery</h4>
                <p>
                  {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">What Happens Next?</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-rose-100 p-2 rounded-full">
                <CheckCircle2 className="h-5 w-5 text-rose-600" />
              </div>
              <div>
                <h4 className="font-medium">Order Confirmation</h4>
                <p className="text-gray-600">
                  We've sent a confirmation email to your inbox with all the details of your order.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 p-2 rounded-full">
                <Package className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium">Order Processing</h4>
                <p className="text-gray-600">
                  Our team is preparing your items. You'll receive an email once your order is ready for shipping.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 p-2 rounded-full">
                <Truck className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium">Shipping</h4>
                <p className="text-gray-600">
                  Once your order ships, we'll send you a tracking number so you can follow its journey to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-rose-600 hover:bg-rose-700">
            <Link href="/">Continue Shopping</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/account/orders">View My Orders</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
