import { FileCode2 } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-dark-elements">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <FileCode2 className="h-6 w-6 text-white" />
          <span className="font-bold text-white">Python Code Analyzer</span>
        </div>
        <div className="flex space-x-4">
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Features
          </Link>
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

