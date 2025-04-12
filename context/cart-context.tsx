"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useToast } from "@/hooks/use-toast";

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  option?: string
  image: string
  category: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCartItems(parsedCart)
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems))

    // Update cart count and total
    const count = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(count)

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setCartTotal(total)
  }, [cartItems])

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id && (item.option === newItem.option || (!item.option && !newItem.option)),
      )

      if (existingItemIndex >= 0) {
        // Update quantity if item exists
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += newItem.quantity

        const { toast } = useToast();

        toast({
          title: "Cart Updated",
          description: `${newItem.name} quantity increased to ${updatedItems[existingItemIndex].quantity}`,
        });
        
        return updatedItems
      } else {
        // Add new item if it doesn't exist
        const { toast } = useToast();
        toast({
          title: "Added to Cart",
          description: `${newItem.name} has been added to your cart`,
        })

        return [...prevItems, newItem]
      }
    })
  }

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id)
      if (itemToRemove) {
        const { toast } = useToast();
        toast({
          title: "Item Removed",
          description: `${itemToRemove.name} has been removed from your cart`,
        })
      }
      return prevItems.filter((item) => item.id !== id)
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
    const { toast } = useToast();
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
