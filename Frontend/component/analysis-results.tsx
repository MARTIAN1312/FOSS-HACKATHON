"use client"

import { useState } from "react"
import { AlertCircle, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

// Define possible categories for issues
type IssueCategory = "error" | "warning" | "style" | "passed"

// Define structure for each issue
interface Issue {
  category: IssueCategory // Category of the issue
  message: string // Description of the issue
  line: number // Line number where the issue occurred
  code: string // Code snippet related to the issue
}

// Mock issues array for demonstration purposes
const mockIssues: Issue[] = [
  {
    category: "error",
    message: "Undefined variable 'foo'",
    line: 10,
    code: "print(foo)",
  },
  {
    category: "warning",
    message: "Unused variable 'bar'",
    line: 15,
    code: "bar = 42",
  },
  {
    category: "style",
    message: "Line too long (85 > 79 characters)",
    line: 20,
    code: "print('This is a very long line that exceeds the recommended maximum line length of 79 characters')",
  },
  {
    category: "passed",
    message: "No issues found",
    line: 25,
    code: "def greet(name):\n    return f'Hello, {name}!'",
  },
]

// Icons corresponding to each category
const categoryIcons = {
  error: <AlertCircle className="h-5 w-5 text-primary-accent" />,
  warning: <AlertTriangle className="h-5 w-5 text-secondary-accent" />,
  style: <Info className="h-5 w-5 text-dark-elements/70" />,
  passed: <CheckCircle2 className="h-5 w-5 text-success" />,
}

// CSS classes for text and border colors per category
const categoryColors = {
  error: "text-primary-accent border-primary-accent",
  warning: "text-secondary-accent border-secondary-accent",
  style: "text-dark-elements/70 border-dark-elements/70",
  passed: "text-success border-success",
}

// Component to display analysis results
export function AnalysisResults() {
  const [openCategories, setOpenCategories] = useState<IssueCategory[]>([]) // State for categories that are expanded

  // Toggle visibility of a category
  const toggleCategory = (category: IssueCategory) => {
    setOpenCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  // Copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // TODO: Show success notification
  }

  return (
    <TooltipProvider> {/* Tooltip provider wraps tooltips in this section */}
      <section className="space-y-4"> {/* Vertical spacing between elements */}
        <h2 className="text-2xl font-bold text-dark-elements">Analysis Results</h2> {/* Section title */}
        {(["error", "warning", "style", "passed"] as IssueCategory[]).map((category) => (
          <Collapsible
            key={category}
            open={openCategories.includes(category)}
            onOpenChange={() => toggleCategory(category)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                className={`flex w-full items-center justify-between border ${categoryColors[category]}`}
              >
                <span className="flex items-center space-x-2">
                  {categoryIcons[category]} {/* Display category icon */}
                  <span className="capitalize">{category}</span> {/* Display category name */}
                </span>
                {openCategories.includes(category) ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {mockIssues
                .filter((issue) => issue.category === category) // Filter issues by category
                .map((issue, index) => (
                  <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{issue.message}</span> {/* Display issue message */}
                      <span className="text-sm text-gray-500">Line {issue.line}</span> {/* Display line number */}
                    </div>
                    <div className="relative">
                      <pre className="overflow-x-auto rounded bg-dark-elements p-2 text-sm text-white">
                        <code>{issue.code}</code> {/* Display code snippet */}
                      </pre>
                      <Tooltip> {/* Tooltip for copy button */}
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 text-white hover:text-primary-accent"
                            onClick={() => copyToClipboard(issue.code)}
                          >
                            <Copy className="h-4 w-4" /> {/* Copy icon */}
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Copy code</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </section>
    </TooltipProvider>
  )
}



