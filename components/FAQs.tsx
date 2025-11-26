'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is the gift disclosure form?',
    answer: 'The gift disclosure form is a comprehensive tool designed to document and track gifts received by employees. It helps maintain transparency and compliance with organizational policies regarding gift acceptance.',
  },
  {
    id: '2',
    question: 'Who needs to fill out this form?',
    answer: 'Any employee who receives a gift from a vendor, client, or business partner is required to fill out this form. This includes gifts from both Safaricom employees and employees of business partners.',
  },
  {
    id: '3',
    question: 'What constitutes a gift that needs to be disclosed?',
    answer: 'A gift includes any item of value received as a token of appreciation or goodwill. This includes cash, merchandise, event tickets, travel, meals, and other items of monetary value.',
  },
  {
    id: '4',
    question: 'Is there a value threshold for gift disclosure?',
    answer: 'Yes, gifts valued at Ksh 5,000 or more must be disclosed. Gifts below this threshold may still need to be reported based on your department\'s specific guidelines.',
  },
  {
    id: '5',
    question: 'What happens after I submit the form?',
    answer: 'After submission, your form undergoes a review process. You will receive a reference number and can track the status through the submissions portal. Compliance will contact you if additional information is needed.',
  },
  {
    id: '6',
    question: 'Can I view my previous submissions?',
    answer: 'Yes, you can view all your previous submissions using the "View Submissions" button on the success page. This allows you to track the history of all your gift disclosures.',
  },
]

export function FAQs() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full mx-1% py-1 px-4">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-foreground mb-2">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Find answers to common questions about attestations and declarations</p>
      </div>

      <div className="space-y-3">
        {faqItems.map((item) => (
          <div
            key={item.id}
            className="border border-border rounded-lg overflow-hidden transition-all duration-200"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-accent/5 transition-colors duration-150"
            >
              <h3 className="text-lg font-semibold text-foreground text-left">{item.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                  openId === item.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Answer - Conditionally Rendered */}
            {openId === item.id && (
              <div className="px-6 py-4 bg-muted/30 border-t border-border">
                <p className="text-foreground leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

