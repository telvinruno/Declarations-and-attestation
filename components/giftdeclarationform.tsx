"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle2, Edit2, Trash2 } from "lucide-react"
import toast from "react-hot-toast"

interface Gift {
  id: string
  natureOfGifter: string
  natureOfRelationship: string
  otherRelationship: string
  giftersOrganization: string
  dateGiftOffered: string
  locationGiftOffered: string
  description: string
  typeOfGift: string
  estimatedValue: string
  uploadImage: File | null
  didReceiveGift: string
}

export default function GiftDeclarationForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [gifts, setGifts] = useState<Gift[]>([])

  const [formData, setFormData] = useState({
    natureOfGifter: "",
    natureOfRelationship: "",
    otherRelationship: "",
    giftersOrganization: "",
    dateGiftOffered: "",
    locationGiftOffered: "",
    description: "",
    typeOfGift: "",
    estimatedValue: "",
    uploadImage: null as File | null,
    didReceiveGift: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target

    if (type === "file") {
      const file = (e.target as HTMLInputElement).files?.[0] || null
      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleAddGift = () => {
    if (!formData.typeOfGift || !formData.description) {
      toast.error("Please fill in all required fields")
      return
    }

    if (formData.didReceiveGift === "yes" && !formData.uploadImage) {
      toast.error("Please upload an image for received gifts")
      return
    }

    if (editingId) {
      setGifts((prev) => prev.map((g) => (g.id === editingId ? { ...formData, id: editingId } : g)))
      setEditingId(null)
      toast.success("Gift updated successfully")
    } else {
      const newGift: Gift = {
        ...formData,
        id: Date.now().toString(),
      }
      setGifts((prev) => [...prev, newGift])
      toast.success("Gift added successfully")
    }

    setFormData({
      natureOfGifter: "",
      natureOfRelationship: "",
      otherRelationship: "",
      giftersOrganization: "",
      dateGiftOffered: "",
      locationGiftOffered: "",
      description: "",
      typeOfGift: "",
      estimatedValue: "",
      uploadImage: null,
      didReceiveGift: "",
    })
  }

  const handleEditGift = (gift: Gift) => {
    setFormData({
      ...gift,
      uploadImage: gift.uploadImage,
    })
    setEditingId(gift.id)
  }

  const handleDeleteGift = (id: string) => {
    setGifts((prev) => prev.filter((g) => g.id !== id))
    toast.success("Gift deleted successfully")
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (gifts.length === 0) {
      toast.error("Please add at least one gift")
      return
    }

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const refNumber = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    setReferenceNumber(refNumber)
    setShowSuccessDialog(true)
    setIsLoading(false)
  }

  const handleForwardToFoundation = () => {
    toast.success("Submission successful! Redirecting to Safaricom Foundation...")
    setTimeout(() => {
      window.location.href = "/safaricom-foundation"
    }, 2000)
  }

  const handleBack = () => {
    window.location.href = "/"
  }

  return (
    <>
      <div className="w-full max-w-4xl mx-13 p-6 max-h-screen ">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Gift Disclosure Form</CardTitle>
            <CardDescription>
              Please provide complete details about each gift. Fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Nature of Gifter */}
              <div className="space-y-2">
                <Label htmlFor="natureOfGifter">Name of Gifter</Label>
                <Input
                  id="natureOfGifter"
                  name="natureOfGifter"
                  placeholder="e.g., Individual, Company, Organization"
                  value={formData.natureOfGifter}
                  onChange={handleChange}
                  className="bg-white focus:outline-none focus:ring-2 focus:ring-green-600 resize-none"
                />
              </div>

              {/* Row 2: Nature of Relationship & Other Relationship */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="natureOfRelationship">Nature of Relationship *</Label>
                  <select
                    id="natureOfRelationship"
                    name="natureOfRelationship"
                    value={formData.natureOfRelationship}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a relationship</option>
                    <option value="business-partner">Business Partner</option>
                    <option value="client">Client</option>
                    <option value="vendor">Vendor</option>
                    <option value="personal-friend">Personal Friend</option>
                    <option value="family">Family</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {formData.natureOfRelationship === "other" && (
                  <div className="space-y-2">
                    <Label htmlFor="otherRelationship">If other, please specify</Label>
                    <Input
                      id="otherRelationship"
                      name="otherRelationship"
                      placeholder="Specify the relationship"
                      value={formData.otherRelationship}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              {/* Row 3: Gifters Organization */}
              <div className="space-y-2">
                <Label htmlFor="giftersOrganization">Gifter's Organization</Label>
                <Input
                  id="giftersOrganization"
                  name="giftersOrganization"
                  placeholder="Organization name"
                  value={formData.giftersOrganization}
                  onChange={handleChange}
                  className="bg-white"
                />
              </div>

              {/* Row 4: Date & Location */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="dateGiftOffered">Date Gift Offered</Label>
                  <Input
                    id="dateGiftOffered"
                    name="dateGiftOffered"
                    type="date"
                    value={formData.dateGiftOffered}
                    onChange={handleChange}
                    className="bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="locationGiftOffered">Location Gift Offered</Label>
                  <Input
                    id="locationGiftOffered"
                    name="locationGiftOffered"
                    placeholder="City, Country"
                    value={formData.locationGiftOffered}
                    onChange={handleChange}
                    className="bg-white"
                  />
                </div>
              </div>

              {/* Row 5: Description */}
              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe the gift"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>

              {/* Row 6: Type of Gift & Estimated Value */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="typeOfGift">Type of Gift *</Label>
                  <select
                    id="typeOfGift"
                    name="typeOfGift"
                    value={formData.typeOfGift}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a type</option>
                    <option value="cash">Cash</option>
                    <option value="gift-card">Gift Card</option>
                    <option value="merchandise">Merchandise</option>
                    <option value="experience">Experience</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estimatedValue">Estimated Value</Label>
                  <Input
                    id="estimatedValue"
                    name="estimatedValue"
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    value={formData.estimatedValue}
                    onChange={handleChange}
                    className="bg-white"
                  />
                </div>
              </div>

              {/* Row 7: Did you receive the gift */}
              <div className="space-y-2">
                <Label htmlFor="didReceiveGift">Did You Receive the Gift? *</Label>
                <select
                  id="didReceiveGift"
                  name="didReceiveGift"
                  value={formData.didReceiveGift}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="pending">Pending</option>
                </select>
              </div>

              {formData.didReceiveGift === "yes" && (
                <div className="space-y-2">
                  <Label htmlFor="uploadImage">Upload Image *</Label>
                  <Input
                    id="uploadImage"
                    name="uploadImage"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="file:rounded-md file:border-0 file:bg-primary file:px-3 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
                  />
                </div>
              )}

              <Button type="button" onClick={handleAddGift} className="w-1/3 bg-green-600 hover:bg-green-700">
                {editingId ? "Update Gift" : "+ Add Gift"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {gifts.length > 0 && (
          <Card className="w-full mt-6">
            <CardHeader>
              <CardTitle>Declared Gifts</CardTitle>
              <CardDescription>Review and manage your declared gifts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {gifts.map((gift) => (
                  <div
                    key={gift.id}
                    className="flex items-start justify-between p-4 border rounded-lg bg-gray-50 dark:bg-gray-900"
                  >
                    <div className="flex-1 space-y-2">
                      <p className="font-semibold text-foreground">{gift.description}</p>
                      <p className="text-sm text-muted-foreground">Type: {gift.typeOfGift}</p>
                      <p className="text-sm text-muted-foreground">Value: {gift.estimatedValue || "Not specified"}</p>
                      <p className="text-sm text-muted-foreground">Received: {gift.didReceiveGift}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditGift(gift)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteGift(gift.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-6 flex gap-4 pb-32">
          <form onSubmit={handleSubmit} className="w-full">
            <Button type="submit" disabled={isLoading} className="w-5/16 mx-6 bg-green-600 hover:bg-green-700">
              {isLoading ? "Submitting..." : "Submit Declaration"}
            </Button>
          </form>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
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

            <div className="w-full space-y-2">
              <Button onClick={handleForwardToFoundation} className="w-full bg-green-600 hover:bg-green-700">
                Forward to Safaricom Foundation
              </Button>
              <Button onClick={handleBack} variant="outline" className="w-full bg-transparent">
                Back
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
