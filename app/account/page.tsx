"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { User, Package, Heart, CreditCard, LogOut, Edit, MapPin, Phone, Mail, Calendar } from "lucide-react"

export default function AccountPage() {
  const [user, setUser] = useState({
    name: "Anagha Shaji",
    email: "anagha@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B, New York, NY 10001",
    dateJoined: "January 2023",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setUser((prev) => ({ ...prev, ...formData }))
    setIsEditing(false)
    const { toast } = useToast();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    })
  }

  // Mock order data
  const orders = [
    {
      id: "ORD-123456",
      date: "March 15, 2023",
      status: "Delivered",
      total: 129.99,
      items: 3,
    },
    {
      id: "ORD-789012",
      date: "February 28, 2023",
      status: "Processing",
      total: 79.99,
      items: 1,
    },
  ]

  // Mock wishlist data
  const wishlistItems = [
    {
      id: "1",
      name: "Deluxe Celebration Hamper",
      price: 79.99,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: "5",
      name: "Wedding Memory Album",
      price: 54.99,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="container px-4 py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "My Account", href: "/account", active: true },
        ]}
      />

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="md:w-1/3 lg:w-1/4">
          <div className="bg-white rounded-lg border shadow-sm p-6 space-y-6">
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={user.name} />
                <AvatarFallback className="bg-rose-100 text-rose-700 text-xl">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-gray-500 text-sm">{user.email}</p>
              <p className="text-gray-500 text-xs mt-1">Member since {user.dateJoined}</p>
            </div>

            <Separator />

            <nav className="space-y-1">
              <Link href="/account" className="flex items-center space-x-2 p-2 rounded-md bg-rose-50 text-rose-600">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              <Link href="/account/orders" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                <Package className="h-4 w-4" />
                <span>Orders</span>
              </Link>
              <Link href="/account/wishlist" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
              </Link>
              <Link href="/account/payment" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
                <CreditCard className="h-4 w-4" />
                <span>Payment Methods</span>
              </Link>
              <button className="w-full flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-left">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </button>
            </nav>
          </div>
        </div>

        <div className="md:w-2/3 lg:w-3/4">
          <Tabs defaultValue="profile">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  {!isEditing && (
                    <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>

                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={formData.address} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 pt-2">
                      <Button variant="outline" type="button" onClick={() => setIsEditing(false)}>
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-rose-600 hover:bg-rose-700">
                        Save Changes
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <User className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm text-gray-500">Full Name</h4>
                        <p>{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm text-gray-500">Email</h4>
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm text-gray-500">Phone</h4>
                        <p>{user.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm text-gray-500">Address</h4>
                        <p>{user.address}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-gray-400 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-sm text-gray-500">Member Since</h4>
                        <p>{user.dateJoined}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Password</h3>
                <Button className="bg-rose-600 hover:bg-rose-700">Change Password</Button>
              </div>

              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Email Notifications</h4>
                      <p className="text-sm text-gray-500">Receive emails about your orders and account activity</p>
                    </div>
                    <div className="h-6 w-11 bg-rose-600 rounded-full relative cursor-pointer">
                      <span className="absolute right-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Marketing Communications</h4>
                      <p className="text-sm text-gray-500">Receive emails about new products, offers, and events</p>
                    </div>
                    <div className="h-6 w-11 bg-gray-200 rounded-full relative cursor-pointer">
                      <span className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full"></span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">Order History</h3>
                </div>

                {orders.length > 0 ? (
                  <div className="divide-y">
                    {orders.map((order) => (
                      <div key={order.id} className="p-6">
                        <div className="flex flex-wrap justify-between items-start gap-4">
                          <div>
                            <h4 className="font-medium">{order.id}</h4>
                            <p className="text-sm text-gray-500">{order.date}</p>
                          </div>
                          <div className="text-right">
                            <div
                              className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                order.status === "Delivered"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {order.status}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              {order.items} {order.items === 1 ? "item" : "items"}
                            </p>
                            <p className="font-medium">${order.total.toFixed(2)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/account/orders/${order.id}`}>View Order</Link>
                            </Button>
                            {order.status === "Delivered" && (
                              <Button variant="outline" size="sm">
                                Buy Again
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500">You haven't placed any orders yet.</p>
                    <Button asChild className="mt-4 bg-rose-600 hover:bg-rose-700">
                      <Link href="/">Start Shopping</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="wishlist" className="space-y-6">
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold">My Wishlist</h3>
                </div>

                {wishlistItems.length > 0 ? (
                  <div className="divide-y">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="p-6 flex items-center gap-4">
                        <div className="relative h-16 w-16 rounded-md overflow-hidden border">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">
                            <Link href={`/products/${item.id}`} className="hover:text-rose-600">
                              {item.name}
                            </Link>
                          </h4>
                          <p className="text-rose-600 font-medium">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                            Add to Cart
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <p className="text-gray-500">Your wishlist is empty.</p>
                    <Button asChild className="mt-4 bg-rose-600 hover:bg-rose-700">
                      <Link href="/">Discover Products</Link>
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
