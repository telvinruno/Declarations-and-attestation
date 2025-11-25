"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function ConflictOfInterestMode() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const router = useRouter()

  const handleContinue = () => {
    if (selectedType) {
      router.push(`/declarations/conflictofinterest/business/${selectedType}`)
    }
  }

  return (
    <div className="flex mx-15 h-[70vh] w-[60vw] m-[2%_0px_0px_5%]">
      <div className="flex flex-col w-full gap-5 ">
        <h1 className="font-bold text-xl my-5">Select Conflict of Interest Type</h1>
        <p>
          Please select the type of conflict of interest you wish to declare. Each type has a specific form to ensure
          all necessary details are captured accurately
        </p>

        {/* First item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start items-center">
            <input
              type="radio"
              name="conflictType"
              value="annual"
              checked={selectedType === "annual"}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mx-4"
            />
            <div className="flex flex-col py-4 px-4 flex-1">
              <h1>Annual</h1>
              <p>Submit your annual conflict of interest declaration</p>
            </div>
          </div>
        </div>

        {/* Second item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start items-center">
            <input
              type="radio"
              name="conflictType"
              value="on-demand"
              checked={selectedType === "on-demand"}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mx-4"
            />
            <div className="flex flex-col py-4 px-4 flex-1">
              <h1>On-demand</h1>
              <p>Submit your conflict of interest declaration as needed</p>
            </div>
          </div>
        </div>

        {/* Third item */}
        <div className="flex justify-center">
          <div className="flex w-full bg-white justify-start items-center">
            <input
              type="radio"
              name="conflictType"
              value="new"
              checked={selectedType === "new"}
              onChange={(e) => setSelectedType(e.target.value)}
              className="mx-4"
            />
            <div className="flex flex-col py-4 px-4 flex-1">
              <h1>New employee</h1>
              <p>Submit your initial conflict of interest declaration as a new employee</p>
            </div>
          </div>
        </div>

<button
  onClick={handleContinue}
  disabled={!selectedType}
  className="block w-1/5 sm:inline-flex sm:w-1/5 items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white my-3 disabled:opacity-50"
>

          Continue
        </button>
      </div>
    </div>
  )
}
