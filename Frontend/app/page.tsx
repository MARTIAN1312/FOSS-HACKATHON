import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { UploadSection } from "@/components/upload-section"
import { AnalysisResults } from "@/components/analysis-results"

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-background">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <UploadSection />
        <AnalysisResults />
      </div>
    </main>
  )
}

