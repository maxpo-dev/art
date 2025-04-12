import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
            {item.active ? (
              <span className="text-gray-500 font-medium">{item.label}</span>
            ) : (
              <Link href={item.href} className="text-gray-500 hover:text-rose-600">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
