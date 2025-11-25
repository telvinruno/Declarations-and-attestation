'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { CheckCircle2 } from 'lucide-react'

export function FormWithSuccessPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const [referenceNumber, setReferenceNumber] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    const refNumber = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setReferenceNumber(refNumber)

    // Show success popup
    setIsOpen(true)
    setIsLoading(false)


    // Auto-close popup after 4 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 4000)
  }

  const handleViewSubmissions = () => {
    // Navigate to submissions page
    window.location.href = '/commitments'
  }

  const handleReturnHome = () => {
    // Navigate to home page
    window.location.href = '/'
  }

  return (
    <>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-xl font-semibold">Gift Disclosure Submitted</h2>
              <p className="text-sm text-muted-foreground">
                Your gift disclosure form has been successfully submitted. Thank you for providing this information.
              </p>
            </div>

            <div className="w-full rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <p className="text-xs font-medium text-muted-foreground mb-2">Reference Number</p>
              <p className="text-lg font-mono font-semibold text-foreground">{referenceNumber}</p>
            </div>

            <div className="w-full space-y-2 flex">
              <Button onClick={handleViewSubmissions} className="w-full">
                View Submissions
              </Button>
              <Button onClick={handleReturnHome} variant="outline" className="w-full">
                Return to Home
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}





