"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, Edit2, CheckCircle2 } from "lucide-react"
import toast from "react-hot-toast"

interface OutsideEngagement {
  id: string
  type: string
  comments: string
}

const engagementTypes = ["Board Member", "Consultant", "Investor", "Director", "Advisor", "Other"]

export default function OutsideEngagementsForm() {
  const [formData, setFormData] = useState({
    type: "",
    comments: "",
  })
  const [engagements, setEngagements] = useState<OutsideEngagement[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleAddEngagement = () => {
    if (!formData.type || !formData.comments.trim()) {
      toast.error("Please fill in all fields")
      return
    }

    if (editingId) {
      setEngagements(engagements.map((eng) => (eng.id === editingId ? { ...eng, ...formData } : eng)))
      setEditingId(null)
      toast.success("Engagement updated successfully")
    } else {
      const newEngagement: OutsideEngagement = {
        id: Date.now().toString(),
        type: formData.type,
        comments: formData.comments,
      }
      setEngagements([...engagements, newEngagement])
      toast.success("Engagement added successfully")
    }

    setFormData({ type: "", comments: "" })
  }

  const handleEdit = (engagement: OutsideEngagement) => {
    setFormData({ type: engagement.type, comments: engagement.comments })
    setEditingId(engagement.id)
  }

  const handleDelete = (id: string) => {
    setEngagements(engagements.filter((eng) => eng.id !== id))
    toast.success("Engagement deleted successfully")
  }

  const handleFinalSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (engagements.length === 0) {
      toast.error("Please add at least one engagement declaration")
      return
    }

    setShowSuccess(true)
  }

  const handleForward = () => {
    setShowSuccess(false)
    toast.success("Declaration submitted successfully to Safaricom Foundation!")
  }

  return (
    <div className=" mx-2 h-[60vh] w-[60vw] bg-background ">
      <div className="w-70% space-y-4">
        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Outside Engagements</h1>
        </div>

        {/* Form Card */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Add Outside Engagement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Section 1: Type of Outside Engagement */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Type of Outside Engagement*</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-input rounded-md bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select Type of Engagement</option>
                {engagementTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Section 2: Comments */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Comments</label>
              <textarea
                value={formData.comments}
                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                placeholder="Enter a description"
                rows={4}
                className="w-full px-3 py-2 border border-input rounded-md bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Section 3: Add Another Button */}
            <Button
              onClick={handleAddEngagement}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md"
            >
              {editingId ? "Update Engagement" : "+ Add another"}
            </Button>
          </CardContent>
        </Card>

        {/* Declared Engagements Card */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Declared Engagements</CardTitle>
          </CardHeader>
          <CardContent>
            {engagements.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <div className="text-4xl text-muted-foreground mb-2">○</div>
                <p className="text-muted-foreground">No Engagement Added</p>
              </div>
            ) : (
              <div className="space-y-3">
                {engagements.map((engagement) => (
                  <div
                    key={engagement.id}
                    className="flex items-center justify-between p-4 border border-border rounded-md bg-background"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{engagement.type}</p>
                      <p className="text-sm text-muted-foreground mt-1">{engagement.comments}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(engagement)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                        title="Edit"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(engagement.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Submit Form */}
        <form onSubmit={handleFinalSubmit} className="pb-32">
          <Button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-8 rounded-md w-1/5"
          >
            Submit Declaration
          </Button>
        </form>

        {/* Success Popup */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="bg-white w-96">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="text-5xl text-green-600">
                    <CheckCircle2 size={64} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Declaration Submitted</h2>
                    <p className="text-sm text-muted-foreground mt-2">
                      Your outside engagements have been successfully submitted.
                    </p>
                  </div>
                  <div className="flex gap-3 w-full pt-4">
                    <Button
                      onClick={() => setShowSuccess(false)}
                      className="flex-1 border border-input bg-white text-foreground hover:bg-background rounded-md"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleForward}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-md"
                    >
                      Forward to Safaricom Foundation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
