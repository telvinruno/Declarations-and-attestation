"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"


interface DetailsModalProps {
  isOpen: boolean
  onClose: () => void
  item: any
}

export function DetailsModal({ isOpen, onClose, item }: DetailsModalProps) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle>Item Details</DialogTitle>
          {/* <DialogClose asChild>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <X className="h-4 w-4" />
            </Button>
          </DialogClose> */}
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Name */}
          {item.name && (
            <div className="border-b pb-3">
              <p className="text-sm font-medium text-gray-600">Name</p>
              <p className="text-base font-semibold text-gray-900">{item.name}</p>
            </div>
          )}

          {/* Type of Gift */}
          {item.type && (
            <div className="border-b pb-3">
              <p className="text-sm font-medium text-gray-600">Type of Gift</p>
              <p className="text-base text-gray-900">{item.type}</p>
            </div>
          )}

          {/* Quantity */}
          {item.quantity !== undefined && (
            <div className="border-b pb-3">
              <p className="text-sm font-medium text-gray-600">Quantity</p>
              <p className="text-base text-gray-900">{item.quantity}</p>
            </div>
          )}

          {/* Estimated Value */}
          {item.estimatedValue && (
            <div className="border-b pb-3">
              <p className="text-sm font-medium text-gray-600">Estimated Value</p>
              <p className="text-base font-semibold text-gray-900">${item.estimatedValue}</p>
            </div>
          )}

          {/* Reference Number */}
          {item.referenceNumber && (
            <div>
              <p className="text-sm font-medium text-gray-600">Reference Number</p>
              <p className="text-base font-mono text-gray-900">{item.referenceNumber}</p>
            </div>
          )}

          {/* Display any additional fields not explicitly handled */}
          {Object.entries(item).map(([key, value]) => {
            if (
              !["name", "type", "quantity", "estimatedValue", "referenceNumber", "id"].includes(key) &&
              value &&
              typeof value === "string"
            ) {
              return (
                <div key={key} className="border-b pb-3 last:border-b-0">
                  <p className="text-sm font-medium text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                  <p className="text-base text-gray-900">{String(value)}</p>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            Back
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  )
}
