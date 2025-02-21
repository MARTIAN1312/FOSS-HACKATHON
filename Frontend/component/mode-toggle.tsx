// Enable client-side rendering for theme toggle functionality
"use client"

// Import icons and theme hook
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

// Import reusable button and dropdown components
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// ModeToggle component: Allows users to switch between light, dark, and system themes
export function ModeToggle() {
  // Extract setTheme function from useTheme hook
  const { setTheme } = useTheme()

  return (
    // Dropdown menu wrapper
    <DropdownMenu>
      {/* Dropdown trigger button with sun and moon icons */}
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {/* Sun icon for light mode, hidden in dark mode */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon for dark mode, hidden in light mode */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Accessible label for screen readers */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown menu content with theme options */}
      <DropdownMenuContent align="end">
        {/* Light theme option */}
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        {/* Dark theme option */}
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        {/* System theme option */}
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
