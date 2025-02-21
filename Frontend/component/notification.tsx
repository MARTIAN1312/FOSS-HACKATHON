import type React from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define notification styles using class-variance-authority
const notificationVariants = cva(
  "fixed bottom-4 left-4 z-50 flex items-center rounded-lg p-4 shadow-lg", // Base styles for the notification
  {
    variants: {
      variant: {
        success: "bg-green-100 text-green-800", // Styles for success notification
        error: "bg-red-100 text-red-800", // Styles for error notification
      },
    },
    defaultVariants: {
      variant: "success", // Default variant is success
    },
  }
)

// Define the props for the Notification component
interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationVariants> {
  message: string // Message to display in the notification
}

// Notification component that shows success or error messages
export function Notification({ className, variant, message, ...props }: NotificationProps) {
  // Choose the icon based on the variant: success -> CheckCircle, error -> XCircle
  const Icon = variant === "success" ? CheckCircle : XCircle

  return (
    // Combine notification styles with any additional class names passed in
    <div className={cn(notificationVariants({ variant }), className)} {...props}>
      {/* Display the icon */}
      <Icon className="mr-2 h-5 w-5" />
      {/* Display the message */}
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}
