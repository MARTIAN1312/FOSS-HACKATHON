// Import the Loader2 icon from lucide-react for the loading spinner
import { Loader2 } from "lucide-react"

// LoadingAnimation component: Displays a loading spinner with a message
export function LoadingAnimation() {
  return (
    // Container div to center content both vertically and horizontally
    <div className="flex items-center justify-center">
      {/* Spinning loader icon with primary color */}
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
      {/* Loading message with spacing and styled text */}
      <span className="ml-2 text-lg font-medium">Analyzing code...</span>
    </div>
  )
}
