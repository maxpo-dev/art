import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarUrl?: string
}

export function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md hover:border-amber-200 h-full">
      <CardContent className="p-6 flex flex-col space-y-4">
        <Quote className="h-6 w-6 text-amber-400" />
        <p className="text-gray-600 italic">{quote}</p>
        <div className="flex items-center pt-4 mt-auto">
          <Avatar className="h-10 w-10 mr-3 border-2 border-amber-100">
            {avatarUrl ? (
              <img src={avatarUrl || "/placeholder.svg"} alt={author} />
            ) : (
              <AvatarFallback className="bg-amber-100 text-amber-700">{initials}</AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
