import Link from "next/link"
import type { ReactNode } from "react"
import { ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-rose-200 h-full">
        <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
          <div className="p-3 rounded-full bg-rose-100/50 w-16 h-16 flex items-center justify-center">{icon}</div>
          <div className="space-y-2">
            <h3 className="font-semibold text-xl">{title}</h3>
            <p className="text-gray-500 text-sm">{description}</p>
          </div>
          <div className="flex items-center text-rose-600 text-sm font-medium mt-auto pt-2">
            Explore <ChevronRight className="h-4 w-4 ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
