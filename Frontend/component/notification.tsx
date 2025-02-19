import type React from "react"
import { CheckCircle, XCircle } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const notificationVariants = cva("fixed bottom-4 left-4 z-50 flex items-center rounded-lg p-4 shadow-lg", {
  variants: {
    variant: {
      success: "bg-green-100 text-green-800",
      error: "bg-red-100 text-red-800",
    },
  },
  defaultVariants: {
    variant: "success",
  },
})

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notificationVariants> {
  message: string
}

export function Notification({ className, variant, message, ...props }: NotificationProps) {
  const Icon = variant === "success" ? CheckCircle : XCircle

  return (
    <div className={cn(notificationVariants({ variant }), className)} {...props}>
      <Icon className="mr-2 h-5 w-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  )
}

