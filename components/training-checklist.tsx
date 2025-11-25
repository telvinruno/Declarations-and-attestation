// "use client"

// import { useState } from "react"
// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { SuccessPopup } from "@/components/success-popup"

// const trainings = [
//   { id: 1, name: "Data Security & Privacy", category: "Compliance" },
//   { id: 2, name: "Workplace Safety", category: "Safety" },
//   { id: 3, name: "Code of Conduct", category: "Ethics" },
//   { id: 4, name: "Anti-Harassment & Discrimination", category: "Compliance" },
//   { id: 5, name: "Environmental Health & Safety", category: "Safety" },
//   { id: 6, name: "Diversity & Inclusion", category: "Culture" },
//   { id: 7, name: "Information Security Basics", category: "Compliance" },
//   { id: 8, name: "Acceptable Use Policy", category: "IT" },
// ]

// export function TrainingChecklist() {
//   const [completed, setCompleted] = useState<number[]>([])
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const toggleTraining = (id: number) => {
//     setCompleted((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//   }

//   const handleSubmit = async () => {
//     setIsSubmitting(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setShowSuccess(true)
//     setIsSubmitting(false)
//   }

//   const completedCount = completed.length
//   const totalCount = trainings.length
//   const progressPercentage = (completedCount / totalCount) * 100

//   return (
//     <div className="w-3/4 mx-13 ">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-foreground mb-2">Corporate Training Tracker</h1>
//         <p className="text-muted-foreground">Confirm completion of your required training</p>
//       </div>

//       {/* Progress Bar */}
//       <div className="mb-8 p-6 rounded-lg border border-border bg-card">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm font-medium text-foreground">Progress</span>
//           <span className="text-sm font-semibold text-primary">
//             {completedCount}/{totalCount}
//           </span>
//         </div>
//         <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
//           <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
//         </div>
//       </div>

//       {/* Training List */}
//       <div className="space-y-2 mb-8 ">
//         {trainings.map((training) => (
//           <label
//             key={training.id}
//             className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent cursor-pointer transition-colors"
//           >
//             <div className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
//               <input
//                 type="checkbox"
//                 checked={completed.includes(training.id)}
//                 onChange={() => toggleTraining(training.id)}
//                 className="w-6 h-6 rounded border border-primary cursor-pointer accent-primary"
//               />
//             </div>
//             <div className="flex-1">
//               <p
//                 className={`font-medium ${completed.includes(training.id) ? "text-muted-foreground line-through" : "text-foreground"}`}
//               >
//                 {training.name}
//               </p>
//               <p className="text-xs text-muted-foreground">{training.category}</p>
//             </div>
//             {completed.includes(training.id) && <Check className="w-5 h-5 text-primary flex-shrink-0" />}
//           </label>
//         ))}
//       </div>

//       {/* Submit Button */}
//       <div className="flex gap-3">
//         <Button onClick={handleSubmit} disabled={completedCount === 0 || isSubmitting} className="flex-1" size="lg">
//           {isSubmitting ? "Submitting..." : "Submit Training Records"}
//         </Button>
//         <Button variant="outline" onClick={() => setCompleted([])} disabled={completedCount === 0} size="lg">
//           Clear All
//         </Button>
//       </div>

//       {/* Success Popup */}
//       <SuccessPopup
//         isOpen={showSuccess}
//         onClose={() => setShowSuccess(false)}
//         message="Training records submitted successfully!"
//         submessage={`You have completed ${completedCount} training course${completedCount !== 1 ? "s" : ""}.`}
//       />
//     </div>
//   )
// }




// "use client"

// import { useState } from "react"
// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { SuccessPopup } from "@/components/success-popup"

// const trainings = [
//   { id: 1, name: "Data Security & Privacy", category: "Compliance" },
//   { id: 2, name: "Workplace Safety", category: "Safety" },
//   { id: 3, name: "Code of Conduct", category: "Ethics" },
//   { id: 4, name: "Anti-Harassment & Discrimination", category: "Compliance" },
//   { id: 5, name: "Environmental Health & Safety", category: "Safety" },
//   { id: 6, name: "Diversity & Inclusion", category: "Culture" },
//   { id: 7, name: "Information Security Basics", category: "Compliance" },
//   { id: 8, name: "Acceptable Use Policy", category: "IT" },
// ]

// export function TrainingChecklist() {
//   const [completed, setCompleted] = useState<number[]>([])
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const toggleTraining = (id: number) => {
//     setCompleted((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//   }

//   const handleSubmit = async () => {
//     setIsSubmitting(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setShowSuccess(true)
//     setIsSubmitting(false)
//   }

//   const completedCount = completed.length
//   const totalCount = trainings.length
//   const progressPercentage = (completedCount / totalCount) * 100

//   return (
//     <div className="w-3/4 mx-13 ">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-foreground mb-2">Corporate Training Tracker</h1>
//         <p className="text-muted-foreground">Confirm completion of your required training</p>
//       </div>

//       {/* Progress Bar */}
//       <div className="mb-8 p-6 rounded-lg border border-border bg-card">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm font-medium text-foreground">Progress</span>
//           <span className="text-sm font-semibold text-primary">
//             {completedCount}/{totalCount}
//           </span>
//         </div>
//         <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
//           <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
//         </div>
//       </div>

//       <div
//         className="space-y-2 mb-8 max-h-96 overflow-y-auto pr-4"
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <style>{`
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//         {trainings.map((training) => (
//           <label
//             key={training.id}
//             className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent cursor-pointer transition-colors"
//           >
//             <div className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
//               <input
//                 type="checkbox"
//                 checked={completed.includes(training.id)}
//                 onChange={() => toggleTraining(training.id)}
//                 className="w-6 h-6 rounded border border-primary cursor-pointer accent-primary"
//               />
//             </div>
//             <div className="flex-1">
//               <p
//                 className={`font-medium ${completed.includes(training.id) ? "text-muted-foreground line-through" : "text-foreground"}`}
//               >
//                 {training.name}
//               </p>
//               <p className="text-xs text-muted-foreground">{training.category}</p>
//             </div>
//             {completed.includes(training.id) && <Check className="w-5 h-5 text-primary flex-shrink-0" />}
//           </label>
//         ))}
//       </div>

//       <div className="flex gap-3">
//         <Button onClick={handleSubmit} disabled={completedCount === 0 || isSubmitting} className="flex-1" size="lg">
//           {isSubmitting ? "Submitting..." : "Submit Training Records"}
//         </Button>
//         <Button variant="outline" onClick={() => setCompleted([])} disabled={completedCount === 0} size="lg">
//           Clear All
//         </Button>
//       </div>

//       {/* Success Popup */}
//       <SuccessPopup
//         isOpen={showSuccess}
//         onClose={() => setShowSuccess(false)}
//         message="Training records submitted successfully!"
//         submessage={`You have completed ${completedCount} training course${completedCount !== 1 ? "s" : ""}.`}
//       />
//     </div>
//   )
// }









// "use client"

// import { useState } from "react"
// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { SuccessPopup } from "@/components/success-popup"

// const trainings = [
//   { id: 1, name: "Data Security & Privacy", category: "Compliance" },
//   { id: 2, name: "Workplace Safety", category: "Safety" },
//   { id: 3, name: "Code of Conduct", category: "Ethics" },
//   { id: 4, name: "Anti-Harassment & Discrimination", category: "Compliance" },
//   { id: 5, name: "Environmental Health & Safety", category: "Safety" },
//   { id: 6, name: "Diversity & Inclusion", category: "Culture" },
//   { id: 7, name: "Information Security Basics", category: "Compliance" },
//   { id: 8, name: "Acceptable Use Policy", category: "IT" },
// ]

// export function TrainingChecklist() {
//   const [completed, setCompleted] = useState<number[]>([])
//   const [showSuccess, setShowSuccess] = useState(false)
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const toggleTraining = (id: number) => {
//     setCompleted((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
//   }

//   const handleSubmit = async () => {
//     setIsSubmitting(true)
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500))
//     setShowSuccess(true)
//     setIsSubmitting(false)
//   }

//   const completedCount = completed.length
//   const totalCount = trainings.length
//   const progressPercentage = (completedCount / totalCount) * 100

//   return (
//     <div className="w-3/4 mx-13 ">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-foreground mb-2">Corporate Training Tracker</h1>
//         <p className="text-muted-foreground">Confirm completion of your required training</p>
//       </div>

//       {/* Progress Bar */}
//       <div className="mb-8 p-6 rounded-lg border border-border bg-card">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm font-medium text-foreground">Progress</span>
//           <span className="text-sm font-semibold text-primary">
//             {completedCount}/{totalCount}
//           </span>
//         </div>
//         <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
//           <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
//         </div>
//       </div>

//       <div
//         className="space-y-2 mb-8 max-h-96 h-1/2 overflow-y-auto pr-4 pb-32"
//         style={{
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         <style>{`
//           div::-webkit-scrollbar {
//             display: none;
//           }
//         `}</style>
//         {trainings.map((training) => (
//           <label
//             key={training.id}
//             className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent cursor-pointer transition-colors"
//           >
//             <div className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
//               <input
//                 type="checkbox"
//                 checked={completed.includes(training.id)}
//                 onChange={() => toggleTraining(training.id)}
//                 className="w-6 h-6 rounded border border-primary cursor-pointer accent-primary"
//               />
//             </div>
//             <div className="flex-1">
//               <p
//                 className={`font-medium ${completed.includes(training.id) ? "text-muted-foreground line-through" : "text-foreground"}`}
//               >
//                 {training.name}
//               </p>
//               <p className="text-xs text-muted-foreground">{training.category}</p>
//             </div>
//             {completed.includes(training.id) && <Check className="w-5 h-5 text-primary flex-shrink-0" />}
//           </label>
//         ))}
//       </div>

//       <div className="flex gap-3 mt-0">
//         <Button onClick={handleSubmit} disabled={completedCount === 0 || isSubmitting} className="flex-1" size="lg">
//           {isSubmitting ? "Submitting..." : "Submit Training Records"}
//         </Button>
//         <Button variant="outline" onClick={() => setCompleted([])} disabled={completedCount === 0} size="lg">
//           Clear All
//         </Button>
//       </div>

//       {/* Success Popup */}
//       <SuccessPopup
//         isOpen={showSuccess}
//         onClose={() => setShowSuccess(false)}
//         message="Training records submitted successfully!"
//         submessage={`You have completed ${completedCount} training course${completedCount !== 1 ? "s" : ""}.`}
//       />
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessPopup } from "@/components/success-popup"

const trainings = [
  { id: 1, name: "Data Security & Privacy", category: "Compliance" },
  { id: 2, name: "Workplace Safety", category: "Safety" },
  { id: 3, name: "Code of Conduct", category: "Ethics" },
  { id: 4, name: "Anti-Harassment & Discrimination", category: "Compliance" },
  { id: 5, name: "Environmental Health & Safety", category: "Safety" },
  { id: 6, name: "Diversity & Inclusion", category: "Culture" },
  { id: 7, name: "Information Security Basics", category: "Compliance" },
  { id: 8, name: "Acceptable Use Policy", category: "IT" },
]

export function TrainingChecklist() {
  const [completed, setCompleted] = useState<number[]>([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const toggleTraining = (id: number) => {
    setCompleted((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))
    setShowSuccess(true)
    setIsSubmitting(false)
  }

  const completedCount = completed.length
  const totalCount = trainings.length
  const progressPercentage = (completedCount / totalCount) * 100

  return (
    <div className="w-3/4 mx-13 ">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Corporate Training Tracker</h1>
        <p className="text-muted-foreground">Confirm completion of your required training</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8 p-6 rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm font-semibold text-primary">
            {completedCount}/{totalCount}
          </span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className="space-y-2 mb-8 max-h-96 overflow-y-auto pr-4 pb-32 flex-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {trainings.map((training) => (
            <label
              key={training.id}
              className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-accent cursor-pointer transition-colors"
            >
              <div className="relative flex items-center justify-center w-6 h-6 flex-shrink-0">
                <input
                  type="checkbox"
                  checked={completed.includes(training.id)}
                  onChange={() => toggleTraining(training.id)}
                  className="w-6 h-6 rounded border border-primary cursor-pointer accent-primary"
                />
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium ${completed.includes(training.id) ? "text-muted-foreground line-through" : "text-foreground"}`}
                >
                  {training.name}
                </p>
                <p className="text-xs text-muted-foreground">{training.category}</p>
              </div>
              {completed.includes(training.id) && <Check className="w-5 h-5 text-primary flex-shrink-0" />}
            </label>
          ))}
        </div>

        <div className="flex gap-3 sticky bottom-0 bg-background pt-4">
          <Button onClick={handleSubmit} disabled={completedCount === 0 || isSubmitting} className="flex-1" size="lg">
            {isSubmitting ? "Submitting..." : "Submit Training Records"}
          </Button>
          <Button variant="outline" onClick={() => setCompleted([])} disabled={completedCount === 0} size="lg">
            Clear All
          </Button>
        </div>
      </div>

      {/* Success Popup */}
      <SuccessPopup
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        message="Submitted Successfully!"
        submessage={`You have completed ${completedCount} training course${completedCount !== 1 ? "s" : ""}.`}
      />
    </div>
  )
}
