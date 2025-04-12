"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart()
  const [promoCode, setPromoCode] = useState("")
  const [isPromoApplied, setIsPromoApplied] = useState(false)

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true)
    }
  }

  const subtotal = cartTotal
  const discount = isPromoApplied ? subtotal * 0.1 : 0
  const shipping = subtotal > 50 ? 0 : 9.99
  const total = subtotal - discount + shipping

  const handleCheckout = () => {
    // Here you would typically redirect to the checkout page
    window.location.href = "/checkout"
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Shopping Cart", href: "/cart", active: true },
        ]}
      />

      <h1 className="text-3xl font-bold mt-6">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild className="bg-rose-600 hover:bg-rose-700">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b">
                <div className="col-span-6 font-medium">Product</div>
                <div className="col-span-2 font-medium text-center">Price</div>
                <div className="col-span-2 font-medium text-center">Quantity</div>
                <div className="col-span-2 font-medium text-right">Total</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-b last:border-0">
                  <div className="grid sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-6">
                      <div className="flex items-center gap-4">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden border">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            <Link href={`/products/${item.id}`} className="hover:text-rose-600">
                              {item.name}
                            </Link>
                          </h3>
                          {item.option && <p className="text-sm text-gray-500">{item.option}</p>}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-rose-600 flex items-center mt-1 sm:hidden"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2 text-center">
                      <div className="sm:hidden text-sm text-gray-500 mb-1">Price:</div>${item.price.toFixed(2)}
                    </div>
                    <div className="sm:col-span-2 flex items-center justify-center">
                      <div className="sm:hidden text-sm text-gray-500 mb-1 mr-2">Quantity:</div>
                      <div className="flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="sm:col-span-2 text-right font-medium">
                      <div className="sm:hidden text-sm text-gray-500 mb-1">Total:</div>$
                      {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="hidden sm:flex sm:col-span-12 justify-end">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-rose-600 flex items-center"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                  />
                  <Button variant="outline" onClick={applyPromoCode} disabled={!promoCode || isPromoApplied}>
                    Apply
                  </Button>
                </div>
                {isPromoApplied && (
                  <p className="text-sm text-green-600 mt-1">Promo code "WELCOME10" applied (10% off)</p>
                )}
              </div>
              <Button asChild variant="outline">
                <Link href="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {isPromoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <p className="text-xs text-gray-500">Taxes calculated at checkout. Free shipping on orders over $50.</p>
              </div>
              <Button className="w-full mt-6 bg-rose-600 hover:bg-rose-700" size="lg" onClick={handleCheckout}>
                Proceed to Checkout
              </Button>
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>We accept:</p>
                <div className="flex justify-center space-x-2 mt-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
