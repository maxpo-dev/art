"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/context/cart-context"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const { cartCount } = useCart()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/categories/gift-hampers",
      label: "Gift Hampers",
      active: pathname === "/categories/gift-hampers",
    },
    {
      href: "/categories/frames",
      label: "Frames",
      active: pathname === "/categories/frames",
    },
    {
      href: "/categories/portraits",
      label: "Scribbling Portraits",
      active: pathname === "/categories/portraits",
    },
    {
      href: "/categories/albums",
      label: "Ring Albums",
      active: pathname === "/categories/albums",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <header className=" flex flex-col justify-center items-center sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-lg font-medium transition-colors hover:text-rose-600 ${
                      route.active ? "text-rose-600" : "text-gray-600"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center space-x-2 ml-4 md:ml-0">
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Art__Cafeteria
              </span>
              <span className="text-xs text-gray-500 italic">handcrafted by Anagha Shaji</span>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-rose-600 ${
                route.active ? "text-rose-600" : "text-gray-600"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-1">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search..." className="w-[200px] md:w-[300px] mr-2" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/account">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-rose-600">
                  {cartCount > 99 ? "99+" : cartCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
