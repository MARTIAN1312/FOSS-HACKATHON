import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-primary-background py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-4xl font-bold text-dark-elements md:text-5xl lg:text-6xl">
          Elevate Your Python Code Quality
        </h1>
        <p className="mb-8 text-xl text-gray-700">
          Analyze, optimize, and perfect your Python code with our advanced quality analysis tool.
        </p>
        <Button size="lg" className="bg-primary-accent text-white hover:bg-primary-accent/90">
          Get Started
        </Button>
      </div>
    </section>
  )
}

