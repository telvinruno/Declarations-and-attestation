import type { ColumnDef } from "@tanstack/react-table"

export interface Payment {
  id: string
  status: "processing" | "success" | "failed"
  Policy: string
  Date: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "Policy",
    header: "Policy",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return (
        <div
          className={`capitalize px-2 py-1 rounded text-sm ${
            status === "success"
              ? "bg-green-100 text-green-800"
              : status === "processing"
                ? "bg-blue-100 text-blue-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {status}
        </div>
      )
    },
  },
]
