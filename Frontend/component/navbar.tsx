import { FileCode2 } from "lucide-react"
import Link from "next/link"

// Navbar component that provides site navigation
export function Navbar() {
  return (
    // Sticky navigation bar at the top of the page
    <nav className="sticky top-0 z-50 w-full bg-dark-elements">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and site name */}
        <div className="flex items-center space-x-2">
          {/* Icon representing code files */}
          <FileCode2 className="h-6 w-6 text-white" />
          {/* Website name displayed in bold white text */}
          <span className="font-bold text-white">Python Code Analyzer</span>
        </div>
        {/* Navigation links */}
        <div className="flex space-x-4">
          {/* Home link */}
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Home
          </Link>
          {/* Features link */}
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Features
          </Link>
          {/* Contact link */}
          <Link href="#" className="text-white hover:text-primary-accent transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
