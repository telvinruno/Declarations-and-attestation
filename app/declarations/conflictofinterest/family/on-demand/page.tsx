import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import ConflictOfInterestMode from "@/components/conflictofinterestmodefamilyform"
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
          <div className="flex flex-1 flex-col space-y-4 pb-32">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                <div className="px-4 lg:px-6">
                  <div className="container mx-13 my-10 rounded w-4/5 p-5 bg-background">
                    <ConflictOfInterestMode/>
                    <div className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  )
}