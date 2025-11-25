"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"

interface EntityDetail {
  entityType: string
  relationship: string
  role: string
  companyName: string
  businessType: string
  dealingStatus: "current" | "potential" | "none"
  dealingDescription: string
  influenceLevel: string
  financialBenefit: string
}

export default function BusinessPartnerForm() {
  const [formData, setFormData] = useState<EntityDetail>({
    entityType: "",
    relationship: "",
    role: "",
    companyName: "",
    businessType: "",
    dealingStatus: "none",
    dealingDescription: "",
    influenceLevel: "",
    financialBenefit: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: keyof EntityDetail, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleRadioChange = (status: "current" | "potential" | "none") => {
    setFormData((prev) => ({
      ...prev,
      dealingStatus: status,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.entityType || !formData.companyName || !formData.influenceLevel) {
      toast.error("Please fill in all required fields")
      return
    }

    // Show success popup
    setSubmitted(true)
  }

  const handleForward = () => {
    toast.success("Declaration submitted successfully!")
    // Reset form after successful submission
    setSubmitted(false)
    setFormData({
      entityType: "",
      relationship: "",
      role: "",
      companyName: "",
      businessType: "",
      dealingStatus: "none",
      dealingDescription: "",
      influenceLevel: "",
      financialBenefit: "",
    })
  }

  if (submitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <Card className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center">Declaration Submitted</h2>
            <p className="text-center text-gray-600">
              Your business partner declaration has been successfully submitted.
            </p>
            <div className="flex gap-4 w-full pt-4">
              <Button onClick={() => setSubmitted(false)} className="flex-1 bg-gray-300 text-black hover:bg-gray-400">
                Back
              </Button>
              <Button onClick={handleForward} className="flex-1 bg-green-600 text-white hover:bg-green-700">
                Forward to Safaricom Foundation
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-background flex flex-col">
      <div className="flex-1 px-4 py-6 ">
        <div className="mx-10 w-3/4">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Business Partner Employee Details</h1>
          </div>

          {/* Form Card */}
          <Card className="p-8 bg-card text-card-foreground">
            {/* Section 1: Type of Entity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold mb-3">
                Type of Entity<span className="text-red-500">*</span>
              </label>
              <select
                value={formData.entityType}
                onChange={(e) => handleInputChange("entityType", e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Select Entity type</option>
                <option value="private">Private Company</option>
                <option value="public">Public Company</option>
                <option value="sole">Sole Proprietorship</option>
                <option value="partnership">Partnership</option>
                <option value="ngo">NGO</option>
              </select>
            </div>

            {/* Section 2: Relationship and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-3">Relationship with Entity</label>
                <textarea
                  value={formData.relationship}
                  onChange={(e) => handleInputChange("relationship", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Describe your relationship..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Role in Entity</label>
                <textarea
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Describe your role..."
                />
              </div>
            </div>

            {/* Section 3: Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Name of Company<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Enter company name..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Type of Business</label>
                <textarea
                  value={formData.businessType}
                  onChange={(e) => handleInputChange("businessType", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Describe type of business..."
                />
              </div>
            </div>

            {/* Section 4: Question about dealings */}
            <div className="mb-8">
              <p className="text-sm font-semibold mb-6">
                Does the entity have current or potential dealings with the company?
              </p>

              {/* Section 5: Radio buttons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { value: "current", label: "Yes - Current Dealings" },
                  { value: "potential", label: "Yes - Potential Dealings" },
                  { value: "none", label: "No" },
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleRadioChange(option.value as "current" | "potential" | "none")}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.dealingStatus === option.value
                        ? "border-green-600 bg-green-50"
                        : "border-border bg-background hover:border-green-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          formData.dealingStatus === option.value ? "border-green-600 bg-green-600" : "border-input"
                        }`}
                      >
                        {formData.dealingStatus === option.value && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <label className="text-sm font-medium cursor-pointer">{option.label}</label>
                    </div>
                  </div>
                ))}
              </div>

              {/* Section 6: Conditional description field */}
              {(formData.dealingStatus === "current" || formData.dealingStatus === "potential") && (
                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-3">Please Describe</label>
                  <textarea
                    value={formData.dealingDescription}
                    onChange={(e) => handleInputChange("dealingDescription", e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                    rows={6}
                    placeholder="Describe the nature of dealings..."
                  />
                </div>
              )}
            </div>

            {/* Section 7: Influence and Financial Benefit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Level of Influence or Decision Making Power<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.influenceLevel}
                  onChange={(e) => handleInputChange("influenceLevel", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Describe your level of influence..."
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-3">Financial Benefit Expected</label>
                <textarea
                  value={formData.financialBenefit}
                  onChange={(e) => handleInputChange("financialBenefit", e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                  rows={4}
                  placeholder="Describe expected financial benefits..."
                />
              </div>
            </div>
          </Card>

          {/* Submit Button - Outside Card */}
          <div className="mt-8 mb-32 flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl">
              <Button
                type="submit"
                className="w-full md:w-48 bg-green-600 text-white hover:bg-green-700 font-semibold py-3"
              >
                Submit Declaration
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
