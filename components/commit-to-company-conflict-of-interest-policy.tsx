"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessPopup } from "@/components/success-popup"

const conflictOfInterestPolicies = [
  "Disclose any personal, financial, or family relationships that could influence business decisions",
  "Avoid participating in decisions involving vendors, suppliers, or contractors with whom you have a personal connection",
  "Do not use your position to secure special treatment, benefits, or opportunities for yourself or acquaintances",
  "Refrain from holding significant financial interests in competitors, customers, or suppliers without prior approval",
  "Do not engage in outside employment or consulting that competes with or conflicts with company responsibilities",
  "Seek approval before accepting gifts, entertainment, or hospitality that exceed company-approved thresholds",
  "Avoid influencing hiring, promotions, or performance evaluations of relatives or close friends",
  "Do not use company resources, data, or property for personal projects or external business activity",
  "Notify management if you are offered employment or business opportunities by a company partner or client",
  "Refrain from making decisions that could benefit an organization in which you hold leadership or board roles",
  "Ensure that personal investments do not interfere with impartial decision-making or create divided loyalties",
  "Do not share confidential information with entities you have personal relationships or outside commitments with",
  "Avoid participating in negotiations where you or your family members stand to gain personally",
  "Recuse yourself from discussions or votes where your objectivity may be compromised",
  "Report any potential conflicts early so they can be reviewed and managed appropriately",
  "Consult the compliance or ethics office if you are unsure whether a situation constitutes a conflict of interest",
  "Keep personal financial dealings separate from company operations and decision-making processes",
  "Do not recommend or approve contracts or purchases from businesses you or relatives own or profit from",
  "Avoid representing the company in transactions where you have a personal stake or financial interest",
  "Recognize that even the appearance of a conflict of interest can undermine trust and must be avoided",
];

export default function ConflictOfInterestPolicy() {
  const [agreed, setAgreed] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return

    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setIsSubmitting(false)
    setShowSuccess(true)
    setAgreed(false)
  }

  return (
    <>
      <div className="w-4/5 ml-[4%] mt-[2%] my- p-6 bg-white rounded-lg h-full">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Code of Conduct Commitment</h1>
        </div>

        {/* Grayed Out Content Area */}
        <div className="mb-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold text-foreground mb-4">Please review and acknowledge our company's conflict of interest policy</h2>
          <ul className="space-y-3">
            {conflictOfInterestPolicies.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkbox and Submit */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 bg-green-600 cursor-pointer mt-1"
            />
            <label htmlFor="agree" className="text-foreground/80 cursor-pointer">
              I have read, understood, and agree to comply with the Code of Conduct outlined above.
            </label>
          </div>

          <Button
            type="submit"
            disabled={!agreed || isSubmitting}
            className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-2 text-sm font-medium text-white my-3"
          >
            {isSubmitting ? "Submitting..." : "Submit Commitment"}
          </Button>
        </form>
      </div>

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Commitment Confirmed"
        submessage="Your committment has been sent successfully"
      />
    </>
  )
}
