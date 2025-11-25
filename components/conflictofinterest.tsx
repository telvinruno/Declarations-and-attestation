'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { CheckCircle2 } from 'lucide-react'

export default function ConflictOfInterest() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    employeeStatus: '', // 'my-company' or 'business-partner'
    employeeDetails: '',
    comments: '',
  })
  
  const [employeeDataFetched, setEmployeeDataFetched] = useState(false)
  const [employeeData, setEmployeeData] = useState({
    name: '',
    department: '',
    employeeId: '',
  })

  const handleRadioChange = (status: string) => {
    setFormData(prev => ({
      ...prev,
      employeeStatus: status,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFetchEmployeeData = async () => {
    if (!formData.employeeDetails.trim()) {
      alert('Please enter employee details')
      return
    }
    
    // Simulate API call
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock employee data
    setEmployeeData({
      name: 'John Doe',
      department: 'Sales',
      employeeId: 'EMP-2024-001',
    })
    setEmployeeDataFetched(true)
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!formData.employeeStatus) {
      alert('Please select your employment status')
      return
    }

    setIsLoading(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    const refNumber = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setFormData(prev => ({
      ...prev,
      referenceNumber: refNumber,
    }))

    // Show success popup
    setIsOpen(true)
    setIsLoading(false)

    // Reset form
    setFormData({
      employeeStatus: '',
      employeeDetails: '',
      comments: '',
    })
    setEmployeeDataFetched(false)
    setEmployeeData({ name: '', department: '', employeeId: '' })
  }

  const handleViewSubmissions = () => {
    window.location.href = '/submissions'
  }

  const handleReturnHome = () => {
    window.location.href = '/'
  }

  return (
    <>
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Employee Verification Form</CardTitle>
          <CardDescription>Please verify your employment status and provide required information.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="space-y-3">
              <Label>Is this family member a Safaricom employee or employed by a business partner?</Label>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {/* My Company Option */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.employeeStatus === 'my-company'
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="employeeStatus"
                    value="my-company"
                    checked={formData.employeeStatus === 'my-company'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-3 font-medium">My Company</span>
                </label>

                {/* Business Partner Option */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.employeeStatus === 'business-partner'
                      ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="employeeStatus"
                    value="business-partner"
                    checked={formData.employeeStatus === 'business-partner'}
                    onChange={(e) => handleRadioChange(e.target.value)}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <span className="ml-3 font-medium">Business Partner</span>
                </label>
              </div>
            </div>

            {/* Employee Details Input */}
            <div className="space-y-2">
              <Label htmlFor="employeeDetails">Employee Details</Label>
              <Input
                id="employeeDetails"
                name="employeeDetails"
                placeholder="Enter employee ID, name, or reference number"
                value={formData.employeeDetails}
                onChange={handleInputChange}
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleFetchEmployeeData}
                disabled={isLoading || !formData.employeeDetails}
                className="w-full mt-2"
              >
                {isLoading ? 'Fetching...' : 'Verify Employee'}
              </Button>
            </div>

            {employeeDataFetched && (
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg space-y-2">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Verified Employee Information</h3>
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-blue-900 dark:text-blue-100">Name: </span>
                    <span className="text-blue-800 dark:text-blue-200">{employeeData.name}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900 dark:text-blue-100">Department: </span>
                    <span className="text-blue-800 dark:text-blue-200">{employeeData.department}</span>
                  </div>
                  <div>
                    <span className="font-medium text-blue-900 dark:text-blue-100">Employee ID: </span>
                    <span className="text-blue-800 dark:text-blue-200">{employeeData.employeeId}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Comments Text Area */}
            <div className="space-y-2">
              <Label htmlFor="comments">Comments</Label>
              <textarea
                id="comments"
                name="comments"
                placeholder="Enter a description"
                value={formData.comments}
                onChange={handleInputChange}
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Form'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
              <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="space-y-2 text-center">
              <h2 className="text-xl font-semibold">Form Submitted Successfully</h2>
              <p className="text-sm text-muted-foreground">
                Your employee verification form has been successfully submitted. Thank you!
              </p>
            </div>

            <div className="w-full rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
              <p className="text-xs font-medium text-muted-foreground mb-2">Reference Number</p>
              {/* <p className="text-lg font-mono font-semibold text-foreground">{formData.referenceNumber}</p> */}
            </div>

            <div className="w-full space-y-2">
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
