// Import the Button component from the UI library
import { Button } from "@/components/ui/button"

// Hero component: Displays the main headline and call-to-action button
export function Hero() {
  return (
    // Hero section with background color and centered text
    <section className="bg-primary-background py-20 text-center">
      <div className="container mx-auto px-4">
        {/* Main heading with responsive font sizes */}
        <h1 className="mb-6 text-4xl font-bold text-dark-elements md:text-5xl lg:text-6xl">
          Elevate Your Python Code Quality
        </h1>
        {/* Subheading that describes the tool's purpose */}
        <p className="mb-8 text-xl text-gray-700">
          Analyze, optimize, and perfect your Python code with our advanced quality analysis tool.
        </p>
        {/* Call-to-action button with styling and hover effect */}
        <Button size="lg" className="bg-primary-accent text-white hover:bg-primary-accent/90">
          Get Started
        </Button>
      </div>
    </section>
  )
}
