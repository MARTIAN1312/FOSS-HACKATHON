"use client"

import { useState } from "react"
import { AlertCircle, AlertTriangle, CheckCircle2, ChevronDown, ChevronUp, Copy, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

type IssueCategory = "error" | "warning" | "style" | "passed"

interface Issue {
  category: IssueCategory
  message: string
  line: number
  code: string
}

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

const categoryIcons = {
  error: <AlertCircle className="h-5 w-5 text-primary-accent" />,
  warning: <AlertTriangle className="h-5 w-5 text-secondary-accent" />,
  style: <Info className="h-5 w-5 text-dark-elements/70" />,
  passed: <CheckCircle2 className="h-5 w-5 text-success" />,
}

const categoryColors = {
  error: "text-primary-accent border-primary-accent",
  warning: "text-secondary-accent border-secondary-accent",
  style: "text-dark-elements/70 border-dark-elements/70",
  passed: "text-success border-success",
}

export function AnalysisResults() {
  const [openCategories, setOpenCategories] = useState<IssueCategory[]>([])

  const toggleCategory = (category: IssueCategory) => {
    setOpenCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // TODO: Show success notification
  }

  return (
    <TooltipProvider>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-dark-elements">Analysis Results</h2>
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
                  {categoryIcons[category]}
                  <span className="capitalize">{category}</span>
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
                .filter((issue) => issue.category === category)
                .map((issue, index) => (
                  <div key={index} className="rounded-lg border bg-white p-4 shadow-sm">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{issue.message}</span>
                      <span className="text-sm text-gray-500">Line {issue.line}</span>
                    </div>
                    <div className="relative">
                      <pre className="overflow-x-auto rounded bg-dark-elements p-2 text-sm text-white">
                        <code>{issue.code}</code>
                      </pre>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-2 text-white hover:text-primary-accent"
                            onClick={() => copyToClipboard(issue.code)}
                          >
                            <Copy className="h-4 w-4" />
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

