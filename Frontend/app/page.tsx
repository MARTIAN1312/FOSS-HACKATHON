import { Navbar } from "@/components/navbar" // Import Navbar component
import { Hero } from "@/components/hero" // Import Hero component
import { UploadSection } from "@/components/upload-section" // Import UploadSection component
import { AnalysisResults } from "@/components/analysis-results" // Import AnalysisResults component

// Home component - main page layout
export default function Home() {
  return (
    <main className="min-h-screen bg-primary-background"> {/* Main content area with minimum full screen height and background color */}
      <Navbar /> {/* Navigation bar at the top */}
      <Hero /> {/* Hero section - main introductory content */}
      <div className="container mx-auto px-4 py-8"> {/* Centered container with padding */}
        <UploadSection /> {/* Section to upload files for analysis */}
        <AnalysisResults /> {/* Section to display analysis results */}
      </div>
    </main>
  )
}


I've added comments to explain the imports and main sections of the Home component. Let me know if you'd like more details or additional modifications.

