import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                GiftCraft
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              Handcrafted gifts and keepsakes for every occasion. Made with love and attention to detail.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/gift-hampers" className="text-gray-500 hover:text-rose-600 text-sm">
                  Gift Hampers
                </Link>
              </li>
              <li>
                <Link href="/categories/frames" className="text-gray-500 hover:text-rose-600 text-sm">
                  Custom Frames
                </Link>
              </li>
              <li>
                <Link href="/categories/portraits" className="text-gray-500 hover:text-rose-600 text-sm">
                  Scribbling Portraits
                </Link>
              </li>
              <li>
                <Link href="/categories/albums" className="text-gray-500 hover:text-rose-600 text-sm">
                  Ring Albums
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-500 hover:text-rose-600 text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="text-gray-500 hover:text-rose-600 text-sm">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-rose-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-rose-600 text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-500 hover:text-rose-600 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-500 hover:text-rose-600 text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-rose-600 text-sm">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-500 hover:text-rose-600 text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Your email address" />
              <Button className="w-full bg-rose-600 hover:bg-rose-700">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} GiftCraft. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-rose-600 text-sm">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-rose-600 text-sm">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-rose-600 text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
