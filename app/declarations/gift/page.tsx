import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import  CommitToCodeOfConduct  from "@/components/commit-to-company-gift-code"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ScrollArea } from "@/components/ui/scroll-area"




export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 65)",
          "--header-height": "calc(var(--spacing) * 10)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <ScrollArea className="h-screen rounded-md border">
        <div className="flex flex-1 flex-col border">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
             
              <div className="px-4 lg:px-6">
                
                <CommitToCodeOfConduct/>
              
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  )
}
