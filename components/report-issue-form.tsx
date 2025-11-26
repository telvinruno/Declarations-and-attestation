"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  issue: z.string().min(1, {
    message: "Cannot make a blank report",
  }),
})

export default function ProfileForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "Johndoe1@gmail.com",
      issue: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true)

    try {
      // Simulate a brief delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 500))

      setShowSuccessDialog(true)
      form.reset({
        email: "Johndoe1@gmail.com",
        issue: "",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleMakeAnotherReport = () => {
    setShowSuccessDialog(false)
    form.reset({
      email: "Johndoe1@gmail.com",
      issue: "",
    })
  }

  const handleReturnHome = () => {
    setShowSuccessDialog(false)
    router.push("/")
  }

  return (
    <div className="w-full  mx-1% py-10 px-4">
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-1/4 border rounded">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                    disabled
                    style={{ backgroundColor: "#f3f4f6", color: "#6b7280", cursor: "not-allowed" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="issue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <b className="text-lg">Type in the issue you wish to report</b>
                </FormLabel>
                <FormControl>
                  <Textarea className="h-80 w-3/4" placeholder="Type something..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={loading} className="border">
            {loading ? "Sending..." : "Submit"}
          </Button>
        </form>
      </Form>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog} >
        <DialogContent className="h-1/4">        
          <DialogHeader>
            <DialogTitle>Report Submitted Successfully!</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">Your report has been sent successfully. Thank you for your feedback!</p>
          <DialogFooter>
            <Button className="w-9/20" variant="outline" onClick={handleMakeAnotherReport}>
              Make Another Report
            </Button>
            <Button className="9/20" onClick={handleReturnHome}>Return to Home Page</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
