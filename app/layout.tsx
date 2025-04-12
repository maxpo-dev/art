import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CartProvider } from "@/context/cart-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Art Cafeteria | Handcrafted by Anagha Shaji",
  description: "Discover our unique collection of gift hampers, custom frames, scribbling portraits, and ring albums.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <CartProvider>
            <Header />
            {children}
            <Footer />
            {/* <Toaster /> */}
          </CartProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
