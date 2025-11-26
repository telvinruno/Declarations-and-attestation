"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessPopup } from "@/components/success-popup"

const insiderTradingPolicies = [
  "Do not buy, sell, or trade company securities while in possession of material non-public information",
  "Avoid sharing confidential financial or business information with friends, family, or third parties",
  "Refrain from discussing sensitive company information in public places, including online or social settings",
  "Consult the compliance department before executing trades during blackout periods or restricted windows",
  "Only trade company securities during approved trading windows unless you have obtained prior authorization",
  "Report any suspected insider trading or information leaks to compliance or legal departments immediately",
  "Do not tip others by passing along material non-public information that could influence investment decisions",
  "Safeguard confidential information by storing documents securely and using proper access controls",
  "Avoid making investment decisions based on early knowledge of earnings, mergers, acquisitions, or major announcements",
  "Seek legal or compliance guidance when unsure whether certain information is considered material and non-public",
  "Do not engage in speculative trading involving company stock, such as short selling or options trading, unless expressly permitted",
  "Ensure your family members, household members, and close associates understand and follow insider trading restrictions",
  "Refrain from using third-party brokerage accounts to conceal prohibited trading activities",
  "Participate in mandatory training sessions on insider trading laws and corporate compliance requirements",
  "Notify compliance of any planned trades involving company securities when serving as an executive, director, or designated insider",
  "Maintain strict confidentiality regarding ongoing negotiations, product launches, strategic plans, or financial results",
  "Do not access or use material non-public information obtained through previous employment or business relationships",
  "Follow all applicable securities laws, stock exchange rules, and corporate governance guidelines regarding insider trading",
  "Understand that violations may result in disciplinary action, including termination, legal penalties, and civil or criminal charges",
  "Demonstrate ethical judgment and avoid even the appearance of improper trading activity",
  "Prevent unauthorized access to electronic records, emails, and reports containing sensitive financial information",
  "Disclose any personal relationships or financial interests that may intersect with trading-related decisions",
  "Avoid providing investment advice based on confidential knowledge of the company’s performance or future plans",
  "Comply with policies governing the handling, distribution, and destruction of confidential financial documents",
  "Refrain from trading in the securities of partners, vendors, or competitors if you possess sensitive non-public information about them",
  "Immediately notify compliance if you believe you may have inadvertently traded on restricted or undisclosed information",
  "Cooperate fully with any internal investigations related to insider trading concerns or allegations",
  "Understand that insider trading rules apply regardless of the size or perceived impact of the trade",
  "Ensure all disclosures to investors, analysts, and the public are handled through authorized communication channels",
  "Recognize your responsibility to uphold market integrity and protect shareholder trust",
];

export default function CodeOfConduct() {
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
      <div className="w-4/5 ml-[4%] mt-[2%] my- p-6 bg-white rounded-lg h-full border">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Insider Trader Policy Commitment</h1>
        </div>

        {/* Grayed Out Content Area */}
        <div className="mb-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold text-foreground mb-4">Please review and acknowledge our company's insider trader policy</h2>
          <ul className="space-y-3">
            {insiderTradingPolicies.map((item, index) => (
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
