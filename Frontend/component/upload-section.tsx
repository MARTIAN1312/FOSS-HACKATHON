"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Notification } from "@/components/notification"

// UploadSection component handles file uploads with visual feedback
export function UploadSection() {
  // State to manage upload progress, upload status, and notifications
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean
    message: string
    variant: "success" | "error"
  }>({ show: false, message: "", variant: "success" })

  // Function called when files are dropped
  const onDrop = (acceptedFiles: File[]) => {
    setIsUploading(true)
    // Simulate file upload progress using intervals
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
        setIsUploading(false)
        // Display success notification after upload completes
        setNotification({
          show: true,
          message: "Upload complete!",
          variant: "success",
        })
        // Automatically hide notification after 3 seconds
        setTimeout(() => setNotification({ show: false, message: "", variant: "success" }), 3000)
      }
    }, 200)
  }

  // useDropzone hook to handle file drag-and-drop functionality
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/x-python": [".py"], // Only accept Python files (.py)
    },
    multiple: false, // Only allow one file at a time
  })

  return (
    <section className="mb-12">
      {/* File drop area */}
      <div
        {...getRootProps()}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
          isDragActive ? "border-primary-accent bg-primary-accent/10" : "border-secondary-accent"
        }`}
      >
        <input {...getInputProps()} />
        <Upload className={`mb-4 h-12 w-12 ${isDragActive ? "text-primary-accent" : "text-secondary-accent"}`} />
        <p className="mb-2 text-center text-lg font-medium text-dark-elements">
          {isDragActive ? "Drop the Python file here" : "Drag & drop a Python file here, or click to select"}
        </p>
        <p className="text-center text-sm text-gray-600">Supported file type: .py</p>
      </div>

      {/* Upload progress bar and percentage */}
      {isUploading && (
        <div className="mt-4">
          <Progress value={uploadProgress} className="h-2 w-full" />
          <p className="mt-2 text-center text-sm text-gray-600">Uploading... {uploadProgress}%</p>
        </div>
      )}

      {/* Start Analysis button appears after upload completes */}
      {!isUploading && uploadProgress === 100 && (
        <div className="mt-4 text-center">
          <Button className="mt-2 bg-secondary-accent text-white hover:bg-secondary-accent/90">Start Analysis</Button>
        </div>
      )}

      {/* Notification message displayed when upload completes */}
      {notification.show && <Notification variant={notification.variant} message={notification.message} />}
    </section>
  )
}
