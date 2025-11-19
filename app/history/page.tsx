import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
// import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Declarations from "@/components/commitments"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
  {
    id: "a12f93c1",
    status: "pending",
    Policy: "Gift and Hospitality Disclosure",
    Date: "01/03/2025",
  },
  {
    id: "c9b72acd",
    status: "processing",
    Policy: "Conflict of Interest Declaration",
    Date: "14/02/2025",
  },
  {
    id: "f3d84721",
    status: "success",
    Policy: "Anti-Bribery and Corruption Statement",
    Date: "22/01/2025",
  },
  {
    id: "bd45e8f0",
    status: "failed",
    Policy: "Whistleblower Protection Acknowledgment",
    Date: "09/03/2025",
  },
  {
    id: "9ac331ee",
    status: "pending",
    Policy: "Data Privacy and Confidentiality Agreement",
    Date: "18/04/2025",
  },
  {
    id: "0f9b2d6a",
    status: "processing",
    Policy: "Code of Conduct Compliance",
    Date: "28/02/2025",
  },
  {
    id: "d8365b99",
    status: "success",
    Policy: "Anti-Money Laundering Declaration",
    Date: "03/01/2025",
  },
  {
    id: "e47ba10d",
    status: "failed",
    Policy: "Insider Trading Prevention Acknowledgment",
    Date: "11/03/2025",
  },
  {
    id: "7fa128dc",
    status: "pending",
    Policy: "Equal Opportunity Commitment",
    Date: "27/01/2025",
  },
  {
    id: "1bc84f32",
    status: "processing",
    Policy: "Workplace Harassment Policy Agreement",
    Date: "15/02/2025",
  },
  {
    id: "ab3910ef",
    status: "success",
    Policy: "Cybersecurity Responsibility Acknowledgment",
    Date: "05/03/2025",
  },
  {
    id: "42efb7c9",
    status: "failed",
    Policy: "Environmental Sustainability Commitment",
    Date: "19/04/2025",
  },
  {
    id: "dc78a21b",
    status: "pending",
    Policy: "Remote Work and Device Security Agreement",
    Date: "26/02/2025",
  },
  {
    id: "8f0e41aa",
    status: "processing",
    Policy: "Diversity and Inclusion Commitment",
    Date: "07/01/2025",
  },
  {
    id: "3e91c5d0",
    status: "success",
    Policy: "Financial Integrity and Reporting Policy",
    Date: "12/03/2025",
  },
  {
    id: "fe29b781",
    status: "failed",
    Policy: "Non-Retaliation Ethics Agreement",
    Date: "30/01/2025",
  },
  {
    id: "b44fc0de",
    status: "pending",
    Policy: "Use of Company Assets Declaration",
    Date: "20/02/2025",
  },

  
  ]

}

export default async function DemoPage() {
  const data = await getData()

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 80)",
          "--header-height": "calc(var(--spacing) * 10)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             
              <div className="px-4 lg:px-6">
                
                 <div className="container mx-auto py-10">
                 <DataTable columns={columns} data={data} />
                 </div>


              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}



