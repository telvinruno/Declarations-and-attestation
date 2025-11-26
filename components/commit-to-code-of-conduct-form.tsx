"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessPopup } from "@/components/success-popup"

const conductItems = [
"Treat all colleagues, customers, and partners with respect and dignity",
"Maintain professional, honest, and transparent communication in all interactions",
"Uphold confidentiality and safeguard sensitive company, customer, and partner information",
"Comply with all applicable laws, regulations, and industry standards",
"Report unethical or illegal conduct through proper channels without fear of retaliation",
"Avoid conflicts of interest and promptly disclose any potential or actual conflicts",
"Promote a safe, diverse, inclusive, and harassment-free workplace environment",
"Take personal responsibility for your actions, decisions, and performance",
"Ensure fair and non-discriminatory hiring, promotion, and compensation practices",
"Maintain the integrity and reliability of our telecommunications networks and services",
"Use company resources responsibly, efficiently, and for legitimate business purposes",
"Protect customer privacy and handle personal data in compliance with data protection laws",
"Provide accurate, truthful, and transparent information to customers and stakeholders",
"Adhere to fair competition practices and avoid anti-competitive behavior",
"Respect intellectual property rights, including software, patents, and copyrights",
"Prevent and detect fraud, bribery, and corruption in all business dealings",
"Ensure the safety and health of employees at all company facilities and worksites",
"Support innovation, continuous improvement, and operational excellence",
"Promote environmental sustainability by reducing energy use and waste in operations",
"Encourage open feedback, constructive criticism, and collaboration across teams",
"Maintain business continuity and protect infrastructure from risks and cyber threats",
"Train and educate employees on regulatory compliance, ethics, and security best practices",
"Foster accountability by clearly defining roles, responsibilities, and reporting lines",
"Practice transparency in financial reporting and corporate governance",
"Respect and support community engagement and social responsibility initiatives",
"Avoid insider trading and handle market-sensitive information responsibly",
"Deliver reliable and high-quality service to customers while minimizing service disruptions",
"Adhere to policies for the proper use of telecommunications equipment and licensed spectrum",
"Promote ethical relationships with suppliers, vendors, and contractors",
"Protect company reputation by acting in the company’s best interest at all times",
"Encourage leadership to lead by example and to uphold the highest ethical standards",
"Continuously monitor and assess compliance risks across all business units",
"Respond promptly to customer complaints and resolve disputes fairly",
"Maintain data integrity and accuracy in all reporting and record-keeping",
"Implement measures to prevent cyber threats, breaches, and unauthorized access",
"Ensure employee training on anti-money laundering (AML), know-your-customer (KYC), and similar regulations",
"Support equitable access to communication services in underserved or rural areas",
"Respect and comply with cross-border regulations and international telecommunications agreements",
"Promote digital inclusion, responsible use of technology, and ethical innovation",

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
      <div className="w-4/5 ml-[4%] mt-[2%] my- p-6 bg-white rounded-lg h-full border">
        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Code of Conduct Commitment</h1>
        </div>

        {/* Grayed Out Content Area */}
        <div className="mb-6 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h2 className="text-lg font-semibold text-foreground mb-4">Please review and acknowledge our company's Code of Conduct</h2>
          <ul className="space-y-3">
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
