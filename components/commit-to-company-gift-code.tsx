"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessPopup } from "@/components/success-popup"
import Link from "next/link"

const conductItems = [
"Do not offer, give, or accept gifts that could influence business decisions or create the appearance of improper influence",
"Only give or receive gifts that are modest, customary, and compliant with company policy and local laws",
"Disclose any gift, hospitality, or benefit received from customers, suppliers, or partners according to company procedures",
"Seek prior approval from management for gifts or hospitality that exceed the allowable value threshold",
"Never accept cash, cash equivalents, or personal favors from any business partner under any circumstances",
"Ensure all gifts and hospitality are accurately recorded in the company’s gift registry or reporting system",
"Decline gifts or invitations that may create a conflict of interest or compromise impartial judgment",
"Ensure that any hospitality provided, such as meals or events, serves a legitimate business purpose",
"Avoid offering gifts or entertainment during contract negotiations, tenders, or competitive bidding processes",
"Comply with anti-bribery and anti-corruption laws, including restrictions on gifts to government officials",
"Politely refuse any gift or hospitality that feels inappropriate, excessive, or uncomfortable to accept",
"Ensure that promotional items or branded merchandise offered by the company remain low-value and professional",
"Consult the compliance or ethics team when unsure whether a gift or invitation is appropriate",
"Do not request personal discounts or special treatment from vendors, suppliers, or partners",
"Refrain from giving gifts that may be culturally insensitive, offensive, or violate cultural norms",
"Avoid providing or accepting travel accommodation unless explicitly approved and clearly business-related",
"Ensure transparency by notifying your manager of any offer of gifts or hospitality, even if declined",
"Respect customer and supplier policies regarding the giving or receiving of gifts",
"Maintain independence in business decisions by avoiding situations where personal gain could influence judgment",
"Avoid reciprocal gift-giving intended to secure preferential treatment or future business advantages",
"Ensure any charitable donations made on behalf of the company are properly approved and documented",
"Never use personal funds to provide gifts that would violate company policy if purchased with company funds",
"Refrain from offering gifts that may be considered luxury items, inappropriate, or excessive in value",
"Ensure that gifts given during holidays, cultural celebrations, or company events remain modest and compliant",
"Decline invitations to events, trips, or entertainment where the primary purpose is social rather than business-related",
"Immediately report any attempts by third parties to provide gifts in exchange for confidential information or favors",
"Ensure that all employees understand the gift policy through regular communication and training",
"Apply the same gift standards consistently across all regions, departments, and business partners",
"Ensure that managers lead by example by demonstrating compliance with all gift and hospitality guidelines",
"Uphold the company’s integrity by avoiding any gift-related behavior that could harm reputation or stakeholder trust",
"Encourage openness and transparency by asking questions whenever gift-related situations are unclear",
"Prioritize objectivity, professionalism, and fairness in all interactions involving gifts or hospitality",
"Comply with internal audit requirements related to gift reporting, documentation, and approval processes",
"Ensure that gifts are never used as a method to bypass formal procurement or approval channels",
"Treat all employees and partners fairly by applying the same gift standards regardless of seniority or position",
"Ensure that gifts and hospitality practices support ethical business conduct and reinforce company values",
"Review the gift and hospitality policy regularly to align with legal, regulatory, and industry standards",

]


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
      <div className="w-3/4 mx-13 my-1 p-6 bg-white dark:bg-slate-900 rounded-lg border h-screen">
        {/* Title */}
        <div className="mb-1">
          <h1 className="text-3xl font-bold text-foreground mb-2">Company Code on Gifts and Rewards</h1>
        </div>

        {/* Grayed Out Content Area */}
        <div className="mb-2 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold text-foreground mb-2">Please review and acknowledge commitement to the codes outlined below</h2>
          <ul className="space-y-2">
            {conductItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Checkbox and Submit */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start gap-1">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-5 h-5 bg-green-600 cursor-pointer mt-1"
            />
            <label htmlFor="agree" className="text-foreground/80 cursor-pointer">
               I have read, understood, and agree to comply with the code on gifts and rewards
            </label>
          </div>
         <Link href="/declarations/gift/adddeclaration">
          <Button
            disabled={!agreed}
            className="block w-full sm:inline-flex sm:w-auto items-center justify-center rounded-md b-green-500 px-4 py-1 text-sm font-medium text-white my-1"
          >
           Add declaration
          </Button>
           </Link>
        </form>
      </div>
    </>
  )
}



            

           