"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// ScrollToTopButton component displays a button to scroll back to the top of the page
export function ScrollToTopButton() {
  // State to track the button's visibility
  const [isVisible, setIsVisible] = useState(false)

  // useEffect hook to add a scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down more than 300 pixels
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Attach event listener
    window.addEventListener("scroll", toggleVisibility)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // If button is not visible, do not render anything
  if (!isVisible) {
    return null
  }

  // Render scroll-to-top button
  return (
    <Button className="fixed bottom-4 right-4 z-50" size="icon" onClick={scrollToTop}>
      {/* Icon for the button */}
      <ChevronUp className="h-4 w-4" />
    </Button>
  )
}
