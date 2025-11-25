"use client"

import { useEffect } from "react"
import { Check } from "lucide-react"

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
  message?: string
  submessage?: string
}

export function SuccessPopup({
  isOpen,
  onClose,
  message = "Success!",
  submessage = "Your message has been sent successfully.",
}: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Popup */}
      <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-sm w-full animate-in fade-in zoom-in-95 duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mb-4">
            <Check className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">{message}</h2>
          <p className="text-foreground/80">{submessage}</p>
        </div>
      </div>
    </div>
  )
}
